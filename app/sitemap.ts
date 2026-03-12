import type { MetadataRoute } from "next";

const SITE_URL = "https://www.waaza.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${SITE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },

    {
      url: `${SITE_URL}/documentation`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/integrations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.76,
    },
    {
      url: `${SITE_URL}/partners`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.68,
    },
    {
      url: `${SITE_URL}/case-studies`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.72,
    },

    {
      url: `${SITE_URL}/platform/readiness-scoring`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84,
    },
    {
      url: `${SITE_URL}/platform/rule-engine`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/platform/scenario-modelling`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${SITE_URL}/platform/broker-dashboard`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.79,
    },
    {
      url: `${SITE_URL}/platform/report-generator`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.81,
    },
    {
      url: `${SITE_URL}/platform/case-tracking`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.76,
    },

    {
      url: `${SITE_URL}/solutions/yacht-brokers`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.82,
    },
    {
      url: `${SITE_URL}/solutions/broker-networks`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.77,
    },
    {
      url: `${SITE_URL}/solutions/finance-advisors`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.76,
    },
    {
      url: `${SITE_URL}/solutions/pre-qualification`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/solutions/structuring`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    },
    {
      url: `${SITE_URL}/solutions/buyer-reports`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.78,
    },

    {
      url: `${SITE_URL}/yacht-finance-calculator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.96,
    },
    {
      url: `${SITE_URL}/boat-finance-calculator`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/yacht-financing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.93,
    },
    {
      url: `${SITE_URL}/superyacht-financing`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      url: `${SITE_URL}/can-you-finance-a-yacht`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.86,
    },
    {
      url: `${SITE_URL}/how-long-can-you-finance-a-yacht`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.84,
    },
  ];
}
