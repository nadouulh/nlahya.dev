import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { NotFoundContent } from "@/components/not-found-content";
import { getDictionary, hasLocale } from "@/lib/i18n";

// Built as /en/404, /fr/404 and /it/404; nginx serves the one matching the
// visitor's language (URL prefix, then cookie, then browser) for unknown URLs
export async function generateMetadata({ params }: PageProps<"/[lang]/404">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  return {
    title: `404 · ${getDictionary(lang).notFound.title}`,
    robots: { index: false },
  };
}

export default async function NotFoundPage({ params }: PageProps<"/[lang]/404">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <NotFoundContent lang={lang} text={getDictionary(lang).notFound} />;
}
