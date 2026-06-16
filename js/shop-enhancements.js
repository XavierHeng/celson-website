(function() {
  // ===== Version check — detect stale cache after PWA publish =====
  if (typeof CELSON_BUILD !== 'undefined' && CELSON_BUILD !== '0') {
    var _prevBuild = null;
    try { _prevBuild = localStorage.getItem('celson_shop_prev_build'); } catch(e) {}
    if (_prevBuild && _prevBuild !== CELSON_BUILD) {
      // Build changed since our last script load — cached scripts may be stale
      // Force hard reload to fetch fresh versions
      try { localStorage.setItem('celson_shop_prev_build', CELSON_BUILD); } catch(e) {}
      if (!window.location.search.match(/[?&]v=/)) {
        window.location.replace(window.location.href.split('?')[0] + '?v=' + CELSON_BUILD);
        return;
      }
    }
    try { localStorage.setItem('celson_shop_prev_build', CELSON_BUILD); } catch(e) {}
  }
  // Log build version for cache debugging
  if (typeof CELSON_BUILD !== 'undefined') { console.log('[CELSON Shop] Build:', CELSON_BUILD); }

function rmbToUsd(rmb) {
  return rmb / CELSON_CONFIG.exchangeRate;
}

var PRODUCTS = ALL_PRODUCTS.filter(function(p){ return !p.hidden; });

function getProductPrice(id) {
  var rmb = PRICES_RMB[id];
  if (typeof rmb === 'number') return rmbToUsd(rmb);
  return 0;
}

function getProductPriceRmb(id) {
  var rmb = PRICES_RMB[id];
  if (typeof rmb === 'number') return rmb;
  return 0;
}

function getProductById(id) {
  for (var i = 0; i < PRODUCTS.length; i++) {
    if (PRODUCTS[i].id === id) return PRODUCTS[i];
  }
  return null;
}

var CATEGORIES = (function buildCategories() {
  // Derive unique categories from product data, maintaining order from SHOP_CATEGORIES if available
  var cats = [];
  var seen = {};
  for (var i = 0; i < PRODUCTS.length; i++) {
    var cat = PRODUCTS[i].category;
    if (cat && !seen[cat]) { seen[cat] = true; cats.push(cat); }
  }
  // If SHOP_CATEGORIES exists (PWA-generated), use its order
  if (typeof SHOP_CATEGORIES !== 'undefined' && SHOP_CATEGORIES.length) {
    // Build normalized lookup for flexible matching (handle singular/plural, &amp; vs &)
    var _normalize = function(s) { return s.replace(/&amp;/g, '&').replace(/&/g, 'and').toLowerCase().trim(); };
    var normSeen = {};
    var seenKeys = Object.keys(seen);
    for (var ki = 0; ki < seenKeys.length; ki++) {
      normSeen[_normalize(seenKeys[ki])] = seenKeys[ki];
    }
    var ordered = [];
    for (var j = 0; j < SHOP_CATEGORIES.length; j++) {
      var scName = SHOP_CATEGORIES[j].name;
      // 1) Exact match
      if (seen[scName]) { ordered.push(scName); continue; }
      // 2) Normalized match
      var norm = _normalize(scName);
      if (normSeen[norm]) { ordered.push(normSeen[norm]); continue; }
      // 3) Singular/plural fallback
      if (normSeen[norm + 's']) { ordered.push(normSeen[norm + 's']); continue; }
      if (norm.slice(-1) === 's' && normSeen[norm.slice(0, -1)]) { ordered.push(normSeen[norm.slice(0, -1)]); continue; }
    }
    // Append any categories not in SHOP_CATEGORIES
    for (var k = 0; k < cats.length; k++) {
      if (ordered.indexOf(cats[k]) === -1) ordered.push(cats[k]);
    }
    cats = ordered;
  }
  return ['All'].concat(cats);
})();

var CATEGORY_THUMBS = (function buildThumbs() {
  // Base thumbs derived from SHOP_CATEGORIES (PWA-generated) with hardcoded fallback
  var thumbs = {};
  var _norm = function(s) { return (s || '').replace(/&amp;/g, '&').replace(/&/g, 'and').toLowerCase().trim(); };
  if (typeof SHOP_CATEGORIES !== 'undefined' && SHOP_CATEGORIES.length) {
    for (var i = 0; i < SHOP_CATEGORIES.length; i++) {
      var c = SHOP_CATEGORIES[i];
      if (c.slug && c.name) {
        // Use the actual product category name as key (look up via normalized match)
        var key = c.name;
        // If the SHOP_CATEGORIES name doesn't match any product category, try to find a match
        if (!CATEGORIES || CATEGORIES.indexOf(key) === -1) {
          var normKey = _norm(key);
          for (var ci = 1; ci < CATEGORIES.length; ci++) { // skip 'All'
            if (_norm(CATEGORIES[ci]) === normKey || _norm(CATEGORIES[ci]) === normKey + 's' || _norm(CATEGORIES[ci]) + 's' === normKey) {
              key = CATEGORIES[ci];
              break;
            }
          }
        }
        thumbs[key] = 'assets/product-hero-' + c.slug + '.webp';
      }
    }
  }
  // Hardcoded fallback for any categories missing thumbs
  var FALLBACK_THUMBS = {
    'Gypsum Boards': 'assets/product-hero-gypsum-boards.webp',
    'Sheet Boards': 'assets/product-hero-sheet-boards.webp',
    'Wall Panels': 'assets/product-hero-wall-panels.webp',
    'Ceiling &amp; Framing': 'assets/product-hero-ceiling-framing.webp',
    'Calcium Silicate': 'assets/product-hero-calcium-silicate.webp',
    'Outdoor &amp; Decking': 'assets/product-hero-outdoor-decking.webp',
    'Accessories': 'assets/product-hero-accessories.webp',
    'Insulation': 'assets/product-hero-insulation.webp'
  };
  var fbKeys = Object.keys(FALLBACK_THUMBS);
  for (var fi = 0; fi < fbKeys.length; fi++) {
    if (!thumbs[fbKeys[fi]]) thumbs[fbKeys[fi]] = FALLBACK_THUMBS[fbKeys[fi]];
  }
  return thumbs;
})();

var cart = [];
var activeCat = 'All';
var searchQuery = '';

// ============================================================
//  ADMIN MODE
// ============================================================
var isAdmin = window.location.search.indexOf('admin') !== -1;
var adminAuthed = sessionStorage.getItem('celson_admin_auth') === '1';
var loginAttempts = parseInt(sessionStorage.getItem('celson_admin_attempts') || '0', 10);
var lockUntil = parseInt(sessionStorage.getItem('celson_admin_lock') || '0', 10);

if (isAdmin && !adminAuthed) {
  document.querySelector('.shop-page').innerHTML = buildLoginPage();
  document.getElementById('loginForm').addEventListener('submit', handleLogin);
} else if (isAdmin && adminAuthed) {
  initAdminMode();
} else {
  initShopMode();
}

function buildLoginPage() {
  var now = Date.now();
  var locked = now < lockUntil;
  var remaining = locked ? Math.ceil((lockUntil - now) / 1000) : 0;
  var maxAttempts = 5;
  var left = Math.max(0, maxAttempts - loginAttempts);

  var html = '<div class="shop-container" style="min-height:80vh;display:flex;align-items:center;justify-content:center;">';
  html += '<div style="text-align:center;max-width:360px;width:100%;padding:48px 32px;border:1px solid var(--gray-200);border-radius:16px;">';
  html += '<div style="font-size:40px;margin-bottom:16px;">&#128274;</div>';
  html += '<h2 style="font-family:Poppins,sans-serif;font-size:22px;font-weight:700;color:var(--gray-900);margin:0 0 8px;">Admin Access</h2>';
  html += '<p style="font-size:14px;color:var(--gray-500);margin:0 0 24px;">Enter your credentials to manage prices</p>';

  if (locked) {
    html += '<div style="padding:14px;background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;margin-bottom:16px;">';
    html += '<p style="font-size:13px;color:#DC2626;margin:0;">Too many failed attempts. Please wait ' + remaining + ' seconds.</p>';
    html += '</div>';
  }

  html += '<form id="loginForm">';
  html += '<div style="margin-bottom:12px;text-align:left;"><label style="font-size:13px;font-weight:600;color:var(--gray-700);">Username</label>';
  html += '<input type="text" id="loginUser" required placeholder="Enter username" style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:8px;font-size:14px;font-family:Open Sans,sans-serif;margin-top:4px;box-sizing:border-box;"' + (locked ? ' disabled' : '') + '>';
  html += '</div>';
  html += '<div style="margin-bottom:20px;text-align:left;"><label style="font-size:13px;font-weight:600;color:var(--gray-700);">Password</label>';
  html += '<input type="password" id="loginPass" required placeholder="Enter password" style="width:100%;padding:10px 14px;border:1px solid var(--gray-200);border-radius:8px;font-size:14px;font-family:Open Sans,sans-serif;margin-top:4px;box-sizing:border-box;"' + (locked ? ' disabled' : '') + '>';
  html += '</div>';

  if (!locked && loginAttempts > 0) {
    html += '<p style="font-size:12px;color:var(--amber-500);margin:0 0 12px;">' + left + ' attempt' + (left !== 1 ? 's' : '') + ' remaining</p>';
  }

  html += '<button type="submit" style="width:100%;padding:12px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;border:none;font-family:Open Sans,sans-serif;background:var(--green-600);color:#fff;"' + (locked ? ' disabled' : '') + '>Unlock</button>';
  html += '</form>';

  html += '<p style="font-size:12px;color:var(--gray-400);margin:20px 0 0;"><a href="shop.html" style="color:var(--gray-500);text-decoration:none;">&larr; Back to Shop</a></p>';
  html += '</div></div>';
  return html;
}

function handleLogin(e) {
  e.preventDefault();
  var user = document.getElementById('loginUser').value.trim();
  var pass = document.getElementById('loginPass').value.trim();

  if (user === CELSON_CONFIG.adminUser && pass === CELSON_CONFIG.adminPass) {
    sessionStorage.setItem('celson_admin_auth', '1');
    sessionStorage.removeItem('celson_admin_attempts');
    sessionStorage.removeItem('celson_admin_lock');
    window.location.reload();
  } else {
    loginAttempts++;
    sessionStorage.setItem('celson_admin_attempts', loginAttempts.toString());
    if (loginAttempts >= 5) {
      sessionStorage.setItem('celson_admin_lock', (Date.now() + 30000).toString());
    }
    window.location.reload();
  }
}

// ============================================================
//  ADMIN PANEL
// ============================================================
function initAdminMode() {
  document.querySelector('.shop-page').innerHTML = buildAdminPanel();
  bindAdminEvents();
}

function buildAdminPanel() {
  var rate = CELSON_CONFIG.exchangeRate;
  var html = '<div class="shop-container" style="padding-top:24px;padding-bottom:48px;">';
  html += '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">';
  html += '<div><h2 style="font-family:Poppins,sans-serif;font-size:24px;font-weight:700;color:var(--gray-900);margin:0;">Price Management</h2><p style="font-size:13px;color:var(--gray-500);margin:4px 0 0;">Edit RMB prices and exchange rate</p></div>';
  html += '<div style="display:flex;gap:8px;">';
  html += '<button id="btnExport" style="padding:8px 16px;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;border:1px solid var(--gray-200);background:#fff;color:var(--gray-700);font-family:Open Sans,sans-serif;">Export JSON</button>';
  html += '<button id="btnLogout" style="padding:8px 16px;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;border:1px solid var(--gray-200);background:#fff;color:var(--red-500);font-family:Open Sans,sans-serif;">Logout</button>';
  html += '</div></div>';

  html += '<div style="display:flex;align-items:center;gap:12px;margin-bottom:24px;padding:14px 18px;background:var(--gray-50);border-radius:10px;">';
  html += '<span style="font-size:13px;font-weight:600;color:var(--gray-700);">Exchange Rate:</span>';
  html += '<span style="font-size:13px;color:var(--gray-500);">1 USD =</span>';
  html += '<input type="number" id="adminRate" value="' + rate + '" step="0.01" min="1" style="width:80px;padding:6px 10px;border:1px solid var(--gray-200);border-radius:6px;text-align:center;font-size:14px;font-weight:600;font-family:Open Sans,sans-serif;box-sizing:border-box;">';
  html += '<span style="font-size:13px;color:var(--gray-500);">CNY</span>';
  html += '<span style="font-size:12px;color:var(--gray-400);margin-left:auto;">RMB &divide; Rate = USD</span>';
  html += '</div>';

  html += '<div style="margin-bottom:16px;"><input type="text" id="adminSearch" placeholder="Search by product name..." style="width:100%;max-width:400px;padding:10px 16px;border:1px solid var(--gray-200);border-radius:10px;font-size:14px;font-family:Open Sans,sans-serif;box-sizing:border-box;"></div>';

  html += '<div style="overflow-x:auto;">';
  html += '<table style="width:100%;border-collapse:collapse;" id="adminTable">';
  html += '<thead><tr>';
  html += '<th style="text-align:left;padding:10px 14px;font-size:12px;font-weight:600;color:var(--gray-400);text-transform:uppercase;border-bottom:1px solid var(--gray-100);">Product</th>';
  html += '<th style="text-align:left;padding:10px 14px;font-size:12px;font-weight:600;color:var(--gray-400);text-transform:uppercase;border-bottom:1px solid var(--gray-100);">Category</th>';
  html += '<th style="text-align:right;padding:10px 14px;font-size:12px;font-weight:600;color:var(--gray-400);text-transform:uppercase;border-bottom:1px solid var(--gray-100);">RMB Price</th>';
  html += '<th style="text-align:right;padding:10px 14px;font-size:12px;font-weight:600;color:var(--gray-400);text-transform:uppercase;border-bottom:1px solid var(--gray-100);">USD Price</th>';
  html += '</tr></thead><tbody id="adminTableBody"></tbody></table></div>';

  html += '<div style="margin-top:16px;padding:14px 18px;background:var(--gray-50);border-radius:10px;">';
  html += '<p style="font-size:12px;color:var(--gray-500);margin:0;">Changes are saved to your browser\'s local storage. Click <strong>Export JSON</strong> to get the updated data, then paste it into <code>js/prices.js</code> to make changes permanent.</p>';
  html += '</div>';

  html += '<p style="text-align:center;font-size:12px;color:var(--gray-400);margin-top:32px;">&copy; 2026 CELSON &mdash; Admin Panel</p>';
  html += '</div>';
  return html;
}

function renderAdminTable(filter) {
  var tbody = document.getElementById('adminTableBody');
  var rate = parseFloat(document.getElementById('adminRate').value) || CELSON_CONFIG.exchangeRate;
  var q = (filter || '').toLowerCase();
  var html = '';

  for (var i = 0; i < PRODUCTS.length; i++) {
    var p = PRODUCTS[i];
    if (q && p.name.toLowerCase().indexOf(q) === -1 && p.category.toLowerCase().indexOf(q) === -1) continue;
    var rmb = getProductPriceRmb(p.id);
    var usd = rmb / rate;
    html += '<tr>';
    html += '<td style="padding:12px 14px;font-size:14px;font-weight:600;color:var(--gray-900);">' + p.name + '</td>';
    html += '<td style="padding:12px 14px;font-size:13px;color:var(--gray-500);">' + p.category + '</td>';
    html += '<td style="padding:12px 14px;text-align:right;">';
    html += '<span style="font-size:13px;color:var(--gray-500);margin-right:2px;">&yen;</span>';
    html += '<input type="number" class="admin-price-rmb" data-id="' + p.id + '" value="' + rmb.toFixed(2) + '" step="0.01" min="0" style="width:90px;padding:6px 8px;border:1px solid var(--gray-200);border-radius:6px;text-align:right;font-size:14px;font-weight:600;font-family:Open Sans,sans-serif;box-sizing:border-box;">';
    html += '</td>';
    html += '<td style="padding:12px 14px;text-align:right;font-size:14px;font-weight:500;color:var(--green-600);">$' + usd.toFixed(2) + '</td>';
    html += '</tr>';
  }
  tbody.innerHTML = html;

  var inputs = tbody.querySelectorAll('.admin-price-rmb');
  for (var j = 0; j < inputs.length; j++) {
    inputs[j].addEventListener('change', function() {
      var id = this.getAttribute('data-id');
      var val = parseFloat(this.value);
      if (!isNaN(val) && val >= 0) {
        PRICES_RMB[id] = val;
        savePriceChanges();
        renderAdminTable(document.getElementById('adminSearch').value);
      }
    });
  }
}

function savePriceChanges() {
  localStorage.setItem('celson_prices_rmb', JSON.stringify(PRICES_RMB));
}

function loadSavedPrices() {
  var saved = localStorage.getItem('celson_prices_rmb');
  if (saved) {
    try {
      var data = JSON.parse(saved);
      for (var key in data) {
        if (data.hasOwnProperty(key)) {
          PRICES_RMB[key] = data[key];
        }
      }
    } catch(e) {}
  }
}

function exportPrices() {
  var rate = parseFloat(document.getElementById('adminRate').value) || CELSON_CONFIG.exchangeRate;
  var exportData = {
    exchangeRate: rate,
    prices: {}
  };
  for (var i = 0; i < PRODUCTS.length; i++) {
    exportData.prices[PRODUCTS[i].id] = PRICES_RMB[PRODUCTS[i].id] || 0;
  }
  var json = JSON.stringify(exportData, null, 2);

  var modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.4);display:flex;align-items:center;justify-content:center;z-index:10000;';
  modal.innerHTML = '<div style="background:#fff;border-radius:14px;padding:28px;max-width:600px;width:90%;max-height:80vh;display:flex;flex-direction:column;">' +
    '<h3 style="font-family:Poppins,sans-serif;font-size:18px;font-weight:700;margin:0 0 8px;">Export Price Data</h3>' +
    '<p style="font-size:13px;color:var(--gray-500);margin:0 0 16px;">Copy this JSON and paste it into <code>js/prices.js</code> to save changes permanently.</p>' +
    '<textarea readonly style="flex:1;min-height:300px;padding:14px;border:1px solid var(--gray-200);border-radius:8px;font-size:12px;font-family:monospace;resize:vertical;box-sizing:border-box;">' + json + '</textarea>' +
    '<div style="margin-top:16px;display:flex;gap:8px;justify-content:flex-end;">' +
    '<button id="btnCopyExport" style="padding:10px 20px;border-radius:8px;font-size:13px;font-weight:600;cursor:pointer;border:none;font-family:Open Sans,sans-serif;background:var(--green-600);color:#fff;">Copy to Clipboard</button>' +
    '<button id="btnCloseExport" style="padding:10px 20px;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;border:1px solid var(--gray-200);background:#fff;color:var(--gray-700);font-family:Open Sans,sans-serif;">Close</button>' +
    '</div></div>';
  document.body.appendChild(modal);

  document.getElementById('btnCloseExport').addEventListener('click', function() { document.body.removeChild(modal); });
  document.getElementById('btnCopyExport').addEventListener('click', function() {
    var ta = modal.querySelector('textarea');
    ta.select();
    document.execCommand('copy');
    var btn = document.getElementById('btnCopyExport');
    btn.textContent = 'Copied!';
    btn.style.background = 'var(--gray-200)';
    btn.style.color = 'var(--gray-700)';
  });
  modal.addEventListener('click', function(e) { if (e.target === modal) document.body.removeChild(modal); });
}

function bindAdminEvents() {
  loadSavedPrices();
  renderAdminTable();

  document.getElementById('adminRate').addEventListener('change', function() {
    var val = parseFloat(this.value);
    if (!isNaN(val) && val > 0) {
      CELSON_CONFIG.exchangeRate = val;
      localStorage.setItem('celson_exchange_rate', val.toString());
      renderAdminTable(document.getElementById('adminSearch').value);
    }
  });

  document.getElementById('adminSearch').addEventListener('input', function() {
    renderAdminTable(this.value);
  });

  document.getElementById('btnExport').addEventListener('click', exportPrices);

  document.getElementById('btnLogout').addEventListener('click', function() {
    sessionStorage.removeItem('celson_admin_auth');
    window.location.href = 'shop.html';
  });
}

// ============================================================
//  SHOP MODE
// ============================================================
function initShopMode() {
  loadSavedPrices();
  loadCart();
  renderCategoryTabs();
  updateCartUI();

  // SD5: Show skeletons for 800ms on first load
  setTimeout(function() {
    renderProductList();
  }, 800);

  document.getElementById('btnViewCart').addEventListener('click', showCartPopup);
  document.getElementById('btnBackToShop').addEventListener('click', showListView);
  document.getElementById('btnBackToShop2').addEventListener('click', showListView);

  // Cart popup events
  document.getElementById('btnReadyToPay').addEventListener('click', openWhatsAppOrder);
  document.getElementById('cartPopupClose').addEventListener('click', hideCartPopup);
  document.getElementById('cartPopupOverlay').addEventListener('click', function(e) {
    if (e.target === this) hideCartPopup();
  });
  document.getElementById('btnReadyToPay').addEventListener('click', openWhatsAppOrder);

  document.getElementById('searchInput').addEventListener('input', function() {
    searchQuery = this.value;
    renderProductList();
    // SD11: Update search suggestions
    updateSearchSuggestions();
  });
  document.getElementById('searchInput').addEventListener('blur', function() {
    // Delay hiding to allow click on suggestion
    setTimeout(function() {
      document.getElementById('searchSuggestions').classList.remove('active');
    }, 200);
  });
  document.getElementById('searchInput').addEventListener('focus', function() {
    if (searchQuery) updateSearchSuggestions();
  });

  // Cart view WhatsApp button
  var btnWA = document.getElementById('btnWhatsAppOrder');
  if (btnWA) btnWA.addEventListener('click', openWhatsAppOrder);

  // SM8: WhatsApp float button
  var waFloat = document.getElementById('waFloatBtn');
  if (waFloat) waFloat.addEventListener('click', function(e) {
    e.preventDefault();
    openWhatsAppOrder();
  });
}

function loadCart() {
  try { cart = JSON.parse(localStorage.getItem('celson_cart') || '[]'); } catch(e) { cart = []; }
  // Clean up any qty=0 items from previous versions
  cart = cart.filter(function(item) { return item.qty > 0; });
}
function saveCart() {
  // Strip qty=0 items before saving
  cart = cart.filter(function(item) { return item.qty > 0; });
  localStorage.setItem('celson_cart', JSON.stringify(cart));
  updateCartUI();
}

function getCartItem(productId) {
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) return cart[i];
  }
  return null;
}

var _prevCartTotal = 0;

function updateCartUI() {
  var totalItems = 0;
  var totalPrice = 0;
  for (var i = 0; i < cart.length; i++) {
    totalItems += cart[i].qty;
    totalPrice += cart[i].qty * cart[i].price;
  }
  var countEl = document.getElementById('cartCount');
  var totalEl = document.getElementById('cartTotal');
  var barEl = document.getElementById('cartBar');
  if (countEl) countEl.textContent = totalItems;
  if (totalEl) {
    totalEl.innerHTML = 'EXW Reference $' + totalPrice.toLocaleString('en-US', {minimumFractionDigits:2}) + '<span>reference only</span>';
    // SD10: Price flash on qty change
    if (totalPrice !== _prevCartTotal && _prevCartTotal > 0) {
      totalEl.classList.remove('price-flash');
      void totalEl.offsetWidth;
      totalEl.classList.add('price-flash');
    }
  }
  _prevCartTotal = totalPrice;
  if (barEl) {
    if (totalItems === 0) barEl.classList.add('hidden');
    else barEl.classList.remove('hidden');
  }
  // P2-8: Blur non-cart items when cart has items
  var shopPage = document.querySelector('.shop-page');
  if (shopPage) {
    if (totalItems > 0) shopPage.classList.add('has-cart-items');
    else shopPage.classList.remove('has-cart-items');
  }
  renderProductList();
}

function addToCart(productId) {
  var prod = getProductById(productId);
  if (!prod) return;
  var price = getProductPrice(productId);
  var existing = getCartItem(productId);
  if (existing) {
    existing.qty = prod.minQty;
    existing.price = price;
  } else {
    cart.push({ id: productId, qty: prod.minQty, price: price, name: prod.name, spec: prod.spec });
  }
  saveCart();

  // SD9/SM6: Fly-to-cart animation
  var isMobile = window.innerWidth <= 480;
  var flyBtn = isMobile ? document.querySelector('.card-fab[data-pid="' + productId + '"]') : null;
  var cardThumb = document.querySelector('.shop-item-thumb[data-pid="' + productId + '"] img');
  var cartTarget = document.getElementById('cartCount');
  if ((cardThumb || flyBtn) && cartTarget) {
    var flyRect = flyBtn ? flyBtn.getBoundingClientRect() : (cardThumb ? cardThumb.getBoundingClientRect() : null);
    if (!flyRect) return;
    var targetRect = cartTarget.getBoundingClientRect();
    var clone = document.createElement('div');
    clone.style.cssText = 'position:fixed;z-index:9999;width:' + flyRect.width + 'px;height:' + flyRect.height + 'px;left:' + flyRect.left + 'px;top:' + flyRect.top + 'px;border-radius:50%;background:linear-gradient(135deg,var(--green-600),#1a9a4a);pointer-events:none;transition:all 0.6s cubic-bezier(0.22,1,0.36,1);opacity:0.9;';
    document.body.appendChild(clone);
    requestAnimationFrame(function() {
      clone.style.left = (targetRect.left + targetRect.width/2 - 10) + 'px';
      clone.style.top = (targetRect.top + targetRect.height/2 - 10) + 'px';
      clone.style.width = '20px';
      clone.style.height = '20px';
      clone.style.opacity = '0.3';
    });
    setTimeout(function() {
      if (clone.parentNode) clone.parentNode.removeChild(clone);
    }, 650);
  }

  // SD2: Button feedback - show checkmark briefly
  var addBtn = document.querySelector('.btn-add[data-id="' + productId + '"]');
  if (addBtn) {
    var origText = addBtn.innerHTML;
    var origBg = addBtn.style.background;
    addBtn.innerHTML = '&#10003; Added';
    addBtn.style.background = '#1a9a4a';
    addBtn.style.transition = 'background 0.15s ease';
    setTimeout(function() {
      if (addBtn) {
        addBtn.innerHTML = origText;
        addBtn.style.background = origBg;
      }
    }, 600);
  }

  // SD2: Cart badge pulse
  var cartBadgeEl = document.getElementById('cartCount');
  if (cartBadgeEl) {
    cartBadgeEl.classList.add('cart-pulse');
    setTimeout(function() { cartBadgeEl.classList.remove('cart-pulse'); }, 400);
  }

  showToast('Added to cart &mdash; ' + prod.name);
}

function removeFromCart(productId) {
  cart = cart.filter(function(item) { return item.id !== productId; });
  saveCart();
  renderCartView();
}

function updateCartQty(productId, newQty) {
  var item = getCartItem(productId);
  if (!item) return;
  var q = parseInt(newQty, 10);
  if (isNaN(q) || q <= 0) { removeFromCart(productId); return; }
  item.qty = q;
  saveCart();
  renderCartView();
}

function renderCategoryTabs() {
  var container = document.getElementById('categoryTabs');
  var html = '';
  for (var i = 0; i < CATEGORIES.length; i++) {
    var cls = (CATEGORIES[i] === activeCat) ? 'shop-cat active' : 'shop-cat';
    var thumb = CATEGORY_THUMBS[CATEGORIES[i]] || '';
    html += '<span class="' + cls + '" data-cat="' + CATEGORIES[i] + '" data-thumb="' + thumb + '">' + CATEGORIES[i] + '</span>';
  }
  container.innerHTML = html;

  // Remove any existing tooltip
  var existingTT = document.getElementById('catTooltip');
  if (existingTT) existingTT.remove();

  var tabs = container.querySelectorAll('.shop-cat');
  for (var j = 0; j < tabs.length; j++) {
    tabs[j].addEventListener('click', function() {
      activeCat = this.getAttribute('data-cat');
      renderCategoryTabs();
      renderProductList();
    });

    // Hover thumbnail for non-All categories
    var catName = tabs[j].getAttribute('data-cat');
    var thumbSrc = tabs[j].getAttribute('data-thumb');
    if (catName !== 'All' && thumbSrc) {
      tabs[j].addEventListener('mouseenter', function(e) {
        showCategoryTooltip(this, e);
      });
      tabs[j].addEventListener('mouseleave', function() {
        hideCategoryTooltip();
      });
    }
  }
}

function showCategoryTooltip(el, e) {
  var thumbSrc = el.getAttribute('data-thumb');
  var catName = el.getAttribute('data-cat');
  if (!thumbSrc) return;

  var tt = document.getElementById('catTooltip');
  if (!tt) {
    tt = document.createElement('div');
    tt.id = 'catTooltip';
    tt.className = 'cat-tooltip';
    tt.innerHTML = '<div class="cat-tooltip-img"><img loading="lazy" src="" alt=""></div><div class="cat-tooltip-label"></div>';
    document.body.appendChild(tt);
  }
  tt.querySelector('.cat-tooltip-img img').src = thumbSrc;
  tt.querySelector('.cat-tooltip-label').textContent = catName;

  var rect = el.getBoundingClientRect();
  var left = rect.left + rect.width / 2 - 110;
  // Keep tooltip within viewport
  if (left < 12) left = 12;
  if (left + 220 > window.innerWidth - 12) left = window.innerWidth - 232;
  tt.style.left = left + 'px';
  tt.style.top = (rect.bottom + 10 + window.scrollY) + 'px';
  tt.classList.add('visible');
}

function hideCategoryTooltip() {
  var tt = document.getElementById('catTooltip');
  if (tt) tt.classList.remove('visible');
}

// SD11: Search suggestions
function updateSearchSuggestions() {
  var container = document.getElementById('searchSuggestions');
  var q = searchQuery.toLowerCase();
  if (!q) { container.classList.remove('active'); container.innerHTML = ''; return; }
  var matches = PRODUCTS.filter(function(p) {
    return p.name.toLowerCase().indexOf(q) !== -1 || p.spec.toLowerCase().indexOf(q) !== -1;
  }).slice(0, 6);
  if (matches.length === 0) { container.classList.remove('active'); container.innerHTML = ''; return; }
  var html = '';
  for (var i = 0; i < matches.length; i++) {
    html += '<div class="search-suggestion-item" data-q="' + matches[i].name + '">' + matches[i].name + ' <span style="color:var(--gray-400);font-size:11px;">' + matches[i].category + '</span></div>';
  }
  container.innerHTML = html;
  container.classList.add('active');
  var items = container.querySelectorAll('.search-suggestion-item');
  for (var j = 0; j < items.length; j++) {
    items[j].addEventListener('click', function() {
      searchQuery = this.getAttribute('data-q');
      document.getElementById('searchInput').value = searchQuery;
      container.classList.remove('active');
      renderProductList();
    });
  }
}

function renderProductList() {
  var container = document.getElementById('productList');
  var noResults = document.getElementById('noResults');
  var filtered = PRODUCTS.filter(function(p) {
    if (activeCat !== 'All' && p.category !== activeCat) return false;
    if (searchQuery) {
      var q = searchQuery.toLowerCase();
      return p.name.toLowerCase().indexOf(q) !== -1 || p.spec.toLowerCase().indexOf(q) !== -1 || p.category.toLowerCase().indexOf(q) !== -1;
    }
    return true;
  });
  if (filtered.length === 0) { container.innerHTML = ''; noResults.style.display = 'block'; return; }
  noResults.style.display = 'none';
  var html = '';
  for (var i = 0; i < filtered.length; i++) {
    var p = filtered[i];
    var price = getProductPrice(p.id);
    var ci = getCartItem(p.id);
    var inCart = !!ci;
    var qty = inCart ? ci.qty : p.minQty;
    var btnClass = inCart ? 'btn-add in-cart' : 'btn-add';
    var btnText = inCart ? '&#10003; In Cart' : 'Add';
    var isVolume = (p.category === 'Gypsum Boards');
    var itemClass = isVolume ? 'shop-item volume-item' : 'shop-item';
    if (inCart) itemClass += ' in-cart-active';
    var badgeHtml = isVolume ? '<span class="shop-item-badge"><span class="badge-icon">&#x1F525;</span> Best Value</span>' : '';
    var fabHidden = inCart ? ' hidden-fab' : '';
    var stepperHidden = inCart ? '' : ' hidden-stepper';
    html += '<div class="' + itemClass + '" data-pid="' + p.id + '">';
    html += '<div class="shop-item-thumb" data-pid="' + p.id + '" title="Click to view details"><img loading="lazy" src="' + (p.thumb || '') + '" alt="' + p.name + '" onerror="this.style.display=\'none\';this.parentElement.innerHTML=\'<svg width=32 height=32 viewBox=\\\'0 0 24 24\\\' fill=\\\'none\\\' stroke=\\\'#15803D\\\' stroke-width=\\\'1.2\\\'><rect x=\\\'3\\\' y=\\\'4\\\' width=\\\'18\\\' height=\\\'14\\\' rx=\\\'1.5\\\'/><line x1=\\\'7\\\' y1=\\\'8\\\' x2=\\\'17\\\' y2=\\\'8\\\'/><line x1=\\\'7\\\' y1=\\\'11\\\' x2=\\\'17\\\' y2=\\\'11\\\'/><line x1=\\\'7\\\' y1=\\\'14\\\' x2=\\\'13\\\' y2=\\\'14\\\'/></svg>\'"></div>';
    html += '<div class="shop-item-info">';
    html += '<div class="shop-item-name">' + p.name + '<span class="shop-item-stock">In Stock</span>' + badgeHtml + '</div>';
    html += '<div class="shop-item-spec">' + p.spec + '</div>';
    html += '<div class="shop-item-extra">' + p.extra + '</div>';
    html += '</div>';
    html += '<div class="shop-item-price"><div class="price">$' + price.toFixed(2) + '</div><div class="unit">' + p.unit + '</div></div>';
    html += '<div class="shop-item-qty-actions">';
    html += '<button class="btn-minus" data-id="' + p.id + '" data-action="minus"' + (inCart ? '' : ' disabled style="opacity:0.35;cursor:default"') + '>&minus;</button>';
    html += '<div class="shop-item-qty"><input type="number" value="' + qty + '" min="1" data-id="' + p.id + '" class="qty-input"><span class="qty-label">qty</span></div>';
    html += '<div class="qty-stepper' + stepperHidden + '">';
    html += '<button class="qty-btn qty-btn-minus" data-pid="' + p.id + '" data-step="' + (-(p.minQty || 1)) + '">\u2212</button>';
    html += '<span class="qty-val" data-pid="' + p.id + '">' + qty + '</span>';
    html += '<button class="qty-btn qty-btn-plus" data-pid="' + p.id + '" data-step="' + (p.minQty || 1) + '">+</button>';
    html += '</div>';
    html += '<div class="shop-item-add"><button class="' + btnClass + '" data-id="' + p.id + '" data-action="add">' + btnText + '</button></div>';
    html += '</div>';
    html += '<button class="card-fab' + fabHidden + '" data-pid="' + p.id + '" data-action="fab-add" title="Add to cart">+</button>';
    html += '</div>';
  }
  container.innerHTML = html;
  var addBtns = container.querySelectorAll('[data-action="add"]');
  for (var k = 0; k < addBtns.length; k++) {
    addBtns[k].addEventListener('click', function() { addToCart(this.getAttribute('data-id')); });
  }
  var minusBtns = container.querySelectorAll('[data-action="minus"]');
  for (var n = 0; n < minusBtns.length; n++) {
    minusBtns[n].addEventListener('click', function() {
      var pid = this.getAttribute('data-id');
      var ci = getCartItem(pid);
      if (ci) {
        var prod = getProductById(pid);
        var step = prod ? prod.minQty : 1;
        var newQty = ci.qty - step;
        if (newQty <= 0) {
          removeFromCart(pid);
          renderProductList();
          showToast('Removed — ' + ci.name);
        } else {
          ci.qty = newQty;
          saveCart();
          renderProductList();
        }
      }
    });
  }
  var qtyInputs = container.querySelectorAll('.qty-input');
  for (var m = 0; m < qtyInputs.length; m++) {
    qtyInputs[m].addEventListener('change', function() {
      var pid = this.getAttribute('data-id');
      var val = parseInt(this.value, 10);
      var ci = getCartItem(pid);
      if (ci) {
        if (isNaN(val) || val <= 0) {
          removeFromCart(pid);
          renderProductList();
          showToast('Removed — ' + ci.name);
        }
        else { ci.qty = val; saveCart(); }
      }
    });
  }

  // SM4: Stepper button events
  var stepperBtns = container.querySelectorAll('.qty-btn');
  for (var sm4 = 0; sm4 < stepperBtns.length; sm4++) {
    stepperBtns[sm4].addEventListener('click', function() {
      var pid = this.getAttribute('data-pid');
      var step = parseInt(this.getAttribute('data-step'), 10);
      var ci = getCartItem(pid);
      if (ci) {
        var newQty = ci.qty + step;
        if (newQty <= 0) {
          removeFromCart(pid);
          renderProductList();
          showToast('Removed — ' + ci.name);
        } else {
          ci.qty = newQty;
          saveCart();
          renderProductList();
        }
      }
    });
  }

  // Bind thumb click → lightbox
  var thumbs = container.querySelectorAll('.shop-item-thumb');
  for (var t = 0; t < thumbs.length; t++) {
    thumbs[t].addEventListener('click', function(e) {
      var pid = this.getAttribute('data-pid');
      if (pid) openProductLightbox(pid);
    });
  }

  // SM5: Bind FAB buttons
  var fabBtns = container.querySelectorAll('[data-action="fab-add"]');
  for (var f = 0; f < fabBtns.length; f++) {
    fabBtns[f].addEventListener('click', function(e) {
      e.stopPropagation();
      var pid = this.getAttribute('data-pid');
      addToCart(pid);
      // Brief checkmark feedback on FAB
      var origText = this.innerHTML;
      this.innerHTML = '&#10003;';
      this.style.background = 'linear-gradient(135deg, #1a9a4a, #0d7a32)';
      var self = this;
      setTimeout(function() {
        self.innerHTML = origText;
        self.style.background = '';
      }, 600);
    });
  }
}

function renderCartView() {
  var emptyEl = document.getElementById('cartEmpty');
  var contentEl = document.getElementById('cartContent');
  var tbody = document.getElementById('cartTableBody');
  var summaryTotal = document.getElementById('cartSummaryTotal');
  if (cart.length === 0) { emptyEl.style.display = 'block'; contentEl.style.display = 'none'; return; }
  emptyEl.style.display = 'none';
  contentEl.style.display = 'block';
  var total = 0;
  var html = '';
  for (var i = 0; i < cart.length; i++) {
    var item = cart[i];
    var subtotal = item.qty * item.price;
    total += subtotal;
    html += '<tr>';
    html += '<td><div class="cart-prod"><div class="cart-prod-thumb"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15803D" stroke-width="1.2"><rect x="3" y="4" width="18" height="14" rx="1.5"/></svg></div><span class="cart-prod-name">' + item.name + '</span></div></td>';
    html += '<td style="font-size:12px;color:var(--gray-500)">' + (item.spec || '&mdash;') + '</td>';
    html += '<td><input type="number" class="cart-qty-input" value="' + item.qty + '" data-id="' + item.id + '" min="1"></td>';
    html += '<td style="font-weight:500">$' + item.price.toFixed(2) + '</td>';
    html += '<td style="font-weight:600">$' + subtotal.toLocaleString('en-US', {minimumFractionDigits:2}) + '</td>';
    html += '<td><button class="btn-remove" data-id="' + item.id + '" title="Remove">&times;</button></td>';
    html += '</tr>';
  }
  tbody.innerHTML = html;
  summaryTotal.textContent = '$' + total.toLocaleString('en-US', {minimumFractionDigits: 2});
  var deposit = total * 0.3;
  var depositEl = document.getElementById('cartSummaryDeposit');
  if (depositEl) depositEl.textContent = '$' + deposit.toLocaleString('en-US', {minimumFractionDigits: 2});
  var qtyInputs = tbody.querySelectorAll('.cart-qty-input');
  for (var j = 0; j < qtyInputs.length; j++) {
    qtyInputs[j].addEventListener('change', function() { updateCartQty(this.getAttribute('data-id'), this.value); });
  }
  var removeBtns = tbody.querySelectorAll('.btn-remove');
  for (var k = 0; k < removeBtns.length; k++) {
    removeBtns[k].addEventListener('click', function() { removeFromCart(this.getAttribute('data-id')); });
  }
}

function showCartView() {
  hideCartPopup();
  document.getElementById('shopListView').classList.add('hidden');
  document.getElementById('cartBar').classList.add('hidden');
  document.getElementById('shopCartView').classList.add('active');
  renderCartView();
  window.scrollTo(0, 0);
}

function showListView() {
  document.getElementById('shopListView').classList.remove('hidden');
  document.getElementById('cartBar').classList.remove('hidden');
  document.getElementById('shopCartView').classList.remove('active');
  updateCartUI();
  window.scrollTo(0, 0);
}

// ============================================================
//  CART POPUP
// ============================================================
function renderCartPopup() {
  var body = document.getElementById('cartPopupBody');
  var totalEl = document.getElementById('popupTotal');
  var countEl = document.getElementById('popupCount');
  var footerEl = document.getElementById('cartPopupFooter');
  var total = 0;
  var totalItems = 0;

  for (var i = 0; i < cart.length; i++) {
    totalItems += 1;
    total += cart[i].qty * cart[i].price;
  }
  countEl.textContent = totalItems;

  if (cart.length === 0) {
    body.innerHTML = '<div class="cart-empty" style="text-align:center;padding:40px 20px;"><div style="font-size:48px;margin-bottom:16px;">&#x1F6D2;</div><p style="font-size:16px;color:#64748b;margin-bottom:8px;">Your cart is empty</p><p style="font-size:13px;color:#94a3b8;">Browse products and add items to get started</p></div>';
    footerEl.style.display = 'none';
    return;
  }
  footerEl.style.display = 'block';

  // Get thumbnail for category
  var html = '';
  for (var j = 0; j < cart.length; j++) {
    var item = cart[j];
    var prod = getProductById(item.id);
    var catThumb = '';
    if (prod && CATEGORY_THUMBS[prod.category]) {
      catThumb = CATEGORY_THUMBS[prod.category];
    }
    var subtotal = item.qty * item.price;
    html += '<div class="cart-popup-item">';
    html += '<div class="cart-popup-thumb-wrap" data-thumb="' + catThumb + '" data-name="' + item.name + '">';
    if (catThumb) {
      html += '<img loading="lazy" src="' + catThumb + '" alt="' + item.name + '" style="width:100%;height:100%;object-fit:cover;">';
    } else {
      html += '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#15803D" stroke-width="1.2"><rect x="3" y="4" width="18" height="14" rx="1.5"/></svg>';
    }
    html += '</div>';
    html += '<div class="cart-popup-item-info">';
    html += '<div class="cart-popup-item-name">' + item.name + '</div>';
    html += '<div class="cart-popup-item-spec">' + (item.spec || '') + '</div>';
    html += '</div>';
    html += '<div class="cart-popup-item-qty">&times;' + item.qty + '</div>';
    html += '<div class="cart-popup-item-subtotal">$' + subtotal.toLocaleString('en-US', {minimumFractionDigits:2}) + '</div>';
    html += '<button class="cart-popup-item-remove" data-id="' + item.id + '" title="Remove from cart">&times;</button>';
    html += '</div>';
  }
  body.innerHTML = html;
  totalEl.innerHTML = '$' + total.toLocaleString('en-US', {minimumFractionDigits:2}) + '<span>ref.</span>';

  // Bind delete buttons in popup
  var removeBtns = body.querySelectorAll('.cart-popup-item-remove');
  for (var ri = 0; ri < removeBtns.length; ri++) {
    removeBtns[ri].addEventListener('click', function() {
      removeFromCart(this.getAttribute('data-id'));
      renderCartPopup();
      updateCartUI();
    });
  }

  // Bind hover thumbnails on popup items
  bindPopupThumbHover();
}

function showCartPopup() {
  if (cart.length === 0) {
    showCartView();
    return;
  }
  renderCartPopup();
  document.getElementById('cartPopupOverlay').classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function hideCartPopup() {
  document.getElementById('cartPopupOverlay').classList.remove('visible');
  document.body.style.overflow = '';
  // Remove tooltip
  var tt = document.getElementById('popupThumbTooltip');
  if (tt) tt.remove();
}

// SM7: Bottom sheet drag to close
var _bsDragStartY = 0;
var _bsDragging = false;
(function initBottomSheet() {
  var handle = document.querySelector('.bs-handle');
  var popup = handle ? handle.parentElement : null;
  if (!handle || !popup) return;
  handle.addEventListener('touchstart', function(e) {
    _bsDragStartY = e.touches[0].clientY;
    _bsDragging = true;
    popup.style.transition = 'none';
  }, { passive: false });
  handle.addEventListener('touchmove', function(e) {
    if (!_bsDragging) return;
    var dy = e.touches[0].clientY - _bsDragStartY;
    if (dy > 0) {
      popup.style.transform = 'translateY(' + dy + 'px)';
    }
  }, { passive: false });
  handle.addEventListener('touchend', function(e) {
    _bsDragging = false;
    popup.style.transition = 'transform 0.35s cubic-bezier(0.22,1,0.36,1)';
    var dy = (e.changedTouches[0] || e.touches[0] || {clientY: _bsDragStartY}).clientY - _bsDragStartY;
    if (dy > 100) {
      hideCartPopup();
    }
    popup.style.transform = '';
  });
})();

function bindPopupThumbHover() {
  var thumbWraps = document.querySelectorAll('.cart-popup-thumb-wrap');
  for (var i = 0; i < thumbWraps.length; i++) {
    thumbWraps[i].addEventListener('mouseenter', function(e) {
      var thumbSrc = this.getAttribute('data-thumb');
      var name = this.getAttribute('data-name');
      if (!thumbSrc) return;
      showPopupThumbTooltip(this, thumbSrc, name);
    });
    thumbWraps[i].addEventListener('mouseleave', function() {
      hidePopupThumbTooltip();
    });
  }
}

function showPopupThumbTooltip(el, src, name) {
  var tt = document.getElementById('popupThumbTooltip');
  if (!tt) {
    tt = document.createElement('div');
    tt.id = 'popupThumbTooltip';
    tt.className = 'popup-thumb-tooltip';
    tt.innerHTML = '<img loading="lazy" src="" alt=""><div class="popup-thumb-tooltip-label"></div>';
    document.body.appendChild(tt);
  }
  tt.querySelector('img').src = src;
  tt.querySelector('.popup-thumb-tooltip-label').textContent = name;

  var rect = el.getBoundingClientRect();
  var left = rect.right + 12;
  var top = rect.top + rect.height / 2 - 70;
  if (left + 200 > window.innerWidth - 12) left = rect.left - 212;
  if (top < 12) top = 12;
  if (top + 140 > window.innerHeight - 12) top = window.innerHeight - 152;
  tt.style.left = left + 'px';
  tt.style.top = top + 'px';
  tt.classList.add('visible');
}

function hidePopupThumbTooltip() {
  var tt = document.getElementById('popupThumbTooltip');
  if (tt) tt.classList.remove('visible');
}

function showToast(msg) {
  var toast = document.getElementById('toast');
  toast.className = 'toast success';
  toast.innerHTML = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 2500);
}

function showErrorToast(msg) {
  var toast = document.getElementById('toast');
  toast.className = 'toast error';
  toast.innerHTML = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, 3500);
}

// ============================================================
//  PRODUCT LIGHTBOX (Multi-image gallery + details)
// ============================================================
var lightboxCurrentSlide = 0;
var lightboxProduct = null;
var lightboxTouchStartX = 0;
var lightboxTouchStartY = 0;
var lightboxTouchMoved = false;
var lightboxSwipeThreshold = 50;
var lightboxVerticalSwipeThreshold = 80;
var lightboxIsVerticalSwipe = false;

// Pinch zoom state
var pinchInitialDistance = 0;
var pinchInitialScale = 1;
var currentScale = 1;
var currentTranslateX = 0;
var currentTranslateY = 0;

function openProductLightbox(productId) {
  var prod = getProductById(productId);
  if (!prod) return;

  lightboxProduct = prod;
  lightboxCurrentSlide = 0;
  currentScale = 1;
  currentTranslateX = 0;
  currentTranslateY = 0;

  // Push history state so iOS swipe-back closes lightbox instead of navigating away
  if (!history.state || !history.state.lightbox) {
    history.pushState({ lightbox: Date.now() }, '', window.location.href);
  }

  // Build gallery slides
  var thumbs = prod.thumbs || [prod.thumb];
  if (thumbs.length === 0) thumbs = [prod.thumb];

  var inner = document.getElementById('prodLightboxInner');
  var dots = document.getElementById('prodLightboxDots');
  var html = '';
  var dotHtml = '';
  for (var i = 0; i < thumbs.length; i++) {
    html += '<div class="prod-lightbox-slide"><img src="' + thumbs[i] + '" alt="' + prod.name + ' - Image ' + (i + 1) + '" draggable="false"></div>';
    dotHtml += '<button class="prod-lightbox-dot' + (i === 0 ? ' active' : '') + '" data-index="' + i + '"></button>';
  }
  inner.innerHTML = html;
  inner.style.transform = 'translateX(0)';
  dots.innerHTML = dotHtml;

  // Build info panel
  var price = getProductPrice(prod.id);
  var ci = getCartItem(prod.id);
  var inCart = !!ci;
  var details = prod.details || {};

  var infoHtml = '';
  infoHtml += '<div class="plb-name">' + prod.name + '</div>';
  infoHtml += '<span class="plb-cat">' + prod.category + '</span>';
  infoHtml += '<div class="plb-price-row"><span class="plb-price">$' + price.toFixed(2) + '</span><span class="plb-unit">' + prod.unit + '</span></div>';
  infoHtml += '<div class="plb-minqty">Min. Order: ' + prod.minQty.toLocaleString() + ' ' + (prod.unit.indexOf('m&sup2;') !== -1 ? 'm²' : prod.unit.replace('/','')) + '</div>';

  // Spec info
  infoHtml += '<div style="font-size:13px;color:var(--gray-500);margin-bottom:14px;line-height:1.6;">' + prod.spec + '<br>' + prod.extra + '</div>';

  // Technical details table
  if (Object.keys(details).length > 0) {
    infoHtml += '<div class="prod-lightbox-details"><h4>Technical Specifications</h4>';
    for (var key in details) {
      if (details.hasOwnProperty(key)) {
        var label = key.replace(/([A-Z])/g, ' $1').replace(/^./, function(s) { return s.toUpperCase(); });
        infoHtml += '<div class="prod-lightbox-detail-row"><span class="dt-label">' + label + '</span><span class="dt-value">' + details[key] + '</span></div>';
      }
    }
    infoHtml += '</div>';
  }

  // Action buttons
  infoHtml += '<div class="prod-lightbox-actions">';
  infoHtml += '<button class="btn-lb-add' + (inCart ? ' in-cart' : '') + '" id="btnLbAdd" data-pid="' + prod.id + '">' + (inCart ? '&#10003; In Cart' : 'Add to Cart') + '</button>';
  infoHtml += '<button class="btn-lb-wa" id="btnLbWhatsApp"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> WhatsApp</button>';
  infoHtml += '</div>';

  document.getElementById('prodLightboxInfo').innerHTML = infoHtml;

  // Show overlay
  document.getElementById('prodLightboxOverlay').classList.add('visible');
  document.body.style.overflow = 'hidden';

  // Bind events
  bindLightboxEvents();
  updateLightboxSlide(0);
}

function updateLightboxSlide(index) {
  var thumbs = (lightboxProduct && lightboxProduct.thumbs) ? lightboxProduct.thumbs : [];
  if (thumbs.length === 0) return;

  lightboxCurrentSlide = Math.max(0, Math.min(index, thumbs.length - 1));
  var inner = document.getElementById('prodLightboxInner');
  inner.style.transform = 'translateX(-' + (lightboxCurrentSlide * 100) + '%)';

  // Update dots
  var dots = document.querySelectorAll('.prod-lightbox-dot');
  for (var i = 0; i < dots.length; i++) {
    dots[i].classList.toggle('active', i === lightboxCurrentSlide);
  }

  // Update prev/next visibility
  var prev = document.getElementById('prodLightboxPrev');
  var next = document.getElementById('prodLightboxNext');
  if (prev) prev.style.display = lightboxCurrentSlide === 0 ? 'none' : 'flex';
  if (next) next.style.display = lightboxCurrentSlide >= thumbs.length - 1 ? 'none' : 'flex';
}

function bindLightboxEvents() {
  var closeBtn = document.getElementById('prodLightboxClose');
  var overlay = document.getElementById('prodLightboxOverlay');
  var prevBtn = document.getElementById('prodLightboxPrev');
  var nextBtn = document.getElementById('prodLightboxNext');
  var gallery = document.getElementById('prodLightboxGallery');

  // Close
  closeBtn.onclick = closeProductLightbox;
  overlay.onclick = function(e) {
    if (e.target === overlay) closeProductLightbox();
  };

  // Navigation arrows
  if (prevBtn) prevBtn.onclick = function() { updateLightboxSlide(lightboxCurrentSlide - 1); };
  if (nextBtn) nextBtn.onclick = function() { updateLightboxSlide(lightboxCurrentSlide + 1); };

  // Dot clicks
  var dots = document.querySelectorAll('.prod-lightbox-dot');
  for (var d = 0; d < dots.length; d++) {
    dots[d].onclick = function() {
      updateLightboxSlide(parseInt(this.getAttribute('data-index'), 10));
    };
  }

  // Keyboard navigation
  document.addEventListener('keydown', lightboxKeyHandler);

  // Touch swipe (gallery for horizontal, overlay for vertical dismiss)
  if (gallery) {
    gallery.addEventListener('touchstart', lightboxTouchStart, { passive: false });
    gallery.addEventListener('touchmove', lightboxTouchMove, { passive: false });
    gallery.addEventListener('touchend', lightboxTouchEnd, { passive: false });
  }
  // Also bind to overlay so vertical-swipe-to-dismiss works anywhere on the lightbox
  if (overlay) {
    overlay.addEventListener('touchstart', lightboxTouchStart, { passive: false });
    overlay.addEventListener('touchmove', lightboxTouchMove, { passive: false });
    overlay.addEventListener('touchend', lightboxTouchEnd, { passive: false });
  }

  // Action buttons
  var btnAdd = document.getElementById('btnLbAdd');
  if (btnAdd) {
    btnAdd.onclick = function() {
      addToCart(this.getAttribute('data-pid'));
      // Refresh lightbox info
      if (lightboxProduct) openProductLightbox(lightboxProduct.id);
      renderProductList();
    };
  }

  var btnWa = document.getElementById('btnLbWhatsApp');
  if (btnWa) {
    btnWa.onclick = function() {
      var pid = document.getElementById('btnLbAdd').getAttribute('data-pid');
      addToCart(pid);
      closeProductLightbox();
      openWhatsAppOrder();
    };
  }
}

function lightboxKeyHandler(e) {
  if (!lightboxProduct) return;
  if (e.key === 'Escape') { closeProductLightbox(); return; }
  if (e.key === 'ArrowLeft') { updateLightboxSlide(lightboxCurrentSlide - 1); return; }
  if (e.key === 'ArrowRight') { updateLightboxSlide(lightboxCurrentSlide + 1); return; }
}

// Touch swipe handlers
function lightboxTouchStart(e) {
  if (e.touches.length === 1) {
    lightboxTouchStartX = e.touches[0].clientX;
    lightboxTouchStartY = e.touches[0].clientY;
    lightboxTouchMoved = false;
    lightboxIsVerticalSwipe = false;
  } else if (e.touches.length === 2) {
    // Pinch start
    pinchInitialDistance = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    pinchInitialScale = currentScale;
  }
}

function lightboxTouchMove(e) {
  if (e.touches.length === 1 && pinchInitialDistance === 0) {
    var dx = e.touches[0].clientX - lightboxTouchStartX;
    var dy = e.touches[0].clientY - lightboxTouchStartY;
    // Detect vertical swipe — prioritize over horizontal if vertical is dominant
    if (!lightboxTouchMoved && Math.abs(dy) > 10 && Math.abs(dy) > Math.abs(dx)) {
      lightboxIsVerticalSwipe = true;
    }
    if (Math.abs(dx) > 5) lightboxTouchMoved = true;
    // Apply vertical drag transform if vertical swipe
    if (lightboxIsVerticalSwipe && dy > 0) {
      var lightbox = document.querySelector('.prod-lightbox-overlay .prod-lightbox');
      if (lightbox) {
        lightbox.style.transition = 'none';
        lightbox.style.transform = 'translateY(' + dy + 'px)';
      }
      // Adjust overlay opacity based on drag distance
      var overlay = document.getElementById('prodLightboxOverlay');
      if (overlay) {
        var opacity = Math.max(0, 1 - dy / 300);
        overlay.style.opacity = opacity;
      }
    }
  } else if (e.touches.length === 2) {
    // Pinch zoom on mobile
    var dist = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    var scale = pinchInitialScale * (dist / pinchInitialDistance);
    scale = Math.max(1, Math.min(scale, 3));
    currentScale = scale;
    var img = document.querySelector('.prod-lightbox-slide:nth-child(' + (lightboxCurrentSlide + 1) + ') img');
    if (img) {
      img.style.transform = 'scale(' + scale + ')';
      img.style.transition = 'none';
    }
  }
}

function lightboxTouchEnd(e) {
  // Handle vertical swipe-to-dismiss first
  if (lightboxIsVerticalSwipe) {
    var dy = e.changedTouches[0].clientY - lightboxTouchStartY;
    var lightbox = document.querySelector('.prod-lightbox-overlay .prod-lightbox');
    var overlay = document.getElementById('prodLightboxOverlay');
    if (dy > lightboxVerticalSwipeThreshold) {
      // Dismiss — animate downward and close
      if (lightbox) {
        lightbox.style.transition = 'transform 0.25s cubic-bezier(0.4,0,1,1)';
        lightbox.style.transform = 'translateY(100vh)';
      }
      if (overlay) {
        overlay.style.transition = 'opacity 0.25s ease';
        overlay.style.opacity = '0';
      }
      setTimeout(function() {
        closeProductLightbox();
        // Reset inline styles
        if (lightbox) { lightbox.style.transition = ''; lightbox.style.transform = ''; }
        if (overlay) { overlay.style.transition = ''; overlay.style.opacity = ''; overlay.style.background = ''; }
      }, 260);
    } else {
      // Snap back
      if (lightbox) {
        lightbox.style.transition = 'transform 0.3s cubic-bezier(0.22,1,0.36,1)';
        lightbox.style.transform = 'translateY(0)';
      }
      if (overlay) {
        overlay.style.transition = 'opacity 0.3s ease';
        overlay.style.opacity = '1';
      }
    }
    lightboxIsVerticalSwipe = false;
    lightboxTouchMoved = false;
    return;
  }

  if (!lightboxTouchMoved && pinchInitialDistance === 0) return;

  if (pinchInitialDistance > 0) {
    // End pinch - reset after 1s
    pinchInitialDistance = 0;
    currentScale = 1;
    setTimeout(function() {
      var img = document.querySelector('.prod-lightbox-slide:nth-child(' + (lightboxCurrentSlide + 1) + ') img');
      if (img) {
        img.style.transform = 'scale(1)';
        img.style.transition = 'transform 0.3s ease';
      }
    }, 300);
    return;
  }

  // Swipe
  var dx = e.changedTouches[0].clientX - lightboxTouchStartX;
  if (Math.abs(dx) > lightboxSwipeThreshold) {
    if (dx < 0) updateLightboxSlide(lightboxCurrentSlide + 1);
    else updateLightboxSlide(lightboxCurrentSlide - 1);
  }
  lightboxTouchMoved = false;
}

function closeProductLightbox() {
  document.removeEventListener('keydown', lightboxKeyHandler);
  document.getElementById('prodLightboxOverlay').classList.remove('visible');
  document.body.style.overflow = '';
  lightboxProduct = null;
  // Pop the history state we pushed so iOS swipe-back works correctly
  if (history.state && history.state.lightbox) {
    history.back();
  }
}

// Listen for browser back/forward (iOS swipe-back gesture)
window.addEventListener('popstate', function(e) {
  if (lightboxProduct && (!e.state || !e.state.lightbox)) {
    // User navigated back — close lightbox without pushing another state
    document.removeEventListener('keydown', lightboxKeyHandler);
    document.getElementById('prodLightboxOverlay').classList.remove('visible');
    document.body.style.overflow = '';
    lightboxProduct = null;
  }
});

// Expose to window for external use
window.openProductLightbox = openProductLightbox;
window.closeProductLightbox = closeProductLightbox;

// ============================================================
//  WHATSAPP ORDER (one-click + silent email backup)
// ============================================================
var WHATSAPP_NUMBER = '+8613825578911';
var FORMSPREE_ENDPOINT = 'https://formspree.io/f/xdavdror';
var MAX_WHATSAPP_ITEMS = 8;

function buildWhatsAppMessage() {
  var total = 0;
  var lines = [];
  lines.push('\uD83D\uDED2 *CELSON Order Inquiry*');
  lines.push('');

  var displayCount = Math.min(cart.length, MAX_WHATSAPP_ITEMS);
  for (var i = 0; i < displayCount; i++) {
    var item = cart[i];
    var subtotal = item.qty * item.price;
    total += subtotal;
    lines.push('*' + (i + 1) + '. ' + item.name + '*');
    if (item.spec) lines.push('   _' + item.spec + '_');
    lines.push('   Qty: ' + item.qty + ' \u00d7 $' + item.price.toFixed(2) + ' = *$' + subtotal.toLocaleString('en-US', {minimumFractionDigits: 2}) + '*');
    lines.push('');
  }

  if (cart.length > MAX_WHATSAPP_ITEMS) {
    var remaining = cart.length - MAX_WHATSAPP_ITEMS;
    var remainingTotal = 0;
    for (var k = MAX_WHATSAPP_ITEMS; k < cart.length; k++) {
      remainingTotal += cart[k].qty * cart[k].price;
      total += cart[k].qty * cart[k].price;
    }
    lines.push('_...and ' + remaining + ' more item(s) \u2014 ' + remainingTotal.toLocaleString('en-US', {minimumFractionDigits: 2}) + '_');
    lines.push('');
  }

  lines.push('\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501');
  lines.push('\uD83D\uDCB0 *EXW Total: $' + total.toLocaleString('en-US', {minimumFractionDigits: 2}) + '*');
  lines.push('\uD83D\uDEE1\uFE0F *30% Deposit: $' + (total * 0.3).toLocaleString('en-US', {minimumFractionDigits: 2}) + '*');
  lines.push('\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501');
  lines.push('');
  lines.push('\uD83D\uDCCD Shipping from Guangdong, China');
  lines.push('\uD83D\uDE9A Container loading location: Foshan');
  lines.push('\uD83D\uDCE6 FOB pricing \u2014 reply to this chat');
  lines.push('');
  lines.push('_(Please add your company name & contact info)_');

  return lines.join('\n');
}

function buildEmailItemsText() {
  var total = 0;
  var text = '';
  for (var i = 0; i < cart.length; i++) {
    var sub = cart[i].qty * cart[i].price;
    total += sub;
    text += (i + 1) + '. ' + cart[i].name + ' \u2014 ' + (cart[i].spec || 'N/A') + '\n';
    text += '   Qty: ' + cart[i].qty + ' \u00d7 $' + cart[i].price.toFixed(2) + ' = $' + sub.toLocaleString('en-US', {minimumFractionDigits: 2}) + '\n\n';
  }
  return text;
}

function getEmailTotal() {
  var total = 0;
  for (var i = 0; i < cart.length; i++) {
    total += cart[i].qty * cart[i].price;
  }
  return total;
}

function sendSilentEmail() {
  var total = getEmailTotal();
  var formData = new FormData();
  formData.append('name', 'WhatsApp Order (auto)');
  formData.append('company', 'N/A');
  formData.append('whatsapp', WHATSAPP_NUMBER);
  formData.append('email', '695904082@qq.com');
  formData.append('message', 'Order placed via WhatsApp one-click. Customer will provide contact details in WhatsApp chat.');
  formData.append('order_items', buildEmailItemsText());
  formData.append('exw_total', '$' + total.toLocaleString('en-US', {minimumFractionDigits: 2}));
  formData.append('deposit_30pct', '$' + (total * 0.3).toLocaleString('en-US', {minimumFractionDigits: 2}));
  formData.append('logistics', 'Included: Foshan city limits only. Not included: container loading, freight outside Foshan, export docs. Free loading location provided in Foshan.');
  formData.append('submitted_at', new Date().toISOString());
  formData.append('order_source', 'WhatsApp one-click checkout');

  fetch(FORMSPREE_ENDPOINT, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } })
    .catch(function(err) { console.error('Silent email backup failed:', err); });
}

function openWhatsAppOrder() {
  if (cart.length === 0) {
    showErrorToast('Your cart is empty. Add items first.');
    return;
  }

  // Close popup if open
  hideCartPopup();

  // Send silent email backup (fire-and-forget)
  sendSilentEmail();

  // Open WhatsApp
  var message = buildWhatsAppMessage();
  var waUrl = 'https://wa.me/' + WHATSAPP_NUMBER + '?text=' + encodeURIComponent(message);
  window.open(waUrl, '_blank');

  // Track conversion
  if (typeof gtag === 'function') {
    gtag('event', 'whatsapp_order', {
      event_category: 'conversion',
      event_label: 'WhatsApp Checkout',
      value: getEmailTotal()
    });
  }

  // Clear cart and go back to list
  cart = [];
  saveCart();
  updateCartUI();
  showListView();
  showToast('Opening WhatsApp... Your order details are pre-filled. We\u2019ll confirm within 24 hours.');
}

})();
