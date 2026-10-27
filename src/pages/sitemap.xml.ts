import type { APIRoute } from "astro";
import { LOCALES } from "@/lib/i18n/config";
import { SITE_URL } from "@/lib/site";

// Generated once at build time: each language page with its translations
export const GET: APIRoute = () => {
  const alternates = LOCALES.map(
    (locale) => `<xhtml:link rel="alternate" hreflang="${locale}" href="${SITE_URL}/${locale}" />`
  ).join("\n");
  const urls = LOCALES.map((locale) => `<url>\n<loc>${SITE_URL}/${locale}</loc>\n${alternates}\n</url>`).join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
