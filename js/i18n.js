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
    'mega.gypsum.desc':            { en:'Standard, MR, Fire-Rated',fr:'Standard, MR, Coupe-feu' },
    'mega.sheet.label':            { en:'Sheet Boards',            fr:'Panneaux en feuille' },
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
    'mega.tiles.desc':             { en:'Porcelain, Ceramic, Mosaic', fr:'Porcelaine, Céramique, Mosaïque' },
    'mega.roofing.label':          { en:'Roofing Materials',       fr:'Matériaux de toiture' },
    'mega.roofing.desc':           { en:'Metal, Asphalt, PVC Sheets', fr:'Métal, Asphalte, Plaques PVC' },
    'mega.accessories.label':      { en:'Accessories',             fr:'Accessoires' },
    'mega.accessories.desc':       { en:'Screws, Profiles, Joint Tape', fr:'Vis, Profilés, Bande à joints' },
    'mega.insulation.label':       { en:'Insulation',              fr:'Isolation' },
    'mega.insulation.desc':        { en:'Rock Wool, XPS, EPS Boards', fr:'Laine de roche, XPS, Panneaux EPS' },

    /* ─── Homepage — Hero ─── */
    'home.hero.badge':             { en:'Jianxin Building Materials Co.', fr:'Jianxin Building Materials Co.' },
    'home.hero.title':             { en:'Your <span class="nowrap">Cost-Value</span> Advantage in Gypsum, Boards &amp; Panels', fr:'Votre avantage qualité-prix en plaques de plâtre, panneaux et revêtements' },
    'home.hero.subtitle':          { en:'Gypsum boards, sheet boards, wall panels — factory-direct pricing, full-range construction supplies, one-stop sourcing.', fr:'Plaques de plâtre, panneaux, revêtements muraux — prix départ usine, gamme complète, approvisionnement unique.' },
    'home.hero.cta1':              { en:'View Our Products',       fr:'Voir nos produits' },
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
    'home.stats.1.label':          { en:'Countries Worldwide',     fr:'Pays dans le monde' },
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

    /* ─── Products Page ─── */
    'products.page.title':         { en:'Our Products',            fr:'Nos produits' },
    'products.page.subtitle':      { en:'Full-range building materials — factory-direct quality, one-stop supply', fr:'Gamme complète de matériaux de construction — qualité départ usine, approvisionnement unique' },
    'products.categories':         { en:'Product Categories',      fr:'Catégories de produits' },
    'products.explore':            { en:'Explore',                 fr:'Explorer' },
    'products.shop':               { en:'View Stock →',            fr:'Voir le stock →' },

    /* ─── About Page ─── */
    'about.hero.title':            { en:'About CELSON',            fr:'À propos de CELSON' },
    'about.hero.subtitle':         { en:'Two decades of manufacturing. CELSON is the global brand of Jianxin Building Materials Co. — trusted across 98 countries.', fr:'Deux décennies de fabrication. CELSON est la marque mondiale de Jianxin Building Materials Co. — reconnue dans 98 pays.' },
    'about.story.title':           { en:'From Factory Floor to Global Markets', fr:'De l\'usine aux marchés mondiaux' },
    'about.story.p1':              { en:'Jianxin Building Materials was founded over 20 years ago with a simple mission: produce the best gypsum boards and sheet boards at prices that work for builders everywhere.', fr:'Jianxin Building Materials a été fondée il y a plus de 20 ans avec une mission simple : produire les meilleures plaques de plâtre et panneaux à des prix accessibles aux constructeurs du monde entier.' },
    'about.story.p2':              { en:'From regional factory to global supply chain. CELSON stands for quality, efficiency, and best-value supply in every market we enter.', fr:'D\'une usine régionale à une chaîne d\'approvisionnement mondiale. CELSON incarne la qualité, l\'efficacité et le meilleur rapport qualité-prix sur chaque marché.' },
    'about.story.p3':              { en:'We help our clients build better, faster, and more profitably.', fr:'Nous aidons nos clients à construire mieux, plus vite et plus rentablement.' },
    'about.manufacturing.title':   { en:'Our Manufacturing Power',  fr:'Notre puissance de fabrication' },
    'about.manufacturing.subtitle':{ en:'Production facilities built for quality and scale', fr:'Des installations de production conçues pour la qualité et l\'échelle' },
    'about.manufacturing.1.label': { en:'Production Facility',      fr:'Installation de production' },
    'about.manufacturing.2.label': { en:'Production Lines',         fr:'Lignes de production' },
    'about.manufacturing.3.label': { en:'Skilled Workers',          fr:'Ouvriers qualifiés' },
    'about.manufacturing.4.label': { en:'Certified Quality',       fr:'Qualité certifiée' },
    'about.values.title':          { en:'What We Stand For',        fr:'Nos valeurs' },
    'about.values.subtitle':       { en:'The principles that guide every shipment, every relationship, every board we produce', fr:'Les principes qui guident chaque expédition, chaque relation, chaque panneau que nous produisons' },
    'about.values.1.title':        { en:'Quality Without Compromise', fr:'Qualité sans compromis' },
    'about.values.1.desc':         { en:'Every product meets or exceeds international standards. ISO-certified, CE-marked, and rigorously tested before it leaves our facility.', fr:'Chaque produit répond ou dépasse les normes internationales. Certifié ISO, marquage CE et rigoureusement testé avant de quitter notre usine.' },
    'about.values.2.title':        { en:'Fair Pricing, Always',     fr:'Prix justes, toujours' },
    'about.values.2.desc':         { en:'We believe premium materials shouldn\'t come with premium markups. Our factory-direct model keeps prices honest and margins healthy for our partners.', fr:'Nous croyons que les matériaux haut de gamme ne devraient pas avoir de majorations excessives. Notre modèle direct usine maintient des prix honnêtes et des marges saines pour nos partenaires.' },
    'about.values.3.title':        { en:'Reliability You Can Count On', fr:'Une fiabilité sur laquelle compter' },
    'about.values.3.desc':         { en:'On-time delivery isn\'t a goal — it\'s a guarantee. Our logistics team ensures your materials arrive when and where you need them.', fr:'La livraison à temps n\'est pas un objectif — c\'est une garantie. Notre équipe logistique s\'assure que vos matériaux arrivent quand et où vous en avez besoin.' },
    'about.values.4.title':        { en:'Partnership, Not Transaction', fr:'Partenariat, pas transaction' },
    'about.values.4.desc':         { en:'We invest in long-term relationships. When you grow, we grow. That\'s why we offer flexible terms, dedicated support, and customized solutions.', fr:'Nous investissons dans des relations à long terme. Quand vous grandissez, nous grandissons. C\'est pourquoi nous offrons des conditions flexibles, un support dédié et des solutions personnalisées.' },

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
    'shop.filter.sheet':           { en:'Sheet Boards',            fr:'Panneaux' },
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
    'detail.types.desc':           { en:'Choose the right grade for your project', fr:'Choisissez le bon grade pour votre projet' },

    /* ─── Product Detail — Applications ─── */
    'detail.apps.title':           { en:'Applications',            fr:'Applications' },
    'detail.apps.desc':            { en:'Where our products are used', fr:'Où nos produits sont utilisés' },

    /* ─── Product Detail — CTA ─── */
    'detail.cta.title':            { en:'Ready to Source Smarter?', fr:'Prêt à vous approvisionner plus intelligemment ?' },
    'detail.cta.subtitle':         { en:'Get a quote today and discover why builders in 98 countries choose CELSON.', fr:'Demandez un devis aujourd\'hui et découvrez pourquoi les constructeurs de 98 pays choisissent CELSON.' },
    'detail.cta.button1':          { en:'Request a Quote',         fr:'Demander un devis' },
    'detail.cta.button2':          { en:'Contact Sales',           fr:'Contacter les ventes' },

    /* ─── Product Detail — Explore ─── */
    'detail.explore.title':        { en:'Explore Other Products',  fr:'Explorez d\'autres produits' },
    'detail.explore.subtitle':     { en:'Discover our full range', fr:'Découvrez notre gamme complète' },

    /* ─── Product Detail — Prev/Next ─── */
    'detail.prev':                 { en:'Previous',                fr:'Précédent' },
    'detail.next':                 { en:'Next',                    fr:'Suivant' },

    /* ─── Product Detail — Gypsum Boards ─── */
    'gypsum.hero.badge':           { en:'Gypsum Boards',           fr:'Plaques de plâtre' },
    'gypsum.hero.title':           { en:'Premium Gypsum Boards for Every Project', fr:'Plaques de plâtre premium pour chaque projet' },
    'gypsum.hero.subtitle':        { en:'Standard, moisture-resistant and fire-rated gypsum boards — factory-direct from Jianxin, delivered to 98 countries.', fr:'Plaques de plâtre standard, résistantes à l\'humidité et coupe-feu — directement de l\'usine Jianxin, livrées dans 98 pays.' },
    'gypsum.specs.title':          { en:'Gypsum Board Specifications', fr:'Spécifications des plaques de plâtre' },
    'gypsum.types.title':          { en:'Gypsum Board Types',      fr:'Types de plaques de plâtre' },
    'gypsum.types.card1.title':    { en:'Standard Gypsum Board',   fr:'Plaque de plâtre standard' },
    'gypsum.types.card1.desc':     { en:'General-purpose board for interior walls and ceilings. Smooth surface, easy to cut and install.', fr:'Plaque polyvalente pour murs intérieurs et plafonds. Surface lisse, facile à couper et à installer.' },
    'gypsum.types.card2.title':    { en:'Moisture-Resistant Board', fr:'Plaque résistante à l\'humidité' },
    'gypsum.types.card2.desc':     { en:'Green-faced board with silicone-treated core — ideal for bathrooms, kitchens, and damp areas.', fr:'Plaque à face verte avec noyau traité silicone — idéale pour salles de bains, cuisines et zones humides.' },
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
    'sheet.hero.badge':            { en:'Sheet Boards',            fr:'Panneaux en feuille' },
    'sheet.hero.title':            { en:'Premium Sheet Boards — Plywood, MDF, OSB & More', fr:'Panneaux premium — Contreplaqué, MDF, OSB et plus' },
    'sheet.hero.subtitle':         { en:'Full range of engineered wood panels — factory-direct quality for construction and furniture.', fr:'Gamme complète de panneaux en bois reconstitué — qualité départ usine pour la construction et l\'ameublement.' },
    'sheet.specs.title':           { en:'Sheet Board Specifications', fr:'Spécifications des panneaux' },
    'sheet.types.title':           { en:'Sheet Board Types',       fr:'Types de panneaux' },
    'sheet.types.card1.title':     { en:'Plywood',                 fr:'Contreplaqué' },
    'sheet.types.card1.desc':      { en:'Multi-layer cross-grained veneer — high strength-to-weight ratio, excellent for structural applications.', fr:'Placage multicouche à grain croisé — excellent rapport résistance/poids, idéal pour applications structurelles.' },
    'sheet.types.card2.title':     { en:'MDF Board',               fr:'Panneau MDF' },
    'sheet.types.card2.desc':      { en:'Medium-density fiberboard with smooth, uniform surface — perfect for furniture, cabinets, and interior trim.', fr:'Panneau de fibres à densité moyenne avec surface lisse et uniforme — parfait pour meubles, armoires et finitions intérieures.' },
    'sheet.types.card3.title':     { en:'OSB Board',               fr:'Panneau OSB' },
    'sheet.types.card3.desc':      { en:'Oriented strand board with excellent load-bearing capacity — widely used in roofing, flooring, and wall sheathing.', fr:'Panneau à copeaux orientés avec excellente capacité portante — largement utilisé en toiture, plancher et revêtement mural.' },
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
    'calcium.hero.badge':          { en:'Calcium Silicate Board',  fr:'Panneau silicate de calcium' },
    'calcium.hero.title':          { en:'Calcium Silicate Boards — Fire-Rated & Moisture-Proof', fr:'Panneaux silicate de calcium — Coupe-feu & Résistant à l\'humidité' },
    'calcium.hero.subtitle':       { en:'High-performance boards for fire-rated walls, wet areas, and exterior sheathing.', fr:'Panneaux haute performance pour murs coupe-feu, zones humides et revêtement extérieur.' },
    'calcium.specs.title':         { en:'Calcium Silicate Specifications', fr:'Spécifications silicate de calcium' },
    'calcium.types.title':         { en:'Calcium Silicate Types',  fr:'Types de silicate de calcium' },

    /* ─── Product Detail — Outdoor & Decking ─── */
    'outdoor.hero.badge':          { en:'Outdoor & Decking',       fr:'Extérieur & Terrasses' },
    'outdoor.hero.title':          { en:'Outdoor Decking & Cladding Solutions', fr:'Terrasses & Bardages extérieurs' },
    'outdoor.hero.subtitle':       { en:'WPC decking, composite cladding, and exterior panels — weather-resistant and low maintenance.', fr:'Terrasses WPC, bardage composite et panneaux extérieurs — résistants aux intempéries et faible entretien.' },
    'outdoor.specs.title':         { en:'Outdoor & Decking Specifications', fr:'Spécifications terrasses & extérieur' },
    'outdoor.types.title':         { en:'Outdoor & Decking Types', fr:'Types de terrasses & extérieur' },

    /* ─── Product Detail — Tiles ─── */
    'tiles.hero.badge':            { en:'Tiles',                   fr:'Carrelage' },
    'tiles.hero.title':            { en:'Porcelain & Ceramic Tiles for Every Surface', fr:'Carrelage porcelaine & céramique pour toutes les surfaces' },
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
    'app.residential':             { en:'Residential Housing',     fr:'Logements résidentiels' },
    'app.hotel':                   { en:'Hotel & Hospitality',     fr:'Hôtellerie' },
    'app.furniture':               { en:'Furniture Manufacturing', fr:'Fabrication de meubles' },
    'app.flooring':                { en:'Flooring Underlayment',   fr:'Sous-couche de plancher' },
    'app.roofing':                 { en:'Roof Sheathing',          fr:'Revêtement de toit' },
    'app.wall.sheathing':          { en:'Wall Sheathing',          fr:'Revêtement mural' },
    'app.exterior':                { en:'Exterior Cladding',       fr:'Bardage extérieur' },
    'app.bathroom':                { en:'Bathrooms & Wet Areas',   fr:'Salles de bains & zones humides' },
    'app.kitchen':                 { en:'Kitchens',                fr:'Cuisines' },
    'app.facade':                  { en:'Building Facades',        fr:'Façades de bâtiments' },
    'app.terrace':                 { en:'Terraces & Balconies',    fr:'Terrasses & Balcons' },
    'app.warehouse':               { en:'Warehouses',              fr:'Entrepôts' },
    'app.industrial':              { en:'Industrial Facilities',   fr:'Installations industrielles' },
    'app.education':               { en:'Schools & Education',     fr:'Écoles & Éducation' },
    'app.healthcare':              { en:'Hospitals & Healthcare',  fr:'Hôpitaux & Santé' }
  },

  // Get translated text for a key
  t: function(key) {
    var entry = this.dict[key];
    if (!entry) return key; // fallback: return key itself
    return entry[this.lang] || entry['en'] || key;
  }
};
