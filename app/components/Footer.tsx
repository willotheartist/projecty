// app/components/Footer.tsx
// Pure server component. No client boundary needed.
// Waaza yellow accent. Full silo navigation.

import Image from "next/image";

const C = {
  bg: "#0a0a0a",
  border: "#1a1a1a",
  accent: "#FFF86C",
  accentDark: "#0a0a0a",
  white: "#ffffff",
  gray2: "#9ca3af",
  gray3: "#6b7280",
  gray4: "#4b5563",
};

const nav = [
  {
    heading: "Financing",
    links: [
      { label: "How Yacht Financing Works", href: "/financing/how-yacht-financing-works/" },
      { label: "What Lenders Look For", href: "/financing/what-lenders-look-for-in-yacht-financing/" },
      { label: "Typical Deposit", href: "/financing/typical-deposit-for-yacht-financing/" },
      { label: "How Vessel Age Affects Financing", href: "/financing/how-vessel-age-affects-financing/" },
      { label: "Can You Finance a Yacht", href: "/financing/can-you-finance-a-yacht/" },
    ],
  },
  {
    heading: "Insurance",
    links: [
      { label: "Boat Insurance UK", href: "/insurance/boat-insurance-uk/" },
      { label: "Boat Insurance Cost", href: "/insurance/boat-insurance-cost/" },
      { label: "Hull & Machinery Insurance", href: "/insurance/hull-and-machinery-insurance/" },
      { label: "Marine Insurance Companies", href: "/insurance/marine-insurance-companies/" },
      { label: "Third Party Boat Insurance", href: "/insurance/third-party-boat-insurance/" },
    ],
  },
  {
    heading: "Structuring",
    links: [
      { label: "Yacht VAT Explained", href: "/structuring/yacht-vat-explained/" },
      { label: "Malta Yacht Leasing", href: "/structuring/malta-yacht-leasing/" },
      { label: "Personal vs SPV Ownership", href: "/structuring/personal-vs-spv-yacht-ownership/" },
      { label: "Buying Through a Company", href: "/structuring/buying-a-yacht-through-a-company/" },
      { label: "VAT on Purchases in Europe", href: "/structuring/vat-on-yacht-purchases-in-europe/" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "Loan vs Leasing", href: "/compare/loan-vs-leasing-for-yacht-purchases/" },
      { label: "New vs Used Financing", href: "/compare/new-vs-used-yacht-financing/" },
      { label: "Boat Loan vs Personal Loan", href: "/compare/boat-loan-vs-personal-loan/" },
      { label: "Personal vs Company Ownership", href: "/compare/personal-vs-company-yacht-ownership/" },
      { label: "Malta vs French Leasing", href: "/compare/malta-vs-french-leasing/" },
    ],
  },
  {
    heading: "Lenders",
    links: [
      { label: "Who Finances Yachts in the UK", href: "/lenders/who-finances-yachts-in-the-uk/" },
      { label: "Private Bank vs Marine Lender", href: "/lenders/private-bank-vs-marine-lender/" },
      { label: "What Lenders Look For", href: "/lenders/what-lenders-look-for-in-a-yacht-loan/" },
      { label: "Lloyds Bank Yacht Financing", href: "/lenders/lloyds-bank-yacht-financing/" },
      { label: "BNP Paribas Yacht Financing", href: "/lenders/bnp-paribas-yacht-financing/" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "Yacht Brokers", href: "/solutions/yacht-brokers/" },
      { label: "Broker Networks", href: "/solutions/broker-networks/" },
      { label: "Finance Advisors", href: "/solutions/finance-advisors/" },
      { label: "Pre-Qualification", href: "/solutions/pre-qualification/" },
      { label: "Buyer Reports", href: "/solutions/buyer-reports/" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Readiness Scoring", href: "/platform/readiness-scoring/" },
      { label: "Rule Engine", href: "/platform/rule-engine/" },
      { label: "Scenario Modelling", href: "/platform/scenario-modelling/" },
      { label: "Report Generator", href: "/platform/report-generator/" },
      { label: "Case Tracking", href: "/platform/case-tracking/" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Blog", href: "/blog/" },
      { label: "Partners", href: "/partners/" },
      { label: "Integrations", href: "/integrations/" },
      { label: "Documentation", href: "/documentation/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{ background: C.bg, fontFamily: "'Inter Tight', sans-serif" }}>

      {/* ── CTA strip ── */}
      <div style={{
        borderTop: `1px solid ${C.border}`,
        borderBottom: `1px solid ${C.border}`,
        padding: "48px clamp(20px,5vw,80px)",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 24,
        }}>
          <div>
            <p style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: "clamp(22px,3vw,32px)",
              fontWeight: 400, color: C.white,
              lineHeight: 1.2, marginBottom: 6,
              letterSpacing: -0.5,
            }}>
              Know where your buyer stands before the lender does.
            </p>
            <p style={{ fontSize: 14, color: C.gray3, fontFamily: "'Inter Tight', sans-serif" }}>
              Free. No account required. Three minutes.
            </p>
          </div>
          <a href="/wizard" style={{
            display: "inline-block", padding: "14px 32px",
            background: C.accent, color: C.accentDark,
            fontSize: 15, fontWeight: 700, borderRadius: 10,
            textDecoration: "none", flexShrink: 0,
            fontFamily: "'Inter Tight', sans-serif",
            transition: "opacity 0.15s",
          }}>
            Start a free assessment →
          </a>
        </div>
      </div>

      {/* ── Nav grid ── */}
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "64px clamp(20px,5vw,80px) 48px",
      }}>
        {/* Logo + description */}
        <div style={{
          display: "flex", alignItems: "flex-start",
          justifyContent: "space-between", gap: 40,
          marginBottom: 56, flexWrap: "wrap",
        }}>
          <div style={{ maxWidth: 320 }}>
            <a href="/" style={{ display: "inline-block", marginBottom: 16, textDecoration: "none" }}>
              <Image
                src="/waaza.png"
                alt="Waaza"
                width={96}
                height={32}
                style={{ height: 28, width: "auto", filter: "brightness(0) invert(1)" }}
              />
            </a>
            <p style={{ fontSize: 14, color: C.gray3, lineHeight: 1.7 }}>
              The financing intelligence layer for yacht transactions. Readiness scoring, scenario modelling, and institutional-grade buyer reports — built for brokers, advisers, and buyers.
            </p>
          </div>

          {/* Yellow pill links */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", alignItems: "flex-start" }}>
            {[
              { label: "Run an assessment", href: "/wizard" },
              { label: "Try the simulator", href: "/simulator" },
              { label: "API documentation", href: "/documentation" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{
                display: "inline-block", padding: "8px 16px",
                background: "#111111",
                border: `1px solid ${C.border}`,
                borderRadius: 8, fontSize: 13, fontWeight: 500,
                color: C.gray2, textDecoration: "none",
                fontFamily: "'Inter Tight', sans-serif",
                transition: "border-color 0.15s, color 0.15s",
              }}
                className="footer-pill"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Nav columns */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "40px 32px",
          marginBottom: 56,
        }}>
          {nav.map((section) => (
            <div key={section.heading}>
              <p style={{
                fontSize: 11, fontWeight: 700,
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: C.accent, marginBottom: 16,
                fontFamily: "'Inter Tight', sans-serif",
              }}>
                {section.heading}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.href} style={{ marginBottom: 10 }}>
                    <a href={link.href} style={{
                      fontSize: 13, color: C.gray3,
                      textDecoration: "none",
                      fontFamily: "'Inter Tight', sans-serif",
                      lineHeight: 1.5,
                      transition: "color 0.15s",
                    }}
                      className="footer-link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: `1px solid ${C.border}`,
          paddingTop: 28,
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: 16,
        }}>
          <p style={{ fontSize: 12, color: C.gray4, fontFamily: "'Inter Tight', sans-serif" }}>
            © {new Date().getFullYear()} Waaza. All rights reserved.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
              { label: "Cookies", href: "/cookies" },
            ].map((link) => (
              <a key={link.href} href={link.href} style={{
                fontSize: 12, color: C.gray4,
                textDecoration: "none",
                fontFamily: "'Inter Tight', sans-serif",
                transition: "color 0.15s",
              }}
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #ffffff !important; }
        .footer-pill:hover { border-color: #FFF86C !important; color: #FFF86C !important; }

        @media (max-width: 900px) {
          footer div[style*="repeat(4, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 560px) {
          footer div[style*="repeat(4, 1fr)"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}