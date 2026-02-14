// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import LayoutShell from "./components/LayoutShell";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const SITE_URL = "https://www.waaza.co";

const TITLE = "Waaza — Yacht Financing Intelligence";
const DESCRIPTION =
  "Waaza analyses key buyer and vessel indicators to generate a structured financing readiness score, indicative LTV range, and lender-ready reports.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: "%s — Waaza",
  },

  description: DESCRIPTION,

  alternates: {
    canonical: "/",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/faviconico.png", type: "image/png" },
    ],
    apple: [{ url: "/iconpng.png" }],
  },

  openGraph: {
    type: "website",
    url: "/",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Waaza",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Waaza — Yacht Financing Intelligence",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/hero.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}