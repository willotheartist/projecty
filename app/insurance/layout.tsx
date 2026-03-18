// app/insurance/layout.tsx
// ─────────────────────────────────────────────────────────────
// Shared layout for the entire /insurance/ silo.
// Sets silo-level robots defaults — individual pages override
// via their own generateMetadata export.
// ─────────────────────────────────────────────────────────────

import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function InsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}