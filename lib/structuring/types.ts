// lib/structuring/types.ts
// ─────────────────────────────────────────────────────────────
// Type system for all 17 structuring silo pages.
// ─────────────────────────────────────────────────────────────

export type StructuringTier = 1 | 2 | 3;
export type StructuringIntent = "informational" | "commercial" | "transactional" | "navigational";

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

export interface RelatedPage {
  title: string;
  href: string;
  description?: string;
}

export interface SidebarCTA {
  heading: string;
  body: string;
  buttonText: string;
  buttonHref: string;
}

export interface ToCItem {
  id: string;
  label: string;
  level: 2 | 3;
}

export interface PageAuthor {
  name: string;
  role: string;
}

export interface StructuringPageData {
  slug: string;
  tier: StructuringTier;
  intent: StructuringIntent;

  meta: {
    title: string;
    description: string;
    canonical: string;
    ogImage?: string;
    datePublished: string;
    dateModified: string;
  };

  heading: {
    h1: string;
    intro: string;
    lastUpdated: string;
    author?: PageAuthor;
  };

  toc: ToCItem[];
  faqs: FAQItem[];
  relatedPages: RelatedPage[];
  breadcrumbs: BreadcrumbItem[];
  cta: SidebarCTA;

  keywords: {
    primary: string;
    secondary: string[];
    lsi: string[];
  };
}