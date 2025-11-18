type Locale = 'fr' | 'en';

interface KimeLocale {
  /**
   * Detects browser language and returns 'fr' or 'en'
   */
  detectBrowserLanguage(): Locale;

  /**
   * Gets preferred locale from localStorage or null if not set
   */
  getPreferredLocale(): Locale | null;

  /**
   * Sets preferred locale in localStorage
   */
  setPreferredLocale(locale: Locale): void;

  /**
   * Redirects user to the correct path based on language detection
   */
  redirectIfNeeded<T extends Locale>({
    currentLocale,
    paths,
  }: {
    currentLocale: T;
    paths: { [key in Exclude<Locale, T>]: string };
  }): void;
}

interface Window {
  kimeLocale: KimeLocale;
}
