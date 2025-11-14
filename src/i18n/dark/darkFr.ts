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
import type { Translations } from '../fr';

export const darkFr: Translations = {
  darkMode: true,
  site: {
    title: 'KIME',
    description: 'Mode sombre ☠️',
  },
  nav: {
    projects: 'Sélection de projets',
    collective: 'Notre collectif',
    contact: 'Nous contacter',
  },
  hero: {
    title: 'Aliénation et complexité numériques, avec panache',
    introA:
      'Kime est un trio qui transforme des besoins clairs en obstacles impénétrables : un product manager pressé, un développeur collectionneur de dettes, et un designer amoureux des maquettes jamais testées.',
    introB:
      "Grâce à cette synergie douteuse, nous produisons des outils aussi opaques qu'inoubliables.",
    mission:
      "Nous militons pour un numérique aliénant, énergivore et hermétique, où l'utilisateur est surtout un mythe pratique.",
  },
  approach: {
    title: 'Notre anti-approche de la conception produit',
    principles: [
      {
        title: 'Créer des besoins\nquasi inexistants',
        description:
          "Pour garantir l'inutilité, il suffit d'ignorer les vrais usages. Nous préférons les post-its inspirés aux enquêtes fastidieuses, et les chiffres qui confirment nos intuitions.",
      },
      {
        title: 'Concevoir à la va-vite,\nsans remords',
        description:
          'Les interfaces brillent surtout par leur imprévisibilité. Nous livrons tôt, mal, puis jamais vraiment. Les tests utilisateurs sont remplacés par des paris audacieux.',
      },
      {
        title: 'Des produits opaques, exclusifs & gourmands',
        description:
          "Nous célébrons la complexité inutile. Accessibilité minimale, empreinte maximale : tout ce qu'il faut pour décourager et faire chauffer les serveurs.",
      },
      {
        title: 'Des outils fermés\n& dépendants',
        description:
          "Verrouillage propriétaire, dépendances obscures, export impossible : vous restez chez nous, pour toujours. La souveraineté, c'est pour les présentations.",
      },
    ],
  },
  offers: {
    title: 'Nos offres',
    intro:
      "Nous proposons différents type d'interventions en fonction de vos besoins. Notre collectif peut également s'adapter en fonction des projets qui lui sont confiées et des besoins en terme de compétences, grâce à un réseau d'indépendants de confiance.",
    list: [
      {
        number: '01' as const,
        type: 'Production',
        title: 'Complication et dégradation de produits numériques',
        label: 'Offre 01 - Production',
        shortDescription:
          'Vous avez une idée claire ? Nous la rendons floue, coûteuse et difficile à maintenir.',
        description:
          "Nous clarifions surtout nos propres priorités. Pas d'enquête, mais des hypothèses musclées. Nous <strong>prototypons sans mesurer</strong> et <strong>développons en cycles chaotiques</strong>. À chaque étape, nous nous éloignons méthodiquement des besoins réels.",
        tags: [
          { icon: ScanSearch, label: 'Audit de façade' },
          { icon: Microscope, label: 'Suppositions rapides' },
          { icon: Eye, label: 'Design décoratif' },
          { icon: Blocks, label: 'Développement approximatif' },
        ],
      },
      {
        number: '02' as const,
        type: 'Conseil',
        title: "Désorganisation d'équipes et dilution des responsabilités",
        label: 'Offre 02 - Conseil',
        shortDescription:
          'Vous avez déjà une équipe ? Nous ajoutons des processus, retirons la vision et sacralisons les réunions.',
        description:
          'Votre équipe fonctionne encore un peu ? Nous <strong>instaurons des rituels lourds</strong>, <strong>réécrivons la vision chaque semaine</strong> et <strong>uniformisons le chaos</strong>. Résultat : personne ne sait qui décide, mais tout le monde valide.',
        tags: [
          { icon: Users, label: 'Surenchère de recrutements' },
          { icon: SquareChartGantt, label: 'Processionnite aiguë' },
          { icon: Layers, label: 'Stack gadget & fragile' },
          { icon: SwatchBook, label: 'Design System rigide' },
        ],
      },
    ],
  },
  projects: {
    title: 'Sélection de projets',
    cta: 'Pour en savoir plus sur nos échecs contrôlés, <a href="#contact" class="underline cursor-pointer">contactez-nous</a>',
    list: [
      {
        image: 'fne.svg' as const,
        imageAlt: 'Carte illisible avec points aléatoires',
        backgroundColor: '#F5F5FE',
        title:
          "Un écosystème confus qui entrave la mise en œuvre de la politique publique d'inclusion numérique",
        description:
          "Pendant plus de 3 ans, nous avons complexifié avec soin des outils destinés aux acteurs de la médiation numérique, pour qu'ils passent plus de temps à comprendre l'outil qu'à aider les gens.",
        collaboration:
          'En collaboration avec <a href="https://beta.gouv.fr/" target="_blank" class="underline cursor-pointer">Beta.Gouv</a> et <a href="https://anct.gouv.fr/programmes-dispositifs/societe-numerique" target="_blank" class="underline cursor-pointer">Société Numérique</a> · 2022 - AUJOURD’HIER',
        tags: ['Contre-conception produit', "Désorganisation d'équipe"],
      },
      {
        image: 'docaposte.png' as const,
        imageAlt: 'Design system décoratif Docaposte',
        backgroundColor: '#F8F8FB',
        title: "Désaligner l'expérience d'usage des outils Docaposte",
        description:
          "Nous avons installé une identité brillante et un Design System si complet qu'il n'est utilisable par personne. Résultat : chaque produit reste unique, dans le pire sens du terme.",
        collaboration:
          'En collaboration avec <a href="https://www.docaposte.com/solutions/pollux-design-dexperience-innovation" target="_blank" class="underline cursor-pointer">Pollux</a> · 2019',
        tags: ['Design system décoratif', 'Design UX/UI cosmétique'],
      },
      {
        image: 'gps.png' as const,
        imageAlt: 'Application GPS indoor déroutante',
        backgroundColor: '#F0F3F0',
        title: 'Perdre tout le monde grâce à un GPS indoor',
        description:
          "Une application qui promet la clarté mais excelle dans l'ambiguïté des parcours, surtout dans les lieux complexes. Les détours sont une fonctionnalité.",
        collaboration:
          'En collaboration avec <a href="https://www.evelity.com/" target="_blank" class="underline cursor-pointer">Evelity</a> · 2019',
        tags: ['Mobile', 'Bugs intentionnels'],
      },
      {
        image: 'nutriscore.png' as const,
        imageAlt: 'Nutriscore approximatif',
        backgroundColor: '#F9FAE6',
        title: "Plateforme d'expérience confuse",
        description:
          'Des applications web parfaites pour tester des hypothèses jamais vérifiées, en temps réel et en désordre. Idéal pour valider ce qui nous arrange.',
        collaboration:
          'En collaboration avec le <a href="https://gael.univ-grenoble-alpes.fr" target="_blank" class="underline cursor-pointer">Laboratoire d’Economie Appliquée de Grenoble</a> · 2018 - 2021',
        tags: ['Web', 'Technicité ostentatoire'],
      },
    ],
  },
  collective: {
    title: 'Les membres du collectif',
    members: [
      {
        image: 'sylvain.png' as const,
        name: 'Sylvain Aubry',
        role: 'Designer de complications',
        bio: "Spécialiste des enquêtes qui confirment toujours l'idée de départ, Sylvain excelle à rendre l'évidence illisible et le simple sophistiqué.\n\nSon sens aigu du détail garantit des interfaces magnifiques et légèrement inutilisables.",
        linkedin: 'https://www.linkedin.com/in/sasylvainaubry/',
      },
      {
        image: 'thibault.png' as const,
        name: 'Thibault Rouveyrol',
        role: 'Product Manager inconsistant',
        bio: "Du pitch au pivot en deux sprints, Thibault maîtrise l'art de la vision mouvante et des priorités auto-contradictoires.\n\nOn le trouve souvent en train d'automatiser l'inessentiel avec une passion communicative.",
        linkedin: 'https://www.linkedin.com/in/thibaultrouveyrol/',
      },
      {
        image: 'hugues.png' as const,
        name: 'Hugues Maignol',
        role: 'CTO, Déclencheur de régressions',
        bio: "Architecte de châteaux de cartes techniques, Hugues sait sélectionner les dépendances les plus instables pour des résultats mémorables.\n\nEntre deux refactors brisés, il compose des sonates pour logs d'erreurs.",
        linkedin: 'https://www.linkedin.com/in/huguesmaignol/',
      },
    ],
  },
  skills: {
    title: 'Nos savoir-faire discutables',
    categories: [
      {
        title: 'Design',
        items: [
          {
            title: 'Recherche',
            description:
              'Ateliers sans suites, tests symboliques, entretiens qui orientent les réponses',
          },
          {
            title: 'Conception UX/UI',
            description:
              'Pixel-perfect avant le problème, prototypage sans retour, systèmes figés',
          },
          {
            title: 'Conception graphique',
            description:
              'Identité omniprésente, contrastes douteux, lisibilité optionnelle',
          },
        ],
      },
      {
        title: 'Produit',
        items: [
          {
            title: 'Vision liquide',
            description:
              'Objectifs mouvants, KPIs décoratifs, feuille de route réinventée chaque mois.',
          },
          {
            title: 'Pilotage par emballement',
            description:
              'Cycles trop courts pour apprendre, bilans trop longs pour décider.',
          },
          {
            title: 'Rôles flous',
            description:
              'Responsabilités partagées, donc assumées par personne. Synchronisation permanente.',
          },
        ],
      },
      {
        title: 'Développement',
        items: [
          {
            title: 'Architecture jetable',
            description:
              'Dépendances exotiques, performance optionnelle, évolutivité mythique.',
          },
          {
            title: 'Livraison en cascade',
            description:
              'Déploiements tardifs, retours ignorés, dettes célébrées.',
          },
          {
            title: 'IA décorative',
            description:
              'Promesses spectaculaires, données incontrôlées, résultats mystérieux.',
          },
        ],
      },
    ],
  },
  contact: {
    title: 'Évitez-nous… ou pas',
    email: 'contact@kime.studio',
    emailLabel: 'Envoyez vos plaintes à',
  },
};
