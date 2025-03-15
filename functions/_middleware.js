export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  console.log('URL:', url.origin);

  // Only intervene on the root path "/"
  if (url.pathname === '/') {
    // Get the "accept-language" header
    const acceptLanguage = request.headers.get('accept-language') || '';
    console.log('accept-language:', acceptLanguage);

    // Extract the first language preference. Default to Spanish ("es")
    let lang = 'es';
    if (acceptLanguage.toLowerCase().startsWith('en')) {
      console.log('Language preference is English');
      lang = 'en'; // Set language to English
    }

    // If the language is Spanish, stay on "/"
    if (lang === 'es') {
      console.log('Staying on the root path for Spanish');
      return fetch(request); // Continue with the normal request
    }

    // Redirect to the English path
    return Response.redirect(`${url.origin}/${lang}`, 302);
  }

  // For other paths, continue with the normal request
  return fetch(request);
}
