// lib/lenders/types.ts

export type LendersTier = 1 | 2 | 3;
export type LendersIntent = "informational" | "commercial" | "transactional";

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

export interface LendersPageData {
  slug: string;
  tier: LendersTier;
  intent: LendersIntent;

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
    author?: { name: string; role: string };
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