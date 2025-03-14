export async function onRequest(context) {
  console.log('Middleware onRequest');
  const { request } = context;
  const url = new URL(request.url);

  // Solo intervenimos en la ruta raíz "/"
  if (url.pathname === '/') {
    // Obtenemos el header "accept-language"
    const acceptLanguage = request.headers.get('accept-language') || '';

    // Extraemos la primera preferencia. Por defecto usamos inglés ("en")
    let lang = 'en';
    if (acceptLanguage.toLowerCase().startsWith('es')) {
      return fetch(request); // No redirige si el idioma es español
    }

    // Redirigimos a la ruta correspondiente
    return Response.redirect(`${url.origin}/${lang}`, 302);
  }

  // Para otras rutas, continuamos con la solicitud normal
  return fetch(request);
}
