import { Blocks, Eye, Layers, Microscope, ScanSearch, SquareChartGantt, SwatchBook, Users } from "@lucide/astro";

export const fr = {
  site: {
    title: 'KIME',
    description: 'Design et développement de produits numériques',
  },
  nav: {
    projects: 'Projets',
    collective: 'Notre collectif',
    contact: 'Contact',
  },
  hero: {
    title: 'Design et développement de produits numériques',
    intro:
      "Kime est un collectif de 3 professionnels aux compétences complémentaires : <strong>un product manager, un développeur et un designer</strong>. Grâce à cette complémentarité, nous pouvons répondre à <strong>l'ensemble des besoins autour de la conception d'outils numériques</strong>.",
    mission:
      'Nous souhaitons mettre nos compétences au service de projets qui contribuent à un numérique émancipateur, durable et désirable.',
  },
  approach: {
    title: 'Notre approche de la conception produit',
    principles: [
      {
        title: 'Répondre\nà des besoins réels',
        description:
          'Pour concevoir un produit utile, il doit répondre aux besoins de ses usagers. Une enquête de design est un préalable à tout acte de conception. La recherche utilisateur basé sur des enquêtes quantitatives et qualitatives ....',
      },
      {
        title: 'Concevoir par itération,\navec soin',
        description:
          "Pour concevoir un produit utilisable et utilisé, les interfaces doivent être soignées, construites avec attention, en coopération constante avec les utilisateurs, testées et peaufinées continuellement. La conception en évolution permet d'atteindre un objectif : faire mieux, à chaque itération.",
      },
      {
        title: 'Des produits simples, accessibles & frugaux',
        description:
          "La recherche de la simplicité d'usage (repérer le superflu) est au coeur de notre conception produit. La simplicité d'usage d'un produit viens également soutenir son accessibilité à toutes et tous (simples à pratiquer et à comprendre) et sa frugalité (qui minimise autant que possible leur impact environnemental).",
      },
      {
        title: 'Des outils ouverts\n& souverains',
        description:
          "Nous privilégions des briques technologiques libres et open source, sans verrouillage propriétaire. Vous restez maître de votre projet et de vos données. L'hébergement est opéré par des partenaires de confiance situés en France ou en Europe.",
      },
    ],
  },
  offers: {
    title: 'Nos offres',
    intro: 'Nous proposons différents type d\'interventions en fonction de vos besoins :',
    introItems: [
      'Production : vous avez une idée de produit, vous avez besoin d\'une équipe pour gérer la réalisation.',
      'Conseil : vous avez déjà une équipe et un produit, mais ça ne fonctionne pas comme espéré. Vous souhaitez une aide structurelle, sur la vision ou la technique pour mener vos équipes vers l\'autonomie',
    ],
    list: [
      {
        number: '01' as const,
        type: 'Production',
        title: 'Création et amélioration de produits numériques',
        description:
          'Que vous fassiez évoluer un produit ou lanciez une idée, nous clarifions vos objectifs et les <strong>besoins réels des utilisateurs</strong>. Une enquête de design teste les hypothèses sur le terrain. Nous <strong>prototypons vite et mesurons l\'impact</strong>. Les apprentissages guident <strong>un développement en cycles courts</strong> pour livrer de manière continue. À chaque étape, les retours utilisateurs nous font converger vers la solution la plus pertinente.',
        tags: [
          {icon: ScanSearch, label: 'Audit / Diagnostic'},
          {icon: Microscope, label: 'Enquête de design'},
          {icon: Eye, label: 'Design UX/UI'},
          {icon: Blocks, label: 'Développement'},
        ],
      },
      {
        number: '02' as const,
        type: 'Conseil',
        title:
          "Accompagnement à la structuration d'équipes et d'écosystèmes produits",
        description:
          'Votre équipe est en place. Nous apportons <strong>un conseil opérationnel en direction de produit, organisation d\'équipe technique et design</strong>. Nous observons vos pratiques, clarifions la vision et les priorités, puis définissons les rôles et des habitudes de travail simples. Nous <strong>harmonisons le design, assainissons la tech et formons les responsables</strong> pour pérenniser les méthodes. Résultat: une équipe plus autonome, mieux organisée et des services plus cohérents.',
        tags: [
          {icon: Users, label: 'Recrutement'},
          {icon: SquareChartGantt, label: 'Organisation d\'équipes produits'},
          {icon: Layers, label: 'Stack technique'},
          {icon: SwatchBook, label: 'Design System'},
        ],
      },
    ],
    outro:
      "Notre collectif peut également s'adapter en fonction des projets qui lui sont confiées et des besoins en terme de compétences, grâce à un réseau d'indépendants de confiance.",
  },
  projects: {
    title: 'Sélection de projets',
    cta: 'Pour en savoir plus sur nos projets, contactez-nous',
  },
  collective: {
    title: 'Les membres du collectif',
    members: [
      {
        image: '/images/thibault.png',
        name: 'Thibault Rouveyrol',
        role: 'Product Manager',
        bio: "De San Francisco à Paris, Thibault a travaillé dans des univers comme l'IoT, le jeu vidéo, la santé, ou l'accessibilité. Il a acquis une vision stratégique et globale de la réalisation de projet High Tech en dirigeant et coordonnant les équipes techniques et design.\n\nVous pouvez également le croiser dans son jardin à automatiser tout ce qui peut l'être, ou en sac à dos quelque part autour du monde.",
        linkedin: 'https://www.linkedin.com/in/thibaultrouveyrol/',
      },
      {
        image: '/images/hugues.png',
        name: 'Hugues Maignol',
        role: 'CTO, Développeur',
        bio: "Entrepreneur, Hugues a fondé et accompagné en tant que CTO des entreprises, de la startup à la multinationale. Il saura concevoir l'architecture technique qui convient à votre projet et mener l'équipe pour le réaliser.\n\nEntre deux sessions de code, vous pouvez le trouver sur les tatami ou devant son piano.",
        linkedin: 'https://www.linkedin.com/',
      },
      {
        image: '/images/sylvain.png',
        name: 'Sylvain Aubry',
        role: 'Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie lacinia augue, non aliquet diam euismod quis. Vivamus commodo sodales velit, et pulvinar augue mollis sed. Nam a odio pulvinar libero sodales dignissim. Quisque blandit tempor tellus.\n\nEtiam scelerisque imperdiet odio, id cursus diam tempus quis. Nam a odio pulvinar libero.',
        linkedin: 'https://www.linkedin.com/',
      },
    ],
  },
  skills: {
    title: 'Nos savoir-faire',
    categories: [
      {
        title: 'Produit',
        items: [
          {
            title: 'Cadrage et vision',
            description:
              "Clarification des objectifs, des publics et des enjeux, définition de la proposition de valeur, feuille de route priorisée et mesurable.",
          },
          {
            title: 'Pilotage par itérations',
            description:
              'Organisation du travail en cycles courts, revue régulière des résultats, ajustements continus pour livrer de la valeur rapidement.',
          },
          {
            title: 'Responsabilités et rôles',
            description:
              'Répartition claire des responsabilités, rituels simples et utiles, synchronisation entre produit, design et technique.',
          },
        ],
      },
      {
        title: 'Développement',
        items: [
          {
            title: 'Architecture',
            description: "Concevoir la stratégie technique pour les besoins et contraintes du projet, pensée pour la performance et l’évolutivité",
          },
          {
            title: 'Delivery',
            description: "Livraison de valeur continue, en utilisant des technologies open source dans un respect des dernières normes et standards",
          }, 
          {
            title: 'Intelligence artificielle',
            description: "Intégration d’outils IA, tout en gardant la main sur vos données",
          },
        ],
      },
      {
        title: 'Design',
        items: [
          {
            title: 'Recherche utilisateur',
            description:
              "Enquête terrain, diagnostic, ateliers d'idéation, tests et entretiens utilisateurs",
          },
          {
            title: 'Conception UX/UI',
            description:
              'Expérience et interface utilisateur, prototypage, design system',
          },
          {
            title: 'Design graphique',
            description:
              'Identité visuelle, supports graphiques numériques et imprimés',
          },
        ],
      },
    ],
  },
  contact: {
    title: 'Contactez-nous pour discuter de votre projet',
    email: 'contact@kime.studio',
    emailLabel: 'Envoyez nous un email à',
  },
};

export type Translations = typeof fr;
