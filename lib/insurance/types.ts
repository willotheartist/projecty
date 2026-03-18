// lib/insurance/types.ts
// ─────────────────────────────────────────────────────────────
// Central type system for all 43 insurance silo pages.
// Every page.tsx exports one InsurancePageData object.
// InsuranceSiloShell consumes it — layout, schema, and SEO
// are all derived from this single source of truth.
// ─────────────────────────────────────────────────────────────

export type InsuranceTier = 1 | 2 | 3;

export type InsuranceIntent =
  | "informational"
  | "commercial"
  | "transactional"
  | "navigational";

// ── Schema types ─────────────────────────────────────────────

export interface FAQItem {
  question: string;
  answer: string; // plain text, 40–80 words
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

// ── Internal linking ──────────────────────────────────────────

export interface RelatedPage {
  title: string;
  href: string;
  description?: string; // one-line, shown in sidebar
}

export interface SidebarCTA {
  heading: string;
  body: string;
  buttonText: string;
  buttonHref: string;
}

// ── Table of contents ─────────────────────────────────────────

export interface ToCItem {
  id: string;   // matches the H2/H3 id on the page
  label: string;
  level: 2 | 3;
}

// ── Author / freshness ────────────────────────────────────────

export interface PageAuthor {
  name: string;
  role: string;
}

// ── Core page data ────────────────────────────────────────────

export interface InsurancePageData {
  // ── Identity
  slug: string;           // e.g. "boat-insurance-uk"
  tier: InsuranceTier;
  intent: InsuranceIntent;

  // ── SEO metadata
  meta: {
    title: string;          // ≤60 chars, KW front-loaded, suffix " | Waaza"
    description: string;    // 150–160 chars, soft CTA
    canonical: string;      // full absolute URL
    ogImage?: string;       // defaults to /og/{slug}-og.jpg
    datePublished: string;  // ISO
    dateModified: string;   // ISO
  };

  // ── Page header
  heading: {
    h1: string;
    intro: string;          // 120–180 words, shown above the fold
    lastUpdated: string;    // human readable e.g. "March 2026"
    author?: PageAuthor;
  };

  // ── Table of contents (auto-built from this, rendered in sidebar)
  toc: ToCItem[];

  // ── FAQ (rendered on-page + FAQPage schema)
  faqs: FAQItem[];         // minimum 5

  // ── Internal linking
  relatedPages: RelatedPage[];   // shown in sidebar, max 8
  breadcrumbs: BreadcrumbItem[]; // always starts with Home > Insurance > ...

  // ── Sidebar CTA
  cta: SidebarCTA;

  // ── Keywords (for editorial reference, not rendered)
  keywords: {
    primary: string;
    secondary: string[];
    lsi: string[];
  };

  // ── The actual article content — passed as JSX children
  // (defined in each page.tsx, not in this type)
}