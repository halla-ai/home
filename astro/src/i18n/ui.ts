import ko from './ko.json';
import en from './en.json';

const translations: Record<string, Record<string, unknown>> = { ko, en };

export type Locale = 'ko' | 'en';
export const locales: Locale[] = ['ko', 'en'];
export const defaultLocale: Locale = 'ko';

/**
 * Get a translation by dot-notation key.
 * e.g. t('ko', 'nav.home') => '홈'
 */
export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let result: unknown = translations[locale];

  for (const k of keys) {
    if (result && typeof result === 'object' && k in (result as Record<string, unknown>)) {
      result = (result as Record<string, unknown>)[k];
    } else {
      // Fallback to default locale
      result = translations[defaultLocale];
      for (const fk of keys) {
        if (result && typeof result === 'object' && fk in (result as Record<string, unknown>)) {
          result = (result as Record<string, unknown>)[fk];
        } else {
          return key; // Return key if not found
        }
      }
      break;
    }
  }

  return typeof result === 'string' ? result : key;
}

/**
 * Extract locale from URL pathname.
 * /en/about → 'en', /about → 'ko'
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, segment] = url.pathname.split('/');
  if (segment === 'en') return 'en';
  return 'ko';
}

/**
 * Get the path for the alternate locale.
 * Used by LanguageSwitcher.
 */
export function getAlternateLocalePath(url: URL, targetLocale: Locale): string {
  const currentLocale = getLocaleFromUrl(url);
  const pathname = url.pathname;

  if (currentLocale === 'ko' && targetLocale === 'en') {
    // / → /en/, /about/ → /en/about/
    return `/en${pathname}`;
  }

  if (currentLocale === 'en' && targetLocale === 'ko') {
    // /en/ → /, /en/about/ → /about/
    return pathname.replace(/^\/en/, '') || '/';
  }

  return pathname;
}

/**
 * Get content collection path prefix for current locale.
 */
export function getContentPrefix(locale: Locale): string {
  return `${locale}/`;
}
