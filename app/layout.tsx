
//·app/layouts.tsx
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
  "Waaza helps buyers, brokers and advisors understand yacht financing readiness, indicative repayments, deal complexity and better next steps before formal lender outreach.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: "%s | Waaza",
  },

  description: DESCRIPTION,

  keywords: [
    "yacht finance calculator",
    "boat finance calculator",
    "yacht financing",
    "superyacht financing",
    "can you finance a yacht",
    "how long can you finance a yacht",
    "yacht loan calculator",
    "marine finance",
    "yacht financing intelligence",
    "boat loan calculator",
  ],

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
        alt: "Waaza yacht financing intelligence platform",
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

  category: "finance",
};

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Waaza",
  url: SITE_URL,
  logo: `${SITE_URL}/waaza.png`,
};

const siteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Waaza",
  url: SITE_URL,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
