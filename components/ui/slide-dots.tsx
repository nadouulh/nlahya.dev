"use client";

import { useEffect, useState } from "react";
import { cn } from "cn";

const SECTIONS = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "tools", label: "Tools" },
  { id: "now", label: "Now" },
  { id: "contact", label: "Contact" },
];

export function SlideDots() {
  const [active, setActive] = useState(SECTIONS[0].id);

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
    SECTIONS.forEach(({ id }) => {
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
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          title={label}
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