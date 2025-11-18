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

export const en = {
  darkMode: false,
  site: {
    title: 'KIME',
    description: 'Digital product design & development',
  },
  nav: {
    projects: 'Selected work',
    collective: 'Our collective',
    contact: 'Contact us',
  },
  hero: {
    title: 'Digital product design & development',
    introA:
      'Kime is a three‑person collective: a designer, a product manager, and a developer.',
    introB:
      'With complementary skills, we cover the full spectrum of needs across the digital product lifecycle.',
    mission:
      'We put our skills to work on projects that make the digital world more empowering, sustainable, and desirable.',
  },
  approach: {
    title: 'Our approach to product design',
    principles: [
      {
        title: 'Address real needs',
        description:
          'Useful products start with understanding users. We begin with design research and keep learning throughout the project. We run qualitative and quantitative studies across the product cycle to ground decisions in evidence.',
      },
      {
        title: 'Iterate, with care',
        description:
          'Desirable products are crafted. We co‑create with users, test early and often, and refine continuously. Short feedback loops and iterative design help us ship better outcomes each time.',
      },
      {
        title: 'Simple, accessible & low‑impact',
        description:
          'Simplicity—removing the non‑essential—is central to our practice. Clear, easy‑to‑use products improve accessibility for everyone and reduce environmental impact.',
      },
      {
        title: 'Open & sovereign tooling',
        description:
          'We favor free and open‑source building blocks without vendor lock‑in. You stay in control of your project and your data. Hosting is provided by trusted partners based in France or Europe.',
      },
    ],
  },
  offers: {
    title: 'Our services',
    intro:
      'We tailor our involvement to your needs. Our collective can also scale with a trusted network of independents when projects require additional expertise.',
    list: [
      {
        number: '01' as const,
        type: 'Delivery',
        title: 'New builds and continuous improvement',
        label: 'Offer 01 - Delivery',
        shortDescription:
          'You have a product idea and need a team to bring it to life. We support you from discovery through to launch.',
        description:
          'Whether you’re evolving an existing service or launching something new, we clarify your goals and <strong>your users’ real needs</strong>. We validate hypotheses through field <strong>design research</strong>. We <strong>prototype fast and measure impact</strong>. What we learn guides <strong>short development cycles</strong> and continuous delivery. At every step, user feedback helps us converge on the most relevant solution.',
        tags: [
          { icon: ScanSearch, label: 'Audit / Assessment' },
          { icon: Microscope, label: 'Design research' },
          { icon: Eye, label: 'UX/UI design' },
          { icon: Blocks, label: 'Development' },
        ],
      },
      {
        number: '02' as const,
        type: 'Advisory',
        title: 'Structuring product teams and ecosystems',
        label: 'Offer 02 - Advisory',
        shortDescription:
          'You already have a team and a product, but need support on vision or technology to grow team autonomy.',
        description:
          'Your team is in place. We provide <strong>hands‑on advisory in product leadership, technical team organization, and design</strong>. We observe current practices, clarify vision and priorities, then define roles and simple ways of working. We <strong>align design, stabilize the tech, and train leads</strong> to sustain the approach. Result: a more autonomous, better‑organized team and more coherent services.',
        tags: [
          { icon: Users, label: 'Hiring' },
          { icon: SquareChartGantt, label: 'Product team organization' },
          { icon: Layers, label: 'Technology stack' },
          { icon: SwatchBook, label: 'Design system' },
        ],
      },
    ],
  },
  projects: {
    title: 'Selected work',
    cta: 'To learn more about our projects, <a href="#contact" class="underline cursor-pointer">get in touch</a>',
    list: [
      {
        image: 'fne.svg' as const,
        imageAlt: 'Map of France with digital inclusion sites',
        backgroundColor: '#F5F5FE',
        title:
          'A suite of digital tools supporting France’s national policy for digital inclusion',
        description:
          'For over three years, we partnered with the Société Numérique program at the Agence Nationale de la Cohésion des Territoires to improve and design an ecosystem of tools that help digital‑inclusion practitioners support people excluded from digital services and manage national programs.',
        collaboration:
          'In collaboration with <a href="https://beta.gouv.fr/" target="_blank" class="underline cursor-pointer">Beta.Gouv</a> and <a href="https://anct.gouv.fr/programmes-dispositifs/societe-numerique" target="_blank" class="underline cursor-pointer">Société Numérique</a> · 2022 – present',
        tags: ['Product design', 'Team structure'],
      },
      {
        image: 'docaposte.png' as const,
        imageAlt: 'Docaposte design system',
        backgroundColor: '#F8F8FB',
        title: 'Bringing consistency to Docaposte’s product experience',
        description:
          'Design of the Docaposte Design System with a dual objective: translate their new visual identity across heterogeneous products and evolve them toward greater visual and usage consistency.',
        collaboration:
          'In collaboration with <a href="https://www.docaposte.com/solutions/pollux-design-dexperience-innovation" target="_blank" class="underline cursor-pointer">Pollux</a> · 2019',
        tags: ['Design system', 'UX/UI design'],
      },
      {
        image: 'gps.png' as const,
        imageAlt: 'Evelity indoor navigation app',
        backgroundColor: '#F0F3F0',
        title: 'Indoor GPS app for people with visual impairments',
        description:
          'An iOS and Android app that guides people with visual or motor disabilities both outdoors and indoors in complex venues such as metro stations.',
        collaboration:
          'In collaboration with <a href="https://www.evelity.com/" target="_blank" class="underline cursor-pointer">Evelity</a> · 2019',
        tags: ['Mobile', 'Development'],
      },
      {
        image: 'nutriscore.png' as const,
        imageAlt: 'Nutri-Score',
        backgroundColor: '#F9FAE6',
        title: 'Real‑time experiment platform for research',
        description:
          'A web app that lets behavioral economists build protocols and run real‑time, multi‑player experiments—for example, used in the rollout of the Nutri‑Score in France.',
        collaboration:
          'In collaboration with the <a href="https://gael.univ-grenoble-alpes.fr" target="_blank" class="underline cursor-pointer">Laboratoire d’Économie Appliquée de Grenoble</a> · 2018 – 2021',
        tags: ['Web', 'Development'],
      },
    ],
  },
  collective: {
    title: 'Our collective',
    members: [
      {
        image: 'sylvain.png' as const,
        name: 'Sylvain Aubry',
        role: 'Designer',
        bio: 'A UX/UI designer with a holistic approach, Sylvain is passionate about fieldwork and user research that immerses him in specific social contexts and practices.\n\nHe brings exacting visual craft to interface design thanks to his strong graphic design skills.',
        linkedin: 'https://www.linkedin.com/in/sasylvainaubry/',
      },
      {
        image: 'thibault.png' as const,
        name: 'Thibault Rouveyrol',
        role: 'Product Manager',
        bio: 'From San Francisco to Paris, Thibault has led products in demanding environments. He surfaces the right direction, turns user needs into clear decisions, and installs ways of working that last.\n\nOne goal: useful services, well designed, delivered without unnecessary complexity, by teams growing in confidence and autonomy.',
        linkedin: 'https://www.linkedin.com/in/thibaultrouveyrol/',
      },
      {
        image: 'hugues.png' as const,
        name: 'Hugues Maignol',
        role: 'CTO, Developer',
        bio: 'An entrepreneur and seasoned CTO, Hugues has supported companies from startups to multinationals. He designs technical architectures tailored to each project and leads development teams to deliver them.\n\nHe favors development practices that improve quality and maintainability, foster collaboration, and create a positive working environment.',
        linkedin: 'https://www.linkedin.com/in/huguesmaignol/',
      },
    ],
  },
  skills: {
    title: 'Our capabilities',
    categories: [
      {
        title: 'Design',
        items: [
          {
            title: 'Research',
            description:
              'Current‑state audit, field studies and insight synthesis, ideation and co‑creation workshops, user testing and interviews',
          },
          {
            title: 'UX/UI design',
            description:
              'User journeys and wireframes, interface design (UI), design systems, interactive prototyping',
          },
          {
            title: 'Visual design',
            description:
              'Visual identity, brand guidelines, digital and print assets',
          },
        ],
      },
      {
        title: 'Product',
        items: [
          {
            title: 'Framing & vision',
            description:
              'Clarify goals, audiences, and stakes; define the value proposition; build a prioritized, measurable roadmap.',
          },
          {
            title: 'Iterative delivery',
            description:
              'Organize work in short cycles, review results regularly, and adjust continuously to deliver value quickly.',
          },
          {
            title: 'Roles & responsibilities',
            description:
              'Clear ownership, simple and useful rituals, tight alignment across product, design, and engineering.',
          },
        ],
      },
      {
        title: 'Development',
        items: [
          {
            title: 'Architecture',
            description:
              'Design technical strategy tailored to project needs and constraints, built for performance and scalability.',
          },
          {
            title: 'Code',
            description:
              'Continuous delivery, automated testing, standards‑compliant methodologies and engineering best practices.',
          },
          {
            title: 'Artificial intelligence',
            description:
              'Integrate AI tools while respecting your constraints and keeping you in control of your data.',
          },
        ],
      },
    ],
  },
  contact: {
    title: 'Contact us to discuss your project',
    email: 'contact@kime.studio',
    emailLabel: 'Send us an email at',
  },
};

export type Translations = typeof en;
