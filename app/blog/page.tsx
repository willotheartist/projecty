import type { Metadata } from "next";
import MarketingRichPage from "../components/MarketingRichPage";

export const metadata: Metadata = {
  title: "Blog | Waaza",
  description:
    "Read Waaza insights on yacht financing, readiness scoring, deal structure, repayment scenarios and better broker-side qualification.",
  alternates: {
    canonical: "/blog",
  },
};

export default function Page() {
  return (
    <MarketingRichPage
      eyebrow="Blog"
      title="Writing that should rank, educate and make the product feel more authoritative."
      intro="The Waaza blog should become a serious acquisition surface, not an afterthought. In this category, weak filler content will not help. The blog needs to answer real questions about yacht financing, explain the role of calculators and readiness scoring, and publish commercially useful thinking around structure, risk and qualification. Good blog content should help the site rank while also making the platform itself feel more informed and more trustworthy."
      primaryCta={{ href: "/faq", label: "Read FAQ" }}
      secondaryCta={{ href: "/documentation", label: "Read documentation" }}
      sections={[
        {
          title: "What the blog should do for SEO",
          paragraphs: [
            "Search visibility in this category will come from pages that meet real intent. That includes obvious calculator and financing queries, but it also includes adjacent questions that signal a buyer or broker trying to understand the process. The blog is where Waaza can build topical depth, internal linking strength and long-tail coverage.",
            "Done well, the blog becomes more than a publishing feed. It becomes part of the site’s authority structure. It supports head terms through related explainers, practical articles and use-case content that makes the domain feel increasingly relevant to yacht financing conversations.",
          ],
          bullets: [
            "Answer real buyer and broker questions",
            "Support head-term pages with internal links",
            "Build topical authority around financing and qualification",
            "Create trust through commercially realistic writing",
            "Feed readers into calculator, readiness and report flows",
          ],
        },
        {
          title: "What the blog should do for the brand",
          paragraphs: [
            "Content is one of the clearest ways to show that Waaza understands its category. The tone should feel informed and specific, not loud or generic. It should show that the product knows the difference between a simple repayment estimate and a real financing conversation. That kind of writing strengthens the product itself because it teaches users how to think about the problem the platform solves.",
          ],
        },
        {
          title: "What kinds of articles belong here",
          paragraphs: [
            "The blog should cover calculator-related topics, readiness and qualification explainers, structuring commentary, financing myth-busting and broker workflow pieces. Over time, it can also publish more industry-led content around how buyers are behaving, where common financing misunderstandings occur and why earlier pre-screening leads to better commercial outcomes.",
          ],
        },
      ]}
      related={[
        { href: "/faq", label: "FAQ" },
        { href: "/about", label: "About Waaza" },
        { href: "/case-studies", label: "Case Studies" },
      ]}
    />
  );
}
