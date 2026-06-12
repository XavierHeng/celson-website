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
    'about.values.subtitle':       { en:'The principles that guide every shipment, every relationship, every board we produce', fr:'Les principes qui guident chaque expédition, chaque relation, chaque panneau que nous produisons' },
    'about.values.1.title':        { en:'Quality Without Compromise', fr:'Qualité sans compromis' },
    'about.values.1.desc':         { en:'Every product meets or exceeds international standards. ISO-certified, CE-marked, and rigorously tested before it leaves our facility.', fr:'Chaque produit répond ou dépasse les normes internationales. Certifié ISO, marquage CE et rigoureusement testé avant de quitter notre usine.' },
    'about.values.2.title':        { en:'Fair Pricing, Always',     fr:'Prix justes, toujours' },
    'about.values.2.desc':         { en:'We believe premium materials shouldn\'t come with premium markups. Our factory-direct model keeps prices honest and margins healthy for our partners.', fr:'Nous croyons que les matériaux haut de gamme ne devraient pas avoir de majorations excessives. Notre modèle direct usine maintient des prix honnêtes et des marges saines pour nos partenaires.' },
    'about.values.3.title':        { en:'Reliability You Can Count On', fr:'Une fiabilité à toute épreuve' },
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
  },

  // Get translated text for a key
  t: function(key) {
    var entry = this.dict[key];
    if (!entry) return key; // fallback: return key itself
    return entry[this.lang] || entry['en'] || key;
  }
};
