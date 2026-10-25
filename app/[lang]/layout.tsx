import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { bricolage, geistMono } from "@/app/fonts";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/ui/header";
import { LOCALES, getDictionary, hasLocale } from "@/lib/i18n";

// Only /en, /fr and /it exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      languages: Object.fromEntries(LOCALES.map((locale) => [locale, `/${locale}`])),
    },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      suppressHydrationWarning
      className={`${geistMono.variable} ${bricolage.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col font-mono text-ink">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header lang={lang} nav={dict.nav} labels={dict.header} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
