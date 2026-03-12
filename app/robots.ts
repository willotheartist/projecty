import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/documentation",
          "/integrations",
          "/faq",
          "/about",
          "/blog",
          "/partners",
          "/case-studies",
          "/platform/",
          "/solutions/",
          "/yacht-finance-calculator",
          "/boat-finance-calculator",
          "/yacht-financing",
          "/superyacht-financing",
          "/can-you-finance-a-yacht",
          "/how-long-can-you-finance-a-yacht",
        ],
        disallow: [
          "/api/",
          "/dashboard/",
          "/login/",
          "/widget/",
          "/wizard/",
          "/simulator/",
          "/old/",
          "/v2/",
        ],
      },
    ],
    sitemap: "https://www.waaza.co/sitemap.xml",
    host: "https://www.waaza.co",
  };
}
