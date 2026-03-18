// app/compare/personal-vs-company-yacht-ownership/opengraph-image.tsx
import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "edge";

export default function Image() {
  return generateOgImage("Personal vs company yacht ownership.", "Compare");
}
