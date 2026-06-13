/**
 * CELSON SEO — Dynamic Structured Data & Rich Snippets
 * Injects JSON-LD Organization, Breadcrumb, and Product markup
 * Version: 2026-06-13
 */

(function () {
  'use strict';

  // ========== Organization (all pages) ==========
  (function injectOrganization() {
    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': 'https://celson.ltd/#organization',
      name: 'CELSON',
      alternateName: 'Jianxin Building Materials Co.',
      url: 'https://celson.ltd',
      logo: 'https://celson.ltd/assets/crown-logo-44.webp',
      image: 'https://celson.ltd/assets/home-slide-0.webp',
      description:
        'Global building materials supplier — factory-direct gypsum boards, sheet boards, wall panels, ceiling systems, tiles, roofing, and insulation. Serving 98 countries.',
      email: 'Betty.Mat@foxmail.com',
      telephone: '+86-13825578911',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CN',
      },
      sameAs: [],
      knowsAbout: [
        'Gypsum Boards',
        'Sheet Boards',
        'Wall Panels',
        'Ceiling Systems',
        'Calcium Silicate',
        'Outdoor Decking',
        'Tiles',
        'Roofing Materials',
        'Accessories',
        'Insulation Materials',
      ],
    });
    document.head.appendChild(ld);
  })();

  // ========== Website (all pages) ==========
  (function injectWebSite() {
    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': 'https://celson.ltd/#website',
      url: 'https://celson.ltd',
      name: 'CELSON — Global Building Materials',
      description:
        'Factory-direct building materials: gypsum boards, sheet boards, wall panels, ceiling systems, tiles, roofing, and insulation.',
      inLanguage: ['en', 'fr'],
      publisher: { '@id': 'https://celson.ltd/#organization' },
    });
    document.head.appendChild(ld);
  })();

  // ========== BreadcrumbList (auto-detect from URL) ==========
  (function injectBreadcrumb() {
    var path = window.location.pathname.replace(/\/$/, '');
    var items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://celson.ltd/' }];

    if (path === '' || path === '/') return; // homepage, no breadcrumb needed

    var pageName = path.replace(/\.html$/, '').replace(/^\//, '');
    if (!pageName || pageName === 'index') return;

    // Friendly names for breadcrumb
    var friendlyNames = {
      'products': 'All Products',
      'gypsum-boards': 'Gypsum Boards',
      'sheet-boards': 'Sheet Boards',
      'wall-panels': 'Wall Panels',
      'ceiling-framing': 'Ceiling & Metal Framing',
      'calcium-silicate': 'Calcium Silicate Boards',
      'outdoor-decking': 'Outdoor & Decking',
      'tiles': 'Tiles',
      'roofing-materials': 'Roofing Materials',
      'accessories': 'Accessories',
      'insulation-materials': 'Insulation Materials',
      'about': 'About CELSON',
      'projects': 'Projects',
      'shop': 'Shop — Quick Inquiry',
      'contact': 'Contact Us',
    };

    items.push({
      '@type': 'ListItem',
      position: 2,
      name: friendlyNames[pageName] || pageName.replace(/-/g, ' ').replace(/\b\w/g, function (c) { return c.toUpperCase(); }),
      item: 'https://celson.ltd' + path,
    });

    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items,
    });
    document.head.appendChild(ld);
  })();

  // ========== Product (on product detail pages) ==========
  (function injectProduct() {
    var path = window.location.pathname;
    var productConfig = {
      '/gypsum-boards.html': {
        name: 'Gypsum Boards',
        description:
          'Standard, Moisture-Resistant (MR), and Fire-Rated gypsum boards for interior wall and ceiling construction. Factory-direct pricing.',
        image: 'https://celson.ltd/assets/product-gypsum.jpg',
        category: 'Gypsum Boards',
      },
      '/sheet-boards.html': {
        name: 'Sheet Boards',
        description:
          'Plywood, MDF, OSB, and Particle boards for construction and furniture applications. Premium quality, factory-direct.',
        image: 'https://celson.ltd/assets/product-sheet.jpg',
        category: 'Sheet Boards',
      },
      '/wall-panels.html': {
        name: 'Wall Panels',
        description:
          'Decorative wall panels, WPC panels, and UV marble panels. Modern wall covering solutions for interior and exterior use.',
        image: 'https://celson.ltd/assets/product-wall.jpg',
        category: 'Wall Panels',
      },
      '/ceiling-framing.html': {
        name: 'Ceiling & Metal Framing',
        description:
          'T-Grid ceiling systems, metal studs, and track framing. Complete suspended ceiling and partition wall solutions.',
        image: 'https://celson.ltd/assets/product-ceiling.jpg',
        category: 'Ceiling Systems',
      },
      '/calcium-silicate.html': {
        name: 'Calcium Silicate Boards',
        description:
          'Fire-rated and moisture-proof calcium silicate boards. High-performance building boards for demanding applications.',
        image: 'https://celson.ltd/assets/product-calcium.jpg',
        category: 'Calcium Silicate',
      },
      '/outdoor-decking.html': {
        name: 'Outdoor & Decking',
        description:
          'WPC decking, composite lumber, and exterior cladding. Durable, weather-resistant outdoor building materials.',
        image: 'https://celson.ltd/assets/product-outdoor.jpg',
        category: 'Outdoor Decking',
      },
      '/tiles.html': {
        name: 'Tiles',
        description:
          'Porcelain tiles, ceramic tiles, and mosaic tiles. Wide range of sizes, finishes, and styles for floors and walls.',
        image: 'https://celson.ltd/assets/product-tiles.jpg',
        category: 'Tiles',
      },
      '/roofing-materials.html': {
        name: 'Roofing Materials',
        description:
          'Metal roofing sheets, asphalt shingles, and PVC roofing membranes. Complete roofing solutions for residential and commercial buildings.',
        image: 'https://celson.ltd/assets/product-roofing.jpg',
        category: 'Roofing Materials',
      },
      '/accessories.html': {
        name: 'Accessories',
        description:
          'Drywall screws, metal profiles, joint tape, corner beads, and installation accessories. One-stop sourcing for all construction supplies.',
        image: 'https://celson.ltd/assets/product-accessories.jpg',
        category: 'Accessories',
      },
      '/insulation-materials.html': {
        name: 'Insulation Materials',
        description:
          'Rock wool, XPS boards, EPS boards, and glass wool. Thermal and acoustic insulation for energy-efficient buildings.',
        image: 'https://celson.ltd/assets/product-insulation.jpg',
        category: 'Insulation Materials',
      },
    };

    var config = productConfig[path];
    if (!config) return;

    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Product',
      '@id': 'https://celson.ltd' + path + '#product',
      name: config.name,
      description: config.description,
      image: config.image,
      category: config.category,
      brand: { '@type': 'Brand', name: 'CELSON' },
      manufacturer: { '@id': 'https://celson.ltd/#organization' },
      offers: {
        '@type': 'AggregateOffer',
        url: 'https://celson.ltd' + path,
        priceCurrency: 'USD',
        offerCount: '0',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
    });
    document.head.appendChild(ld);
  })();

})();
