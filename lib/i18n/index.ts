import en, { type Dictionary } from "./dictionaries/en";
import fr from "./dictionaries/fr";
import it from "./dictionaries/it";
import type { Locale } from "./config";

export * from "./config";
export type { Dictionary };

const DICTIONARIES: Record<Locale, Dictionary> = { en, fr, it };

export const getDictionary = (locale: Locale) => DICTIONARIES[locale];
