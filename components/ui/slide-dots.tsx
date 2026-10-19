"use client";

import { useEffect, useState } from "react";
import { cn } from "cn";

const SECTIONS = ["home", "projects", "experience", "tools", "now", "contact"] as const;

export function SlideDots({ labels }: { labels: Record<(typeof SECTIONS)[number], string> }) {
  const [active, setActive] = useState<string>(SECTIONS[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      // Sections can be taller than the viewport: track the one crossing its middle
      { rootMargin: "-50% 0px -50% 0px" }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
    >
      {SECTIONS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={labels[id]}
          title={labels[id]}
          aria-current={active === id ? "true" : undefined}
          className={cn(
            "rounded-full transition-all duration-300 hover:bg-foreground",
            active === id ? "h-6 w-2 bg-foreground" : "h-2 w-2 bg-foreground/40"
          )}
        />
      ))}
    </nav>
  );
}