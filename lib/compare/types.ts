// lib/compare/types.ts

export type CompareTier = 1 | 2 | 3;
export type CompareIntent = "informational" | "commercial" | "transactional";

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

export interface ComparePageData {
  slug: string;
  tier: CompareTier;
  intent: CompareIntent;

  // The two things being compared — used for the comparison table header
  optionA: string;
  optionB: string;

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

  // Verdict — shown in a prominent box below the H1
  verdict: {
    summary: string;         // one sentence conclusion
    chooseA: string;         // when to pick option A
    chooseB: string;         // when to pick option B
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