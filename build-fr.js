/**
 * build-fr.js — Generate shop-fr.html from shop.html
 * 
 * shop.html now uses data-i18n + I18N.t() for most UI text.
 * catLabel() + __t() handles category tabs via the I18N dictionary.
 * 
 * For shop-fr.html we:
 *   1. Force I18N.lang = 'fr' so data-i18n elements show French
 *   2. Replace non-data-i18n static text (title, meta, JS literals)
 *   3. Fix SEO (og:locale, canonical, hreflang)
 *   4. Handle redirects and cache-busting
 * 
 * Usage: node build-fr.js
 * Output: shop-fr.html
 */

const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'shop.html');
const dest = path.join(__dirname, 'shop-fr.html');

let html = fs.readFileSync(src, 'utf8');

// ==================================================================
// STEP 1: Force I18N.lang = 'fr' before i18n.js loads
// ==================================================================
// i18n.js reads localStorage on init. We pre-set it so:
//   I18N.lang → 'fr'
//   lang.js → applyTranslations() → all data-i18n elements → French
//   catLabel() → __t() → I18N.t() → French category names
const langPreSet = '\n  <script>try{localStorage.setItem(\'celson_lang\',\'fr\')}catch(e){}</script>';
// Inject right after <head> so it runs before any other script
html = html.replace('<head>', '<head>' + langPreSet);

// Also set cookie so the FR→EN redirect below works correctly
html = html.replace(
  '<head>' + langPreSet,
  '<head>' + langPreSet.replace("localStorage.setItem('celson_lang','fr')", "localStorage.setItem('celson_lang','fr');document.cookie='celson_lang=fr;path=/;max-age=31536000;SameSite=Lax'")
);

// ==================================================================
// STEP 2: Fix language redirect for shop-fr.html
// ==================================================================
// shop.html has: if cookie==='fr' → redirect to shop-fr.html (EN→FR)
// shop-fr.html needs: if cookie==='en' → redirect to shop.html (FR→EN)
// We remove the EN→FR redirect and add a FR→EN redirect instead.

// Remove the EN→FR redirect block (shop.html → shop-fr.html)
html = html.replace(
  /<!-- Language redirect:[\s\S]*?location\.replace\('\/shop-fr\.html'\);[\s\S]*?<\/script>/,
  '<!-- FR redirect: go to English shop if user chose EN -->\n  <script>\n  (function(){var c=document.cookie.match(/celson_lang=(\\w+)/);if(c&&c[1]===\'en\')location.replace(\'/shop.html\');})();\n  </script>'
);

// ==================================================================
// STEP 3: HTML Static Text Replacements (non-data-i18n only)
// ==================================================================
// These target text that does NOT have data-i18n attributes.
// Text with data-i18n is handled by lang.js at runtime.

const htmlReplacements = [
  // ── Page title & meta ──
  ['<title>Shop — CELSON | In-Stock Building Materials</title>',
   '<title>Boutique — CELSON | Mat\u00e9riaux de construction en stock</title>'],

  ['<meta name="description" content="Browse in-stock CELSON building materials with EXW factory-direct pricing. Add to cart and order via WhatsApp for a quote within 24 hours — no registration needed.">',
   '<meta name="description" content="Parcourez les mat\u00e9riaux de construction CELSON en stock aux prix d\u00e9part usine EXW. Ajoutez au panier et commandez via WhatsApp pour un devis sous 24 heures — sans inscription.">'],

  // ── OG meta (French) ──
  ['<meta property="og:title" content="CELSON Shop — Building Materials Spot Stock | WhatsApp Order & EXW Price">',
   '<meta property="og:title" content="CELSON Boutique — Mat\u00e9riaux de construction en stock | Commande WhatsApp & Prix EXW">'],

  ['<meta property="og:description" content="Check CELSON spot stock: gypsum boards, sheet boards, wall panels, and more. EXW pricing, WhatsApp ordering, no registration needed. Factory-direct.">',
   '<meta property="og:description" content="D\u00e9couvrez le stock disponible CELSON : plaques de pl\u00e2tre, panneaux, panneaux muraux et plus. Prix EXW, commande WhatsApp, sans inscription. Direct usine.">'],

  ['<meta property="og:url" content="https://celson.ltd/shop.html">',
   '<meta property="og:url" content="https://celson.ltd/shop-fr.html">'],

  ['<meta property="og:locale" content="en_US">',
   '<meta property="og:locale" content="fr_FR">'],

  ['<meta property="og:locale:alternate" content="fr_FR">',
   '<meta property="og:locale:alternate" content="en_US">'],

  // ── Twitter Card (French) ──
  ['<meta name="twitter:title" content="CELSON Shop — Building Materials Spot Stock | WhatsApp Order & EXW Price">',
   '<meta name="twitter:title" content="CELSON Boutique — Mat\u00e9riaux de construction en stock | Commande WhatsApp & Prix EXW">'],

  ['<meta name="twitter:description" content="Check CELSON spot stock: gypsum boards, sheet boards, wall panels, and more. EXW pricing, WhatsApp ordering, no registration needed. Factory-direct.">',
   '<meta name="twitter:description" content="D\u00e9couvrez le stock disponible CELSON : plaques de pl\u00e2tre, panneaux, panneaux muraux et plus. Prix EXW, commande WhatsApp, sans inscription. Direct usine.">'],

  // ── Canonical + Hreflang ──
  ['<link rel="canonical" href="https://celson.ltd/shop.html">',
   '<link rel="canonical" href="https://celson.ltd/shop-fr.html">'],

  ['<link rel="alternate" hreflang="en" href="https://celson.ltd/shop.html">',
   '<link rel="alternate" hreflang="en" href="https://celson.ltd/shop.html">'],

  ['<link rel="alternate" hreflang="fr" href="https://celson.ltd/shop.html?lang=fr">',
   '<link rel="alternate" hreflang="fr" href="https://celson.ltd/shop-fr.html">'],

  ['<link rel="alternate" hreflang="x-default" href="https://celson.ltd/shop.html">',
   '<link rel="alternate" hreflang="x-default" href="https://celson.ltd/shop.html">'],

  // ── <html lang> ──
  ['<html lang="en">', '<html lang="fr">'],

  // ── Cart Bar: EXW Reference placeholder (no data-i18n, JS updates it) ──
  ['EXW Reference $0<span>reference only</span>',
   'R\u00e9f. EXW $0<span>\u00e0 titre indicatif</span>'],

  // ── Cart Bar: View Cart button (no data-i18n) ──
  ['View Cart &rarr;', 'Voir le panier &rarr;'],

  // ── Cart Popup: ref. span (dynamically updated by JS) ──
  ['<span>ref.</span>', '<span>r\u00e9f.</span>'],

  // ── WhatsApp button text (inside SVG button, before data-i18n span) ──
  // The data-i18n span handles translation, but we also replace the static fallback
  ["Order via WhatsApp</span>", "Commander via WhatsApp</span>"],

  // ── Old admin panel form (no data-i18n for admin section) ──
  ['Admin Access', 'Acc\u00e8s administrateur'],
  ['Enter your credentials to manage prices', 'Entrez vos identifiants pour g\u00e9rer les prix'],
  ['Too many failed attempts. Please wait', 'Trop de tentatives \u00e9chou\u00e9es. Veuillez patienter'],
  ['seconds.', 'secondes.'],
  ['Username', 'Nom d\u2019utilisateur'],
  ['Enter username', 'Entrez le nom d\u2019utilisateur'],
  ['Password', 'Mot de passe'],
  ['Enter password', 'Entrez le mot de passe'],
  [' attempt', ' tentative'],
  [' remaining', ' restante'],
  ['Unlock', 'D\u00e9verrouiller'],
  ['&larr; Back to Shop', '&larr; Retour \u00e0 la boutique'],
  ['Price Management', 'Gestion des prix'],
  ['Edit RMB prices and exchange rate', 'Modifier les prix RMB et le taux de change'],
  ['Export JSON', 'Exporter JSON'],
  ['Logout', 'D\u00e9connexion'],
  ['Exchange Rate:', 'Taux de change :'],
  ['RMB &divide; Rate = USD', 'RMB &divide; Taux = USD'],
  ['Search by product name...', 'Rechercher par nom de produit...'],
  ['RMB Price', 'Prix RMB'],
  ['USD Price', 'Prix USD'],

  // Note: 'Export JSON' is already replaced to 'Exporter JSON' above, so match that.
  // Also browser\\'s has a literal backslash in the raw HTML (JS single-quote string).
  ["Changes are saved to your browser\\'s local storage. Click <strong>Exporter JSON</strong> to get the updated data, then paste it into <code>js/prices.js</code> to make changes permanent.",
   'Les modifications sont enregistr\u00e9es dans le stockage local. Cliquez sur <strong>Exporter JSON</strong> pour obtenir les donn\u00e9es, puis collez-les dans <code>js/prices.js</code> pour les rendre permanentes.'],

  ['&copy; 2026 CELSON &mdash; Admin Panel', '&copy; 2026 CELSON &mdash; Panneau admin'],
  ['Export Price Data', 'Exporter les donn\u00e9es de prix'],

  ['Copy this JSON and paste it into <code>js/prices.js</code> to save changes permanently.',
   'Copiez ce JSON et collez-le dans <code>js/prices.js</code> pour enregistrer les modifications.'],

  ['Copy to Clipboard', 'Copier'],
  // NOTE: 'Close' is too broad — would break IDs like prodLightboxClose, cartPopupClose

  // ── Old form labels (unused form, fallback) ──
  ['<h3>Place Your Order</h3>', '<h3>Passer votre commande</h3>'],
  ["Fill in your contact details and we'll get back to you within 24 hours.",
   'Remplissez vos coordonn\u00e9es et nous vous r\u00e9pondrons sous 24 heures.'],
  ['<label>Full Name <span class="required">*</span></label>',
   '<label>Nom complet <span class="required">*</span></label>'],
  ['placeholder="John Smith"', 'placeholder="Jean Dupont"'],
  ['<label>Company</label>', '<label>Entreprise</label>'],
  ['placeholder="ABC Construction Ltd"', 'placeholder="ABC Construction Lt\u00e9e"'],
  ['<label>WhatsApp <span class="required">*</span></label>',
   '<label>WhatsApp <span class="required">*</span></label>'],
  ['placeholder="+1 234 567 8901"', 'placeholder="+33 6 12 34 56 78"'],
  ['<label>Email <span class="required">*</span></label>',
   '<label>E-mail <span class="required">*</span></label>'],
  ['placeholder="john@example.com"', 'placeholder="jean@exemple.com"'],
  ['<label>Message (optional)</label>', '<label>Message (optionnel)</label>'],
  ['placeholder="Any specific requirements, target port for FOB quote, timeline..."',
   'placeholder="Exigences sp\u00e9cifiques, port de destination pour devis FOB, d\u00e9lais..."'],
  ['* At least one of WhatsApp or Email must be filled.',
   '* Au moins WhatsApp ou E-mail doit \u00eatre rempli.'],

  // ── Lightbox "In Stock" label (dynamically generated, no data-i18n) ──
  ['\u2713 In Stock', '\u2713 En stock'],
];

for (const [en, fr] of htmlReplacements) {
  html = html.split(en).join(fr);
}

// ==================================================================
// STEP 4: JS String Literal Replacements
// ==================================================================
// These replace JavaScript string literals used for UI display
// that are NOT handled by __t() / I18N.t().

const jsReplacements = [
  // ── Cart bar JS (updateCartUI) ──
  ["'EXW Reference $' + totalPrice.toLocaleString('en-US', {minimumFractionDigits:2}) + '<span>reference only</span>'",
   "'R\\u00e9f. EXW $' + totalPrice.toLocaleString('fr-FR', {minimumFractionDigits:2}) + '<span>\\u00e0 titre indicatif</span>'"],

  // ── Product list rendering ──
  ["'&#10003; In Cart'", "'&#10003; Panier'"],
  ["'Add'", "'Ajouter'"],
  ["'qty'", "'qt\\u00e9'"],

  // ── Add to cart toast ──
  ["'Added to cart \\u0026mdash; ' + prod.name", "'Ajout\\u00e9 au panier \\u0026mdash; ' + prod.name"],

  // ── Remove from cart toast ──
  ["'Quantity at 0 \\u2014 this item will be removed. Click Add to restore, or submit cart without it.'",
   "'Quantit\\u00e9 \\u00e0 0 \\u2014 cet article sera retir\\u00e9. Cliquez sur Ajouter pour restaurer, ou soumettez le panier sans.'"],

  // ── Cart popup empty ──
  ["'<div class=\"cart-popup-empty\">Your cart is empty.</div>'",
   "'<div class=\"cart-popup-empty\">Votre panier est vide.</div>'"],

  // ── Cart popup total ref span ──
  ["'<span>ref.</span>'", "'<span>r\\u00e9f.</span>'"],

  // ── WhatsApp order toasts ──
  ["'Opening WhatsApp... Your order details are pre-filled. We\\u2019ll confirm within 24 hours.'",
   "'Ouverture de WhatsApp... Votre commande est pr\\u00e9-remplie. Nous confirmerons sous 24 heures.'"],

  ["'Your cart is empty. Add items first.'",
   "'Votre panier est vide. Ajoutez d\\u2019abord des articles.'"],

  // ── Shop item labels (inside JS template strings) ──
  ['<span class="shop-item-stock">In Stock</span>',
   '<span class="shop-item-stock">En stock</span>'],

  ['Best Value</span>', 'Meilleur prix</span>'],

  // ── Remove button title ──
  ["title=\"Remove\"", "title=\"Retirer\""],

  // ── Admin attempt counter ──
  ["' attempt' + (left !== 1 ? 's' : '') + ' remaining'",
   "' tentative' + (left !== 1 ? 's' : '') + ' restante'"],

  // ── Admin copy ──
  ["'Copied!'", "'Copi\\u00e9 !'"],
];

for (const [en, fr] of jsReplacements) {
  html = html.split(en).join(fr);
}

// ==================================================================
// STEP 5: Clean up duplicate i18n.js/lang.js references
// ==================================================================
html = html.replace(
  '<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>\n\n<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>\n\n\n<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>',
  '<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>'
);
html = html.replace(
  '<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>\n\n<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>\n\n<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>',
  '<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>'
);

// ==================================================================
// STEP 6: Fix locale formatting (en-US → fr-FR for prices)
// ==================================================================
html = html.split("toLocaleString('en-US'").join("toLocaleString('fr-FR'");

// ==================================================================
// STEP 7: Cache-busting build timestamp + no-cache meta
// ==================================================================
html = html.replace(
  '<meta http-equiv="X-UA-Compatible" content="IE=edge">',
  '<meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">\n  <meta http-equiv="Pragma" content="no-cache">\n  <meta http-equiv="Expires" content="0">'
);
var buildStamp = '<!-- BUILT: ' + new Date().toISOString() + ' -->';
html = html.replace('<head>', '<head>\n  ' + buildStamp);

// ==================================================================
// STEP 8: Universal text replacement (immune to line-ending issues)
// ==================================================================
html = html.split('Order via WhatsApp').join('Commander via WhatsApp');

// ==================================================================
// STEP 9: Write output
// ==================================================================
fs.writeFileSync(dest, html, 'utf8');
console.log('✅ shop-fr.html generated (' + (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1) + ' KB)');
