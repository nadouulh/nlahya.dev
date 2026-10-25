import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Card } from "@/components/ui/card";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import icon from "@/app/icon.png";

// Shared by the exported /[lang]/404 pages (served by nginx) and the dev not-found
export function NotFoundContent({ lang, text }: { lang: Locale; text: Dictionary["notFound"] }) {
  return (
    <div className="relative isolate overflow-x-clip">
      <WavyBackground />
      <main className="mx-auto flex min-h-dvh w-full max-w-6xl items-center justify-center px-4 pb-10 pt-24 sm:px-6">
        <Card className="flex max-w-xl flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <h1 className="font-display text-[clamp(4.5rem,18vw,8rem)] font-extrabold leading-none tracking-[-0.04em] text-heading">
              404
            </h1>
            <Image src={icon} alt="" width={96} height={96} priority className="size-16 rotate-[10deg] sm:size-24" />
          </div>
          <h2 className="font-display text-2xl font-bold leading-tight text-subheading sm:text-3xl">{text.title}</h2>
          <p className="text-pretty text-ink-muted">{text.message}</p>
          <a
            href={`/${lang}`}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-lavender-veil-400 px-5 text-sm font-semibold text-white transition-colors hover:bg-gold-300 hover:text-atomic-tangerine-500"
          >
            <ArrowLeft className="size-4" />
            {text.back}
          </a>
        </Card>
      </main>
    </div>
  );
}
