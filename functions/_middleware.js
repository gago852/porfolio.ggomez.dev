export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  // Helper to parse cookies
  const parseCookies = (cookieHeader) => {
    const cookies = {};
    if (!cookieHeader) return cookies;
    cookieHeader.split(";").forEach((pair) => {
      const [name, ...rest] = pair.trim().split("=");
      cookies[decodeURIComponent(name)] = decodeURIComponent(rest.join("="));
    });
    return cookies;
  };

  // Helper to create Set-Cookie header value
  const createLangCookie = (lang) => {
    const attrs = [
      `preferred_lang=${encodeURIComponent(lang)}`,
      "Path=/",
      "Max-Age=31536000",
      "SameSite=Lax",
    ];
    return attrs.join("; ");
  };

  // Helper to build a redirect response with Set-Cookie, avoiding header mutation
  const redirectWithCookie = (locationUrl, cookieValue) => {
    return new Response(null, {
      status: 302,
      headers: new Headers({
        Location: locationUrl,
        "Set-Cookie": cookieValue,
      }),
    });
  };

  // If user is on Spanish path but includes a lang switch via query param, persist and clean URL
  if (url.pathname === "/es" || url.pathname === "/es/") {
    const urlLang = url.searchParams.get("lang");
    if (urlLang === "en" || urlLang === "es") {
      const cookieValue = createLangCookie(urlLang);
      console.log({ cookieValue, urlLang });
      if (urlLang === "en") {
        return redirectWithCookie(`${url.origin}/`, cookieValue);
      }
      return redirectWithCookie(`${url.origin}/es`, cookieValue);
    }
    return context.next();
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
      // For English, clean the URL back to root
      return redirectWithCookie(`${url.origin}/`, cookieValue);
    }

    // 2) If we already have a cookie, honor it
    const preferred = cookies["preferred_lang"];
    console.log({ preferred });
    if (preferred === "es") {
      return Response.redirect(`${url.origin}/es`, 302);
    }
    if (preferred === "en") {
      return context.next();
    }

    // 3) Fallback to Accept-Language on first visit (and persist)
    const acceptLanguage = request.headers.get("accept-language") || "";
    const prefersSpanish = acceptLanguage.toLowerCase().startsWith("es");
    if (prefersSpanish) {
      return redirectWithCookie(`${url.origin}/es`, createLangCookie("es"));
    }

    // Default: English at root
    return context.next();
  }

  // For other paths, continue with the normal request
  return context.next();
}
