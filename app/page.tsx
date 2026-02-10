// app/page.tsx
export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#06080C",
        color: "#E9EEF7",
        display: "grid",
        placeItems: "center",
        padding: 24,
      }}
    >
      <div style={{ maxWidth: 860, width: "100%" }}>
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: 16,
            padding: 24,
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <div style={{ fontSize: 12, letterSpacing: 1.6, opacity: 0.7 }}>
            PROJECTY • Day 1
          </div>

          <h1 style={{ marginTop: 10, fontSize: 36, lineHeight: 1.1 }}>
            Yacht Financing Readiness Engine
          </h1>

          <p style={{ marginTop: 12, opacity: 0.85, fontSize: 16 }}>
            Baseline deploy is live. Next: Neon + Prisma + Auth scaffold.
          </p>

          <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: 12,
                padding: "6px 10px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              Next.js (App Router)
            </span>
            <span
              style={{
                fontSize: 12,
                padding: "6px 10px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              PNPM
            </span>
            <span
              style={{
                fontSize: 12,
                padding: "6px 10px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.14)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              Deployed on Vercel
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
