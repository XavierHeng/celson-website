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
        image: 'https://celson.ltd/assets/product-hero-gypsum-boards.webp',
        category: 'Gypsum Boards',
      },
      '/sheet-boards.html': {
        name: 'Sheet Boards',
        description:
          'Plywood, MDF, OSB, and Particle boards for construction and furniture applications. Premium quality, factory-direct.',
        image: 'https://celson.ltd/assets/product-hero-sheet-boards.webp',
        category: 'Sheet Boards',
      },
      '/wall-panels.html': {
        name: 'Wall Panels',
        description:
          'Decorative wall panels, WPC panels, and UV marble panels. Modern wall covering solutions for interior and exterior use.',
        image: 'https://celson.ltd/assets/product-hero-wall-panels.webp',
        category: 'Wall Panels',
      },
      '/ceiling-framing.html': {
        name: 'Ceiling & Metal Framing',
        description:
          'T-Grid ceiling systems, metal studs, and track framing. Complete suspended ceiling and partition wall solutions.',
        image: 'https://celson.ltd/assets/product-hero-ceiling-framing.webp',
        category: 'Ceiling Systems',
      },
      '/calcium-silicate.html': {
        name: 'Calcium Silicate Boards',
        description:
          'Fire-rated and moisture-proof calcium silicate boards. High-performance building boards for demanding applications.',
        image: 'https://celson.ltd/assets/product-hero-calcium-silicate.webp',
        category: 'Calcium Silicate',
      },
      '/outdoor-decking.html': {
        name: 'Outdoor & Decking',
        description:
          'WPC decking, composite lumber, and exterior cladding. Durable, weather-resistant outdoor building materials.',
        image: 'https://celson.ltd/assets/product-hero-outdoor-decking.webp',
        category: 'Outdoor Decking',
      },
      '/tiles.html': {
        name: 'Tiles',
        description:
          'Porcelain tiles, ceramic tiles, and mosaic tiles. Wide range of sizes, finishes, and styles for floors and walls.',
        image: 'https://celson.ltd/assets/product-hero-tiles.webp',
        category: 'Tiles',
      },
      '/roofing-materials.html': {
        name: 'Roofing Materials',
        description:
          'Metal roofing sheets, asphalt shingles, and PVC roofing membranes. Complete roofing solutions for residential and commercial buildings.',
        image: 'https://celson.ltd/assets/product-hero-roofing.webp',
        category: 'Roofing Materials',
      },
      '/accessories.html': {
        name: 'Accessories',
        description:
          'Drywall screws, metal profiles, joint tape, corner beads, and installation accessories. One-stop sourcing for all construction supplies.',
        image: 'https://celson.ltd/assets/product-hero-accessories.webp',
        category: 'Accessories',
      },
      '/insulation-materials.html': {
        name: 'Insulation Materials',
        description:
          'Rock wool, XPS boards, EPS boards, and glass wool. Thermal and acoustic insulation for energy-efficient buildings.',
        image: 'https://celson.ltd/assets/product-hero-insulation.webp',
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
        offerCount: '1',
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
      },
    });
    document.head.appendChild(ld);
  })();

  // ========== FAQPage (on pages with FAQ content) ==========
  (function injectFAQ() {
    var path = window.location.pathname;
    var faqConfig = {
      '/products.html': {
        questions: [
          {
            q: 'What is the minimum order quantity (MOQ) for CELSON building materials?',
            a: 'MOQ varies by product type. Gypsum boards typically start at one 20ft container, while accessories can ship in smaller quantities. Contact our sales team for product-specific MOQs.'
          },
          {
            q: 'Do you offer free samples?',
            a: 'We provide free A4-sized samples shipped via courier. For larger sample pieces, freight cost will apply. Samples are typically dispatched within 3-5 business days.'
          },
          {
            q: 'What certificates do CELSON products have?',
            a: 'Our products meet international standards including ASTM, EN, and GB. We hold ISO 9001 quality management certification. Product-specific certifications are available upon request.'
          },
          {
            q: 'How long does shipping take?',
            a: 'Shipping time depends on destination and order volume. Typical sea freight takes 15-45 days depending on the port. Air freight is available for urgent orders. We ship to 98 countries worldwide.'
          }
        ]
      },
      '/contact.html': {
        questions: [
          {
            q: 'How can I get a quote for building materials?',
            a: 'Fill out the contact form on this page with your product requirements and quantity, or reach us directly via WhatsApp at +86 13825578911. We respond within 24 hours.'
          },
          {
            q: 'Which countries do you ship to?',
            a: 'CELSON ships to 98 countries across Asia, Africa, the Middle East, Europe, and the Americas. Contact us with your destination port for a shipping quote.'
          },
          {
            q: 'What payment methods do you accept?',
            a: 'We accept T/T (bank transfer) and L/C (letter of credit). Payment terms are flexible and negotiable based on order volume and customer relationship.'
          },
          {
            q: 'Can I visit your factory?',
            a: 'Yes, we welcome factory visits. Our manufacturing facilities are located in China. Contact us to schedule a visit and we will arrange transportation and accommodation assistance.'
          }
        ]
      }
    };

    var config = faqConfig[path];
    if (!config) return;

    var mainEntity = config.questions.map(function (item) {
      return {
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a
        }
      };
    });

    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: mainEntity
    });
    document.head.appendChild(ld);
  })();

  // ========== LocalBusiness (contact page) ==========
  (function injectLocalBusiness() {
    if (window.location.pathname !== '/contact.html' && window.location.pathname !== '/contact') return;

    var ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://celson.ltd/#localbusiness',
      name: 'CELSON Building Materials',
      alternateName: 'Jianxin Building Materials Co.',
      url: 'https://celson.ltd',
      telephone: '+86-13825578911',
      email: 'Betty.Mat@foxmail.com',
      description: 'Global building materials supplier — factory-direct gypsum boards, sheet boards, wall panels, ceiling systems, tiles, roofing, and insulation.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CN'
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00'
      },
      areaServed: {
        '@type': 'Continent',
        name: 'Asia, Africa, Middle East, Europe, Americas'
      },
      priceRange: '$$'
    });
    document.head.appendChild(ld);
  })();

})();
