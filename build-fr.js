/**
 * build-fr.js — Generate shop-fr.html from shop.html
 * 
 * Replaces all English UI strings with French equivalents.
 * Product names, specs, and technical data stay in English (industry standard).
 * Category internal values stay in English (for filter logic) — only display text changes.
 * 
 * Usage: node build-fr.js
 * Output: shop-fr.html (gitignored, generated at deploy time)
 */

const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'shop.html');
const dest = path.join(__dirname, 'shop-fr.html');

let html = fs.readFileSync(src, 'utf8');

// ==================================================================
// STEP 1: Inject French Category Display Mapping + modify render
// ==================================================================
// We add CAT_FR object BEFORE the JS code, and patch renderCategoryTabs
// so filtering stays in English but display shows French.

const catFrInject = `
  var CAT_FR = {
    'All': 'Tout',
    'Gypsum Boards': 'Plaques de pl\u00e2tre',
    'Sheet Boards': 'Panneaux',
    'Wall Panels': 'Panneaux muraux',
    'Ceiling &amp; Framing': 'Plafonds &amp; Ossatures',
    'Calcium Silicate': 'Silicate de calcium',
    'Outdoor &amp; Decking': 'Ext\u00e9rieur &amp; Terrasses',
    'Accessories': 'Accessoires',
    'Insulation': 'Isolation'
  };
`;

// Inject CAT_FR after the CATEGORY_THUMBS block
html = html.replace(
  "var cart = [];",
  catFrInject + "\n  var cart = [];"
);

// Modify renderCategoryTabs: use CAT_FR for display text
html = html.replace(
  "html += '<span class=\"' + cls + '\" data-cat=\"' + CATEGORIES[i] + '\" data-thumb=\"' + thumb + '\">' + CATEGORIES[i] + '</span>';",
  "html += '<span class=\"' + cls + '\" data-cat=\"' + CATEGORIES[i] + '\" data-thumb=\"' + thumb + '\">' + (CAT_FR[CATEGORIES[i]] || CATEGORIES[i]) + '</span>';"
);

// Modify category tooltip label to use French
html = html.replace(
  "tt.querySelector('.cat-tooltip-label').textContent = catName;",
  "tt.querySelector('.cat-tooltip-label').textContent = CAT_FR[catName] || catName;"
);

// ==================================================================
// STEP 2: HTML Static Text Replacements
// ==================================================================
// Ordered from longest/most-specific to shortest to avoid partial matches.

const htmlReplacements = [
  // ── Page title & meta ──
  ['<title>Shop — CELSON | In-Stock Building Materials</title>',
   '<title>Boutique — CELSON | Mat\u00e9riaux de construction en stock</title>'],

  ['<meta name="description" content="Browse in-stock CELSON building materials with EXW factory-direct pricing. Add to cart and submit your inquiry for a quote within 24 hours.">',
   '<meta name="description" content="Parcourez les mat\u00e9riaux de construction CELSON en stock aux prix d\u00e9part usine EXW. Ajoutez au panier et demandez un devis sous 24 heures.">'],

  // ── Shop Header ──
  ['EXW factory-direct pricing &mdash; Add items to your cart and submit an inquiry. Our team will contact you within 24 hours.',
   'Prix d\u00e9part usine EXW &mdash; Ajoutez des articles \u00e0 votre panier et envoyez une demande. Notre \u00e9quipe vous contactera sous 24 heures.'],

  // ── Search ──
  ['placeholder="Search products..."',
   'placeholder="Rechercher des produits..."'],

  // ── No results ──
  ['No products match your search.',
   'Aucun produit ne correspond \u00e0 votre recherche.'],

  // ── Cart Bar ──
  ['EXW Reference $0<span>reference only</span>',
   'R\u00e9f. EXW $0<span>\u00e0 titre indicatif</span>'],

  ['<button class="btn-view-cart" id="btnViewCart">View Cart &rarr;</button>',
   '<button class="btn-view-cart" id="btnViewCart">Voir le panier &rarr;</button>'],

  // The word "Cart" in cart bar (after count span, before closing div)
  // We'll handle this via the JS replacement below

  // ── Cart Popup ──
  ['<span class="cart-popup-total-label">EXW Reference Total</span>',
   '<span class="cart-popup-total-label">Total r\u00e9f\u00e9rence EXW</span>'],

  ['<button class="btn-ready-to-pay" id="btnReadyToPay">READY TO PAY</button>',
   '<button class="btn-ready-to-pay" id="btnReadyToPay">PR\u00caT \u00c0 PAYER</button>'],

  // ── Cart View ──
  ['<button class="btn-back" id="btnBackToShop">&larr; Back to Shop</button>',
   '<button class="btn-back" id="btnBackToShop">&larr; Retour \u00e0 la boutique</button>'],

  ['<h2>Shopping Cart</h2>',
   '<h2>Panier</h2>'],

  ['Your cart is empty.',
   'Votre panier est vide.'],

  // ── Cart Table Headers ──
  ['<th>Product</th>', '<th>Produit</th>'],
  ['<th>Specification</th>', '<th>Sp\u00e9cification</th>'],
  // 'Qty' and 'Unit Price' and 'Subtotal' are handled with context below

  // ── Cart Summary ──
  ['<span class="cart-summary-label">EXW Reference Total</span>',
   '<span class="cart-summary-label">Total r\u00e9f\u00e9rence EXW</span>'],

  ['<span class="cart-summary-label">30% Deposit Required</span>',
   '<span class="cart-summary-label">Acompte 30 % requis</span>'],

  ['This is a reference price only. A <strong>30% deposit</strong> is required to confirm your order. Final pricing will be confirmed by our team. No payment is processed on this page.',
   'Ceci est un prix de r\u00e9f\u00e9rence uniquement. Un <strong>acompte de 30 %</strong> est requis pour confirmer votre commande. Le prix final sera confirm\u00e9 par notre \u00e9quipe. Aucun paiement n\u2019est trait\u00e9 sur cette page.'],

  // ── Logistics Section ──
  ['<strong>Shipping & Logistics</strong>',
   '<strong>Exp\u00e9dition &amp; Logistique</strong>'],

  ['Delivery is included only within <strong>Foshan city limits</strong>. The following costs are <strong>not included</strong> and are the buyer\'s responsibility:',
   'La livraison est incluse uniquement dans <strong>les limites de la ville de Foshan</strong>. Les frais suivants <strong>ne sont pas inclus</strong> et sont \u00e0 la charge de l\'acheteur :'],

  ['Container loading fees (stuffing charges)',
   'Frais de chargement du conteneur (frais d\'empotage)'],

  ['Freight / shipping to destinations outside Foshan',
   'Fret / exp\u00e9dition vers des destinations hors Foshan'],

  ['Export documentation and customs clearance',
   'Documents d\'exportation et d\u00e9douanement'],

  ['We provide a <strong>free container loading location</strong> in Foshan for your forwarder.',
   'Nous fournissons un <strong>lieu de chargement gratuit</strong> \u00e0 Foshan pour votre transitaire.'],

  // ── Order Form ──
  ['<h3>Place Your Order</h3>',
   '<h3>Passer votre commande</h3>'],

  ['Fill in your contact details and we\'ll get back to you within 24 hours.',
   'Remplissez vos coordonn\u00e9es et nous vous r\u00e9pondrons sous 24 heures.'],

  ['<label>Full Name <span class="required">*</span></label>',
   '<label>Nom complet <span class="required">*</span></label>'],

  ['placeholder="John Smith"',
   'placeholder="Jean Dupont"'],

  ['<label>Company</label>',
   '<label>Entreprise</label>'],

  ['placeholder="ABC Construction Ltd"',
   'placeholder="ABC Construction Lt\u00e9e"'],

  ['<label>WhatsApp <span class="required">*</span></label>',
   '<label>WhatsApp <span class="required">*</span></label>'],

  ['placeholder="+1 234 567 8901"',
   'placeholder="+33 6 12 34 56 78"'],

  ['<label>Email <span class="required">*</span></label>',
   '<label>E-mail <span class="required">*</span></label>'],

  ['placeholder="john@example.com"',
   'placeholder="jean@exemple.com"'],

  ['<label>Message (optional)</label>',
   '<label>Message (optionnel)</label>'],

  ['placeholder="Any specific requirements, target port for FOB quote, timeline..."',
   'placeholder="Exigences sp\u00e9cifiques, port de destination pour devis FOB, d\u00e9lais..."'],

  ['* At least one of WhatsApp or Email must be filled.',
   '* Au moins WhatsApp ou E-mail doit \u00eatre rempli.'],

  // ── Submit & Footer ──
  ['Our team will contact you within 24 hours via WhatsApp or Email to confirm pricing and logistics.',
   'Notre \u00e9quipe vous contactera sous 24 heures via WhatsApp ou E-mail pour confirmer les prix et la logistique.'],

  ['&copy; 2026 CELSON &mdash; A brand of Jianxin Building Materials Co. All rights reserved.',
   '&copy; 2026 CELSON &mdash; Une marque de Jianxin Building Materials Co. Tous droits r\u00e9serv\u00e9s.'],

  // ── Admin Panel ──
  ['Admin Access',
   'Acc\u00e8s administrateur'],

  ['Enter your credentials to manage prices',
   'Entrez vos identifiants pour g\u00e9rer les prix'],

  ['Too many failed attempts. Please wait',
   'Trop de tentatives \u00e9chou\u00e9es. Veuillez patienter'],

  ['seconds.',
   'secondes.'],

  ['Username',
   'Nom d\'utilisateur'],

  ['Enter username',
   'Entrez le nom d\'utilisateur'],

  ['Password',
   'Mot de passe'],

  ['Enter password',
   'Entrez le mot de passe'],

  ['attempt', 'tentative'],
  ['remaining', 'restante'],
  ['Unlock', 'D\u00e9verrouiller'],

  ['&larr; Back to Shop',
   '&larr; Retour \u00e0 la boutique'],

  ['Price Management',
   'Gestion des prix'],

  ['Edit RMB prices and exchange rate',
   'Modifier les prix RMB et le taux de change'],

  ['Export JSON',
   'Exporter JSON'],

  ['Logout', 'D\u00e9connexion'],

  ['Exchange Rate:', 'Taux de change :'],

  ['1 USD =', '1 USD ='],

  ['CNY', 'CNY'],

  ['RMB &divide; Rate = USD',
   'RMB &divide; Taux = USD'],

  ['Search by product name...',
   'Rechercher par nom de produit...'],

  ['RMB Price',
   'Prix RMB'],

  ['USD Price',
   'Prix USD'],

  ['Changes are saved to your browser\'s local storage. Click <strong>Export JSON</strong> to get the updated data, then paste it into <code>js/prices.js</code> to make changes permanent.',
   'Les modifications sont enregistr\u00e9es dans le stockage local. Cliquez sur <strong>Exporter JSON</strong> pour obtenir les donn\u00e9es, puis collez-les dans <code>js/prices.js</code> pour les rendre permanentes.'],

  ['&copy; 2026 CELSON &mdash; Admin Panel',
   '&copy; 2026 CELSON &mdash; Panneau admin'],

  ['Export Price Data',
   'Exporter les donn\u00e9es de prix'],

  ['Copy this JSON and paste it into <code>js/prices.js</code> to save changes permanently.',
   'Copiez ce JSON et collez-le dans <code>js/prices.js</code> pour enregistrer les modifications.'],

  ['Copy to Clipboard',
   'Copier'],

  ['Close', 'Fermer'],
];

for (const [en, fr] of htmlReplacements) {
  html = html.split(en).join(fr);
}

// ==================================================================
// STEP 3: JS String Literal Replacements
// ==================================================================
// These replace JavaScript string literals used for UI display.
// We use the quote-delimited form to avoid matching variable names.

const jsReplacements = [
  // ── Cart bar JS (updateCartUI) ──
  ["'EXW Reference $' + totalPrice.toLocaleString('en-US', {minimumFractionDigits:2}) + '<span>reference only</span>'",
   "'R\\u00e9f. EXW $' + totalPrice.toLocaleString('fr-FR', {minimumFractionDigits:2}) + '<span>\\u00e0 titre indicatif</span>'"],

  // ── Product list rendering ──
  // Note: &#10003; is the HTML entity for ✓ checkmark
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

  // ── Cart popup total ──
  ["'<span>ref.</span>'", "'<span>r\\u00e9f.</span>'"],

  // ── Form validation ──
  ["'Please enter your full name.'",
   "'Veuillez entrer votre nom complet.'"],

  ["'Please provide at least WhatsApp or Email.'",
   "'Veuillez fournir au moins WhatsApp ou E-mail.'"],

  // ── Submit button ──
  ["'Submit Inquiry'", "'Envoyer la demande'"],
  ["'Submitting...'", "'Envoi en cours...'"],

  // ── Submit success ──
  ["'Inquiry submitted! We will contact you within 24 hours.'",
   "'Demande envoy\\u00e9e ! Nous vous contacterons sous 24 heures.'"],

  // ── Submit failure ──
  ["'Failed to submit. Please email us directly at Betty.Mat@foxmail.com'",
   "'\\u00c9chec de l\\u2019envoi. Veuillez nous envoyer un e-mail directement \\u00e0 Betty.Mat@foxmail.com'"],

  // ── "Cart" word in cart bar (specific context: after close of cart-info div) ──
  // The HTML pattern: <span class="cart-count"...>0</span>\n        Cart
  // This is tricky — let's target the exact pattern
  ['>\n        Cart\n      </div>', '>\n        Panier\n      </div>'],

  // ── Cart popup header ──
  ['Cart <span class="popup-count"', 'Panier <span class="popup-count"'],

  // ── Table header: Qty (in cart view, as standalone th) ──
  ['<th>Qty</th>', '<th>Qt\u00e9</th>'],

  // ── Table header: Unit Price ──
  ['<th>Unit Price</th>', '<th>Prix unitaire</th>'],

  // ── Table header: Subtotal ──
  ['<th>Subtotal</th>', '<th>Sous-total</th>'],

  // ── Shop item labels (inside JS template strings) ──
  ['<span class="shop-item-stock">In Stock</span>',
   '<span class="shop-item-stock">En stock</span>'],

  ['Best Value</span>',
   'Meilleur prix</span>'],

  // ── Submit button text ──
  ['<button type="submit" class="btn-submit" id="btnSubmit" disabled>Submit Inquiry</button>',
   '<button type="submit" class="btn-submit" id="btnSubmit" disabled>Envoyer la demande</button>'],

  // ── Remove button title ──
  ["title=\"Remove\"", "title=\"Retirer\""],

  // ── Error toast for email fallback ──
  ["'Failed to submit. Please email us directly at Betty.Mat@foxmail.com'",
   "'\\u00c9chec de l\\u2019envoi. Veuillez nous contacter par e-mail \\u00e0 Betty.Mat@foxmail.com'"],

  // ── Admin attempt counter ──
  ["' attempt' + (left !== 1 ? 's' : '') + ' remaining'",
   "' tentative' + (left !== 1 ? 's' : '') + ' restante'"],

  // ── Admin button text ──
  // These are already handled by HTML replacements above for the static HTML

  // ── Admin copy ──
  ["'Copied!'", "'Copi\\u00e9 !'"],
];

for (const [en, fr] of jsReplacements) {
  html = html.split(en).join(fr);
}

// ==================================================================
// STEP 4: Clean up duplicate i18n.js/lang.js references
// ==================================================================
// Remove the 3x duplicate references inherited from shop.html,
// keep only 1 pair (lang.js is needed for the lang-switch button).
html = html.replace(
  '<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>\n\n<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>\n\n\n<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>',
  '<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>'
);
// Also handle variant without extra blank line
html = html.replace(
  '<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>\n\n<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>\n\n<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>',
  '<script src="js/i18n.js"></script>\n<script src="js/lang.js"></script>'
);

// ==================================================================
// STEP 5: Fix locale formatting (en-US → fr-FR for prices)
// ==================================================================
html = html.split("toLocaleString('en-US'").join("toLocaleString('fr-FR'");

// ==================================================================
// STEP 6: Remove lang cookie redirect (avoids infinite loop on fr page)
// ==================================================================
// shop-fr.html IS the French page — it should never redirect to itself.
// The redirect script only belongs on shop.html (English → French).
// Use regex with \s* to handle any line-ending variant (LF/CRLF).
html = html.replace(
  /<!-- Language redirect:[\s\S]*?location\.replace\('\/shop-fr\.html'\);[\s\S]*?<\/script>/,
  "<!-- Lang redirect removed: this is already the French page -->"
);

// ==================================================================
// STEP 7: Write output
// ==================================================================
fs.writeFileSync(dest, html, 'utf8');
console.log('✅ shop-fr.html generated (' + (Buffer.byteLength(html, 'utf8') / 1024).toFixed(1) + ' KB)');
