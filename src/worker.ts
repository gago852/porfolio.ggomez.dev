// src/worker.ts
import { WorkerEntrypoint } from "cloudflare:workers";

interface Env {
  ASSETS: { fetch: (req: Request | string) => Promise<Response> };
}

const SUPPORTED_LANGS = ["en", "es"] as const;
type Lang = (typeof SUPPORTED_LANGS)[number];
const DEFAULT_LANG: Lang = "en";
const COOKIE_NAME = "preferred_lang";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365;

const BOT_PATTERNS = [
  /googlebot/i,
  /bingbot/i,
  /slurp/i,
  /duckduckbot/i,
  /baiduspider/i,
  /yandexbot/i,
  /facebookexternalhit/i,
  /twitterbot/i,
  /linkedinbot/i,
  /applebot/i,
];

function isBot(ua: string | null): boolean {
  return ua ? BOT_PATTERNS.some((p) => p.test(ua)) : false;
}

function getCookie(req: Request, name: string): string | null {
  const header = req.headers.get("cookie");
  if (!header) return null;
  for (const pair of header.split(";")) {
    const [k, v] = pair.trim().split("=");
    if (k === name) return v;
  }
  return null;
}

function parseAcceptLang(header: string | null): Lang | null {
  if (!header) return null;
  const entries = header
    .split(",")
    .map((part) => {
      const [lang, q] = part.trim().split(";q=");
      return { lang: lang.trim().toLowerCase(), q: q ? parseFloat(q) : 1.0 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { lang } of entries) {
    const match = SUPPORTED_LANGS.find(
      (sl) => sl === lang || sl === lang.split("-")[0],
    );
    if (match) return match;
  }
  return null;
}

function isAsset(path: string): boolean {
  return /\.(js|css|png|jpe?g|gif|svg|ico|woff2?|ttf|webp|avif|json|xml|txt|map)$/i.test(
    path,
  );
}

function cookieHeader(lang: Lang): string {
  return `${COOKIE_NAME}=${lang}; Path=/; Max-Age=${COOKIE_MAX_AGE}; SameSite=Lax; Secure; HttpOnly`;
}

export default class extends WorkerEntrypoint<Env> {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    const { pathname } = url;

    // Pass through static assets and bot requests unchanged
    if (isAsset(pathname) || isBot(request.headers.get("user-agent"))) {
      return this.env.ASSETS.fetch(request);
    }

    const isSpanishPath = pathname === "/es" || pathname.startsWith("/es/");
    const currentLang: Lang = isSpanishPath ? "es" : "en";

    const queryLang = url.searchParams.get("lang")?.toLowerCase();
    const cookieLang = getCookie(request, COOKIE_NAME);
    const acceptLang = parseAcceptLang(request.headers.get("accept-language"));

    // Priority: ?lang= > cookie > URL path lang > Accept-Language (root only) > default
    let preferred: Lang;
    let setCookie = false;

    if (queryLang && SUPPORTED_LANGS.includes(queryLang as Lang)) {
      // Explicit override via query param
      preferred = queryLang as Lang;
      setCookie = true;
    } else if (cookieLang && SUPPORTED_LANGS.includes(cookieLang as Lang)) {
      // Remembered preference
      preferred = cookieLang as Lang;
    } else if (isSpanishPath) {
      // User navigated directly to a /es/ path — lock in that preference
      preferred = "es";
      setCookie = true;
    } else if (pathname === "/" && acceptLang) {
      // First visit to root — use browser language and remember it
      preferred = acceptLang;
      setCookie = true;
    } else {
      preferred = DEFAULT_LANG;
    }

    // Already on the right path — serve and optionally persist preference
    if (preferred === currentLang) {
      if (!setCookie) return this.env.ASSETS.fetch(request);
      const response = await this.env.ASSETS.fetch(request);
      const clone = new Response(response.body, response);
      clone.headers.append("Set-Cookie", cookieHeader(preferred));
      return clone;
    }

    // Build redirect target
    let targetPath: string;
    if (preferred === DEFAULT_LANG) {
      // Strip /es prefix
      targetPath = isSpanishPath
        ? pathname.replace(/^\/es/, "") || "/"
        : pathname;
    } else {
      // Add /es prefix
      targetPath = `/${preferred}${pathname === "/" ? "" : pathname}`;
    }
    console.log({ targetPath });

    const target = new URL(targetPath, url.origin);
    console.log(target);

    url.searchParams.delete("lang");
    url.searchParams.forEach((v, k) => target.searchParams.set(k, v));

    return new Response(null, {
      status: 302,
      headers: {
        Location: target.toString(),
        "Set-Cookie": cookieHeader(preferred),
        "Cache-Control": "no-store",
        Vary: "Accept-Language, Cookie",
      },
    });
  }
}
