import type { NextConfig } from "next";

// Fully static export served by nginx: security headers, the "/" language
// redirect and caching live in nginx/default.conf
const nextConfig: NextConfig = {
  output: "export",
  // No image optimizer without a Node server; images are served as-is
  images: { unoptimized: true },
};

export default nextConfig;
