export const siteConfig = {
  // Site identity
  name: 'KIME',
  alternateNames: ['Kime', 'KIME Studio', 'Kime Studio'],
  tagline: {
    fr: 'Design et développement de produits numériques',
    en: 'Digital product design & development',
  },

  // Site URLs
  url: import.meta.env.PUBLIC_SITE_URL || 'https://kime.studio',

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
  isProduction: import.meta.env.VERCEL_ENV === 'production',

  // Theme
  themeColor: '#00004d',

  // Open Graph defaults
  ogImage: '/og-image.png',
  ogType: 'website',
} as const;

export const config = {
  isProduction: import.meta.env.VERCEL_ENV === 'production',
};
