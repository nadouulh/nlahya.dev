export const LOCALES = ["en", "fr", "it"] as const;
export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

// Set when the visitor picks a language, read by nginx before Accept-Language
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const hasLocale = (value: string): value is Locale =>
  (LOCALES as readonly string[]).includes(value);
