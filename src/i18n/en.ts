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
  darkMode: false,
  site: {
    title: 'KIME',
    description: 'Design and development of digital products',
  },
  nav: {
    projects: 'Project selection',
    collective: 'Our collective',
    contact: 'Contact us',
  },
  hero: {
    title: 'Design and development of digital products',
    introA:
      'Kime is a collective of 3 professionals: designer, product manager and developer',
    introB:
      'Thanks to our complementary skills, we can respond to all needs around the design of digital tools.',
    mission:
      'We want to put our skills at the service of projects that contribute to an emancipatory, sustainable and desirable digital world.',
  },
  approach: {
    title: 'Our product design approach',
    principles: [
      {
        title: 'Respond\nto real needs',
        description:
          "To design a useful product, it must meet users' needs. A design survey is a prerequisite for any act of design. Different user research methods [qualitative and quantitative] are used throughout product design.",
      },
      {
        title: 'Design by iteration,\nwith care',
        description:
          'To design a desirable product, interfaces must be refined, built with attention, in constant cooperation with users, tested and continuously refined. Design evolution makes it possible to achieve a goal: to do better, with each iteration.',
      },
      {
        title: 'Simple, accessible & frugal products',
        description:
          'The search for simplicity [identifying the superfluous] is at the heart of our product design. The simplicity of use of a product supports its accessibility to all [simple to practice and understand] and its frugality [minimize its environmental impact as much as possible].',
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
    intro:
      'We offer different types of interventions according to your needs. Our collective can also adapt according to the projects entrusted to it and the needs in terms of skills, thanks to a network of trusted freelancers.',
    list: [
      {
        number: '01',
        type: 'Production',
        title: 'Creation and improvement of digital products',
        label: 'Offer 01 - Production',
        shortDescription:
          'You have a product idea, you need a team to design it.',
        description:
          'Whether you are evolving a product or launching an idea, we clarify your objectives and <strong>real user needs</strong>. A design survey tests hypotheses in the field. We <strong>prototype quickly and measure impact</strong>. Learning guides <strong>development in short cycles</strong> to deliver continuously. At each stage, user feedback helps us converge to the most relevant solution.',
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
        label: 'Offer 02 - Consulting',
        shortDescription:
          'You already have a team and a product, but you need structural help, on vision or technology to lead your teams to autonomy.',
        description:
          'Your team is in place. We provide <strong>operational consulting on product direction, technical and design team organization</strong>. We observe your practices, clarify vision and priorities, then define roles and simple work habits. We <strong>harmonize design, clean up tech and train managers</strong> to sustain methods. Result: a more autonomous team, better organized and more coherent services.',
        tags: [
          { icon: Users, label: 'Recruitment' },
          { icon: SquareChartGantt, label: 'Product team organization' },
          { icon: Layers, label: 'Technical stack' },
          { icon: SwatchBook, label: 'Design System' },
        ],
      },
    ],
  },
  projects: {
    title: 'Project selection',
    cta: 'To learn more about our projects, <a href="#contact" class="underline cursor-pointer">contact us</a>',
    featured: {
      image: 'fne.svg' as const,
      imageAlt: 'Map of France with digital mediation points',
      title:
        'A set of digital tools useful for implementing the national public policy on digital inclusion',
      description:
        'For more than 3 years, we have supported the Digital Society program of the National Agency for Territorial Cohesion in improving and designing an ecosystem of digital tools useful to digital mediation actors to support people who are far from digital technology and manage various programs.',
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
          'Design of the Docaposte Design System, with a dual challenge: translate their new visual identity within heterogeneous products & evolve them towards greater coherence visually and in their uses.',
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
        title: 'Experience platform for research',
        description:
          'A web application that allows researchers in behavioral economics to create protocols and conduct multiplayer experiments in real time. Used for example to implement the nutriscore in France.',
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
        bio: 'UX/UI designer trained in a holistic approach to design, Sylvain is passionate about survey and user research phases that involve a form of immersion in a social situation and specific practices.\n\nSylvain also brings care and particular attention to the graphic design of interfaces thanks to his graphic design skills.',
        linkedin: 'https://www.linkedin.com/in/sasylvainaubry/',
      },
      {
        image: 'thibault.png' as const,
        name: 'Thibault Rouveyrol',
        role: 'Product Manager',
        bio: 'From San Francisco to Paris, Thibault has managed products in demanding environments. He knows how to bring out the right direction, transform user needs into clear decisions and establish ways of working that stand the test of time.\n\nA goal: useful services, well designed, delivered without unnecessary complexity, by teams that gain confidence and autonomy.',
        linkedin: 'https://www.linkedin.com/in/thibaultrouveyrol/',
      },
      {
        image: 'hugues.png' as const,
        name: 'Hugues Maignol',
        role: 'CTO, Developer',
        bio: 'Entrepreneur and experienced CTO, Hugues has supported companies from startup to multinational. He designs technical architectures adapted to each project and leads development teams to implement them.\n\nHe favors development practices that promote quality and maintainability, collaboration and a serene work environment.',
        linkedin: 'https://www.linkedin.com/in/huguesmaignol/',
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
            title: 'Research',
            description:
              'Diagnostics of existing systems, field research and learning synthesis, ideation and co-creation workshops, user testing and interviews',
          },
          {
            title: 'UX/UI Design',
            description:
              'User journeys and wireframes, interface design (UI), design system, interactive prototyping close to the solution to be developed',
          },
          {
            title: 'Graphic design',
            description:
              'Visual identity, graphic charter, digital and printed graphic materials',
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
              'Design the technical strategy adapted to project needs and constraints, designed for performance and scalability.',
          },
          {
            title: 'Code',
            description:
              'Continuous delivery, automated tests, methodologies compliant with standards and best development practices.',
          },
          {
            title: 'Artificial intelligence',
            description:
              'Integration of AI tools, respecting your constraints and keeping control over your data.',
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
