export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  // console.log("Context:", context);

  // Only intervene on the root path "/"
  if (url.pathname === "/") {
    // Get the "accept-language" header
    const acceptLanguage = request.headers.get("accept-language") || "";
    // console.log("accept-language:", acceptLanguage);

    // Extract the first language preference. Default to English ("en")
    let lang = "en";
    if (acceptLanguage.toLowerCase().startsWith("es")) {
      // console.log("Language preference is Spanish");
      lang = "es"; // Set language to English
    }

    // If the language is Spanish, stay on "/"
    if (lang === "en") {
      // console.log("Staying on the root path for English");
      return context.next(); // Continue with the normal request
    }

    // Redirect to the English path
    return Response.redirect(`${url.origin}/${lang}`, 302);
  }

  // For other paths, continue with the normal request
  return context.next();
}
