"use client";

import { useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Languages, Menu, Monitor, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#about", label: "About" },
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
    >
      <Icon className="size-4" />
    </Button>
  );
}

function LanguageToggle() {
  const [lang, setLang] = useState<"en" | "fr">("en");

  return (
    <Button
      variant="ghost"
      size="default"
      aria-label="Toggle language"
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
    >
      <Languages className="size-4" />
      {lang === "en" ? "EN" : "FR"}
    </Button>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between px-4">
        <div>
            <a href="#" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">
            <Image
                src="/globe.svg"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border border-primary object-cover dark:invert"
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
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
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