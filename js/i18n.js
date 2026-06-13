/**
 * CELSON i18n — English / French Language Pack
 * English = primary, French = secondary overlay
 * Technical specs & product codes stay in English (industry standard)
 */
const I18N = {
  // Current language: 'en' | 'fr'
  lang: (function(){ try { return localStorage.getItem('celson_lang') || 'en'; } catch(e) { return 'en'; } })(),

  // All translations: key → { en, fr }
  dict: {

    /* ─── Global Nav ─── */
    'nav.home':                    { en:'Home',                    fr:'Accueil' },
    'nav.products':                { en:'Products',                fr:'Produits' },
    'nav.about':                   { en:'About',                   fr:'À propos' },
    'nav.projects':                { en:'Projects',                fr:'Projets' },
    'nav.shop':                    { en:'Shop',                    fr:'Boutique' },
    'nav.contact':                 { en:'Contact',                 fr:'Contact' },
    'nav.get-quote':               { en:'Get Quote',               fr:'Demander un devis' },
    'mega.view-all':               { en:'View All Products',       fr:'Voir tous les produits' },

    /* ─── Mega Menu — Product Names ─── */
    'mega.gypsum.label':           { en:'Gypsum Boards',           fr:'Plaques de plâtre' },
    'mega.gypsum.desc':            { en:'Standard, MR, Fire-Rated',fr:'Standard, Hydrofuge, Coupe-feu' },
    'mega.sheet.label':            { en:'Sheet Boards',            fr:'Panneaux bois' },
    'mega.sheet.desc':             { en:'Plywood, MDF, OSB, Particle', fr:'Contreplaqué, MDF, OSB, Aggloméré' },
    'mega.wall.label':             { en:'Wall Panels',             fr:'Panneaux muraux' },
    'mega.wall.desc':              { en:'Decorative, WPC, UV Marble', fr:'Décoratifs, WPC, Marbre UV' },
    'mega.ceiling.label':          { en:'Ceiling & Framing',       fr:'Plafonds & Ossatures' },
    'mega.ceiling.desc':           { en:'T-Grid, Stud, Track Systems', fr:'Systèmes T, Montants, Rails' },
    'mega.calcium.label':          { en:'Calcium Silicate',        fr:'Silicate de calcium' },
    'mega.calcium.desc':           { en:'Fire-Rated, Moisture-Proof', fr:'Coupe-feu, Résistant à l\'humidité' },
    'mega.outdoor.label':          { en:'Outdoor & Decking',       fr:'Extérieur & Terrasses' },
    'mega.outdoor.desc':           { en:'WPC, Composite, Cladding', fr:'WPC, Composite, Bardage' },
    'mega.tiles.label':            { en:'Tiles',                   fr:'Carrelage' },
    'mega.tiles.desc':             { en:'Porcelain, Ceramic, Mosaic', fr:'Grès cérame, Céramique, Mosaïque' },
    'mega.roofing.label':          { en:'Roofing Materials',       fr:'Matériaux de toiture' },
    'mega.roofing.desc':           { en:'Metal, Asphalt, PVC Sheets', fr:'Métal, Asphalte, Plaques PVC' },
    'mega.accessories.label':      { en:'Accessories',             fr:'Accessoires' },
    'mega.accessories.desc':       { en:'Screws, Profiles, Joint Tape', fr:'Vis, Profilés, Bande à joints' },
    'mega.insulation.label':       { en:'Insulation',              fr:'Isolation' },
    'mega.insulation.desc':        { en:'Rock Wool, XPS, EPS Boards', fr:'Laine de roche, XPS, Panneaux EPS' },

    /* ─── Homepage — Hero ─── */
    'home.hero.badge':             { en:'Jianxin Building Materials Co.', fr:'Jianxin Building Materials Co.' },
    'home.hero.title':             { en:'Your <span class="nowrap">Cost-Value</span> Advantage in Gypsum, Boards &amp; Panels', fr:'Votre avantage qualité-prix en plaques de plâtre, panneaux et revêtements' },
    'home.hero.subtitle':          { en:'Gypsum boards, sheet boards, wall panels — factory-direct pricing, full-range construction supplies, one-stop sourcing.', fr:'Plaques de plâtre, panneaux, revêtements muraux — prix départ usine, gamme complète, guichet unique.' },
    'home.hero.cta1':              { en:'View Our Products',       fr:'Voir nos produits' },
    'home.hero.shop':              { en:'Shop Now',                fr:'Acheter maintenant' },
    'home.hero.cta2':              { en:'Contact Us',              fr:'Contactez-nous' },

    /* ─── Homepage — Why CELSON ─── */
    'home.why.title':              { en:'Why CELSON = More for Less', fr:'Pourquoi CELSON = Plus pour moins' },
    'home.why.subtitle':           { en:'Factory-direct sourcing means you get premium materials at prices your competitors can\'t match', fr:'L\'approvisionnement direct usine vous offre des matériaux haut de gamme à des prix imbattables' },
    'home.why.1.title':            { en:'Factory-Direct Pricing',  fr:'Prix départ usine' },
    'home.why.1.desc':             { en:'No middlemen. No markups. We own our supply chain from factory floor to shipping container — savings we pass directly to you.', fr:'Sans intermédiaire. Sans majoration. Nous maîtrisons notre chaîne d\'approvisionnement de l\'usine au conteneur — des économies que nous vous transmettons directement.' },
    'home.why.2.title':            { en:'20+ Years of Expertise',  fr:'Plus de 20 ans d\'expertise' },
    'home.why.2.desc':             { en:'Founded by Jianxin Building Materials, we\'ve spent two decades perfecting gypsum and board manufacturing. Our product knowledge is your competitive edge.', fr:'Fondée par Jianxin Building Materials, nous avons passé deux décennies à perfectionner la fabrication de plaques et panneaux. Notre savoir-faire est votre avantage concurrentiel.' },
    'home.why.3.title':            { en:'One-Stop Sourcing',       fr:'Guichet unique' },
    'home.why.3.desc':             { en:'Gypsum, boards, panels, ceilings, outdoor, accessories — fill a container with everything you need from a single supplier. Simplify your supply chain.', fr:'Plaques, panneaux, plafonds, extérieur, accessoires — remplissez un conteneur avec tout ce dont vous avez besoin auprès d\'un seul fournisseur. Simplifiez votre chaîne d\'approvisionnement.' },
    'home.why.4.title':            { en:'Global Delivery, Local Support', fr:'Livraison mondiale, support local' },
    'home.why.4.desc':             { en:'98 countries and counting. Reliable logistics, on-time delivery, and responsive after-sales support in your time zone.', fr:'98 pays et plus. Logistique fiable, livraison à temps et support après-vente réactif dans votre fuseau horaire.' },

    /* ─── Homepage — Stats ─── */
    'home.stats.title':            { en:'Trusted Worldwide',       fr:'Reconnu dans le monde entier' },
    'home.stats.subtitle':         { en:'Numbers that speak for themselves', fr:'Des chiffres qui parlent d\'eux-mêmes' },
    'home.stats.1.label':          { en:'Countries Worldwide',     fr:'Pays desservis' },
    'home.stats.2.label':          { en:'Projects Completed',      fr:'Projets réalisés' },
    'home.stats.3.label':          { en:'Global Partners',         fr:'Partenaires mondiaux' },
    'home.stats.4.label':          { en:'Years of Experience',     fr:'Années d\'expérience' },

    /* ─── Homepage — Final CTA ─── */
    'home.cta.title':              { en:'Ready to Source Smarter?', fr:'Prêt à vous approvisionner plus intelligemment ?' },
    'home.cta.subtitle':           { en:'Get a quote today and discover why builders in 98 countries choose CELSON.', fr:'Demandez un devis aujourd\'hui et découvrez pourquoi les constructeurs de 98 pays choisissent CELSON.' },
    'home.cta.button':             { en:'Request a Quote',         fr:'Demander un devis' },

    /* ─── Footer — Compact ─── */
    'footer.copyright':            { en:'© 2026 CELSON. A brand of Jianxin Building Materials Co. All rights reserved.', fr:'© 2026 CELSON. Une marque de Jianxin Building Materials Co. Tous droits réservés.' },
    'footer.lang.links':           { en:'English · Français · Español', fr:'English · Français · Español' },

    /* ─── Footer — Full ─── */
    'footer.full.brand.desc':      { en:'Your global partner in premium building materials. Backed by Jianxin Building Materials Co.', fr:'Votre partenaire mondial en matériaux de construction haut de gamme. Soutenu par Jianxin Building Materials Co.' },
    'footer.full.col1':            { en:'Products',                fr:'Produits' },
    'footer.full.col2':            { en:'Company',                 fr:'Entreprise' },
    'footer.full.col3':            { en:'Contact',                 fr:'Contact' },
    'footer.full.about':           { en:'About Us',                fr:'À propos' },
    'footer.full.quality':         { en:'Quality Standards',       fr:'Normes de qualité' },
    'footer.full.global':          { en:'Global Projects',         fr:'Projets mondiaux' },
    'footer.full.quote':           { en:'Request a Quote',         fr:'Demander un devis' },
    'footer.full.distributor':     { en:'Become a Distributor',    fr:'Devenir distributeur' },

    /* ─── Download ─── */
    'download.title':              { en:'Download Product Catalog', fr:'Télécharger le catalogue' },
    'download.sub':                { en:'Get detailed specs, full product range, and volume pricing in our PDF catalog.', fr:'Obtenez les spécifications détaillées, la gamme complète et les prix de volume dans notre catalogue PDF.' },
    'download.button':             { en:'Download Catalog (PDF)',   fr:'Télécharger le catalogue (PDF)' },

    /* ─── Container Loading Photos ─── */
    'shipping.label':              { en:'Real Shipping Photos',  fr:'Photos d\'expédition réelles' },
    'shipping.title':              { en:'Container Loading — We Deliver What You Order', fr:'Chargement de conteneur — Nous livrons ce que vous commandez' },
    'shipping.sub':                { en:'Every shipment photographed at our warehouse. Real containers loaded with gypsum boards, tiles, and building materials — exactly what arrives at your port.', fr:'Chaque expédition est photographiée dans notre entrepôt. De vrais conteneurs chargés de plaques de plâtre, carrelages et matériaux de construction — exactement ce qui arrive à votre port.' },
    'shipping.trust1':             { en:'Real container photos — not stock images', fr:'Photos réelles de conteneurs — pas d\'images de stock' },
    'shipping.trust2':             { en:'Quality checked before loading', fr:'Qualité vérifiée avant chargement' },
    'shipping.trust3':             { en:'On-time delivery to 98 countries', fr:'Livraison ponctuelle dans 98 pays' },
    'shipping.gate.title':         { en:'Want to see all 50 real container loading photos?', fr:'Vous voulez voir les 50 vraies photos de chargement de conteneurs ?' },
    'shipping.gate.sub':           { en:'Chat with us on WhatsApp — unlock the full gallery and get instant answers.', fr:'Discutez avec nous sur WhatsApp — débloquez la galerie complète et obtenez des réponses instantanées.' },
    'shipping.gate.btn':           { en:'Unlock Full Gallery on WhatsApp', fr:'Débloquer la galerie sur WhatsApp' },

    /* ─── Products Page ─── */
    'products.page.title':         { en:'Our Products',            fr:'Nos produits' },
    'products.page.subtitle':      { en:'Full-range building materials — factory-direct quality, one-stop supply', fr:'Gamme complète de matériaux de construction — qualité départ usine, guichet unique' },
    'products.categories':         { en:'Product Categories',      fr:'Catégories de produits' },
    'products.explore':            { en:'Explore',                 fr:'Explorer' },
    'products.shop':               { en:'View Stock →',            fr:'Voir le stock →' },

    /* ─── About Page ─── */
    'about.hero.title':            { en:'About CELSON',            fr:'À propos de CELSON' },
    'about.hero.subtitle':         { en:'Two decades of manufacturing. CELSON is the global brand of Jianxin Building Materials Co. — trusted across 98 countries.', fr:'Deux décennies de fabrication. CELSON est la marque mondiale de Jianxin Building Materials Co. — reconnue dans 98 pays.' },
    'about.story.title':           { en:'From Factory Floor to Global Markets', fr:'De l\'usine aux marchés mondiaux' },
    'about.story.p1':              { en:'Jianxin Building Materials was founded over 20 years ago with a simple mission: produce the best gypsum boards and sheet boards at prices that work for builders everywhere.', fr:'Jianxin Building Materials a été fondée il y a plus de 20 ans avec une mission simple : produire les meilleures plaques de plâtre et panneaux à des prix accessibles aux constructeurs du monde entier.' },
    'about.story.p2':              { en:'From regional factory to global supply chain. CELSON stands for quality, efficiency, and best-value supply in every market we enter.', fr:'D\'une usine régionale à une chaîne d\'approvisionnement mondiale. CELSON incarne la qualité, l\'efficacité et le meilleur rapport qualité-prix sur chaque marché.' },
    'about.story.p3':              { en:'We help our clients build better, faster, and more profitably.', fr:'Nous aidons nos clients à construire mieux, plus vite et de manière plus rentable.' },
    'about.manufacturing.title':   { en:'Our Manufacturing Power',  fr:'Notre capacité de production' },
    'about.manufacturing.subtitle':{ en:'Production facilities built for quality and scale', fr:'Des installations de production conçues pour la qualité et le volume' },
    'about.manufacturing.1.label': { en:'Production Facility',      fr:'Installation de production' },
    'about.manufacturing.2.label': { en:'Production Lines',         fr:'Lignes de production' },
    'about.manufacturing.3.label': { en:'Skilled Workers',          fr:'Ouvriers qualifiés' },
    'about.manufacturing.4.label': { en:'Certified Quality',       fr:'Qualité certifiée' },
    'about.values.title':          { en:'What We Stand For',        fr:'Nos valeurs' },
    'about.values.1.title':        { en:'Quality',                 fr:'Qualité' },
    'about.values.2.title':        { en:'Fair Pricing',            fr:'Prix justes' },
    'about.values.3.title':        { en:'Reliability',             fr:'Fiabilité' },
    'about.values.4.title':        { en:'Partnership',             fr:'Partenariat' },

    /* ─── Projects Page ─── */
    'projects.hero.title':         { en:'Global Projects',         fr:'Projets mondiaux' },
    'projects.hero.subtitle':      { en:'Trusted by builders and developers across 98 countries', fr:'Reconnu par les constructeurs et promoteurs dans 98 pays' },
    'projects.all':                { en:'All Projects',            fr:'Tous les projets' },
    'projects.filter.commercial':  { en:'Commercial',              fr:'Commercial' },
    'projects.filter.residential': { en:'Residential',             fr:'Résidentiel' },
    'projects.filter.industrial':  { en:'Industrial',              fr:'Industriel' },
    'projects.filter.infrastructure': { en:'Infrastructure',       fr:'Infrastructure' },
    'projects.view':               { en:'View Project',            fr:'Voir le projet' },

    /* ─── Contact Page ─── */
    'contact.hero.title':          { en:'Contact Us',              fr:'Contactez-nous' },
    'contact.hero.subtitle':       { en:'Get in touch for pricing, samples, or technical support', fr:'Contactez-nous pour les prix, les échantillons ou le support technique' },
    'contact.info.title':          { en:'Contact Information',     fr:'Coordonnées' },
    'contact.info.email':          { en:'Email',                   fr:'E-mail' },
    'contact.info.phone':          { en:'Phone',                   fr:'Téléphone' },
    'contact.info.address':        { en:'Address',                 fr:'Adresse' },
    'contact.form.title':          { en:'Send Us a Message',       fr:'Envoyez-nous un message' },
    'contact.form.name':           { en:'Your Name *',             fr:'Votre nom *' },
    'contact.form.email':          { en:'Your Email *',            fr:'Votre e-mail *' },
    'contact.form.company':        { en:'Company Name',            fr:'Nom de l\'entreprise' },
    'contact.form.product':        { en:'Product of Interest',     fr:'Produit concerné' },
    'contact.form.message':        { en:'Your Message *',          fr:'Votre message *' },
    'contact.form.submit':         { en:'Send Message',            fr:'Envoyer le message' },

    /* ─── Shop Page ─── */
    'shop.hero.title':             { en:'Spot Stock',              fr:'Stock disponible' },
    'shop.hero.subtitle':          { en:'Ready-to-ship inventory at EXW prices. Select quantity and send inquiry.', fr:'Stock prêt à expédier aux prix EXW. Sélectionnez la quantité et envoyez votre demande.' },
    'shop.filter.all':             { en:'All',                     fr:'Tout' },
    'shop.filter.gypsum':          { en:'Gypsum Boards',           fr:'Plaques de plâtre' },
    'shop.filter.sheet':           { en:'Sheet Boards',            fr:'Panneaux bois' },
    'shop.filter.wall':            { en:'Wall Panels',             fr:'Panneaux muraux' },
    'shop.filter.ceiling':         { en:'Ceiling & Framing',       fr:'Plafonds & Ossatures' },
    'shop.exw.price':              { en:'EXW Price',               fr:'Prix EXW' },
    'shop.origin':                 { en:'Origin',                  fr:'Origine' },
    'shop.qty':                    { en:'Quantity',                fr:'Quantité' },
    'shop.inquiry':                { en:'Send Inquiry',            fr:'Envoyer la demande' },
    'shop.inquiry.title':          { en:'Your Inquiry',            fr:'Votre demande' },
    'shop.inquiry.total':          { en:'Estimated Total',         fr:'Total estimé' },
    'shop.inquiry.submit':         { en:'Submit Inquiry',          fr:'Soumettre la demande' },

    /* ─── Product Detail — Subpage Nav ─── */
    'detail.nav.specs':            { en:'Specifications',          fr:'Spécifications' },
    'detail.nav.types':            { en:'Product Types',           fr:'Types de produits' },
    'detail.nav.applications':     { en:'Applications',            fr:'Applications' },
    'detail.nav.cta':              { en:'Get Quote',               fr:'Demander un devis' },

    /* ─── Product Detail — Hero ─── */
    'detail.hero.view-stock':      { en:'View Spot Stock →',       fr:'Voir le stock →' },
    'detail.hero.get-quote':       { en:'Get a Quote',             fr:'Demander un devis' },
    'detail.hero.view-samples':    { en:'Request Samples',         fr:'Demander des échantillons' },

    /* ─── Product Detail — Specs ─── */
    'detail.specs.title':          { en:'Product Specifications',  fr:'Spécifications du produit' },
    'detail.specs.desc':           { en:'Standard specifications — custom sizes available upon request', fr:'Spécifications standard — dimensions personnalisées disponibles sur demande' },

    /* ─── Product Detail — Types ─── */
    'detail.types.title':          { en:'Product Types',           fr:'Types de produits' },
    'detail.types.desc':           { en:'Choose the right grade for your project', fr:'Choisissez la classe adaptée à votre projet' },

    /* ─── Product Detail — Applications ─── */
    'detail.apps.title':           { en:'Applications',            fr:'Applications' },
    'detail.apps.desc':            { en:'Where our products are used', fr:'Où nos produits sont utilisés' },

    /* ─── Product Detail — CTA ─── */
    'detail.cta.title':            { en:'Ready to Source Smarter?', fr:'Prêt à vous approvisionner plus intelligemment ?' },
    'detail.cta.subtitle':         { en:'Get a quote today and discover why builders in 98 countries choose CELSON.', fr:'Demandez un devis aujourd\'hui et découvrez pourquoi les constructeurs de 98 pays choisissent CELSON.' },
    'detail.cta.button1':          { en:'Request a Quote',         fr:'Demander un devis' },
    'detail.cta.button2':          { en:'Contact Sales',           fr:'Contacter le service commercial' },

    /* ─── Product Detail — Explore ─── */
    'detail.explore.title':        { en:'Explore Other Products',  fr:'Explorez d\'autres produits' },
    'detail.explore.subtitle':     { en:'Find the right material for your next project', fr:'Trouvez le matériau idéal pour votre prochain projet' },

    /* ─── Product Detail — Prev/Next ─── */
    'detail.prev':                 { en:'Previous',                fr:'Précédent' },
    'detail.next':                 { en:'Next',                    fr:'Suivant' },

    /* ─── Product Detail — Gypsum Boards ─── */
    'gypsum.hero.badge':           { en:'Gypsum Boards',           fr:'Plaques de plâtre' },
    'gypsum.hero.title':           { en:'Premium Gypsum Boards for Every Project', fr:'Plaques de plâtre haut de gamme pour chaque projet' },
    'gypsum.hero.subtitle':        { en:'Standard, moisture-resistant and fire-rated gypsum boards — factory-direct from Jianxin, delivered to 98 countries.', fr:'Plaques de plâtre standard, résistantes à l\'humidité et coupe-feu — directement de l\'usine Jianxin, livrées dans 98 pays.' },
    'gypsum.specs.title':          { en:'Gypsum Board Specifications', fr:'Spécifications des plaques de plâtre' },
    'gypsum.types.title':          { en:'Gypsum Board Types',      fr:'Types de plaques de plâtre' },
    'gypsum.types.card1.title':    { en:'Standard Gypsum Board',   fr:'Plaque de plâtre standard' },
    'gypsum.types.card1.desc':     { en:'General-purpose board for interior walls and ceilings. Smooth surface, easy to cut and install.', fr:'Plaque polyvalente pour murs intérieurs et plafonds. Surface lisse, facile à couper et à installer.' },
    'gypsum.types.card2.title':    { en:'Moisture-Resistant Board', fr:'Plaque résistante à l\'humidité' },
    'gypsum.types.card2.desc':     { en:'Green-faced board with silicone-treated core — ideal for bathrooms, kitchens, and damp areas.', fr:'Plaque à face verte avec noyau traité au silicone — idéale pour salles de bains, cuisines et zones humides.' },
    'gypsum.types.card3.title':    { en:'Fire-Rated Board',        fr:'Plaque coupe-feu' },
    'gypsum.types.card3.desc':     { en:'Pink-faced board with glass fiber reinforcement — 30 to 120-minute fire ratings for safety-critical walls.', fr:'Plaque à face rose renforcée de fibres de verre — résistance au feu de 30 à 120 minutes pour les murs de sécurité.' },
    'gypsum.apps.title':           { en:'Where Gypsum Boards Are Used', fr:'Où les plaques de plâtre sont utilisées' },
    'gypsum.apps.1':               { en:'Interior Walls',          fr:'Murs intérieurs' },
    'gypsum.apps.2':               { en:'Suspended Ceilings',      fr:'Plafonds suspendus' },
    'gypsum.apps.3':               { en:'Partition Systems',       fr:'Cloisons' },
    'gypsum.apps.4':               { en:'Commercial Buildings',    fr:'Bâtiments commerciaux' },
    'gypsum.apps.5':               { en:'Residential Housing',     fr:'Logements résidentiels' },
    'gypsum.apps.6':               { en:'Hotel & Hospitality',     fr:'Hôtellerie' },

    /* ─── Product Detail — Sheet Boards ─── */
    'sheet.hero.badge':            { en:'Sheet Boards',            fr:'Panneaux bois' },
    'sheet.hero.title':            { en:'Premium Sheet Boards — Plywood, MDF, OSB & More', fr:'Panneaux haut de gamme — Contreplaqué, MDF, OSB et plus' },
    'sheet.hero.subtitle':         { en:'Full range of engineered wood panels — factory-direct quality for construction and furniture.', fr:'Gamme complète de panneaux en bois reconstitué — qualité départ usine pour la construction et l\'ameublement.' },
    'sheet.specs.title':           { en:'Sheet Board Specifications', fr:'Spécifications des panneaux' },
    'sheet.types.title':           { en:'Sheet Board Types',       fr:'Types de panneaux' },
    'sheet.types.card1.title':     { en:'Plywood',                 fr:'Contreplaqué' },
    'sheet.types.card1.desc':      { en:'Multi-layer cross-grained veneer — high strength-to-weight ratio, excellent for structural applications.', fr:'Plis de bois croisés multicouches — excellent rapport résistance/poids, idéal pour applications structurelles.' },
    'sheet.types.card2.title':     { en:'MDF Board',               fr:'Panneau MDF' },
    'sheet.types.card2.desc':      { en:'Medium-density fiberboard with smooth, uniform surface — perfect for furniture, cabinets, and interior trim.', fr:'Panneau de fibres à densité moyenne avec surface lisse et uniforme — parfait pour meubles, armoires et finitions intérieures.' },
    'sheet.types.card3.title':     { en:'OSB Board',               fr:'Panneau OSB' },
    'sheet.types.card3.desc':      { en:'Oriented strand board with excellent load-bearing capacity — widely used in roofing, flooring, and wall sheathing.', fr:'Panneau à copeaux orientés avec excellente capacité portante — couramment utilisé en toiture, plancher et revêtement mural.' },
    'sheet.apps.title':            { en:'Sheet Board Applications', fr:'Applications des panneaux' },

    /* ─── Product Detail — Wall Panels ─── */
    'wall.hero.badge':             { en:'Wall Panels',             fr:'Panneaux muraux' },
    'wall.hero.title':             { en:'Decorative Wall Panels for Modern Interiors', fr:'Panneaux muraux décoratifs pour intérieurs modernes' },
    'wall.hero.subtitle':          { en:'WPC, UV marble, and 3D decorative panels — transform any space with style and durability.', fr:'Panneaux WPC, marbre UV et décoratifs 3D — transformez tout espace avec style et durabilité.' },
    'wall.specs.title':            { en:'Wall Panel Specifications', fr:'Spécifications des panneaux muraux' },
    'wall.types.title':            { en:'Wall Panel Types',        fr:'Types de panneaux muraux' },

    /* ─── Product Detail — Ceiling & Framing ─── */
    'ceiling.hero.badge':          { en:'Ceiling & Metal Framing', fr:'Plafonds & Ossatures métalliques' },
    'ceiling.hero.title':          { en:'Ceiling Systems & Metal Framing Solutions', fr:'Systèmes de plafond & Ossatures métalliques' },
    'ceiling.hero.subtitle':       { en:'T-grid, stud and track systems — complete ceiling and drywall framing from one source.', fr:'Systèmes T, montants et rails — ossature complète pour plafonds et cloisons sèches depuis une source unique.' },
    'ceiling.specs.title':         { en:'Ceiling & Framing Specifications', fr:'Spécifications plafonds & ossatures' },
    'ceiling.types.title':         { en:'Ceiling & Framing Types', fr:'Types de plafonds & ossatures' },

    /* ─── Product Detail — Calcium Silicate ─── */
    'calcium.hero.badge':          { en:'Calcium Silicate Board',  fr:'Panneau en silicate de calcium' },
    'calcium.hero.title':          { en:'Calcium Silicate Boards — Fire-Rated & Moisture-Proof', fr:'Panneaux en silicate de calcium — Coupe-feu & Résistant à l\'humidité' },
    'calcium.hero.subtitle':       { en:'High-performance boards for fire-rated walls, wet areas, and exterior sheathing.', fr:'Panneaux haute performance pour murs coupe-feu, zones humides et revêtement extérieur.' },
    'calcium.specs.title':         { en:'Calcium Silicate Specifications', fr:'Spécifications du silicate de calcium' },
    'calcium.types.title':         { en:'Calcium Silicate Types',  fr:'Types de silicate de calcium' },

    /* ─── Product Detail — Outdoor & Decking ─── */
    'outdoor.hero.badge':          { en:'Outdoor & Decking',       fr:'Extérieur & Terrasses' },
    'outdoor.hero.title':          { en:'Outdoor Decking & Cladding Solutions', fr:'Terrasses & Bardages extérieurs' },
    'outdoor.hero.subtitle':       { en:'WPC decking, composite cladding, and exterior panels — weather-resistant and low maintenance.', fr:'Terrasses WPC, bardage composite et panneaux extérieurs — résistants aux intempéries et à faible entretien.' },
    'outdoor.specs.title':         { en:'Outdoor & Decking Specifications', fr:'Spécifications terrasses & extérieur' },
    'outdoor.types.title':         { en:'Outdoor & Decking Types', fr:'Types de terrasses & extérieur' },

    /* ─── Product Detail — Tiles ─── */
    'tiles.hero.badge':            { en:'Tiles',                   fr:'Carrelage' },
    'tiles.hero.title':            { en:'Porcelain & Ceramic Tiles for Every Surface', fr:'Carrelage en grès cérame & céramique pour toutes les surfaces' },
    'tiles.hero.subtitle':         { en:'Floor tiles, wall tiles, and mosaics — durable, stylish, and factory-direct priced.', fr:'Carrelage sol, mural et mosaïque — durable, élégant et au prix départ usine.' },
    'tiles.specs.title':           { en:'Tile Specifications',     fr:'Spécifications du carrelage' },
    'tiles.types.title':           { en:'Tile Types',              fr:'Types de carrelage' },

    /* ─── Product Detail — Roofing Materials ─── */
    'roofing.hero.badge':          { en:'Roofing Materials',       fr:'Matériaux de toiture' },
    'roofing.hero.title':          { en:'Roofing Materials — Metal, Asphalt & PVC Sheets', fr:'Matériaux de toiture — Métal, Asphalte & Plaques PVC' },
    'roofing.hero.subtitle':       { en:'Durable roofing solutions for residential, commercial, and industrial buildings.', fr:'Solutions de toiture durables pour bâtiments résidentiels, commerciaux et industriels.' },
    'roofing.specs.title':         { en:'Roofing Specifications',  fr:'Spécifications de toiture' },
    'roofing.types.title':         { en:'Roofing Types',           fr:'Types de toiture' },

    /* ─── Product Detail — Accessories ─── */
    'acc.hero.badge':              { en:'Accessories',             fr:'Accessoires' },
    'acc.hero.title':              { en:'Construction Accessories & Consumables', fr:'Accessoires & Consommables de construction' },
    'acc.hero.subtitle':           { en:'Screws, joint tape, metal profiles — everything you need to complete the job.', fr:'Vis, bande à joints, profilés métalliques — tout ce dont vous avez besoin pour terminer le travail.' },
    'acc.specs.title':             { en:'Accessory Specifications', fr:'Spécifications des accessoires' },
    'acc.types.title':             { en:'Accessory Types',         fr:'Types d\'accessoires' },

    /* ─── Product Detail — Insulation ─── */
    'ins.hero.badge':              { en:'Insulation Materials',    fr:'Matériaux d\'isolation' },
    'ins.hero.title':              { en:'Thermal & Acoustic Insulation Materials', fr:'Matériaux d\'isolation thermique & acoustique' },
    'ins.hero.subtitle':           { en:'Rock wool, XPS, and EPS insulation boards — energy-efficient solutions for every building.', fr:'Laine de roche, XPS et panneaux isolants EPS — solutions écoénergétiques pour chaque bâtiment.' },
    'ins.specs.title':             { en:'Insulation Specifications', fr:'Spécifications d\'isolation' },
    'ins.types.title':             { en:'Insulation Types',        fr:'Types d\'isolation' },

    /* ─── Language Toggle ─── */
    'lang.en':                     { en:'EN',                      fr:'EN' },
    'lang.fr':                     { en:'FR',                      fr:'FR' },
    'lang.label.en':               { en:'English',                 fr:'Anglais' },
    'lang.label.fr':               { en:'Français',                fr:'Français' },

    /* ─── Application Labels ─── */
    'app.interior.walls':          { en:'Interior Walls',          fr:'Murs intérieurs' },
    'app.suspended.ceilings':      { en:'Suspended Ceilings',      fr:'Plafonds suspendus' },
    'app.partitions':              { en:'Partition Systems',       fr:'Cloisons' },
    'app.commercial':              { en:'Commercial Buildings',    fr:'Bâtiments commerciaux' },
    'app.residential':             { en:'Residential Housing',     fr:'Bâtiments résidentiels' },
    'app.hotel':                   { en:'Hotel & Hospitality',     fr:'Hôtellerie' },
    'app.furniture':               { en:'Furniture Manufacturing', fr:'Fabrication de meubles' },
    'app.flooring':                { en:'Flooring Underlayment',   fr:'Sous-couche de plancher' },
    'app.roofing':                 { en:'Roof Sheathing',          fr:'Support de toiture' },
    'app.wall.sheathing':          { en:'Wall Sheathing',          fr:'Revêtement mural' },
    'app.exterior':                { en:'Exterior Cladding',       fr:'Bardage extérieur' },
    'app.bathroom':                { en:'Bathrooms & Wet Areas',   fr:'Salles de bains & zones humides' },
    'app.kitchen':                 { en:'Kitchens',                fr:'Cuisines' },
    'app.facade':                  { en:'Building Facades',        fr:'Façades de bâtiments' },
    'app.terrace':                 { en:'Terraces & Balconies',    fr:'Terrasses & Balcons' },
    'app.warehouse':               { en:'Warehouses',              fr:'Entrepôts' },
    'app.industrial':              { en:'Industrial Facilities',   fr:'Installations industrielles' },
    'app.education':               { en:'Schools & Education',     fr:'Écoles & Éducation' },
    'app.healthcare':              { en:'Hospitals & Healthcare',  fr:'Hôpitaux & Santé' },

    /* ─── Shared Reusable Keys ─── */
    'detail.nav.overview':         { en:'Overview',                fr:'Aperçu' },
    'detail.specs.label':          { en:'Technical Specifications',fr:'Spécifications techniques' },
    'detail.hero.cta1':            { en:'Request Specifications',  fr:'Demander les spécifications' },
    'detail.hero.cta2':            { en:'Download Catalog',        fr:'Télécharger le catalogue' },
    'detail.hero.cta.price':       { en:'Request Price List',      fr:'Demander la liste de prix' },
    'detail.explore.view-details': { en:'View Details',            fr:'Voir les détails' },

    /* ─── Gypsum Boards — CTA ─── */
    'gypsum.cta.title':            { en:'Ready to Build with Better Margins?', fr:'Prêt à construire avec de meilleures marges ?' },
    'gypsum.cta.sub':              { en:'Get factory-direct pricing, spec sheets, and samples within 48 hours.', fr:'Obtenez les prix départ usine, les fiches techniques et des échantillons sous 48 heures.' },
    'gypsum.cta.button1':          { en:'Get Factory Quote',       fr:'Demander un devis usine' },
    'gypsum.cta.card.title':       { en:'Need Custom Specifications?', fr:'Besoin de spécifications sur mesure ?' },
    'gypsum.cta.card.desc':        { en:'Tell us your requirements and we\'ll provide a tailored quote within 24 hours. Factory-direct pricing, no middlemen.', fr:'Dites-nous vos besoins et nous vous fournirons un devis personnalisé sous 24 heures. Prix départ usine, sans intermédiaires.' },
    'gypsum.cta.card.button':      { en:'Send Inquiry',            fr:'Envoyer une demande' },

    /* ─── Sheet Boards — CTA ─── */
    'sheet.cta.title':             { en:'Ready to Source Premium Sheet Boards?', fr:'Prêt à vous approvisionner en panneaux haut de gamme ?' },
    'sheet.cta.sub':               { en:'Get factory-direct pricing, free samples, and technical specifications for your next project.', fr:'Obtenez les prix départ usine, des échantillons gratuits et les spécifications techniques pour votre prochain projet.' },
    'sheet.cta.button1':           { en:'Get Your Quote',          fr:'Obtenir votre devis' },

    /* ─── Wall Panels — CTA ─── */
    'wall.cta.title':              { en:'Ready to Transform Your Interiors?', fr:'Prêt à transformer vos intérieurs ?' },
    'wall.cta.sub':                { en:'Get factory-direct pricing, free samples, and technical specifications for your next project.', fr:'Obtenez les prix départ usine, des échantillons gratuits et les spécifications techniques pour votre prochain projet.' },
    'wall.cta.button1':            { en:'Get Your Quote',          fr:'Obtenir votre devis' },

    /* ─── Ceiling & Framing — CTA ─── */
    'ceiling.cta.title':           { en:'Ready to Build Stronger, for Less?', fr:'Prêt à construire plus solide, pour moins cher ?' },
    'ceiling.cta.sub':             { en:'Get a custom quote for your next project. Bulk pricing available for contractors, developers, and distributors.', fr:'Obtenez un devis personnalisé pour votre prochain projet. Tarifs de gros disponibles pour entrepreneurs, promoteurs et distributeurs.' },
    'ceiling.cta.button1':         { en:'Get Your Quote',          fr:'Obtenir votre devis' },

    /* ─── Calcium Silicate — CTA ─── */
    'calcium.cta.title':           { en:'Need Fire-Rated Board? Let\'s Talk.', fr:'Besoin de panneaux coupe-feu ? Parlons-en.' },
    'calcium.cta.sub':             { en:'Get factory-direct pricing, technical datasheets, and samples. Custom thickness and size available.', fr:'Obtenez les prix départ usine, les fiches techniques et des échantillons. Épaisseurs et dimensions sur mesure disponibles.' },
    'calcium.cta.button2':         { en:'Download Datasheet',      fr:'Télécharger la fiche technique' },

    /* ─── Outdoor & Decking — CTA ─── */
    'outdoor.cta.title':           { en:'Ready to Transform Outdoor Spaces?', fr:'Prêt à transformer vos espaces extérieurs ?' },
    'outdoor.cta.sub':             { en:'Get factory-direct pricing, decking samples, and installation guides within 48 hours.', fr:'Obtenez les prix départ usine, des échantillons de lames et les guides d\'installation sous 48 heures.' },
    'outdoor.cta.button1':         { en:'Get Factory Quote',       fr:'Demander un devis usine' },

    /* ─── Tiles — CTA ─── */
    'tiles.cta.title':             { en:'Ready to Tile Your Next Project?', fr:'Prêt à carreler votre prochain projet ?' },
    'tiles.cta.sub':               { en:'Get factory-direct pricing, tile samples, and technical data sheets within 48 hours.', fr:'Obtenez les prix départ usine, des échantillons de carrelage et les fiches techniques sous 48 heures.' },
    'tiles.cta.button1':           { en:'Get Factory Quote',       fr:'Demander un devis usine' },

    /* ─── Roofing Materials — CTA ─── */
    'roofing.cta.title':           { en:'Cover Every Project with Confidence', fr:'Couvrez chaque projet en toute confiance' },
    'roofing.cta.sub':             { en:'Get factory-direct pricing, roofing samples, and wind-uplift test reports within 48 hours.', fr:'Obtenez les prix départ usine, des échantillons de toiture et les rapports d\'essai de résistance au vent sous 48 heures.' },
    'roofing.cta.button1':         { en:'Get Factory Quote',       fr:'Demander un devis usine' },

    /* ─── Accessories — CTA ─── */
    'acc.cta.title':               { en:'One Order, Everything You Need', fr:'Une commande, tout ce dont vous avez besoin' },
    'acc.cta.sub':                 { en:'Get factory-direct pricing on accessories, screws, tapes, and compounds — shipped together with your board order.', fr:'Obtenez les prix départ usine sur les accessoires, vis, bandes et enduits — expédiés avec votre commande de panneaux.' },
    'acc.cta.button1':             { en:'Get Factory Quote',       fr:'Demander un devis usine' },

    /* ─── Insulation — CTA ─── */
    'ins.cta.title':               { en:'Insulate Smarter, Build Better', fr:'Isolez plus intelligemment, construisez mieux' },
    'ins.cta.sub':                 { en:'Get factory-direct pricing, thermal performance data, and samples within 48 hours.', fr:'Obtenez les prix départ usine, les données de performance thermique et des échantillons sous 48 heures.' },
    'ins.cta.button1':             { en:'Get Factory Quote',       fr:'Demander un devis usine' },

    /* ─── Product Detail — CTA Shared ─── */
    'detail.cta.button.samples':   { en:'Request Samples',         fr:'Demander des échantillons' },

    /* ─── Gypsum Boards — Application Cards ─── */
    'gypsum.app.card1.title':      { en:'Residential Interiors',   fr:'Intérieurs résidentiels' },
    'gypsum.app.card1.desc':       { en:'Interior walls, ceilings, partitions — homes, apartments, villas. Standard & MR boards for every room.', fr:'Murs intérieurs, plafonds, cloisons — maisons, appartements, villas. Plaques standard et hydrofuges pour chaque pièce.' },
    'gypsum.app.card2.title':      { en:'Commercial & Office',     fr:'Commercial & Bureaux' },
    'gypsum.app.card2.desc':       { en:'Offices, retail spaces, hotels — fire-rated and acoustic solutions for commercial building standards.', fr:'Bureaux, commerces, hôtels — solutions coupe-feu et acoustiques conformes aux normes de construction commerciale.' },

    /* ─── Sheet Boards — Application Cards ─── */
    'sheet.app.card1.title':       { en:'Kitchen & Cabinet',       fr:'Cuisine & Mobilier' },
    'sheet.app.card1.desc':        { en:'Cabinets, wardrobes, shelving, furniture — precision-cut plywood & MDF for homes and apartments.', fr:'Meubles de cuisine, dressings, étagères, mobilier — contreplaqué et MDF de précision pour maisons et appartements.' },
    'sheet.app.card2.title':       { en:'Hotel & Commercial',      fr:'Hôtellerie & Commerce' },
    'sheet.app.card2.desc':        { en:'Office fit-outs, retail, hotels — fire-rated & structural grades for large-scale interiors.', fr:'Aménagements de bureaux, commerces, hôtels — grades coupe-feu et structurels pour intérieurs à grande échelle.' },

    /* ─── Wall Panels — Application Cards ─── */
    'wall.app.card1.title':        { en:'Hotel & Hospitality',     fr:'Hôtellerie & Restauration' },
    'wall.app.card1.desc':         { en:'Hotels, restaurants, retail, offices — durable, easy-to-clean surfaces for brand environments.', fr:'Hôtels, restaurants, commerces, bureaux — surfaces durables et faciles à nettoyer pour environnements de marque.' },
    'wall.app.card2.title':        { en:'Luxury Residential',      fr:'Résidentiel haut de gamme' },
    'wall.app.card2.desc':         { en:'Living rooms, bedrooms, home offices. Install decorative panels in hours, not days.', fr:'Salons, chambres, bureaux à domicile. Installez des panneaux décoratifs en quelques heures, pas en jours.' },

    /* ─── Ceiling & Framing — Application Cards ─── */
    'ceiling.app.card1.title':     { en:'Commercial Office Buildings', fr:'Immeubles de bureaux' },
    'ceiling.app.card1.desc':      { en:'Offices, retail, hotels — mineral fiber ceilings for acoustics, metal tiles for aesthetics, steel framing for structural integrity.', fr:'Bureaux, commerces, hôtels — plafonds en fibres minérales pour l\'acoustique, dalles métalliques pour l\'esthétique, ossatures acier pour l\'intégrité structurelle.' },
    'ceiling.app.card2.title':     { en:'Healthcare & Institutional', fr:'Santé & Institutions' },
    'ceiling.app.card2.desc':      { en:'Schools, hospitals, labs — hygienic metal tiles, fire-rated mineral fiber, durable steel framing.', fr:'Écoles, hôpitaux, laboratoires — dalles métalliques hygiéniques, fibres minérales coupe-feu, ossatures acier durables.' },

    /* ─── Calcium Silicate — Application Cards ─── */
    'calcium.app.card1.title':     { en:'Fire-Rated Exterior',     fr:'Extérieur coupe-feu' },
    'calcium.app.card1.desc':      { en:'A1 fire-rated partitions & cladding — commercial, hospitals, schools. Meets strictest fire codes.', fr:'Cloisons et bardages coupe-feu A1 — bâtiments commerciaux, hôpitaux, écoles. Conforme aux normes incendie les plus strictes.' },
    'calcium.app.card2.title':     { en:'Industrial & Wet Area',   fr:'Zones industrielles & humides' },
    'calcium.app.card2.desc':      { en:'Moisture-proof ceilings and walls for bathrooms, kitchens, swimming pools, and industrial facilities. Zero warping, zero mold.', fr:'Plafonds et murs résistants à l\'humidité pour salles de bains, cuisines, piscines et installations industrielles. Zéro déformation, zéro moisissure.' },

    /* ─── Outdoor & Decking — Application Cards ─── */
    'outdoor.app.card1.title':     { en:'Resort & Hospitality',    fr:'Resorts & Hôtellerie' },
    'outdoor.app.card1.desc':      { en:'Hotel pool decks, restaurant terraces, rooftop bars — heavy-duty, splinter-free, barefoot-safe.', fr:'Terrasses de piscine d\'hôtel, terrasses de restaurant, bars sur le toit — usage intensif, sans échardes, sûr pieds nus.' },
    'outdoor.app.card2.title':     { en:'Public & Urban',          fr:'Espaces publics & urbains' },
    'outdoor.app.card2.desc':      { en:'Boardwalks, park paths, observation decks — slip-resistant, weather-proof, built for decades.', fr:'Promenades, allées de parc, belvédères — antidérapant, résistant aux intempéries, conçu pour durer des décennies.' },

    /* ─── Tiles — Application Cards ─── */
    'tiles.app.card1.title':       { en:'Hotel & Luxury Interiors', fr:'Intérieurs hôteliers & luxe' },
    'tiles.app.card1.desc':        { en:'Hotel lobbies, luxury retail, restaurants — large-format porcelain, seamless surfaces.', fr:'Halls d\'hôtel, commerces de luxe, restaurants — grès cérame grand format, surfaces sans joint apparent.' },
    'tiles.app.card2.title':       { en:'Commercial & Institutional', fr:'Bâtiments commerciaux & publics' },
    'tiles.app.card2.desc':        { en:'Hospitals, schools, airports — slip-resistant, chemical-resistant, high-traffic durable.', fr:'Hôpitaux, écoles, aéroports — antidérapant, résistant aux produits chimiques, adapté au trafic intense.' },

    /* ─── Roofing Materials — Application Cards ─── */
    'roofing.app.card1.title':     { en:'Residential Villas',      fr:'Villas résidentielles' },
    'roofing.app.card1.desc':      { en:'Asphalt shingles & stone-coated steel — houses, villas, multi-family. Curb appeal & weather protection.', fr:'Bardeaux d\'asphalte et acier granulé — maisons, villas, immeubles collectifs. Attrait esthétique et protection contre les intempéries.' },
    'roofing.app.card2.title':     { en:'Industrial & Infrastructure', fr:'Industrie & Infrastructures' },
    'roofing.app.card2.desc':      { en:'Corrugated & standing seam — factories, warehouses, logistics. Waterproofing — tunnels, bridges, parking decks.', fr:'Tôles ondulées et à joint debout — usines, entrepôts, logistique. Étanchéité — tunnels, ponts, parkings.' },

    /* ─── Accessories — Application Cards ─── */
    'acc.app.card1.title':         { en:'Drywall Finishing System', fr:'Système de finition des cloisons sèches' },
    'acc.app.card1.desc':          { en:'Joint compound, tape, corner beads — Level 4 & 5 seamless finishes.', fr:'Enduit à joints, bande, cornières — finitions sans joint apparent niveau 4 et 5.' },
    'acc.app.card2.title':         { en:'Metal Framing Assembly',  fr:'Assemblage d\'ossature métallique' },
    'acc.app.card2.desc':          { en:'Self-drilling screws, anchors, connectors — light-gauge steel framing. Wires, clips, angles — ceiling grids.', fr:'Vis autoperceuses, chevilles, connecteurs — ossature acier léger. Fils, clips, équerres — grilles de plafond.' },

    /* ─── Insulation — Application Cards ─── */
    'ins.app.card1.title':         { en:'Building Envelope',       fr:'Enveloppe du bâtiment' },
    'ins.app.card1.desc':          { en:'External wall ETICS, curtain wall insulation, cavity fill. Flat roof, pitched roof, and inverted roof systems — meeting global energy codes.', fr:'ITE pour murs extérieurs, isolation des murs-rideaux, remplissage des cavités. Toitures plates, inclinées et inversées — conforme aux codes énergétiques internationaux.' },
    'ins.app.card2.title':         { en:'Cold Chain & Industrial', fr:'Chaîne du froid & Industrie' },
    'ins.app.card2.desc':          { en:'XPS & PU sandwich panels for cold rooms, freezer warehouses, and temperature-controlled logistics. Industrial pipe and duct insulation.', fr:'Panneaux sandwich XPS et PU pour chambres froides, entrepôts frigorifiques et logistique sous température contrôlée. Isolation industrielle des tuyauteries et conduits.' },

    /* ─── Shared — Specs Table Headers ─── */
    'specs.th.grade':              { en:'Grade',                    fr:'Qualité' },
    'specs.th.thickness':          { en:'Thickness',                fr:'Épaisseur' },
    'specs.th.standard_size':      { en:'Standard Size',            fr:'Dimension standard' },
    'specs.th.type':               { en:'Type',                     fr:'Type' },
    'specs.th.best_for':           { en:'Best For',                 fr:'Idéal pour' },

    /* ─── Shared — Bento Spec Labels ─── */
    'bento.lbl.thickness':         { en:'Thickness',                fr:'Épaisseur' },
    'bento.lbl.size':              { en:'Size',                     fr:'Dimensions' },
    'bento.lbl.type':              { en:'Type',                     fr:'Type' },
    'bento.lbl.water_rating':      { en:'Water Rating',             fr:'Indice d\'eau' },
    'bento.lbl.dual_rating':       { en:'Dual Rating',              fr:'Double indice' },
    'bento.lbl.status':            { en:'Status',                   fr:'Statut' },
    'bento.lbl.in_stock':          { en:'In Stock',                 fr:'En stock' },
    'bento.lbl.standard':          { en:'Standard',                 fr:'Standard' },
    'bento.lbl.waterproof':        { en:'Waterproof',               fr:'Étanche' },
    'bento.lbl.fire_rated':        { en:'Fire-Rated',               fr:'Coupe-feu' },
    'bento.lbl.moisture_res':      { en:'Moisture-Res.',            fr:'Hydrofuge' },
    'bento.lbl.moisture_fire':     { en:'Moisture+Fire',            fr:'Hydrofuge+Coupe-feu' },

    /* ─── Shared — Explore Card Descriptions (page-specific) ─── */
    'explore.sheet.desc':          { en:'Plywood, MDF, OSB — all grades, all sizes', fr:'Contreplaqué, MDF, OSB — toutes qualités, toutes dimensions' },
    'explore.wall.desc':           { en:'WPC, PVC, acoustic & decorative panels', fr:'Panneaux WPC, PVC, acoustiques & décoratifs' },
    'explore.ceiling.desc':        { en:'Mineral fiber, metal ceilings, steel framework', fr:'Fibre minérale, plafonds métalliques, ossatures acier' },
    'explore.calcium.desc':        { en:'Fire-rated, moisture-proof board for wet zones', fr:'Panneau coupe-feu, résistant à l\'humidité pour zones humides' },
    'explore.outdoor.desc':        { en:'Composite decking, WPC, outdoor flooring', fr:'Terrasses composites, WPC, revêtements extérieurs' },
    'explore.gypsum.desc':         { en:'Standard, MR, fire-rated — all grades, all sizes', fr:'Standard, hydrofuge, coupe-feu — toutes qualités, toutes dimensions' },
    'explore.tiles.desc':          { en:'Porcelain, ceramic, mosaic — floor & wall tiles', fr:'Grès cérame, céramique, mosaïque — carrelage sol & mural' },
    'explore.roofing.desc':        { en:'Metal roofing, asphalt shingles, PVC sheets', fr:'Toiture métallique, bardeaux d\'asphalte, plaques PVC' },
    'explore.acc.desc':            { en:'Screws, joint tape, profiles — everything to finish', fr:'Vis, bande à joints, profilés — tout pour la finition' },
    'explore.ins.desc':            { en:'Rock wool, XPS, EPS — thermal & acoustic', fr:'Laine de roche, XPS, EPS — isolation thermique & acoustique' },

    /* ─── Gypsum — Specs Table Data ─── */
    'gypsum.specs.r1.grade':       { en:'Standard',                 fr:'Standard' },
    'gypsum.specs.r1.type':        { en:'Standard',                 fr:'Standard' },
    'gypsum.specs.r1.best_for':    { en:'General ceiling and wall framing', fr:'Ossature générale plafonds et murs' },
    'gypsum.specs.r2.grade':       { en:'Moisture-Resistant',       fr:'Résistant à l\'humidité' },
    'gypsum.specs.r2.type':        { en:'Moisture-Res.',            fr:'Hydrofuge' },
    'gypsum.specs.r2.best_for':    { en:'Bathroom, kitchen, basement framing', fr:'Ossature salle de bains, cuisine, sous-sol' },
    'gypsum.specs.r3.grade':       { en:'Fire-Rated',               fr:'Coupe-feu' },
    'gypsum.specs.r3.type':        { en:'Fire-Rated',               fr:'Coupe-feu' },
    'gypsum.specs.r3.best_for':    { en:'Fire walls, elevator shafts, commercial', fr:'Murs coupe-feu, gaines d\'ascenseur, bâtiments commerciaux' },
    'gypsum.specs.r4.grade':       { en:'Waterproof',               fr:'Étanche' },
    'gypsum.specs.r4.type':        { en:'Waterproof',               fr:'Étanche' },
    'gypsum.specs.r4.best_for':    { en:'Exterior walls, wet rooms, pools', fr:'Murs extérieurs, pièces humides, piscines' },
    'gypsum.specs.r5.grade':       { en:'Moisture-Fire Res.',       fr:'Hydrofuge Coupe-feu' },
    'gypsum.specs.r5.type':        { en:'Moisture+Fire',            fr:'Hydrofuge+Coupe-feu' },
    'gypsum.specs.r5.best_for':    { en:'High-humidity fire zones, commercial kitchens', fr:'Zones feu haute humidité, cuisines professionnelles' },
    /* Gypsum — thickness & size (per grade) */
    'gypsum.specs.r1.thickness':   { en:'9.5mm / 12mm',             fr:'9,5 mm / 12 mm' },
    'gypsum.specs.r1.size':        { en:'1220 × 2440 mm',           fr:'1220 × 2440 mm' },
    'gypsum.specs.r2.thickness':   { en:'9.5mm / 12mm',             fr:'9,5 mm / 12 mm' },
    'gypsum.specs.r2.size':        { en:'1220 × 2440 mm',           fr:'1220 × 2440 mm' },
    'gypsum.specs.r3.thickness':   { en:'9.5mm / 12mm',             fr:'9,5 mm / 12 mm' },
    'gypsum.specs.r3.size':        { en:'1220 × 2440 mm',           fr:'1220 × 2440 mm' },
    'gypsum.specs.r4.thickness':   { en:'9.5mm / 12mm / 15mm',      fr:'9,5 mm / 12 mm / 15 mm' },
    'gypsum.specs.r4.size':        { en:'1220 × 2440 mm',           fr:'1220 × 2440 mm' },
    'gypsum.specs.r5.thickness':   { en:'9.5mm / 12mm / 15mm',      fr:'9,5 mm / 12 mm / 15 mm' },
    'gypsum.specs.r5.size':        { en:'1220 × 2440 mm',           fr:'1220 × 2440 mm' },

    /* ─── Gypsum — Bento Cards ─── */
    'gypsum.card1.badge':          { en:'BEST SELLER',              fr:'MEILLEURE VENTE' },
    'gypsum.card1.title':          { en:'Standard Gypsum Board',    fr:'Plaque de plâtre standard' },
    'gypsum.card1.desc':           { en:'Standard gypsum board for ceiling and wall framing. Smooth paper face with tapered edges for seamless jointing. In-stock thicknesses: 9.5mm and 12mm.', fr:'Plaque de plâtre standard pour ossature plafonds et murs. Surface lisse avec bords amincis pour joints sans raccord. Épaisseurs en stock : 9,5 mm et 12 mm.' },
    'gypsum.card2.badge':          { en:'WATERPROOF',               fr:'ÉTANCHE' },
    'gypsum.card2.title':          { en:'Waterproof Board',         fr:'Plaque étanche' },
    'gypsum.card2.desc':           { en:'Waterproof gypsum board with water-resistant core. Can withstand short-term water immersion. Ideal for bathrooms, swimming pool areas, basements and high-moisture environments. In-stock thicknesses: 12mm and 15mm.', fr:'Plaque de plâtre étanche avec noyau hydrofuge. Résiste à l\'immersion temporaire. Idéale pour salles de bains, piscines, sous-sols et environnements très humides. Épaisseurs en stock : 12 mm et 15 mm.' },
    'gypsum.card3.badge':          { en:'MOISTURE-FIRE',            fr:'HUMIDITÉ-FEU' },
    'gypsum.card3.title':          { en:'Moisture–Fire Board',      fr:'Plaque humidité-feu' },
    'gypsum.card3.desc':           { en:'Dual-performance gypsum board combining moisture resistance and fire rating. Suitable for high-humidity environments requiring fire protection. Ideal for commercial kitchens, industrial laundries, and fire-rated wet zones. In-stock: 9.5mm, 12mm, 15mm.', fr:'Plaque de plâtre double performance combinant résistance à l\'humidité et classement coupe-feu. Adaptée aux environnements humides nécessitant une protection incendie. Idéale pour cuisines professionnelles, blanchisseries industrielles et zones humides coupe-feu. En stock : 9,5 mm, 12 mm, 15 mm.' },
    'gypsum.card4.badge':          { en:'MOISTURE RESISTANT',       fr:'RÉSISTANT À L\'HUMIDITÉ' },
    'gypsum.card4.title':          { en:'Moisture–Resistant Board', fr:'Plaque résistante à l\'humidité' },
    'gypsum.card4.desc':           { en:'Green-faced moisture-resistant core. Engineered for high-humidity areas. Used for bathroom, kitchen, and basement framing. In-stock thicknesses: 9.5mm and 12mm.', fr:'Noyau hydrofuge à face verte. Conçue pour les zones à forte humidité. Utilisée pour ossature salles de bains, cuisines et sous-sols. Épaisseurs en stock : 9,5 mm et 12 mm.' },
    'gypsum.card5.badge':          { en:'FIRE RATED',               fr:'COUPE-FEU' },
    'gypsum.card5.title':          { en:'Fire–Rated Board',         fr:'Plaque coupe-feu' },
    'gypsum.card5.desc':           { en:'Glass-fiber reinforced core with fire certification. Engineered for fire-rated applications. Used for fire walls, elevator shafts, and commercial building framing. In-stock thicknesses: 9.5mm and 12mm.', fr:'Noyau renforcé de fibres de verre avec certification coupe-feu. Conçue pour applications coupe-feu. Utilisée pour murs coupe-feu, gaines d\'ascenseur et ossature de bâtiments commerciaux. Épaisseurs en stock : 9,5 mm et 12 mm.' },

    /* ═══════════════════════════════════════════
       TILES — Specs Table
       ═══════════════════════════════════════════ */
    'tiles.specs.th.type':         { en:'Tile Type',               fr:'Type de carreau' },
    'tiles.specs.th.size':         { en:'Common Sizes',            fr:'Dimensions courantes' },
    'tiles.specs.th.water':        { en:'Water Absorption',        fr:'Absorption d\'eau' },
    'tiles.specs.th.pei':          { en:'PEI Rating',              fr:'Classement PEI' },
    'tiles.specs.th.standard':     { en:'Standard',                fr:'Norme' },
    'tiles.specs.th.best_for':     { en:'Best For',                fr:'Idéal pour' },
    'tiles.specs.r1.type':         { en:'Porcelain Tile (Full-Body)', fr:'Grès cérame (pleine masse)' },
    'tiles.specs.r1.size':         { en:'600×600 / 600×1200 / 750×1500 mm', fr:'600×600 / 600×1200 / 750×1500 mm' },
    'tiles.specs.r1.water':        { en:'≤ 0.5% (impervious)',    fr:'≤ 0,5 % (imperméable)' },
    'tiles.specs.r1.pei':          { en:'PEI 4–5',                 fr:'PEI 4–5' },
    'tiles.specs.r1.standard':     { en:'ISO 13006 | GB/T 4100',   fr:'ISO 13006 | GB/T 4100' },
    'tiles.specs.r1.best_for':     { en:'High-traffic commercial, outdoor, industrial', fr:'Commercial à fort trafic, extérieur, industriel' },
    'tiles.specs.r2.type':         { en:'Glazed Porcelain Tile',   fr:'Grès cérame émaillé' },
    'tiles.specs.r2.size':         { en:'600×600 / 800×800 / 600×1200 mm', fr:'600×600 / 800×800 / 600×1200 mm' },
    'tiles.specs.r2.water':        { en:'≤ 0.5%',                  fr:'≤ 0,5 %' },
    'tiles.specs.r2.pei':          { en:'PEI 3–4',                 fr:'PEI 3–4' },
    'tiles.specs.r2.best_for':     { en:'Living rooms, hotel lobbies, retail spaces', fr:'Salons, halls d\'hôtel, espaces commerciaux' },
    'tiles.specs.r3.type':         { en:'Ceramic Wall Tile',       fr:'Carreau mural céramique' },
    'tiles.specs.r3.size':         { en:'300×600 / 300×300 / 250×400 mm', fr:'300×600 / 300×300 / 250×400 mm' },
    'tiles.specs.r3.water':        { en:'10–20% (non-vitreous)',   fr:'10–20 % (non vitrifié)' },
    'tiles.specs.r3.pei':          { en:'PEI 0–2',                 fr:'PEI 0–2' },
    'tiles.specs.r3.best_for':     { en:'Bathroom walls, kitchen backsplashes, interiors', fr:'Murs de salle de bains, crédences cuisine, intérieurs' },
    'tiles.specs.r4.type':         { en:'Ceramic Floor Tile',      fr:'Carreau de sol céramique' },
    'tiles.specs.r4.size':         { en:'400×400 / 500×500 / 600×600 mm', fr:'400×400 / 500×500 / 600×600 mm' },
    'tiles.specs.r4.water':        { en:'3–6% (semi-vitreous)',    fr:'3–6 % (semi-vitrifié)' },
    'tiles.specs.r4.pei':          { en:'PEI 3–4',                 fr:'PEI 3–4' },
    'tiles.specs.r4.best_for':     { en:'Residential floors, light commercial areas', fr:'Sols résidentiels, zones commerciales légères' },
    'tiles.specs.r5.type':         { en:'Polished Glazed Tile',    fr:'Carreau émaillé poli' },
    'tiles.specs.r5.size':         { en:'800×800 / 600×1200 / 900×1800 mm', fr:'800×800 / 600×1200 / 900×1800 mm' },
    'tiles.specs.r5.water':        { en:'≤ 0.5%',                  fr:'≤ 0,5 %' },
    'tiles.specs.r5.pei':          { en:'PEI 3–4',                 fr:'PEI 3–4' },
    'tiles.specs.r5.best_for':     { en:'Premium residential, showrooms, luxury retail', fr:'Résidentiel haut de gamme, showrooms, commerce de luxe' },
    'tiles.specs.r6.type':         { en:'Mosaic Tile',             fr:'Carreau mosaïque' },
    'tiles.specs.r6.size':         { en:'300×300 mm sheets (23×23 / 48×48 chips)', fr:'Plaques 300×300 mm (pièces 23×23 / 48×48)' },
    'tiles.specs.r6.water':        { en:'Varies by material',      fr:'Variable selon le matériau' },
    'tiles.specs.r6.pei':          { en:'PEI 2–4',                 fr:'PEI 2–4' },
    'tiles.specs.r6.best_for':     { en:'Feature walls, pools, bathrooms, decorative', fr:'Murs décoratifs, piscines, salles de bains, décoration' },

    /* ─── Tiles — Bento Cards ─── */
    'tiles.card1.badge':           { en:'HEAVY-DUTY',              fr:'USAGE INTENSIF' },
    'tiles.card1.title':           { en:'Full-Body Porcelain',     fr:'Grès cérame pleine masse' },
    'tiles.card1.desc':            { en:'Color-through-body porcelain — color runs through the entire tile thickness. Near-zero water absorption, frost-proof, and PEI 5 rated. The ultimate choice for airports, malls, and outdoor plazas.', fr:'Grès cérame coloré dans la masse — la couleur traverse toute l\'épaisseur du carreau. Absorption d\'eau quasi nulle, antigel et classé PEI 5. Le choix ultime pour aéroports, centres commerciaux et places extérieures.' },
    'tiles.card2.badge':           { en:'VERSATILE',               fr:'POLYVALENT' },
    'tiles.card2.title':           { en:'Glazed Porcelain',        fr:'Grès cérame émaillé' },
    'tiles.card2.desc':            { en:'Porcelain body with high-definition glazed surface — marble, wood, stone, and concrete looks. Large format up to 900×1800mm. The most popular tile category worldwide.', fr:'Corps en grès cérame avec surface émaillée haute définition — aspects marbre, bois, pierre et béton. Grand format jusqu\'à 900×1800 mm. La catégorie de carrelage la plus populaire au monde.' },
    'tiles.card3.badge':           { en:'PREMIUM',                 fr:'PREMIUM' },
    'tiles.card3.title':           { en:'Polished Glazed Tile',    fr:'Carreau émaillé poli' },
    'tiles.card3.desc':            { en:'Mirror-finish surface with exceptional light reflection. Nano-polished for a glass-like shine. Available in 800×800 to 900×1800mm formats. Ideal for luxury interiors and showrooms.', fr:'Surface finition miroir avec réflexion lumineuse exceptionnelle. Nano-poli pour une brillance semblable au verre. Disponible en formats 800×800 à 900×1800 mm. Idéal pour intérieurs de luxe et showrooms.' },
    'tiles.card4.badge':           { en:'ECONOMICAL',              fr:'ÉCONOMIQUE' },
    'tiles.card4.title':           { en:'Ceramic Wall & Floor',    fr:'Carreau céramique mur & sol' },
    'tiles.card4.desc':            { en:'Cost-effective ceramic tiles for walls and floors. Wide range of colors, patterns, and surface finishes. Perfect for residential projects, budget hotels, and multi-unit developments where value meets quality.', fr:'Carreaux céramiques économiques pour murs et sols. Large gamme de couleurs, motifs et finitions de surface. Parfait pour les projets résidentiels, les hôtels économiques et les développements multi-logements où le rapport qualité-prix est essentiel.' },
    'tiles.card5.badge':           { en:'ARTISTIC',                fr:'ARTISTIQUE' },
    'tiles.card5.title':           { en:'Mosaic Tiles',            fr:'Carreaux mosaïque' },
    'tiles.card5.desc':            { en:'Glass, ceramic, porcelain, and natural stone mosaics on mesh-backed sheets. Hexagon, penny-round, subway, and custom patterns. Transform any surface into a design statement.', fr:'Mosaïques en verre, céramique, grès cérame et pierre naturelle sur plaques avec filet. Motifs hexagonaux, penny-round, métro et personnalisés. Transformez toute surface en déclaration design.' },
    'tiles.ctabar.title':          { en:'Looking for a Specific Look?', fr:'Vous cherchez un style particulier ?' },
    'tiles.ctabar.desc':           { en:'Send us your design reference, mood board, or project specs. We\'ll match the tile type, size, and finish — with samples shipped within 5 days.', fr:'Envoyez-nous votre référence design, mood board ou cahier des charges. Nous trouverons le type, la taille et la finition de carreau adaptés — avec des échantillons expédiés sous 5 jours.' },
    'tiles.ctabar.button':         { en:'Request Tile Samples',    fr:'Demander des échantillons' },

    /* ═══════════════════════════════════════════
       ROOFING — Specs Table
       ═══════════════════════════════════════════ */
    'roofing.specs.th.type':       { en:'Roofing Type',            fr:'Type de toiture' },
    'roofing.specs.th.material':   { en:'Material & Gauge',       fr:'Matériau & Épaisseur' },
    'roofing.specs.th.profile':    { en:'Profile / Format',       fr:'Profil / Format' },
    'roofing.specs.th.lifespan':   { en:'Lifespan',               fr:'Durée de vie' },
    'roofing.specs.th.standard':   { en:'Standard',               fr:'Norme' },
    'roofing.specs.th.best_for':   { en:'Best For',               fr:'Idéal pour' },
    'roofing.specs.r1.type':       { en:'Corrugated Metal Sheet',  fr:'Tôle ondulée métallique' },
    'roofing.specs.r1.material':   { en:'Galvanized / Alu-Zinc Steel | 0.3–0.8mm', fr:'Acier galvanisé / Alu-Zinc | 0,3–0,8 mm' },
    'roofing.specs.r1.profile':    { en:'YG 18-76-836 / YX 25-210-840', fr:'YG 18-76-836 / YX 25-210-840' },
    'roofing.specs.r1.lifespan':   { en:'15–30 years',            fr:'15–30 ans' },
    'roofing.specs.r1.standard':   { en:'GB/T 12755-2008 | ASTM A653', fr:'GB/T 12755-2008 | ASTM A653' },
    'roofing.specs.r1.best_for':   { en:'Warehouses, factories, agricultural buildings', fr:'Entrepôts, usines, bâtiments agricoles' },
    'roofing.specs.r2.type':       { en:'Standing Seam Panel',     fr:'Panneau à joint debout' },
    'roofing.specs.r2.material':   { en:'Alu-Zinc / PVDF Coated Steel | 0.5–0.8mm', fr:'Acier Alu-Zinc / Revêtu PVDF | 0,5–0,8 mm' },
    'roofing.specs.r2.profile':    { en:'YX 65-400 / YX 65-430',  fr:'YX 65-400 / YX 65-430' },
    'roofing.specs.r2.lifespan':   { en:'30–50 years',            fr:'30–50 ans' },
    'roofing.specs.r2.standard':   { en:'GB/T 12755-2008 | EN 14782', fr:'GB/T 12755-2008 | EN 14782' },
    'roofing.specs.r2.best_for':   { en:'Airports, stadiums, high-end commercial', fr:'Aéroports, stades, commercial haut de gamme' },
    'roofing.specs.r3.type':       { en:'Stone-Coated Steel Tile', fr:'Tuile acier granulé' },
    'roofing.specs.r3.material':   { en:'Alu-Zinc Steel + Stone Chips | 0.4–0.55mm', fr:'Acier Alu-Zinc + Granulats de pierre | 0,4–0,55 mm' },
    'roofing.specs.r3.profile':    { en:'Roman / Shake / Classic profiles', fr:'Profils Romain / Shake / Classique' },
    'roofing.specs.r3.lifespan':   { en:'30–50 years',            fr:'30–50 ans' },
    'roofing.specs.r3.standard':   { en:'JC/T 1053-2007 | ASTM D6386', fr:'JC/T 1053-2007 | ASTM D6386' },
    'roofing.specs.r3.best_for':   { en:'Residential villas, resort hotels, heritage', fr:'Villas résidentielles, hôtels de luxe, patrimoine' },
    'roofing.specs.r4.type':       { en:'Asphalt Shingle',         fr:'Bardeau d\'asphalte' },
    'roofing.specs.r4.material':   { en:'Fiberglass Mat + Asphalt + Mineral Granules', fr:'Mat fibre de verre + Asphalte + Granulats minéraux' },
    'roofing.specs.r4.profile':    { en:'3-Tab / Architectural / Designer', fr:'3 pattes / Architectural / Designer' },
    'roofing.specs.r4.lifespan':   { en:'20–30 years',            fr:'20–30 ans' },
    'roofing.specs.r4.standard':   { en:'GB/T 20474-2006 | ASTM D3462', fr:'GB/T 20474-2006 | ASTM D3462' },
    'roofing.specs.r4.best_for':   { en:'Residential housing, multi-family, townhouses', fr:'Logements résidentiels, collectifs, maisons de ville' },
    'roofing.specs.r5.type':       { en:'APP/SBS Waterproof Membrane', fr:'Membrane d\'étanchéité APP/SBS' },
    'roofing.specs.r5.material':   { en:'Modified Bitumen + Polyester Mat', fr:'Bitume modifié + Mat polyester' },
    'roofing.specs.r5.profile':    { en:'3mm / 4mm × 1m × 10m rolls', fr:'Rouleaux 3 mm / 4 mm × 1 m × 10 m' },
    'roofing.specs.r5.lifespan':   { en:'15–25 years',            fr:'15–25 ans' },
    'roofing.specs.r5.standard':   { en:'GB/T 23457-2017 | ASTM D6164', fr:'GB/T 23457-2017 | ASTM D6164' },
    'roofing.specs.r5.best_for':   { en:'Flat roofs, basements, tunnels, bridges', fr:'Toits plats, sous-sols, tunnels, ponts' },
    'roofing.specs.r6.type':       { en:'PVC/TPO Membrane',        fr:'Membrane PVC/TPO' },
    'roofing.specs.r6.material':   { en:'PVC-P / TPO Single-Ply | 1.2–2.0mm', fr:'PVC-P / TPO monocouche | 1,2–2,0 mm' },
    'roofing.specs.r6.profile':    { en:'2m × 20m / 2m × 25m rolls', fr:'Rouleaux 2 m × 20 m / 2 m × 25 m' },
    'roofing.specs.r6.lifespan':   { en:'25–35 years',            fr:'25–35 ans' },
    'roofing.specs.r6.standard':   { en:'GB 27789-2011 | ASTM D6878', fr:'GB 27789-2011 | ASTM D6878' },
    'roofing.specs.r6.best_for':   { en:'Green roofs, cool roofs, exposed installations', fr:'Toits végétalisés, toits frais, installations exposées' },

    /* ─── Roofing — Bento Cards ─── */
    'roofing.card1.badge':         { en:'ECONOMICAL',              fr:'ÉCONOMIQUE' },
    'roofing.card1.title':         { en:'Corrugated Metal Sheets', fr:'Tôles ondulées métalliques' },
    'roofing.card1.desc':          { en:'Galvanized and Alu-Zinc coated steel sheets in standard corrugated profiles. Lightweight, fast to install, and extremely cost-effective. The workhorse of industrial and agricultural roofing worldwide.', fr:'Tôles d\'acier galvanisées et revêtues Alu-Zinc en profils ondulés standard. Légères, rapides à installer et extrêmement économiques. Le cheval de bataille des toitures industrielles et agricoles dans le monde entier.' },
    'roofing.card2.badge':         { en:'ARCHITECTURAL',           fr:'ARCHITECTURAL' },
    'roofing.card2.title':         { en:'Standing Seam Panels',    fr:'Panneaux à joint debout' },
    'roofing.card2.desc':          { en:'Concealed fastener system with clean, continuous lines. PVDF color coating in 30+ standard colors. Ideal for architect-designed projects requiring a modern, sleek roofline with exceptional weather performance.', fr:'Système de fixation cachée avec des lignes nettes et continues. Revêtement couleur PVDF en plus de 30 coloris standard. Idéal pour les projets d\'architecture nécessitant une ligne de toit moderne et épurée avec des performances exceptionnelles.' },
    'roofing.card3.badge':         { en:'PREMIUM',                 fr:'PREMIUM' },
    'roofing.card3.title':         { en:'Stone-Coated Steel Tiles', fr:'Tuiles acier granulé' },
    'roofing.card3.desc':          { en:'Steel core with natural stone chip coating — the look of traditional clay or slate tiles with the strength and light weight of steel. Class A fire rating, Class 4 impact resistance, 50-year warranty available.', fr:'Noyau acier avec revêtement en granulats de pierre naturelle — l\'aspect des tuiles traditionnelles en terre cuite ou ardoise avec la résistance et la légèreté de l\'acier. Classement feu Classe A, résistance aux chocs Classe 4, garantie 50 ans disponible.' },
    'roofing.card4.badge':         { en:'RESIDENTIAL',             fr:'RÉSIDENTIEL' },
    'roofing.card4.title':         { en:'Asphalt Shingles',        fr:'Bardeaux d\'asphalte' },
    'roofing.card4.desc':          { en:'Fiberglass-reinforced asphalt shingles with ceramic-coated mineral granules. Available in 3-tab, architectural, and designer styles. The most popular residential roofing material in North America and growing globally.', fr:'Bardeaux d\'asphalte renforcés de fibre de verre avec granulés minéraux à revêtement céramique. Disponibles en styles 3 pattes, architectural et designer. Le matériau de toiture résidentielle le plus populaire en Amérique du Nord et en croissance mondiale.' },
    'roofing.card5.badge':         { en:'WATERPROOF',              fr:'ÉTANCHE' },
    'roofing.card5.title':         { en:'Waterproofing Membranes', fr:'Membranes d\'étanchéité' },
    'roofing.card5.desc':          { en:'APP/SBS modified bitumen and PVC/TPO single-ply membranes for flat roofs, podiums, and below-grade waterproofing. Torch-applied, self-adhesive, and mechanically fastened options available.', fr:'Membranes bitumineuses modifiées APP/SBS et membranes monocouches PVC/TPO pour toits plats, podiums et étanchéité enterrée. Options disponibles : appliquées au chalumeau, autocollantes et fixées mécaniquement.' },
    'roofing.ctabar.title':        { en:'Need a Complete Roof System?', fr:'Besoin d\'un système de toiture complet ?' },
    'roofing.ctabar.desc':         { en:'Send us your roof plan and we\'ll provide a full bill of materials — sheets, fasteners, flashings, ridge caps, and gutters — all from one supplier.', fr:'Envoyez-nous votre plan de toiture et nous vous fournirons une nomenclature complète — tôles, fixations, solins, faîtières et gouttières — le tout auprès d\'un seul fournisseur.' },
    'roofing.ctabar.button':       { en:'Request Roof Takeoff',    fr:'Demander un métré de toiture' },

    /* ═══════════════════════════════════════════
       ACCESSORIES — Specs Table
       ═══════════════════════════════════════════ */
    'acc.specs.th.category':       { en:'Category',                fr:'Catégorie' },
    'acc.specs.th.spec':           { en:'Specification',           fr:'Spécification' },
    'acc.specs.th.packaging':      { en:'Packaging',               fr:'Emballage' },
    'acc.specs.th.standard':       { en:'Standard',                fr:'Norme' },
    'acc.specs.th.compatible':     { en:'Compatible With',         fr:'Compatible avec' },
    'acc.specs.r1.name':           { en:'Joint Compound (Ready-Mix)', fr:'Enduit à joints (prêt à l\'emploi)' },
    'acc.specs.r1.spec':           { en:'25kg / 20kg bag | Setting time 60–90 min', fr:'Sac 25 kg / 20 kg | Temps de prise 60–90 min' },
    'acc.specs.r1.packaging':      { en:'Paper bag / Plastic pail', fr:'Sac papier / Seau plastique' },
    'acc.specs.r1.standard':       { en:'GB/T 28627-2012 | ASTM C475', fr:'GB/T 28627-2012 | ASTM C475' },
    'acc.specs.r1.compatible':     { en:'Gypsum boards, joint tapes', fr:'Plaques de plâtre, bandes à joints' },
    'acc.specs.r2.name':           { en:'Joint Compound (Powder)', fr:'Enduit à joints (poudre)' },
    'acc.specs.r2.spec':           { en:'20kg / 25kg bag | Mix with water on-site', fr:'Sac 20 kg / 25 kg | À mélanger avec de l\'eau sur chantier' },
    'acc.specs.r2.packaging':      { en:'Multi-layer paper bag',   fr:'Sac papier multicouche' },
    'acc.specs.r2.standard':       { en:'GB/T 28627-2012 | EN 13963', fr:'GB/T 28627-2012 | EN 13963' },
    'acc.specs.r2.compatible':     { en:'All drywall types',       fr:'Tous types de cloisons sèches' },
    'acc.specs.r3.name':           { en:'Drywall Screws',          fr:'Vis pour cloisons sèches' },
    'acc.specs.r3.spec':           { en:'3.5×25mm / 3.5×35mm / 3.5×45mm | Black phosphate', fr:'3,5×25 mm / 3,5×35 mm / 3,5×45 mm | Phosphatation noire' },
    'acc.specs.r3.packaging':      { en:'1000pcs/box | 24 boxes/ctn', fr:'1000 pcs/boîte | 24 boîtes/carton' },
    'acc.specs.r3.standard':       { en:'GB/T 15856.1-2002 | DIN 18182', fr:'GB/T 15856.1-2002 | DIN 18182' },
    'acc.specs.r3.compatible':     { en:'Metal studs, timber framing', fr:'Montants métalliques, ossature bois' },
    'acc.specs.r4.name':           { en:'Self-Drilling Screws',    fr:'Vis autoperceuses' },
    'acc.specs.r4.spec':           { en:'4.2×13mm / 4.8×16mm / 5.5×25mm | Zinc plated', fr:'4,2×13 mm / 4,8×16 mm / 5,5×25 mm | Zinguées' },
    'acc.specs.r4.packaging':      { en:'500pcs/box | 20 boxes/ctn', fr:'500 pcs/boîte | 20 boîtes/carton' },
    'acc.specs.r4.standard':       { en:'GB/T 15856.4-2002 | DIN 7504', fr:'GB/T 15856.4-2002 | DIN 7504' },
    'acc.specs.r4.compatible':     { en:'Metal framing, ceiling grids', fr:'Ossature métallique, grilles de plafond' },
    'acc.specs.r5.name':           { en:'Joint Tape (Paper)',      fr:'Bande à joints (papier)' },
    'acc.specs.r5.spec':           { en:'50mm × 75m / 50mm × 150m | Perforated', fr:'50 mm × 75 m / 50 mm × 150 m | Perforée' },
    'acc.specs.r5.packaging':      { en:'Roll in shrink wrap',     fr:'Rouleau sous film rétractable' },
    'acc.specs.r5.standard':       { en:'GB/T 28627-2012 | ASTM C475', fr:'GB/T 28627-2012 | ASTM C475' },
    'acc.specs.r5.compatible':     { en:'All joint compounds',     fr:'Tous les enduits à joints' },
    'acc.specs.r6.name':           { en:'Fiberglass Mesh Tape',    fr:'Bande maille fibre de verre' },
    'acc.specs.r6.spec':           { en:'50mm × 45m / 100mm × 45m | Self-adhesive', fr:'50 mm × 45 m / 100 mm × 45 m | Autocollante' },
    'acc.specs.r6.packaging':      { en:'Roll in shrink wrap',     fr:'Rouleau sous film rétractable' },
    'acc.specs.r6.standard':       { en:'JG/T 358-2012 | ASTM D3330', fr:'JG/T 358-2012 | ASTM D3330' },
    'acc.specs.r6.compatible':     { en:'Joint compound, cracks repair', fr:'Enduit à joints, réparation de fissures' },
    'acc.specs.r7.name':           { en:'Corner Bead (Galvanized)', fr:'Cornière (galvanisée)' },
    'acc.specs.r7.spec':           { en:'25×25mm / 31×31mm × 2.4m / 3.0m', fr:'25×25 mm / 31×31 mm × 2,4 m / 3,0 m' },
    'acc.specs.r7.packaging':      { en:'25pcs/bundle | 100pcs/bundle', fr:'25 pcs/paquet | 100 pcs/paquet' },
    'acc.specs.r7.standard':       { en:'GB/T 11981-2008 | ASTM C1047', fr:'GB/T 11981-2008 | ASTM C1047' },
    'acc.specs.r7.compatible':     { en:'External drywall corners', fr:'Angles extérieurs de cloisons sèches' },
    'acc.specs.r8.name':           { en:'PVC Corner Bead',         fr:'Cornière PVC' },
    'acc.specs.r8.spec':           { en:'25×25mm × 2.5m / 3.0m | With mesh wings', fr:'25×25 mm × 2,5 m / 3,0 m | Avec ailettes maille' },
    'acc.specs.r8.packaging':      { en:'50pcs/bundle',            fr:'50 pcs/paquet' },
    'acc.specs.r8.standard':       { en:'GB/T 28627-2012 | EN 13963', fr:'GB/T 28627-2012 | EN 13963' },
    'acc.specs.r8.compatible':     { en:'Internal & external corners', fr:'Angles intérieurs et extérieurs' },

    /* ─── Accessories — Bento Cards ─── */
    'acc.card1.badge':             { en:'ESSENTIAL',               fr:'ESSENTIEL' },
    'acc.card1.title':             { en:'Joint Compounds',         fr:'Enduits à joints' },
    'acc.card1.desc':              { en:'Ready-mix and powder joint compounds for seamless drywall finishing. Smooth application, minimal shrinkage, excellent adhesion. Available in 20kg and 25kg packaging.', fr:'Enduits à joints prêts à l\'emploi et en poudre pour une finition sans raccord des cloisons sèches. Application lisse, retrait minimal, excellente adhérence. Disponibles en emballages de 20 kg et 25 kg.' },
    'acc.card2.badge':             { en:'HIGH-VOLUME',             fr:'GRAND VOLUME' },
    'acc.card2.title':             { en:'Screws & Fasteners',     fr:'Vis & Fixations' },
    'acc.card2.desc':              { en:'Drywall screws (black phosphate), self-drilling screws (zinc plated), and specialty fasteners for metal framing. Box-packed for easy jobsite distribution.', fr:'Vis pour cloisons sèches (phosphatation noire), vis autoperceuses (zinguées) et fixations spéciales pour ossature métallique. Emballées en boîtes pour une distribution facile sur chantier.' },
    'acc.card3.badge':             { en:'PRECISION',               fr:'PRÉCISION' },
    'acc.card3.title':             { en:'Tapes & Corner Beads',   fr:'Bandes & Cornières' },
    'acc.card3.desc':              { en:'Paper joint tapes, fiberglass mesh tapes (self-adhesive), galvanized steel corner beads, and PVC corner beads with mesh wings. Perfect corners every time.', fr:'Bandes à joints papier, bandes maille fibre de verre (autocollantes), cornières acier galvanisé et cornières PVC avec ailettes maille. Des angles parfaits à chaque fois.' },
    'acc.card4.badge':             { en:'STRUCTURAL',              fr:'STRUCTURAL' },
    'acc.card4.title':             { en:'Metal Profiles & Channels', fr:'Profilés & Rails métalliques' },
    'acc.card4.desc':              { en:'Galvanized steel studs, tracks, furring channels, and ceiling T-bars. Full range of gauges and lengths for any framing system.', fr:'Montants, rails, fourrures et profilés T de plafond en acier galvanisé. Gamme complète d\'épaisseurs et de longueurs pour tout système d\'ossature.' },
    'acc.ctabar.title':            { en:'Need a Bulk Accessories Package?', fr:'Besoin d\'un pack d\'accessoires en gros ?' },
    'acc.ctabar.desc':             { en:'Tell us your project scope and we\'ll bundle all accessories into one shipment. Save on logistics, simplify procurement.', fr:'Dites-nous l\'envergure de votre projet et nous regrouperons tous les accessoires en une seule expédition. Économisez sur la logistique, simplifiez vos achats.' },
    'acc.ctabar.button':           { en:'Request Bundle Quote',    fr:'Demander un devis groupé' },

    /* ═══════════════════════════════════════════
       INSULATION — Specs Table
       ═══════════════════════════════════════════ */
    'ins.specs.th.material':       { en:'Material',                fr:'Matériau' },
    'ins.specs.th.density':        { en:'Density & Thickness',    fr:'Densité & Épaisseur' },
    'ins.specs.th.size':           { en:'Standard Size',           fr:'Dimensions standard' },
    'ins.specs.th.conductivity':   { en:'Thermal Conductivity',    fr:'Conductivité thermique' },
    'ins.specs.th.best_for':       { en:'Best For',                fr:'Idéal pour' },
    'ins.specs.r1.name':           { en:'Rock Wool Board',         fr:'Panneau laine de roche' },
    'ins.specs.r1.density':        { en:'60–200 kg/m³ | 25–150mm', fr:'60–200 kg/m³ | 25–150 mm' },
    'ins.specs.r1.size':           { en:'1200×600 mm',             fr:'1200×600 mm' },
    'ins.specs.r1.conductivity':   { en:'≤ 0.040 W/(m·K)',        fr:'≤ 0,040 W/(m·K)' },
    'ins.specs.r1.best_for':       { en:'Exterior walls, fire-rated partitions, roofing', fr:'Murs extérieurs, cloisons coupe-feu, toiture' },
    'ins.specs.r2.name':           { en:'Rock Wool Blanket',       fr:'Rouleau laine de roche' },
    'ins.specs.r2.density':        { en:'40–100 kg/m³ | 50–100mm', fr:'40–100 kg/m³ | 50–100 mm' },
    'ins.specs.r2.size':           { en:'Roll 1.2×5m / 1.2×10m',  fr:'Rouleau 1,2×5 m / 1,2×10 m' },
    'ins.specs.r2.conductivity':   { en:'≤ 0.042 W/(m·K)',        fr:'≤ 0,042 W/(m·K)' },
    'ins.specs.r2.best_for':       { en:'Steel structure infill, HVAC duct wrap', fr:'Remplissage structure acier, gaines CVC' },
    'ins.specs.r3.name':           { en:'Glass Wool Board',        fr:'Panneau laine de verre' },
    'ins.specs.r3.density':        { en:'24–96 kg/m³ | 25–150mm', fr:'24–96 kg/m³ | 25–150 mm' },
    'ins.specs.r3.size':           { en:'1200×600 mm',             fr:'1200×600 mm' },
    'ins.specs.r3.conductivity':   { en:'≤ 0.037 W/(m·K)',        fr:'≤ 0,037 W/(m·K)' },
    'ins.specs.r3.best_for':       { en:'Interior partitions, suspended ceilings', fr:'Cloisons intérieures, plafonds suspendus' },
    'ins.specs.r4.name':           { en:'Glass Wool Blanket',      fr:'Rouleau laine de verre' },
    'ins.specs.r4.density':        { en:'12–48 kg/m³ | 50–150mm', fr:'12–48 kg/m³ | 50–150 mm' },
    'ins.specs.r4.size':           { en:'Roll 1.2×10m / 1.2×20m', fr:'Rouleau 1,2×10 m / 1,2×20 m' },
    'ins.specs.r4.conductivity':   { en:'≤ 0.042 W/(m·K)',        fr:'≤ 0,042 W/(m·K)' },
    'ins.specs.r4.best_for':       { en:'Attic insulation, lightweight wall infill', fr:'Isolation des combles, remplissage mural léger' },
    'ins.specs.r5.name':           { en:'XPS Board',               fr:'Panneau XPS' },
    'ins.specs.r5.density':        { en:'28–45 kg/m³ | 20–100mm', fr:'28–45 kg/m³ | 20–100 mm' },
    'ins.specs.r5.size':           { en:'1200×600 mm / 2400×600 mm', fr:'1200×600 mm / 2400×600 mm' },
    'ins.specs.r5.conductivity':   { en:'≤ 0.030 W/(m·K)',        fr:'≤ 0,030 W/(m·K)' },
    'ins.specs.r5.best_for':       { en:'Below-grade, inverted roof, cold storage', fr:'Enterré, toiture inversée, chambres froides' },
    'ins.specs.r6.name':           { en:'EPS Board',               fr:'Panneau EPS' },
    'ins.specs.r6.density':        { en:'10–30 kg/m³ | 20–200mm', fr:'10–30 kg/m³ | 20–200 mm' },
    'ins.specs.r6.size':           { en:'1200×600 mm / 2400×1200 mm', fr:'1200×600 mm / 2400×1200 mm' },
    'ins.specs.r6.conductivity':   { en:'≤ 0.039 W/(m·K)',        fr:'≤ 0,039 W/(m·K)' },
    'ins.specs.r6.best_for':       { en:'ETICS external walls, sandwich panels', fr:'Murs extérieurs ITE, panneaux sandwich' },

    /* ─── Insulation — Bento Cards ─── */
    'ins.card1.badge':             { en:'FIRE-SAFE',               fr:'IGNIFUGE' },
    'ins.card1.title':             { en:'Rock Wool',               fr:'Laine de roche' },
    'ins.card1.desc':              { en:'A1 fire-rated, non-combustible mineral wool insulation. Excellent thermal, acoustic, and fire performance. Available as rigid boards and flexible blankets. Up to 1000°C melting point.', fr:'Isolation en laine minérale A1 ignifuge, incombustible. Excellentes performances thermiques, acoustiques et coupe-feu. Disponible en panneaux rigides et rouleaux flexibles. Point de fusion jusqu\'à 1000 °C.' },
    'ins.card2.badge':             { en:'LIGHTWEIGHT',             fr:'LÉGER' },
    'ins.card2.title':             { en:'Glass Wool',              fr:'Laine de verre' },
    'ins.card2.desc':              { en:'Lightweight, cost-effective thermal and acoustic insulation. Available with aluminum foil, kraft paper, or black glass tissue facing. Ideal for interior partitions and ceiling voids.', fr:'Isolation thermique et acoustique légère et économique. Disponible avec parement aluminium, papier kraft ou voile de verre noir. Idéale pour cloisons intérieures et vides de plafond.' },
    'ins.card3.badge':             { en:'HIGH-PERFORMANCE',        fr:'HAUTE PERFORMANCE' },
    'ins.card3.title':             { en:'XPS Board',               fr:'Panneau XPS' },
    'ins.card3.desc':              { en:'Extruded polystyrene with closed-cell structure — near-zero water absorption, high compressive strength (≥ 200 kPa). The go-to choice for below-grade, inverted roof, and cold storage applications.', fr:'Polystyrène extrudé à structure cellulaire fermée — absorption d\'eau quasi nulle, haute résistance à la compression (≥ 200 kPa). Le choix de référence pour les applications enterrées, toitures inversées et chambres froides.' },
    'ins.card4.badge':             { en:'ECONOMICAL',              fr:'ÉCONOMIQUE' },
    'ins.card4.title':             { en:'EPS Board',               fr:'Panneau EPS' },
    'ins.card4.desc':              { en:'Expanded polystyrene — the most cost-effective rigid insulation. Lightweight, easy to cut and install. Standard choice for ETICS (External Thermal Insulation Composite Systems) and sandwich panels.', fr:'Polystyrène expansé — l\'isolant rigide le plus économique. Léger, facile à découper et à installer. Choix standard pour les systèmes ITE (Isolation Thermique par l\'Extérieur) et panneaux sandwich.' },
    'ins.ctabar.title':            { en:'Need U-Value Calculations?', fr:'Besoin de calculs de valeur U ?' },
    'ins.ctabar.desc':             { en:'Send us your project requirements and we\'ll recommend the optimal insulation system with thermal performance data.', fr:'Envoyez-nous les exigences de votre projet et nous vous recommanderons le système d\'isolation optimal avec les données de performance thermique.' },
    'ins.ctabar.button':           { en:'Get Technical Support',   fr:'Obtenir un support technique' },

    /* ─── Shared Explore — Insulation label (used on multiple pages) ─── */
    'explore.ins.label':           { en:'Insulation Materials',    fr:'Matériaux d\'isolation' },

    /* ═══════════════════════════════════════════
       SHEET BOARDS — Specs Table
       ═══════════════════════════════════════════ */
    'sheet.specs.th.product':      { en:'Product',                 fr:'Produit' },
    'sheet.specs.th.thickness':    { en:'Thickness',               fr:'Épaisseur' },
    'sheet.specs.th.size':         { en:'Size',                    fr:'Dimensions' },
    'sheet.specs.r1.product':      { en:'Plywood',                 fr:'Contreplaqué' },
    'sheet.specs.r1.thickness':    { en:'3–18 mm',                 fr:'3–18 mm' },
    'sheet.specs.r1.size':         { en:'1220 x 2440 mm',          fr:'1220 x 2440 mm' },
    'sheet.specs.r2.product':      { en:'MDF',                     fr:'MDF' },
    'sheet.specs.r2.thickness':    { en:'3–18 mm',                 fr:'3–18 mm' },
    'sheet.specs.r2.size':         { en:'1220 x 2440 mm',           fr:'1220 x 2440 mm' },
    'sheet.specs.r3.product':      { en:'OSB',                     fr:'OSB' },
    'sheet.specs.r3.thickness':    { en:'9 / 12 / 15 mm',          fr:'9 / 12 / 15 mm' },
    'sheet.specs.r3.size':         { en:'1220 x 2440 mm',           fr:'1220 x 2440 mm' },

    /* ─── Sheet Boards — Bento Cards ─── */
    'sheet.card1.title':           { en:'Plywood',                 fr:'Contreplaqué' },
    'sheet.card1.desc':            { en:'Multi-layer cross-grained veneer panels. Superior strength-to-weight ratio and screw-holding power. Ideal for furniture, cabinetry, and structural applications.', fr:'Panneaux de placage croisés multicouches. Rapport résistance/poids supérieur et excellente tenue des vis. Idéal pour l\'ameublement, l\'ébénisterie et les applications structurelles.' },
    'sheet.card2.title':           { en:'MDF',                     fr:'MDF' },
    'sheet.card2.desc':            { en:'Smooth, uniform density fiberboard. Perfect for painted finishes, CNC routing, and precision cabinetry.', fr:'Panneau de fibres à densité uniforme et surface lisse. Parfait pour les finitions peintes, l\'usinage CNC et l\'ébénisterie de précision.' },
    'sheet.card3.title':           { en:'OSB',                     fr:'OSB' },
    'sheet.card3.desc':            { en:'Oriented strand board with exceptional load-bearing capacity. Ideal for roofing, wall sheathing, and structural framing.', fr:'Panneau à copeaux orientés avec une capacité portante exceptionnelle. Idéal pour la toiture, le revêtement mural et l\'ossature structurelle.' },

    /* ═══════════════════════════════════════════
       WALL PANELS — Specs Table
       ═══════════════════════════════════════════ */
    'wall.specs.section.title':    { en:'Compare Our Wall Panel Grades', fr:'Comparez nos gammes de panneaux muraux' },
    'wall.specs.section.desc':     { en:'Factory-direct wall panels with certified quality. Custom sizes, colors, and finishes available on bulk orders.', fr:'Panneaux muraux départ usine de qualité certifiée. Dimensions, couleurs et finitions personnalisées disponibles sur commandes en gros.' },
    'wall.specs.th.property':      { en:'PROPERTY',                fr:'PROPRIÉTÉ' },
    'wall.specs.th.spec':          { en:'SPECIFICATION',           fr:'SPÉCIFICATION' },
    'wall.specs.th.standard':      { en:'STANDARD',                fr:'NORME' },
    'wall.specs.r1.name':          { en:'WPC Wall Panel',          fr:'Panneau mural WPC' },
    'wall.specs.r1.spec':          { en:'5–12mm | 150×3000mm / 200×3000mm | Wood grain, embossed', fr:'5–12 mm | 150×3000 mm / 200×3000 mm | Grain bois, gaufré' },
    'wall.specs.r1.standard':      { en:'GB/T 15104-2006 | EN 438', fr:'GB/T 15104-2006 | EN 438' },
    'wall.specs.r2.name':          { en:'PVC Wall Panel',          fr:'Panneau mural PVC' },
    'wall.specs.r2.spec':          { en:'3–10mm | 100×3000mm / 150×3000mm | Marble, solid color, metallic', fr:'3–10 mm | 100×3000 mm / 150×3000 mm | Marbre, uni, métallisé' },
    'wall.specs.r2.standard':      { en:'GB/T 34440-2017 | EN 13245', fr:'GB/T 34440-2017 | EN 13245' },
    'wall.specs.r3.name':          { en:'3D Wall Panel',           fr:'Panneau mural 3D' },
    'wall.specs.r3.spec':          { en:'6–12mm | 500×500mm / 600×600mm | Geometric, wave, brick, stone', fr:'6–12 mm | 500×500 mm / 600×600 mm | Géométrique, vague, brique, pierre' },
    'wall.specs.r3.standard':      { en:'GB/T 24508-2020 | ISO 10545', fr:'GB/T 24508-2020 | ISO 10545' },
    'wall.specs.r4.name':          { en:'UV Marble Panel',         fr:'Panneau marbre UV' },
    'wall.specs.r4.spec':          { en:'3–6mm | 1220×2440mm | High-gloss marble, matte stone', fr:'3–6 mm | 1220×2440 mm | Marbre brillant, pierre mate' },
    'wall.specs.r4.standard':      { en:'GB/T 17657-2013 | EN 14323', fr:'GB/T 17657-2013 | EN 14323' },

    /* ─── Wall Panels — Bento Cards ─── */
    'wall.types.section.title':    { en:'Four Panel Families, Infinite Design Possibilities', fr:'Quatre familles de panneaux, des possibilités infinies' },
    'wall.types.section.desc':     { en:'PVC to UV Marble — factory-direct pricing across all ranges.', fr:'Du PVC au marbre UV — prix départ usine sur toute la gamme.' },
    'wall.card1.badge':            { en:'Best Seller',             fr:'Meilleure vente' },
    'wall.card1.title':            { en:'WPC Wall Panels',         fr:'Panneaux muraux WPC' },
    'wall.card1.desc':             { en:'Wood Plastic Composite — the perfect balance of aesthetics and durability. 100% waterproof, termite-proof, UV-resistant. Ideal for interior accent walls and commercial spaces.', fr:'Composite bois-plastique — l\'équilibre parfait entre esthétique et durabilité. 100 % étanche, anti-termites, résistant aux UV. Idéal pour murs d\'accent intérieurs et espaces commerciaux.' },
    'wall.card2.badge':            { en:'Cost King',               fr:'Le roi du prix' },
    'wall.card2.title':            { en:'PVC Wall Panels',         fr:'Panneaux muraux PVC' },
    'wall.card2.desc':             { en:'Lightweight, affordable, and versatile. Hundreds of designs including marble, wood grain, solid colors, and metallic finishes. Perfect for bathrooms, kitchens, and budget projects.', fr:'Légers, abordables et polyvalents. Des centaines de designs : marbre, grain bois, couleurs unies et finitions métallisées. Parfaits pour salles de bains, cuisines et projets économiques.' },
    'wall.card3.badge':            { en:'Design',                  fr:'Design' },
    'wall.card3.title':            { en:'3D Wall Panels',          fr:'Panneaux muraux 3D' },
    'wall.card3.desc':             { en:'Textured, embossed, and geometric patterns for feature walls and commercial interiors. High-impact visual effect with easy click-lock installation. Available in wave, brick, and stone textures.', fr:'Motifs texturés, gaufrés et géométriques pour murs d\'accent et intérieurs commerciaux. Effet visuel percutant avec installation facile par clic. Disponibles en textures vague, brique et pierre.' },
    'wall.card4.badge':            { en:'Premium',                 fr:'Premium' },
    'wall.card4.title':            { en:'UV Marble Panels',        fr:'Panneaux marbre UV' },
    'wall.card4.desc':             { en:'High-gloss and matte marble-effect panels with UV-cured surface. Ultra-durable, scratch-resistant, and indistinguishable from natural stone. Standard 1220×2440mm sheets.', fr:'Panneaux effet marbre brillant et mat avec surface durcie aux UV. Ultra-durables, résistants aux rayures et indiscernables de la pierre naturelle. Plaques standard 1220×2440 mm.' },

    /* ═══════════════════════════════════════════
       CEILING & FRAMING — Hero, Specs, Bento
       ═══════════════════════════════════════════ */
    'ceiling.hero.badge2':         { en:'COST KING',               fr:'ROI DU PRIX' },
    'ceiling.hero.title2':         { en:'The Backbone of Modern Construction, Without the Heavy Price Tag', fr:'L\'ossature de la construction moderne, sans le prix élevé' },
    'ceiling.hero.subtitle2':      { en:'Suspended ceiling systems, metal studs, and steel framework &mdash; engineered for strength, priced for scale. From mineral fiber tiles to heavy-gauge steel, every product delivers commercial-grade durability at a price that makes sense.', fr:'Systèmes de plafond suspendu, montants métalliques et ossatures acier — conçus pour la résistance, au prix adapté aux volumes. Des dalles en fibres minérales à l\'acier de forte épaisseur, chaque produit offre une durabilité de qualité commerciale à un prix compétitif.' },
    'ceiling.specs.section.title': { en:'Engineered for Performance, Priced for Value', fr:'Conçu pour la performance, au juste prix' },
    'ceiling.specs.th.product':    { en:'PRODUCT',                 fr:'PRODUIT' },
    'ceiling.specs.th.thickness':  { en:'THICKNESS',               fr:'ÉPAISSEUR' },
    'ceiling.specs.th.size':       { en:'STANDARD SIZE',           fr:'DIMENSIONS STANDARD' },
    'ceiling.specs.th.material':   { en:'MATERIAL / FINISH',       fr:'MATÉRIAU / FINITION' },
    'ceiling.specs.th.best_for':   { en:'BEST FOR',                fr:'IDÉAL POUR' },
    'ceiling.specs.r1.product':    { en:'Mineral Fiber Ceiling',   fr:'Plafond en fibres minérales' },
    'ceiling.specs.r1.thickness':  { en:'12–19mm',                 fr:'12–19 mm' },
    'ceiling.specs.r1.size':       { en:'600x600 / 600x1200mm',    fr:'600×600 / 600×1200 mm' },
    'ceiling.specs.r1.material':   { en:'Smooth / Textured / Perforated', fr:'Lisse / Texturé / Perforé' },
    'ceiling.specs.r1.best_for':   { en:'Offices, schools, hospitals, retail', fr:'Bureaux, écoles, hôpitaux, commerces' },
    'ceiling.specs.r2.product':    { en:'Metal Ceiling Tile',      fr:'Dalle de plafond métallique' },
    'ceiling.specs.r2.thickness':  { en:'0.5–1.0mm',               fr:'0,5–1,0 mm' },
    'ceiling.specs.r2.size':       { en:'300x300 / 600x600mm',     fr:'300×300 / 600×600 mm' },
    'ceiling.specs.r2.material':   { en:'Powder Coated / Brushed / Mirror', fr:'Thermolaqué / Brossé / Miroir' },
    'ceiling.specs.r2.best_for':   { en:'Kitchens, labs, cleanrooms, corridors', fr:'Cuisines, laboratoires, salles blanches, couloirs' },
    'ceiling.specs.r3.product':    { en:'Metal Studs',             fr:'Montants métalliques' },
    'ceiling.specs.r3.thickness':  { en:'0.4–1.2mm',               fr:'0,4–1,2 mm' },
    'ceiling.specs.r3.size':       { en:'50–150mm Width / 3–6m Length', fr:'Largeur 50–150 mm / Longueur 3–6 m' },
    'ceiling.specs.r3.material':   { en:'Galvanized Steel / Zinc Coated', fr:'Acier galvanisé / Zingué' },
    'ceiling.specs.r3.best_for':   { en:'Drywall partitions, interior walls', fr:'Cloisons sèches, murs intérieurs' },
    'ceiling.specs.r4.product':    { en:'Steel Framework',         fr:'Ossature acier' },
    'ceiling.specs.r4.thickness':  { en:'0.8–2.5mm',               fr:'0,8–2,5 mm' },
    'ceiling.specs.r4.size':       { en:'Custom Dimensions',       fr:'Dimensions sur mesure' },
    'ceiling.specs.r4.material':   { en:'Hot-Dip Galvanized / Pre-Galvanized', fr:'Galvanisé à chaud / Pré-galvanisé' },
    'ceiling.specs.r4.best_for':   { en:'Structural framing, ceiling grids, load-bearing', fr:'Ossature structurelle, grilles de plafond, porteur' },

    /* ─── Ceiling & Framing — Bento Cards ─── */
    'ceiling.bento.section.title': { en:'Four Ways to Build Stronger', fr:'Quatre façons de construire plus solide' },
    'ceiling.card1.tag':           { en:'BEST SELLER',             fr:'MEILLEURE VENTE' },
    'ceiling.card1.title':         { en:'Mineral Fiber Ceiling',   fr:'Plafond en fibres minérales' },
    'ceiling.card1.desc':          { en:'12–19mm thickness · Acoustic NRC 0.55–0.70 · Fire-rated Class A · 10+ year lifespan', fr:'Épaisseur 12–19 mm · Acoustique NRC 0,55–0,70 · Coupe-feu Classe A · Durée de vie 10+ ans' },
    'ceiling.card2.tag':           { en:'HYGIENIC',                fr:'HYGIÉNIQUE' },
    'ceiling.card2.title':         { en:'Metal Ceiling Tile',      fr:'Dalle de plafond métallique' },
    'ceiling.card2.desc':          { en:'0.5–1.0mm aluminum/steel · Powder coated · Moisture-proof · Easy to clean', fr:'Aluminium/acier 0,5–1,0 mm · Thermolaqué · Résistant à l\'humidité · Facile à nettoyer' },
    'ceiling.card3.tag':           { en:'VERSATILE',               fr:'POLYVALENT' },
    'ceiling.card3.title':         { en:'Metal Studs',             fr:'Montants métalliques' },
    'ceiling.card3.desc':          { en:'0.4–1.2mm galvanized steel · 50–150mm widths · Lightweight · Corrosion resistant', fr:'Acier galvanisé 0,4–1,2 mm · Largeurs 50–150 mm · Léger · Résistant à la corrosion' },
    'ceiling.card4.tag':           { en:'HEAVY-DUTY',              fr:'USAGE INTENSIF' },
    'ceiling.card4.title':         { en:'Steel Framework',         fr:'Ossature acier' },
    'ceiling.card4.desc':          { en:'0.8–2.5mm hot-dip galvanized · Custom dimensions · Load-bearing · Rust-proof', fr:'Galvanisé à chaud 0,8–2,5 mm · Dimensions sur mesure · Porteur · Antirouille' },

    /* ─── Ceiling & Framing — Applications section title ─── */
    'ceiling.apps.section.title':  { en:'Where CELSON Ceiling & Framing Delivers', fr:'Où les plafonds & ossatures CELSON font la différence' },

    /* ═══════════════════════════════════════════
       CALCIUM SILICATE — Specs Table & Bento
       ═══════════════════════════════════════════ */
    'calcium.specs.th.property':   { en:'Property',                fr:'Propriété' },
    'calcium.specs.th.spec':       { en:'Specification',           fr:'Spécification' },
    'calcium.specs.th.standard':   { en:'Standard',                fr:'Norme' },
    'calcium.specs.r1.property':   { en:'Fire Rating',             fr:'Classement au feu' },
    'calcium.specs.r1.spec':       { en:'A1 (Non-Combustible)',    fr:'A1 (Incombustible)' },
    'calcium.specs.r1.standard':   { en:'GB 8624 / EN 13501-1',    fr:'GB 8624 / EN 13501-1' },
    'calcium.specs.r2.property':   { en:'Water Absorption',        fr:'Absorption d\'eau' },
    'calcium.specs.r2.spec':       { en:'≤ 0.5% (24h immersion)',  fr:'≤ 0,5 % (immersion 24 h)' },
    'calcium.specs.r2.standard':   { en:'GB/T 7019 / ISO 390',     fr:'GB/T 7019 / ISO 390' },
    'calcium.specs.r3.property':   { en:'Density',                 fr:'Densité' },
    'calcium.specs.r3.spec':       { en:'1.2 – 1.5 g/cm³',        fr:'1,2 – 1,5 g/cm³' },
    'calcium.specs.r3.standard':   { en:'GB/T 7019',               fr:'GB/T 7019' },
    'calcium.specs.r4.property':   { en:'Flexural Strength',       fr:'Résistance à la flexion' },
    'calcium.specs.r4.spec':       { en:'≥ 18 MPa',                fr:'≥ 18 MPa' },
    'calcium.specs.r5.property':   { en:'Available Thickness',     fr:'Épaisseur disponible' },
    'calcium.specs.r5.spec':       { en:'6 / 8 / 10 / 12 mm',      fr:'6 / 8 / 10 / 12 mm' },
    'calcium.specs.r5.standard':   { en:'Factory Standard',        fr:'Standard usine' },
    'calcium.specs.r6.property':   { en:'Standard Size',           fr:'Dimensions standard' },
    'calcium.specs.r6.spec':       { en:'1220 × 2440 mm',          fr:'1220 × 2440 mm' },

    /* ─── Calcium Silicate — Bento Cards ─── */
    'calcium.card1.badge':         { en:'Standard',                fr:'Standard' },
    'calcium.card1.title':         { en:'Standard Calcium Silicate', fr:'Silicate de calcium standard' },
    'calcium.card1.desc':          { en:'General-purpose fire-rated board for interior partition walls and suspended ceilings. A1 fire rating, 6–12mm thickness.', fr:'Panneau coupe-feu polyvalent pour cloisons intérieures et plafonds suspendus. Classement feu A1, épaisseur 6–12 mm.' },
    'calcium.card2.badge':         { en:'High-Density',            fr:'Haute densité' },
    'calcium.card2.title':         { en:'High-Density Calcium Silicate', fr:'Silicate de calcium haute densité' },
    'calcium.card2.desc':          { en:'Extra-dense formulation for exterior cladding and load-bearing applications. Superior impact resistance, 8–12mm.', fr:'Formulation extra-dense pour bardage extérieur et applications porteuses. Résistance aux chocs supérieure, 8–12 mm.' },
    'calcium.card3.badge':         { en:'Fiber-Reinforced',        fr:'Renforcé de fibres' },
    'calcium.card3.title':         { en:'Fiber-Reinforced Calcium Silicate', fr:'Silicate de calcium renforcé de fibres' },
    'calcium.card3.desc':          { en:'Cellulose/glass fiber reinforced for maximum flexural strength. Ideal for curved walls and wet-area applications, 6–10mm.', fr:'Renforcé de fibres de cellulose/verre pour une résistance maximale à la flexion. Idéal pour murs courbes et zones humides, 6–10 mm.' },

    /* ═══════════════════════════════════════════
       OUTDOOR & DECKING — Specs Table & Bento
       ═══════════════════════════════════════════ */
    'outdoor.specs.th.type':       { en:'Product Type',            fr:'Type de produit' },
    'outdoor.specs.th.dimensions': { en:'Dimensions & Finish',    fr:'Dimensions & Finition' },
    'outdoor.specs.th.core':       { en:'Core Material',           fr:'Matériau du noyau' },
    'outdoor.specs.th.standard':   { en:'Standard',                fr:'Norme' },
    'outdoor.specs.th.best_for':   { en:'Best For',                fr:'Idéal pour' },
    'outdoor.specs.r1.type':       { en:'WPC Solid Decking',       fr:'Lame WPC pleine' },
    'outdoor.specs.r1.dimensions': { en:'140×25mm / 150×25mm | Wood grain, embossed', fr:'140×25 mm / 150×25 mm | Grain bois, gaufré' },
    'outdoor.specs.r1.core':       { en:'60% Wood Fiber + 35% HDPE + 5% Additives', fr:'60 % Fibre bois + 35 % PEHD + 5 % Additifs' },
    'outdoor.specs.r1.standard':   { en:'GB/T 24508-2020 | EN 15534', fr:'GB/T 24508-2020 | EN 15534' },
    'outdoor.specs.r1.best_for':   { en:'Residential terraces, balconies, pool decks', fr:'Terrasses résidentielles, balcons, plages de piscine' },
    'outdoor.specs.r2.type':       { en:'WPC Hollow Decking',      fr:'Lame WPC creuse' },
    'outdoor.specs.r2.dimensions': { en:'140×23mm / 150×25mm | Wood grain, grooved', fr:'140×23 mm / 150×25 mm | Grain bois, rainuré' },
    'outdoor.specs.r2.core':       { en:'55% Wood Fiber + 40% HDPE + 5% Additives', fr:'55 % Fibre bois + 40 % PEHD + 5 % Additifs' },
    'outdoor.specs.r2.best_for':   { en:'Garden paths, rooftop decks, commercial boardwalks', fr:'Allées de jardin, terrasses sur toit, promenades commerciales' },
    'outdoor.specs.r3.type':       { en:'Co-extrusion Decking',    fr:'Lame co-extrudée' },
    'outdoor.specs.r3.dimensions': { en:'140×25mm / 150×25mm | 360° polymer shield, ultra-matte', fr:'140×25 mm / 150×25 mm | Protection polymère 360°, ultra-mat' },
    'outdoor.specs.r3.core':       { en:'WPC Core + HDPE Shield Layer', fr:'Noyau WPC + Couche de protection PEHD' },
    'outdoor.specs.r3.standard':   { en:'GB/T 24508-2020 | ASTM D7032', fr:'GB/T 24508-2020 | ASTM D7032' },
    'outdoor.specs.r3.best_for':   { en:'High-traffic commercial areas, marine environments', fr:'Zones commerciales à fort trafic, environnements marins' },
    'outdoor.specs.r4.type':       { en:'Outdoor Wall Cladding',   fr:'Bardage mural extérieur' },
    'outdoor.specs.r4.dimensions': { en:'150×21mm / 195×15mm | Wood grain, solid color', fr:'150×21 mm / 195×15 mm | Grain bois, couleur unie' },
    'outdoor.specs.r4.core':       { en:'WPC / PVC Composite',     fr:'Composite WPC / PVC' },
    'outdoor.specs.r4.standard':   { en:'GB/T 34440-2017 | EN 13245', fr:'GB/T 34440-2017 | EN 13245' },
    'outdoor.specs.r4.best_for':   { en:'Facade cladding, fence panels, exterior decoration', fr:'Bardage de façade, panneaux de clôture, décoration extérieure' },
    'outdoor.specs.r5.type':       { en:'Composite Fencing',       fr:'Clôture composite' },
    'outdoor.specs.r5.dimensions': { en:'1800×1800mm / Custom panels | Wood grain, dual-face', fr:'1800×1800 mm / Panneaux sur mesure | Grain bois, double face' },
    'outdoor.specs.r5.core':       { en:'WPC Composite',           fr:'Composite WPC' },
    'outdoor.specs.r5.best_for':   { en:'Privacy fencing, garden boundaries, noise barriers', fr:'Clôtures d\'intimité, limites de jardin, écrans antibruit' },

    /* ─── Outdoor & Decking — Bento Cards ─── */
    'outdoor.card1.badge':         { en:'BESTSELLER',              fr:'MEILLEURE VENTE' },
    'outdoor.card1.title':         { en:'WPC Solid Decking',       fr:'Lame WPC pleine' },
    'outdoor.card1.desc':          { en:'Full-profile solid WPC board with realistic wood grain texture. 140×25mm standard, 2.2m / 2.9m / 5.8m lengths. UV-stabilized, slip-resistant surface. Ideal for high-end residential and hospitality projects.', fr:'Lame WPC pleine profil complet avec texture grain bois réaliste. Standard 140×25 mm, longueurs 2,2 m / 2,9 m / 5,8 m. Surface stabilisée UV et antidérapante. Idéale pour les projets résidentiels haut de gamme et l\'hôtellerie.' },
    'outdoor.card2.badge':         { en:'LIGHTWEIGHT',             fr:'LÉGER' },
    'outdoor.card2.title':         { en:'WPC Hollow Decking',      fr:'Lame WPC creuse' },
    'outdoor.card2.desc':          { en:'Chambered hollow profile reduces weight by 35% while maintaining structural integrity. 140×23mm, grooved surface for enhanced grip. Cost-effective solution for large-scale commercial projects.', fr:'Profil creux alvéolé réduit le poids de 35 % tout en maintenant l\'intégrité structurelle. 140×23 mm, surface rainurée pour une meilleure adhérence. Solution économique pour les projets commerciaux à grande échelle.' },
    'outdoor.card3.badge':         { en:'PREMIUM',                 fr:'PREMIUM' },
    'outdoor.card3.title':         { en:'Co-extrusion Decking',    fr:'Lame co-extrudée' },
    'outdoor.card3.desc':          { en:'Advanced 360° polymer shield technology — the outer layer provides superior scratch, stain, and UV resistance. 25-year warranty on structural integrity. The ultimate choice for demanding outdoor environments.', fr:'Technologie avancée de protection polymère 360° — la couche externe offre une résistance supérieure aux rayures, taches et UV. Garantie de 25 ans sur l\'intégrité structurelle. Le choix ultime pour les environnements extérieurs exigeants.' },
    'outdoor.card4.badge':         { en:'VERSATILE',               fr:'POLYVALENT' },
    'outdoor.card4.title':         { en:'Outdoor Cladding & Fencing', fr:'Bardage & Clôture extérieurs' },
    'outdoor.card4.desc':          { en:'Complete outdoor wall and fencing system — WPC cladding panels, composite fence boards, and matching accessories. Weather-proof, termite-proof, zero painting required.', fr:'Système complet de mur et clôture extérieurs — panneaux de bardage WPC, lames de clôture composite et accessoires assortis. Résistant aux intempéries, anti-termites, aucune peinture requise.' },
    'outdoor.ctabar.title':        { en:'Custom Decking Project?', fr:'Un projet de terrasse sur mesure ?' },
    'outdoor.ctabar.desc':         { en:'Tell us your project dimensions and requirements. We\'ll provide a tailored quote with installation accessories within 24 hours.', fr:'Donnez-nous les dimensions et les exigences de votre projet. Nous vous fournirons un devis personnalisé avec les accessoires d\'installation sous 24 heures.' },
    'outdoor.ctabar.button':       { en:'Request Custom Quote',    fr:'Demander un devis personnalisé' },
  },

  // Get translated text for a key
  t: function(key) {
    var entry = this.dict[key];
    if (!entry) return key; // fallback: return key itself
    return entry[this.lang] || entry['en'] || key;
  }
};
