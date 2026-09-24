"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
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

const NAV_LINKS = [
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const THEMES = ["light", "dark", "system"] as const;
type Theme = (typeof THEMES)[number];

function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const current = (THEMES.includes(theme as Theme) ? theme : "system") as Theme;
  const next = THEMES[(THEMES.indexOf(current) + 1) % THEMES.length];
  const Icon = current === "light" ? Sun : current === "dark" ? Moon : Monitor;
  const label = `Theme: ${current}`;

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      onClick={() => setTheme(next)}
      className="hover:bg-transparent hover:text-muted-foreground dark:hover:bg-transparent dark:hover:text-primary"
    >
      <Icon className="size-4" />
    </Button>
  );
}

const LANGUAGES = ["en", "fr", "it"] as const;
type Language = (typeof LANGUAGES)[number];
const LANGUAGE_LABELS: Record<Language, string> = {
  en: "EN",
  fr: "FR",
  it: "IT",
};

function LanguageToggle() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Language>("en");
  const ref = useRef<HTMLDivElement>(null);

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
        aria-label="Select language"
        title="Select language"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="hover:font-semibold hover:bg-transparent hover:text-muted-foreground dark:hover:bg-transparent dark:hover:text-primary aria-expanded:bg-transparent aria-expanded:text-muted-foreground"
      >
        <Languages className="size-4" />
        {LANGUAGE_LABELS[lang]}
        <ChevronDown className="size-3.5" />
      </Button>
      {open ? (
        <ul
          role="menu"
          className="hover:font-semibold absolute right-0 top-full z-50 mt-1 min-w-20 overflow-hidden rounded-lg border border-border bg-popover py-1 shadow-lg"
        >
          {LANGUAGES.map((option) => (
            <li key={option} role="menuitem">
              <button
                type="button"
                onClick={() => {
                  setLang(option);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm transition-colors hover:text-muted-foreground",
                  option === lang
                    ? "font-semibold text-foreground"
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

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4">
        <div>
            <a href="#" className="flex items-center gap-2.5 text-sm font-bold tracking-tight dark:text-primary">
            <Image
                src="/globe.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border border-primary object-cover dark:text-primary"
                priority
            />
            Nadia Lahya
            </a>
        </div>
        <div className="flex items-center gap-1">
          <nav className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:font-semibold rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground dark:hover:text-foreground dark:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-1">
            <LanguageToggle />
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
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
          <div className="mx-auto flex w-full max-w-3xl flex-col gap-1 px-4 py-3">
            {NAV_LINKS.map((link) => (
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
