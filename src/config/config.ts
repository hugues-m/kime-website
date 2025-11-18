const scheme = import.meta.env.VERCEL ? 'https://' : 'http://';
const productionWebsiteUrl =
  import.meta.env.VERCEL_PROJECT_PRODUCTION_URL || 'kime.studio';
const branchWebsiteUrl = import.meta.env.VERCEL_BRANCH_URL || 'localhost:4321';

const isProduction = import.meta.env.VERCEL_ENV === 'production';

const baseUrl = isProduction
  ? `${scheme}${productionWebsiteUrl}`
  : `${scheme}${branchWebsiteUrl}`;

export const config = {
  // Site identity
  name: 'KIME',
  alternateNames: ['Kime', 'KIME Studio', 'Kime Studio'],
  tagline: {
    fr: 'Design et développement de produits numériques',
    en: 'Digital product design & development',
  },

  // Site URLs
  baseUrl,
  absoluteUrl: (path: string): string => {
    return `${baseUrl}${path}`;
  },

  // Contact & Author information
  email: 'contact@kime.studio',
  author: {
    name: 'KIME Collective',
    type: 'Organization',
  },

  // Social media (if applicable)
  social: {
    // twitter?: string;
    // linkedin?: string;
  },

  // SEO defaults
  defaultLocale: 'en',
  locales: ['fr', 'en'] as const,

  // Environment
  isProduction,

  // Theme
  themeColor: '#00004d',

  // Open Graph defaults
  ogImage: '/og-image.png',
  ogType: 'website',
} as const;
