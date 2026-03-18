import type { MetadataRoute } from "next";

const SITE_URL = "https://www.waaza.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // ── Core ─────────────────────────────────────────────────
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/about/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/faq/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${SITE_URL}/blog/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.76,
    },
    {
      url: `${SITE_URL}/partners/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.68,
    },
    {
      url: `${SITE_URL}/case-studies/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${SITE_URL}/documentation/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/integrations/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },

    // ── Platform ──────────────────────────────────────────────
    {
      url: `${SITE_URL}/platform/readiness-scoring/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${SITE_URL}/platform/rule-engine/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/platform/scenario-modelling/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${SITE_URL}/platform/broker-dashboard/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.79,
    },
    {
      url: `${SITE_URL}/platform/report-generator/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.81,
    },
    {
      url: `${SITE_URL}/platform/case-tracking/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.76,
    },

    // ── Solutions ─────────────────────────────────────────────
    {
      url: `${SITE_URL}/solutions/yacht-brokers/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${SITE_URL}/solutions/broker-networks/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.77,
    },
    {
      url: `${SITE_URL}/solutions/finance-advisors/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${SITE_URL}/solutions/pre-qualification/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/solutions/structuring/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${SITE_URL}/solutions/buyer-reports/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    },

    // ── Calculators / High-intent tools ───────────────────────
    {
      url: `${SITE_URL}/yacht-finance-calculator/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${SITE_URL}/boat-finance-calculator/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },

    // ── Financing — standalone pages ──────────────────────────
    {
      url: `${SITE_URL}/yacht-financing/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.93,
    },
    {
      url: `${SITE_URL}/superyacht-financing/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${SITE_URL}/can-you-finance-a-yacht/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${SITE_URL}/how-long-can-you-finance-a-yacht/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84,
    },

    // ── Financing silo ────────────────────────────────────────
    {
      url: `${SITE_URL}/financing/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.92,
    },
    {
      url: `${SITE_URL}/financing/what-is-yacht-financing/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      url: `${SITE_URL}/financing/how-yacht-financing-works/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.87,
    },
    {
      url: `${SITE_URL}/financing/how-to-finance-a-yacht-purchase/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.87,
    },
    {
      url: `${SITE_URL}/financing/what-lenders-look-for-in-yacht-financing/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${SITE_URL}/financing/can-you-finance-a-yacht/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/financing/typical-deposit-for-yacht-financing/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${SITE_URL}/financing/how-vessel-age-affects-financing/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.83,
    },

    // ── Insurance silo ────────────────────────────────────────
    {
      url: `${SITE_URL}/insurance/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/insurance/boat-insurance-uk/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/insurance/boat-insurance-cost/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${SITE_URL}/insurance/marine-insurance-companies/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${SITE_URL}/insurance/third-party-boat-insurance/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${SITE_URL}/insurance/hull-and-machinery-insurance/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    },

    // ── Structuring silo ──────────────────────────────────────
    {
      url: `${SITE_URL}/structuring/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/structuring/yacht-vat-explained/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/structuring/malta-yacht-leasing/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${SITE_URL}/structuring/personal-vs-spv-yacht-ownership/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${SITE_URL}/structuring/buying-a-yacht-through-a-company/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/structuring/vat-on-yacht-purchases-in-europe/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}