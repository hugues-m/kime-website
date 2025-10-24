import { fr } from './fr';
import { en } from './en';
import type { Translations } from './fr';

const translations: Record<string, Translations> = {
  fr,
  en,
};

export function getTranslations(locale: string): Translations {
  return translations[locale] || translations.fr;
}
