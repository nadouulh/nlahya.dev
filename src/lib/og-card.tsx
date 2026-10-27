import { readFileSync } from "node:fs";
import { join } from "node:path";
import { Resvg } from "@resvg/resvg-js";
import satori from "satori";
import { getDictionary, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/site";

// Link preview image (og:image), drawn at build time from the dictionaries,
// so it follows every text change in the three languages.
// satori reads woff/ttf but not woff2, hence Fontsource instead of the <Font> files.
export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;

const root = process.cwd();
const font = (pkg: string, file: string) => readFileSync(join(root, "node_modules/@fontsource", pkg, "files", file));

const FONTS = [
  { name: "Bricolage", data: font("bricolage-grotesque", "bricolage-grotesque-latin-800-normal.woff"), weight: 800 as const },
  { name: "Bricolage", data: font("bricolage-grotesque", "bricolage-grotesque-latin-700-normal.woff"), weight: 700 as const },
  { name: "Geist Mono", data: font("geist-mono", "geist-mono-latin-400-normal.woff"), weight: 400 as const },
  { name: "Geist Mono", data: font("geist-mono", "geist-mono-latin-700-normal.woff"), weight: 700 as const },
];

const LOGO = `data:image/png;base64,${readFileSync(join(root, "public/icon.png")).toString("base64")}`;

// Soft color blobs standing in for the WebGL waves of the site
const BLOBS = [
  { left: -160, top: -200, size: 560, color: "rgb(249 108 179 / 0.55)" },
  { left: 820, top: -180, size: 520, color: "rgb(250 226 107 / 0.6)" },
  { left: 900, top: 330, size: 560, color: "rgb(255 150 102 / 0.5)" },
  { left: -120, top: 380, size: 480, color: "rgb(255 150 102 / 0.4)" },
  { left: 420, top: 470, size: 420, color: "rgb(249 108 179 / 0.35)" },
];

function Card({ lang }: { lang: Locale }) {
  const t = getDictionary(lang);

  return (
    <div style={{ display: "flex", width: "100%", height: "100%", position: "relative", backgroundColor: "#fee7f2" }}>
      {BLOBS.map((blob, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: blob.left,
            top: blob.top,
            width: blob.size,
            height: blob.size,
            backgroundImage: `radial-gradient(circle, ${blob.color} 0%, transparent 70%)`,
          }}
        />
      ))}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          left: 48,
          top: 48,
          right: 48,
          bottom: 48,
          padding: "56px 64px",
          borderRadius: 36,
          backgroundColor: "rgb(254 231 242 / 0.82)",
          border: "2px solid rgb(251 157 204 / 0.6)",
        }}
      >
        <img src={LOGO} width={132} height={132} style={{ position: "absolute", top: -28, right: 24 }} />
        <div
          style={{
            fontFamily: "Bricolage",
            fontWeight: 800,
            fontSize: 104,
            lineHeight: 0.95,
            letterSpacing: -3.5,
            color: "#e0006f",
          }}
        >
          Nadia Lahya
        </div>
        <div
          style={{
            marginTop: 16,
            fontFamily: "Bricolage",
            fontWeight: 700,
            fontSize: 50,
            lineHeight: 1.1,
            letterSpacing: -1,
            color: "#c43e00",
          }}
        >
          {t.hero.role}
        </div>
        <div
          style={{
            marginTop: 28,
            maxWidth: 900,
            fontFamily: "Geist Mono",
            fontSize: 25,
            lineHeight: 1.55,
            color: "#3a0b24",
          }}
        >
          {t.hero.tagline}
        </div>
        <div
          style={{
            marginTop: "auto",
            fontFamily: "Geist Mono",
            fontWeight: 700,
            fontSize: 26,
            color: "#c40866",
          }}
        >
          {new URL(SITE_URL).host}
        </div>
      </div>
    </div>
  );
}

export async function renderOgImage(lang: Locale): Promise<Uint8Array<ArrayBuffer>> {
  const svg = await satori(<Card lang={lang} />, { width: OG_WIDTH, height: OG_HEIGHT, fonts: FONTS });
  return new Uint8Array(new Resvg(svg).render().asPng());
}
