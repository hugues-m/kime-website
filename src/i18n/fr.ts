import {
  Blocks,
  Eye,
  Layers,
  Microscope,
  ScanSearch,
  SquareChartGantt,
  SwatchBook,
  Users,
} from '@lucide/astro';

export const fr = {
  darkMode: false,
  site: {
    title: 'KIME',
    description: 'Design et développement de produits numériques',
  },
  nav: {
    projects: 'Sélection de projets',
    collective: 'Notre collectif',
    contact: 'Nous contacter',
  },
  hero: {
    title: 'Design et développement de produits numériques',
    introA:
      'Kime est un collectif de 3 professionnels\u00A0: designer, product manager et développeur',
    introB:
      "Grâce à nos compétences complémentaires, nous pouvons répondre à l'ensemble des besoins autour de la conception d'outils numériques.",
    mission:
      'Nous souhaitons mettre nos compétences au service de projets qui contribuent à un numérique émancipateur, durable et désirable.',
  },
  approach: {
    title: 'Notre approche de la conception produit',
    principles: [
      {
        title: 'Répondre\nà des besoins réels',
        description:
          'Pour concevoir un produit utile, il doit répondre aux besoins de ses usagers. Une enquête de design est un préalable à tout acte de conception. Différentes méthodes de recherches utilisateurs [qualitatives et quantitatives] sont utilisés tout au long de la conception produit.',
      },
      {
        title: 'Concevoir par itération,\navec soin',
        description:
          "Pour concevoir un produit désirable, les interfaces doivent être soignées, construites avec attention, en coopération constante avec les utilisateurs, testées et peaufinées continuellement. La conception en évolution permet d'atteindre un objectif\u00A0: faire mieux, à chaque itération.",
      },
      {
        title: 'Des produits simples, accessibles & frugaux',
        description:
          "La recherche de la simplicité [repérer le superflu] est au coeur de notre conception produit. La simplicité d'usage d'un produit viens soutenir son accessibilité à toutes et tous [simple à pratiquer et à comprendre] et sa frugalité [minimiser autant que possible son impact environnemental].",
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
    intro:
      "Nous proposons différents types d’interventions en fonction de vos besoins. Notre collectif peut également s'adapter en fonction des projets qui lui sont confiées et des besoins en terme de compétences, grâce à un réseau d'indépendants de confiance.",
    list: [
      {
        number: '01' as const,
        type: 'Production',
        title: 'Création et amélioration de produits numériques',
        label: 'Offre 01 - Production',
        shortDescription:
          'Vous avez une idée de produit, vous avez besoin d’une équipe pour le concevoir.',
        description:
          "Que vous fassiez évoluer un produit ou lanciez une idée, nous clarifions vos objectifs et les <strong>besoins réels des utilisateurs</strong>. Une enquête de design teste les hypothèses sur le terrain. Nous <strong>prototypons vite et mesurons l'impact</strong>. Les apprentissages guident <strong>un développement en cycles courts</strong> pour livrer de manière continue. À chaque étape, les retours utilisateurs nous font converger vers la solution la plus pertinente.",
        tags: [
          { icon: ScanSearch, label: 'Audit / Diagnostic' },
          { icon: Microscope, label: 'Enquête de design' },
          { icon: Eye, label: 'Design UX/UI' },
          { icon: Blocks, label: 'Développement' },
        ],
      },
      {
        number: '02' as const,
        type: 'Conseil',
        title:
          "Accompagnement à la structuration d'équipes et d'écosystèmes produits",
        label: 'Offre 02 - Conseil',
        shortDescription:
          'Vous avez déjà une équipe et un produit, mais vous avez besoin d’une aide structurelle, sur la vision ou la technique pour mener vos équipes vers l’autonomie.',
        description:
          "Votre équipe est en place. Nous apportons <strong>un conseil opérationnel en direction de produit, organisation d'équipe technique et design</strong>. Nous observons vos pratiques, clarifions la vision et les priorités, puis définissons les rôles et des habitudes de travail simples. Nous <strong>harmonisons le design, assainissons la tech et formons les responsables</strong> pour pérenniser les méthodes. Résultat\u00A0: une équipe plus autonome, mieux organisée et des services plus cohérents.",
        tags: [
          { icon: Users, label: 'Recrutement' },
          { icon: SquareChartGantt, label: "Organisation d'équipes produits" },
          { icon: Layers, label: 'Stack technique' },
          { icon: SwatchBook, label: 'Design System' },
        ],
      },
    ],
  },
  projects: {
    title: 'Sélection de projets',
    cta: 'Pour en savoir plus sur nos projets, <a href="#contact" class="underline cursor-pointer">contactez-nous</a>',
    featured: {
      image: 'fne.svg' as const,
      imageAlt: 'Carte de France avec points de médiation numérique',
      title:
        "Un ensemble d'outils numériques utiles à la mise en oeuvre de la politique publique nationale d'inclusion numérique",
      description:
        "Nous avons accompagné, pendant plus de 3 ans, le programme Société Numérique de l'Agence Nationale de la Cohésion des Territoires dans l'amélioration et la conception d'un écosystème d'outils numériques utiles aux acteurs de la médiation numérique pour accompagner les personnes éloignées du numérique et piloter différents dispositifs.",
      collaboration:
        'En collaboration avec <a href="https://beta.gouv.fr/" target="_blank" class="underline cursor-pointer">Beta.Gouv</a> et <a href="https://anct.gouv.fr/programmes-dispositifs/societe-numerique" target="_blank" class="underline cursor-pointer">Société Numérique</a> · 2022 - AUJOURD’HUI',
      tags: ['Conception produit', "Structuration d'équipe"],
    },
    list: [
      {
        image: 'docaposte.jpg' as const,
        imageAlt: 'Design system Docaposte',
        backgroundColor: '#417dff',
        title: "Mettre en cohérence l'expérience d'usage des outils Docaposte",
        description:
          'Conception du Design System Docaposte, avec un enjeu double\u00A0: traduire leur nouvelle identité visuelle au sein de produits hétérogènes & les faire évoluer vers plus de cohérence visuellement et dans leurs usages.',
        collaboration:
          'En collaboration avec <a href="https://www.docaposte.com/solutions/pollux-design-dexperience-innovation" target="_blank" class="underline cursor-pointer">Pollux</a> · 2019',
        tags: ['Design system', 'Design UX/UI'],
      },
      {
        image: 'gps.png' as const,
        imageAlt: 'Application GPS indoor Evelity',
        backgroundColor: '#f5f5fe',
        title: 'Application de GPS indoor pour personnes déficientes visuelles',
        description:
          "Une application mobile iOS et Android qui permet aux personnes en situation de handicap visuel ou moteur d'être guidées, en extérieur comme en intérieur dans des lieux complexes comme des stations de métro.",
        collaboration:
          'En collaboration avec <a href="https://www.evelity.com/" target="_blank" class="underline cursor-pointer">Evelity</a> · 2019',
        tags: ['Mobile', 'Développement'],
      },
      {
        image: 'nutriscore.png' as const,
        imageAlt: 'Nutriscore',
        backgroundColor: '#f4ed95',
        title: "Plateforme d'expérience pour la recherche",
        description:
          'Une application web qui permet aux chercheurs en économie comportementale de créer des protocoles et mener des expériences multijoueurs en temps réel. Utilisé par exemple pour mettre en place le nutriscore en France.',
        collaboration:
          'En collaboration avec le <a href="https://gael.univ-grenoble-alpes.fr" target="_blank" class="underline cursor-pointer">Laboratoire d’Economie Appliquée de Grenoble</a> · 2018 - 2021',
        tags: ['Web', 'Développement'],
      },
    ],
  },
  collective: {
    title: 'Les membres du collectif',
    members: [
      {
        image: 'sylvain.png' as const,
        name: 'Sylvain Aubry',
        role: 'Designer',
        bio: 'Designer UX/UI formé à une approche globale du design, Sylvain est passionné par les phases d’enquêtes et de recherches utilisateurs qui impliquent une forme d’immersion dans une situation sociale et des pratiques spécifiques.\n\nSylvain apporte également un soin et une exigence particulière à la conception graphique des interfaces grâce à ses compétences en design graphique.',
        linkedin: 'https://www.linkedin.com/in/sasylvainaubry/',
      },
      {
        image: 'thibault.png' as const,
        name: 'Thibault Rouveyrol',
        role: 'Product Manager',
        bio: 'De San Francisco à Paris, Thibault a piloté des produits dans des environnements exigeants. Il sait faire émerger la bonne direction, transformer les besoins des usagers en décisions claires et installer des façons de travailler qui tiennent dans le temps.\n\nUn objectif\u00A0: des services utiles, bien conçus, livrés sans complexité inutile, par des équipes qui gagnent en confiance et en autonomie.',
        linkedin: 'https://www.linkedin.com/in/thibaultrouveyrol/',
      },
      {
        image: 'hugues.png' as const,
        name: 'Hugues Maignol',
        role: 'CTO, Développeur',
        bio: 'Entrepreneur et CTO expérimenté, Hugues a accompagné des entreprises de la startup à la multinationale. Il conçoit des architectures techniques adaptées à chaque projet et dirige les équipes de développement pour les concrétiser.\n\nIl privilégie des pratiques de développement qui favorisent la qualité et la maintenabilité, la collaboration et un environnement de travail serein.',
        linkedin: 'https://www.linkedin.com/in/huguesmaignol/',
      },
    ],
  },
  skills: {
    title: 'Nos savoir-faire',
    categories: [
      {
        title: 'Design',
        items: [
          {
            title: 'Recherche',
            description:
              "Diagnostic de l'existant, enquête terrain et restitution des apprentissages, ateliers d'idéation et de co-construction, tests et entretiens utilisateurs",
          },
          {
            title: 'Conception UX/UI',
            description:
              "Parcours utilisateurs et wireframes, design d'interface (UI), design system, prototypage interactif au plus proche de la solution à développer",
          },
          {
            title: 'Conception graphique',
            description:
              'Identité visuelle, charte graphique, supports graphiques numériques et imprimés',
          },
        ],
      },
      {
        title: 'Produit',
        items: [
          {
            title: 'Cadrage et vision',
            description:
              'Clarification des objectifs, des publics et des enjeux, définition de la proposition de valeur, feuille de route priorisée et mesurable.',
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
            description:
              'Concevoir la stratégie technique adaptée aux besoins et contraintes du projet, pensée pour la performance et l’évolutivité.',
          },
          {
            title: 'Code',
            description:
              'Livraison continue, tests automatisés, méthodologies conformes aux standards et meilleures pratiques de développement.',
          },
          {
            title: 'Intelligence artificielle',
            description:
              'Intégration d’outils IA, en respectant vos contraintes et en gardant la main sur vos données.',
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
