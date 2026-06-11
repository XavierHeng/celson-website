/**
 * Cloudflare Pages Function — Language-aware Shop routing
 * Route: /shop.html
 * 
 * Checks the celson_lang cookie and serves:
 *   - /shop.html      (English — default)
 *   - /shop-fr.html   (French — when cookie says "fr")
 * 
 * Zero client-side overhead. The browser always sees /shop.html
 * but receives pre-translated French HTML when appropriate.
 */

export async function onRequest(context) {
  const { request } = context;
  
  // Read language preference from cookie
  const cookie = request.headers.get('Cookie') || '';
  const match = cookie.match(/celson_lang=(\w+)/);
  const lang = match ? match[1] : 'en';
  
  const url = new URL(request.url);
  
  // Route to the appropriate version
  if (lang === 'fr') {
    url.pathname = '/shop-fr.html';
  }
  // lang === 'en' (or anything else): url stays as /shop.html
  
  // Fetch the static file from origin
  // Internal fetches bypass Functions, so no infinite loop
  return fetch(url.toString());
}
