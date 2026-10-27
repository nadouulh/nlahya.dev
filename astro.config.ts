import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL } from "./src/lib/site";

export default defineConfig({
  site: SITE_URL,
  // /fr -> fr.html, /fr/404 -> fr/404.html: the layout nginx/default.conf serves
  build: { format: "file" },
  trailingSlash: "never",
  // React components render to static HTML; only client:* islands ship JS
  integrations: [react()],
  // Downloaded from Google Fonts at build time and self-hosted, like next/font
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
      weights: ["100 900"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["monospace"],
    },
    {
      provider: fontProviders.google(),
      name: "Bricolage Grotesque",
      cssVariable: "--font-bricolage",
      weights: ["200 800"],
      styles: ["normal"],
      subsets: ["latin"],
      fallbacks: ["sans-serif"],
      // Optical size axis: letterforms adapt to the font size
      options: { experimental: { variableAxis: { opsz: [["12", "96"]] } } },
    },
  ],
  vite: { plugins: [tailwindcss()] },
  server: { port: 3001 },
  devToolbar: { enabled: false },
});
