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
import type { Translations } from './fr';

export const en: Translations = {
  site: {
    title: 'KIME',
    description: 'Design and development of digital products',
  },
  nav: {
    projects: 'Projects',
    collective: 'Our collective',
    contact: 'Contact',
  },
  hero: {
    title: 'Design and development of digital products',
    intro:
      'Kime is a collective of 3 professionals with complementary skills: <strong>a product manager, a developer and a designer</strong>. Thanks to this complementarity, we can respond to <strong>all needs around the design of digital tools</strong>.',
    mission:
      'We want to put our skills at the service of projects that contribute to an emancipatory, sustainable and desirable digital world.',
  },
  approach: {
    title: 'Our product design approach',
    principles: [
      {
        title: 'Respond\nto real needs',
        description:
          'To design a useful product, it must meet the needs of its users. A design survey is a prerequisite for any act of design. User research based on quantitative and qualitative surveys ....',
      },
      {
        title: 'Design by iteration,\nwith care',
        description:
          'To design a usable and used product, interfaces must be refined, built with attention, in constant cooperation with users, tested and continuously refined. Design evolution makes it possible to achieve a goal: to do better, with each iteration.',
      },
      {
        title: 'Simple, accessible & frugal products',
        description:
          'The search for simplicity of use (identifying the superfluous) is at the heart of our product design. The simplicity of use of a product also supports its accessibility to all (simple to practice and understand) and its frugality (which minimizes its environmental impact as much as possible).',
      },
      {
        title: 'Open\n& sovereign tools',
        description:
          'We favor free and open source technological building blocks, without proprietary lock-in. You remain in control of your project and your data. Hosting is operated by trusted partners located in France or Europe.',
      },
    ],
  },
  offers: {
    title: 'Our offers',
    intro: 'We offer different types of interventions according to your needs:',
    introItems: [
      'Production: you have a product idea, you need a team to manage the implementation.',
      "Consulting: you already have a team and product, but it's not working as expected. You want structural help, on vision or technology to lead your teams to autonomy",
    ],
    list: [
      {
        number: '01',
        type: 'Production',
        title: 'Creation and improvement of digital products',
        description:
          'Whether you are growing a product or launching an idea, we clarify your objectives and <strong>real user needs</strong>. A design survey tests hypotheses in the field. We <strong>prototype quickly and measure impact</strong>. Learning guides <strong>development in short cycles</strong> to deliver continuously. At each stage, user feedback helps us converge to the most relevant solution.',
        tags: [
          { icon: ScanSearch, label: 'Audit / Diagnostic' },
          { icon: Microscope, label: 'Design survey' },
          { icon: Eye, label: 'UX/UI Design' },
          { icon: Blocks, label: 'Development' },
        ],
      },
      {
        number: '02',
        type: 'Consulting',
        title: 'Support for structuring teams and product ecosystems',
        description:
          'Your team is in place. We provide <strong>operational consulting on product direction, technical team and design organization</strong>. We observe your practices, clarify vision and priorities, then define roles and simple work habits. We <strong>harmonize design, clean up tech and train leaders</strong> to sustain methods. Result: a more autonomous team, better organized and more coherent services.',
        tags: [
          { icon: Users, label: 'Recruitment' },
          { icon: SquareChartGantt, label: 'Product team organization' },
          { icon: Layers, label: 'Technical stack' },
          { icon: SwatchBook, label: 'Design System' },
        ],
      },
    ],
    outro:
      'Our collective can also adapt according to the projects entrusted to it and the needs in terms of skills, thanks to a network of trusted freelancers.',
  },
  projects: {
    title: 'Selected projects',
    cta: 'To learn more about our projects, <a href="#contact" class="underline cursor-pointer">contact us</a>',
    featured: {
      image: 'fne.svg' as const,
      imageAlt: 'Map of France with digital mediation points',
      title:
        'A set of digital tools useful for implementing the national public policy on digital inclusion',
      description:
        'For more than 3 years, we have supported the Digital Society program of the National Agency for Territorial Cohesion in improving and designing an ecosystem of digital tools useful for digital mediation actors to support people who are far from digital technology and manage various programs.',
      collaboration:
        'In collaboration with <a href="https://beta.gouv.fr/" target="_blank" class="underline cursor-pointer">Beta.Gouv</a> and <a href="https://anct.gouv.fr/programmes-dispositifs/societe-numerique" target="_blank" class="underline cursor-pointer">Société Numérique</a> · 2022 - TODAY',
      tags: ['Product design', 'Team structuring'],
    },
    list: [
      {
        image: 'docaposte.jpg' as const,
        imageAlt: 'Docaposte design system',
        backgroundColor: '#417dff',
        title: 'Making the user experience of Docaposte tools consistent',
        description:
          'The project objective is twofold: Install the new Docaposte identity within these products & create a Design System that is easy to use and adapt to very diverse B2B products. This Design System is both a toolbox and a user guide for all product teams.',
        collaboration:
          'In collaboration with <a href="https://www.docaposte.com/solutions/pollux-design-dexperience-innovation" target="_blank" class="underline cursor-pointer">Pollux</a> · 2019',
        tags: ['Design system', 'UX/UI Design'],
      },
      {
        image: 'gps.png' as const,
        imageAlt: 'Evelity indoor GPS application',
        backgroundColor: '#f5f5fe',
        title: 'Indoor GPS application for visually impaired people',
        description:
          'An iOS and Android mobile application that allows people with visual or motor disabilities to be guided, outdoors and indoors in complex places such as metro stations.',
        collaboration:
          'In collaboration with <a href="https://www.evelity.com/" target="_blank" class="underline cursor-pointer">Evelity</a> · 2019',
        tags: ['Mobile', 'Development'],
      },
      {
        image: 'nutriscore.png' as const,
        imageAlt: 'Nutriscore',
        backgroundColor: '#f4ed95',
        title: 'Experimentation platform for research',
        description:
          'Web applications for experiments in behavioral economics to design and conduct "multiplayer" research protocols in real time. Used in particular to implement the nutriscore in France.',
        collaboration:
          'In collaboration with the <a href="https://gael.univ-grenoble-alpes.fr" target="_blank" class="underline cursor-pointer">Laboratory of Applied Economics of Grenoble</a> · 2018 - 2021',
        tags: ['Web', 'Development'],
      },
    ],
  },
  collective: {
    title: 'The members of the collective',
    members: [
      {
        image: 'sylvain.png' as const,
        name: 'Sylvain Aubry',
        role: 'Designer',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie lacinia augue, non aliquet diam euismod quis. Vivamus commodo sodales velit, et pulvinar augue mollis sed. Nam a odio pulvinar libero sodales dignissim. Quisque blandit tempor tellus.\n\nEtiam scelerisque imperdiet odio, id cursus diam tempus quis. Nam a odio pulvinar libero.',
        linkedin: 'https://www.linkedin.com/',
      },
      {
        image: 'thibault.png' as const,
        name: 'Thibault Rouveyrol',
        role: 'Product Manager',
        bio: 'From San Francisco to Paris, Thibault has worked in areas such as IoT, video games, health, or accessibility. He has acquired a strategic and global vision of High Tech project realization by managing and coordinating technical and design teams.\n\nYou can also find him in his garden automating everything that can be, or with a backpack somewhere around the world.',
        linkedin: 'https://www.linkedin.com/in/thibaultrouveyrol/',
      },
      {
        image: 'hugues.png' as const,
        name: 'Hugues Maignol',
        role: 'CTO, Developer',
        bio: 'Entrepreneur, Hugues has founded and supported companies as CTO, from startups to multinationals. He will know how to design the technical architecture that suits your project and lead the team to achieve it.\n\nBetween two coding sessions, you can find him on the tatami or at his piano.',
        linkedin: 'https://www.linkedin.com/',
      },
    ],
  },
  skills: {
    title: 'Our expertise',
    categories: [
      {
        title: 'Design',
        items: [
          {
            title: 'User research',
            description:
              'Field research, diagnostics, ideation workshops, user testing and interviews',
          },
          {
            title: 'UX/UI Design',
            description:
              'User experience and interface, prototyping, design system',
          },
          {
            title: 'Graphic design',
            description:
              'Visual identity, digital and printed graphic materials',
          },
        ],
      },
      {
        title: 'Product',
        items: [
          {
            title: 'Framing and vision',
            description:
              'Clarification of objectives, audiences and challenges, definition of value proposition, prioritized and measurable roadmap.',
          },
          {
            title: 'Iteration-driven delivery',
            description:
              'Organization of work in short cycles, regular review of results, continuous adjustments to deliver value quickly.',
          },
          {
            title: 'Responsibilities and roles',
            description:
              'Clear allocation of responsibilities, simple and useful rituals, synchronization between product, design and technology.',
          },
        ],
      },
      {
        title: 'Development',
        items: [
          {
            title: 'Architecture',
            description:
              'Design technical strategy for project needs and constraints, built for performance and scalability',
          },
          {
            title: 'Delivery',
            description:
              'Continuous value delivery, using open source technologies while respecting latest standards and best practices',
          },
          {
            title: 'Artificial intelligence',
            description:
              'Integration of AI tools while maintaining full control over your data',
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
