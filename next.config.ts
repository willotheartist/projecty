import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

if (process.env.NODE_ENV === "production") {
  fetch("https://www.google.com/ping?sitemap=https%3A%2F%2Fwww.waaza.co%2Fsitemap.xml")
    .then(() => console.log("✓ Google pinged"))
    .catch(() => {});
}

export default nextConfig;
