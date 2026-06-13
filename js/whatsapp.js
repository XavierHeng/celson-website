/**
 * CELSON WhatsApp Floating Button
 * Primary B2B contact channel for African & global markets
 * Number: Betty (Customer Relations Manager)
 */
(function () {
  'use strict';

  // ========== CONFIG ==========
  var WHATSAPP_NUMBER = '+8613825578911';
  var MESSAGE_EN = encodeURIComponent('Hello CELSON, I am interested in your building materials. Please send me more information.');
  var MESSAGE_FR = encodeURIComponent('Bonjour CELSON, je suis interess(e) par vos materiaux de construction. Pouvez-vous me donner plus d\'informations ?');
  var WHATSAPP_URL = 'https://wa.me/' + WHATSAPP_NUMBER.replace(/\+/g, '') + '?text=' + MESSAGE_EN;
  var WHATSAPP_URL_FR = 'https://wa.me/' + WHATSAPP_NUMBER.replace(/\+/g, '') + '?text=' + MESSAGE_FR;

  // ========== DETECT FRENCH ==========
  function isFrench() {
    var langCookie = document.cookie.split('; ').find(function (row) { return row.startsWith('celson_lang='); });
    if (langCookie) return langCookie.split('=')[1] === 'fr';
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('lang') === 'fr';
  }

  var waUrl = isFrench() ? WHATSAPP_URL_FR : WHATSAPP_URL;

  // ========== BUILD BUTTON ==========
  var wrapper = document.createElement('div');
  wrapper.id = 'wa-floating-wrapper';
  wrapper.innerHTML =
    '<a id="wa-floating-btn" href="' + waUrl + '" target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">' +
      '<svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor" width="28" height="28">' +
        '<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>' +
      '</svg>' +
      '<span class="wa-label">Chat on WhatsApp</span>' +
    '</a>';

  document.body.appendChild(wrapper);

  // ========== SYNC LANG SWITCH ==========
  window.addEventListener('langChanged', function () {
    var btn = document.getElementById('wa-floating-btn');
    if (btn) btn.href = isFrench() ? WHATSAPP_URL_FR : WHATSAPP_URL;
  });

  // ========== INJECT STYLES ==========
  var style = document.createElement('style');
  style.textContent =
    '#wa-floating-wrapper { position: fixed; bottom: 28px; right: 28px; z-index: 9999; }' +
    '#wa-floating-btn { display: flex; align-items: center; gap: 10px; padding: 14px 22px;' +
      'background: #25D366; color: #fff; border-radius: 50px; text-decoration: none;' +
      'font-family: "Open Sans", sans-serif; font-size: 15px; font-weight: 600;' +
      'box-shadow: 0 4px 18px rgba(37, 211, 102, 0.40), 0 2px 8px rgba(0,0,0,0.12);' +
      'transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);' +
      'white-space: nowrap; outline: none; }' +
    '#wa-floating-btn:hover { transform: translateY(-3px) scale(1.03);' +
      'box-shadow: 0 8px 28px rgba(37, 211, 102, 0.48), 0 4px 14px rgba(0,0,0,0.15);' +
      'background: #20bd5a; }' +
    '#wa-floating-btn:active { transform: translateY(0) scale(0.98); }' +
    '.wa-icon { flex-shrink: 0; animation: waPulse 2s ease-in-out infinite; }' +
    '.wa-label { line-height: 1; }' +
    '@keyframes waPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.7; } }' +
    '@media (max-width: 640px) {' +
      '#wa-floating-wrapper { bottom: 18px; right: 14px; }' +
      '#wa-floating-btn { padding: 12px 18px; font-size: 13px; gap: 8px; }' +
      '.wa-icon { width: 24px; height: 24px; }' +
      '.wa-label { display: inline; }' +
    '}';
  document.head.appendChild(style);
})();
