"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import icon from "@/app/icon.png";
import {
  Check,
  ChevronDown,
  Languages,
  Menu,
  Monitor,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { cn } from "cn";
import { Button } from "@/components/ui/button";
import { LOCALES, type Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";

type HeaderLabels = Dictionary["header"];

const NAV_SECTIONS = ["projects", "experience", "tools", "now", "contact"] as const;

const THEMES = ["light", "dark", "system"] as const;
type Theme = (typeof THEMES)[number];

function ThemeToggle({ labels }: { labels: HeaderLabels }) {
  const { theme, setTheme } = useTheme();
  const current = (THEMES.includes(theme as Theme) ? theme : "system") as Theme;
  const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Monitor;
  const label = `${labels.theme}: ${labels.themes[current]}`;

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      onClick={() => setTheme(next)}
      className="size-9 hover:bg-transparent hover:text-muted-foreground dark:hover:bg-transparent dark:hover:text-primary"
    >
      <Icon className="size-4" />
    </Button>
  );
}

const LANGUAGE_LABELS: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  it: "IT",
};

function LanguageToggle({ lang, labels }: { lang: Locale; labels: HeaderLabels }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  function selectLanguage(option: Locale) {
    setOpen(false);
    if (option === lang) return;
    // proxy.ts remembers the language of the last visited page
    router.push(`/${option}${window.location.hash}`);
  }

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <Button
        variant="ghost"
        size="default"
        aria-label={labels.selectLanguage}
        title={labels.selectLanguage}
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="h-9 px-3 text-sm text-primary dark:text-foreground hover:font-semibold hover:bg-transparent hover:text-muted-foreground dark:hover:bg-transparent dark:hover:text-primary aria-expanded:bg-transparent aria-expanded:text-muted-foreground"
      >
        <Languages className="size-4" />
        {LANGUAGE_LABELS[lang]}
        <ChevronDown className="size-3.5" />
      </Button>
      {open ? (
        <ul
          role="menu"
          className="absolute right-0 top-full z-50 mt-2 min-w-24 overflow-hidden rounded-lg border border-border bg-background/95 py-1 shadow-lg backdrop-blur"
        >
          {LOCALES.map((option) => (
            <li key={option} role="menuitem">
              <button
                type="button"
                lang={option}
                onClick={() => selectLanguage(option)}
                className={cn(
                  "flex w-full items-center gap-2 px-4 py-2 text-left text-sm transition-colors hover:text-muted-foreground",
                  option === lang
                    ? "font-semibold text-primary"
                    : "text-muted-foreground"
                )}
              >
                <Check
                  className={cn(
                    "size-3.5",
                    option === lang ? "opacity-100" : "opacity-0"
                  )}
                />
                {LANGUAGE_LABELS[option]}
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export function Header({
  lang,
  nav,
  labels,
}: {
  lang: Locale;
  nav: Dictionary["nav"];
  labels: HeaderLabels;
}) {
  const [open, setOpen] = useState(false);
  const links = NAV_SECTIONS.map((id) => ({ href: `#${id}`, label: nav[id] }));

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 text-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between px-6">
        <div>
            <a href="#home" className="flex items-center gap-2 font-display text-xl font-extrabold tracking-tight text-foreground dark:text-primary">
            <Image
                src={icon}
                alt="Logo"
                width={32}
                height={32}
                className="h-7 w-7"
                priority
            />
            Nadia Lahya
            </a>
        </div>
        <div className="flex items-center gap-2">
          <nav className="hidden items-center gap-1 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:font-semibold rounded-md px-4 py-2 text-base text-muted-foreground transition-colors hover:text-foreground dark:hover:text-foreground dark:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <LanguageToggle lang={lang} labels={labels} />
            <ThemeToggle labels={labels} />
            <Button
              variant="ghost"
              size="icon"
              className="size-9 md:hidden"
              aria-label={open ? labels.closeMenu : labels.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>
      </div>
      {open ? (
        <nav className="border-t md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-6 py-5">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      ) : null}
    </header>
  );
}
