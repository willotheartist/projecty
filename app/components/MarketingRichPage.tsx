// app/components/MarketingRichPage.tsx
import Link from "next/link";

type LinkItem = { href: string; label: string };

type Section = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export default function MarketingRichPage({
  eyebrow,
  title,
  intro,
  primaryCta,
  secondaryCta,
  sections,
  related,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  primaryCta?: LinkItem;
  secondaryCta?: LinkItem;
  sections: Section[];
  related?: LinkItem[];
}) {
  const C = {
    bg: "#f4f3ef",
    white: "#ffffff",
    accent: "#FFF86C",
    black: "#0a0a0a",
    gray2: "#4b5563",
    gray3: "#6b7280",
    gray6: "#eae9e4",
  };

  return (
    <main style={{ background: C.bg, color: C.black, padding: "88px 24px 120px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
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
          {eyebrow}
        </p>

        <h1
          style={{
            fontFamily: "var(--font-serif), serif",
            fontSize: "clamp(42px,6vw,78px)",
            lineHeight: 1.04,
            fontWeight: 400,
            letterSpacing: -1.8,
            marginBottom: 22,
            maxWidth: 900,
          }}
        >
          {title}
        </h1>

        <p
          style={{
            fontSize: 18,
            lineHeight: 1.82,
            color: C.gray2,
            marginBottom: 30,
            maxWidth: 920,
          }}
        >
          {intro}
        </p>

        {(primaryCta || secondaryCta) && (
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 36 }}>
            {primaryCta && (
              <Link
                href={primaryCta.href}
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
                {primaryCta.label}
              </Link>
            )}

            {secondaryCta && (
              <Link
                href={secondaryCta.href}
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
                {secondaryCta.label}
              </Link>
            )}
          </div>
        )}

        <div style={{ display: "grid", gap: 18 }}>
          {sections.map((section) => (
            <section
              key={section.title}
              style={{
                background: C.white,
                border: `1px solid ${C.gray6}`,
                borderRadius: 24,
                padding: 32,
              }}
            >
              <h2
                style={{
                  fontSize: 30,
                  fontWeight: 800,
                  lineHeight: 1.15,
                  marginBottom: 16,
                }}
              >
                {section.title}
              </h2>

              {section.paragraphs.map((paragraph, i) => (
                <p
                  key={i}
                  style={{
                    fontSize: 16,
                    lineHeight: 1.85,
                    color: C.gray2,
                    marginBottom:
                      i === section.paragraphs.length - 1 && !section.bullets ? 0 : 14,
                  }}
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && (
                <ul style={{ paddingLeft: 20, marginTop: 8 }}>
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      style={{
                        fontSize: 16,
                        lineHeight: 1.95,
                        color: C.gray2,
                      }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {related && related.length > 0 && (
          <section
            style={{
              background: C.white,
              border: `1px solid ${C.gray6}`,
              borderRadius: 24,
              padding: 32,
              marginTop: 18,
            }}
          >
            <h2 style={{ fontSize: 30, fontWeight: 800, lineHeight: 1.15, marginBottom: 16 }}>
              Related pages
            </h2>
            <div style={{ display: "grid", gap: 10 }}>
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ fontSize: 16, fontWeight: 700, color: C.black }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
