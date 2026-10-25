import type { MetadataRoute } from "next";
import { LOCALES } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";

// Required by the static export: generated once at build time
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(LOCALES.map((locale) => [locale, `${SITE_URL}/${locale}`]));
  return LOCALES.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    alternates: { languages },
  }));
}
