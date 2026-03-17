import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Long Can You Finance a Yacht? | Waaza",
  description:
    "Understand what influences yacht financing term length, including vessel age, leverage, borrower strength and overall case quality.",
  alternates: {
    canonical: "/how-long-can-you-finance-a-yacht",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long can you finance a yacht?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single universal term length. The realistic financing term depends on factors such as vessel age, borrower strength, deposit size, leverage and overall deal structure.",
      },
    },
    {
      "@type": "Question",
      name: "Does vessel age affect the financing term?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Vessel age can materially influence how the case is framed and how comfortable financing assumptions appear, including the likely structure of the term.",
      },
    },
    {
      "@type": "Question",
      name: "Why is there no fixed answer to financing term length?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Because term length sits inside a wider financing picture. It depends on the strength of the case, the asset profile, the leverage request and how the overall transaction is being approached.",
      },
    },
  ],
};

export default function Page() {
  const C = {
    bg: "#f4f3ef",
    white: "#ffffff",
    black: "#0a0a0a",
    gray2: "#4b5563",
    gray3: "#6b7280",
    gray6: "#eae9e4",
    accent: "#FFF86C",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main style={{ background: C.bg, color: C.black, padding: "88px 24px 120px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <p
            style={{
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: 1.8,
              textTransform: "uppercase",
              color: C.gray3,
              marginBottom: 18,
            }}
          >
            Term-length question page
          </p>

          <h1
            style={{
              fontFamily: "var(--font-serif), serif",
              fontSize: "clamp(44px,6vw,82px)",
              lineHeight: 1.03,
              fontWeight: 400,
              letterSpacing: -1.9,
              marginBottom: 22,
              maxWidth: 940,
            }}
          >
            How long can you finance a yacht? The answer depends on the case, not just the asset
          </h1>

          <p
            style={{
              fontSize: 18,
              lineHeight: 1.84,
              color: C.gray2,
              maxWidth: 980,
              marginBottom: 30,
            }}
          >
            People often ask how long a yacht can be financed because they want to understand what
            kind of monthly picture might be realistic. That is a sensible question, but it is often
            asked as though the answer were universal. In reality, term length is not a fixed fact
            applied equally to every case. It sits inside a larger financing picture shaped by asset
            age, borrower strength, leverage appetite, deposit size and overall structure. The most
            useful way to think about term length is not as an isolated number, but as one of the key
            variables that helps shape how comfortable or ambitious the overall case looks.
          </p>

          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 38 }}>
            <Link
              href="/simulator"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 24px",
                borderRadius: 12,
                background: C.accent,
                color: C.black,
                fontWeight: 700,
              }}
            >
              Explore term scenarios
            </Link>

            <Link
              href="/yacht-finance-calculator"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "15px 24px",
                borderRadius: 12,
                background: C.white,
                border: `1px solid ${C.gray6}`,
                color: C.black,
                fontWeight: 700,
              }}
            >
              Use yacht finance calculator
            </Link>
          </div>

          <div style={{ display: "grid", gap: 18 }}>
            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why term length is not a one-size-fits-all answer
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                It is tempting to treat financing term as if it were just a menu option. In reality,
                term length has to make sense inside the broader case. A term that feels acceptable in
                one context may feel too ambitious in another. The numbers do not stand alone. They
                interact with leverage, asset quality and the overall strength of the case.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                This is why the right question is not simply “what term exists?” but “what term looks
                sensible in this specific financing picture?”
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                The biggest variables shaping likely term length
              </h2>
              <ul style={{ paddingLeft: 20, marginBottom: 16 }}>
                {[
                  "Vessel age and condition",
                  "Deposit size and leverage intensity",
                  "Overall borrower strength and resilience",
                  "How straightforward or complex the structure appears",
                  "Whether intended use introduces additional friction",
                  "How conservative or ambitious the total financing picture looks",
                ].map((item) => (
                  <li key={item} style={{ fontSize: 16, lineHeight: 1.95, color: C.gray2 }}>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                Term length is best understood as part of this wider context. It is not just about
                making a monthly number smaller. It is about whether the overall shape of the case
                remains credible and commercially coherent.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why vessel age matters so much here
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                Vessel age can materially change how the financing conversation is framed. This is
                one reason buyers sometimes underestimate how much the asset itself influences the
                structure of the deal. A term that feels natural in one asset context may feel less
                comfortable in another once lender appetite and asset considerations come into play.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                That does not mean an older vessel automatically closes the door. It means the case
                may require more careful expectations around leverage, term and overall framing.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Why longer terms are not automatically “better”
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2, marginBottom: 14 }}>
                A longer term can improve the monthly repayment picture, which is why buyers are
                naturally interested in it. But a more comfortable monthly number is not the same as
                a stronger financing case. If the wider structure becomes too stretched, the sense of
                affordability may be misleading.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.88, color: C.gray2 }}>
                This is why Waaza treats term as a scenario lever rather than a magic answer. It is
                useful to explore, but it needs to be considered alongside the rest of the financing
                story.
              </p>
            </section>

            <section style={{ background: C.white, border: `1px solid ${C.gray6}`, borderRadius: 24, padding: 34 }}>
              <h2 style={{ fontSize: 32, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
                Best next pages to read
              </h2>
              <div style={{ display: "grid", gap: 10 }}>
                <Link href="/yacht-finance-calculator" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Yacht finance calculator
                </Link>
                <Link href="/yacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Yacht financing
                </Link>
                <Link href="/can-you-finance-a-yacht" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Can you finance a yacht?
                </Link>
                <Link href="/superyacht-financing" style={{ fontSize: 16, fontWeight: 700, color: C.black }}>
                  Superyacht financing
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
