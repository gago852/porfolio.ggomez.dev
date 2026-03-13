import { defineMiddleware } from "astro:middleware";

const parseCookies = (cookieHeader: string | null): Record<string, string> => {
  const cookies: Record<string, string> = {};
  if (!cookieHeader) return cookies;
  cookieHeader.split(";").forEach((pair) => {
    const [name, ...rest] = pair.trim().split("=");
    cookies[decodeURIComponent(name)] = decodeURIComponent(rest.join("="));
  });
  return cookies;
};

const createLangCookie = (lang: string): string =>
  [
    `preferred_lang=${encodeURIComponent(lang)}`,
    "Path=/",
    "Max-Age=31536000",
    "SameSite=Lax",
  ].join("; ");

const redirectWithCookie = (
  locationUrl: string,
  cookieValue: string,
): Response =>
  new Response(null, {
    status: 302,
    headers: new Headers({
      Location: locationUrl,
      "Set-Cookie": cookieValue,
    }),
  });

export const onRequest = defineMiddleware(async (context, next) => {
  const { request } = context;
  const url = new URL(request.url);

  // If user is on Spanish path but includes a lang switch via query param, persist and clean URL
  if (url.pathname === "/es" || url.pathname === "/es/") {
    const urlLang = url.searchParams.get("lang");
    if (urlLang === "en" || urlLang === "es") {
      const cookieValue = createLangCookie(urlLang);

      if (urlLang === "en") {
        return redirectWithCookie(`${url.origin}/`, cookieValue);
      }
      return redirectWithCookie(`${url.origin}/es`, cookieValue);
    }
    return next();
  }

  // Only intervene on the root path "/"
  if (url.pathname === "/") {
    const cookies = parseCookies(request.headers.get("cookie"));
    // 1) Respect explicit selection via query param and persist it
    const urlLang = url.searchParams.get("lang");
    if (urlLang === "en" || urlLang === "es") {
      const cookieValue = createLangCookie(urlLang);
      if (urlLang === "es") {
        return redirectWithCookie(`${url.origin}/es`, cookieValue);
      }
      return redirectWithCookie(`${url.origin}/`, cookieValue);
    }

    // 2) If we already have a cookie, honor it
    const preferred = cookies["preferred_lang"];
    if (preferred === "es") {
      return Response.redirect(`${url.origin}/es`, 302);
    }
    if (preferred === "en") {
      return next();
    }

    // 3) Fallback to Accept-Language on first visit (and persist)
    const acceptLanguage = request.headers.get("accept-language") || "";
    if (acceptLanguage.toLowerCase().startsWith("es")) {
      return redirectWithCookie(`${url.origin}/es`, createLangCookie("es"));
    }

    // Default: English at root
    return next();
  }

  // For other paths, continue with the normal request
  return next();
});
