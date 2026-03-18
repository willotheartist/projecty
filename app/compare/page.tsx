// app/compare/page.tsx
import type { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 86400;

const SITE_URL = "https://www.waaza.co";

export const metadata: Metadata = {
  title: "Yacht Finance Comparison Guides | Waaza",
  description: "Side-by-side comparisons of every major yacht financing decision — loan vs leasing, new vs used, private bank vs marine lender, and more.",
  alternates: { canonical: `${SITE_URL}/compare/` },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
};

const pages = [
  { href: "/compare/loan-vs-leasing-for-yacht-purchases/", title: "Loan vs leasing for yacht purchases", desc: "Which financing structure works better for your situation?" },
  { href: "/compare/new-vs-used-yacht-financing/", title: "New vs used yacht financing", desc: "How lenders treat new builds differently from second-hand vessels." },
  { href: "/compare/boat-loan-vs-personal-loan/", title: "Boat loan vs personal loan", desc: "Why a secured marine loan is almost always the right choice." },
  { href: "/compare/personal-vs-company-yacht-ownership/", title: "Personal vs company yacht ownership", desc: "Tax, financing, and operational implications of each structure." },
  { href: "/compare/malta-vs-french-leasing/", title: "Malta vs French leasing", desc: "The two main EU VAT leasing structures compared directly." },
];

export default function CompareHubPage() {
  return (
    <div style={{ background: "#f4f3ef", minHeight: "100vh", fontFamily: "'Inter Tight', sans-serif" }}>
      <div style={{ height: 3, background: "#FFF86C" }} />
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "64px clamp(20px, 4vw, 60px) 100px" }}>

        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "4px 12px", background: "#fffde0", borderRadius: 6, marginBottom: 24, border: "1px solid #f0ec5a40" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0a0a0a" }} />
          <span style={{ fontSize: 12, fontWeight: 700, color: "#0a0a0a", letterSpacing: "0.05em" }}>Comparison Guides</span>
        </div>

        <h1 style={{ fontFamily: "'Instrument Serif', serif", fontSize: "clamp(38px, 5vw, 64px)", fontWeight: 400, lineHeight: 1.05, letterSpacing: -1.5, color: "#0a0a0a", marginBottom: 20, maxWidth: 700 }}>
          Every major yacht financing decision, compared side by side
        </h1>

        <p style={{ fontSize: 18, color: "#4b5563", lineHeight: 1.75, marginBottom: 56, maxWidth: 600 }}>
          Loan or leasing? New or used? Personal or company? These decisions shape the total cost of your transaction. Each guide gives you a direct comparison with a clear verdict.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {pages.map((page) => (
            <a key={page.href} href={page.href} style={{
              display: "block", padding: "24px 0",
              borderTop: "1px solid #eae9e4",
              textDecoration: "none", transition: "padding-left 0.15s",
            }}
              className="compare-hub-link"
            >
              <div style={{ fontSize: 19, fontWeight: 500, color: "#0a0a0a", marginBottom: 6 }}>{page.title}</div>
              <div style={{ fontSize: 14, color: "#6b7280" }}>{page.desc}</div>
            </a>
          ))}
          <div style={{ borderTop: "1px solid #eae9e4" }} />
        </div>
      </div>
      <style>{`
        .compare-hub-link:hover { padding-left: 6px !important; }
        .compare-hub-link:hover div:first-child { color: #0a0a0a; text-decoration: underline; }
      `}</style>
    </div>
  );
}