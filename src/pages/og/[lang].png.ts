import type { APIRoute, GetStaticPaths } from "astro";
import { LOCALES, type Locale } from "@/lib/i18n";
import { renderOgImage } from "@/lib/og-card";

export const getStaticPaths = (() => LOCALES.map((lang) => ({ params: { lang } }))) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ params }) =>
  new Response(await renderOgImage(params.lang as Locale), { headers: { "Content-Type": "image/png" } });
