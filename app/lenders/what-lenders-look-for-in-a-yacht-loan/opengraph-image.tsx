// app/lenders/what-lenders-look-for-in-a-yacht-loan/opengraph-image.tsx
import { generateOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const runtime = "edge";

export default function Image() {
  return generateOgImage("What lenders look for in a yacht loan.", "Lenders");
}
