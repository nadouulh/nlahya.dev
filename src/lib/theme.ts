import { useSyncExternalStore } from "react";

// Replaces next-themes: same localStorage key, same classes on <html>, so a
// visitor's saved choice still applies. The inline script in Layout.astro
// applies it before the first paint.
export const THEMES = ["light", "dark", "system"] as const;
export type Theme = (typeof THEMES)[number];

const STORAGE_KEY = "theme";
const CHANGE_EVENT = "themechange";
const DARK_QUERY = "(prefers-color-scheme: dark)";

export function getTheme(): Theme {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return THEMES.includes(saved as Theme) ? (saved as Theme) : "system";
  } catch {
    return "system";
  }
}

export function applyTheme(theme: Theme) {
  const resolved = theme === "system" ? (matchMedia(DARK_QUERY).matches ? "dark" : "light") : theme;
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
}

export function setTheme(theme: Theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // storage blocked: the theme still applies for this page view
  }
  applyTheme(theme);
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

function subscribeTheme(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

/** The saved choice: light, dark or system */
export function useTheme(): Theme {
  return useSyncExternalStore(subscribeTheme, getTheme, () => "system");
}

function subscribeResolved(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

/** The theme actually shown, read from the class on <html> */
export function useResolvedTheme(): "light" | "dark" {
  return useSyncExternalStore(
    subscribeResolved,
    () => (document.documentElement.classList.contains("dark") ? "dark" : "light"),
    () => "light"
  );
}
