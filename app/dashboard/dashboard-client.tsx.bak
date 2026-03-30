// app/dashboard/dashboard-client.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  accent: "#FFF86C",
  accentPale: "#fffde0",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  green: "#16a34a",
  amber: "#d97706",
  red: "#dc2626",
};

interface AssessmentRow {
  id: string;
  clientName: string;
  clientResidency: string;
  vesselPrice: number;
  vesselYear: number;
  vesselUsage: string;
  readinessScore: number | null;
  tier: string | null;
  ltvMin: number | null;
  ltvMax: number | null;
  riskFlags: string[];
  recommendedPath: string | null;
  createdAt: string;
}

interface DashboardData {
  user: { id: string; email: string; name: string | null; role: string };
  stats: {
    total: number;
    avgScore: number | null;
    tierCounts: Record<string, number>;
  };
  assessments: AssessmentRow[];
}

function tierColor(tier: string | null) {
  if (!tier) return C.gray4;
  const t = tier.toLowerCase();
  if (t.includes("ready") || t.includes("finance ready")) return C.green;
  if (t.includes("conditional")) return C.amber;
  return C.red;
}

function formatPrice(n: number) {
  if (n >= 1_000_000) return `€${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `€${(n / 1_000).toFixed(0)}k`;
  return `€${n}`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function DashboardClient({
  userName,
  userEmail,
}: {
  userId: string;
  userName: string | null;
  userEmail: string;
}) {
  const router = useRouter();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((r) => r.json())
      .then((d) => setData(d))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const greeting = userName
    ? `Welcome back, ${userName.split(" ")[0]}`
    : `Welcome back`;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: C.bg,
        fontFamily: "var(--font-sans), 'DM Sans', sans-serif",
        color: C.black,
      }}
    >
      {/* Dashboard header */}
      <div style={{ padding: "40px clamp(24px,5vw,80px) 0" }}>
        <div
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: 20,
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                fontSize: "clamp(28px,4vw,44px)",
                fontWeight: 400,
                letterSpacing: -0.5,
                marginBottom: 4,
              }}
            >
              {greeting}
            </h1>
            <p style={{ fontSize: 14, color: C.gray3 }}>{userEmail}</p>
          </div>
          <a
            href="/wizard"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 24px",
              background: C.black,
              color: "#fff",
              fontSize: 14,
              fontWeight: 600,
              borderRadius: 10,
              transition: "background .2s",
              cursor: "pointer",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1a1a1a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = C.black;
            }}
          >
            + New Assessment
          </a>
        </div>
      </div>

      <div style={{ padding: "32px clamp(24px,5vw,80px) 60px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: 80, color: C.gray4 }}>
              Loading your assessments...
            </div>
          ) : !data || data.assessments.length === 0 ? (
            /* ── Empty state ── */
            <div
              style={{
                background: C.white,
                borderRadius: 20,
                padding: "80px 40px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: C.accentPale,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 28,
                  margin: "0 auto 24px",
                }}
              >
                ◎
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                  fontSize: 28,
                  fontWeight: 400,
                  marginBottom: 12,
                }}
              >
                No assessments yet
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: C.gray3,
                  maxWidth: 400,
                  margin: "0 auto 32px",
                  lineHeight: 1.6,
                }}
              >
                Run your first financing readiness assessment to see results here.
              </p>
              <a
                href="/wizard"
                style={{
                  display: "inline-flex",
                  padding: "14px 28px",
                  background: C.accent,
                  color: C.black,
                  fontSize: 15,
                  fontWeight: 600,
                  borderRadius: 10,
                  textDecoration: "none",
                }}
              >
                Run first assessment →
              </a>
            </div>
          ) : (
            <>
              {/* ── Stats row ── */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: 16,
                  marginBottom: 32,
                }}
              >
                <StatCard
                  label="Total Assessments"
                  value={String(data.stats.total)}
                />
                <StatCard
                  label="Average Score"
                  value={data.stats.avgScore !== null ? String(data.stats.avgScore) : "—"}
                  accent={data.stats.avgScore !== null}
                />
                {Object.entries(data.stats.tierCounts).map(([tier, count]) => (
                  <StatCard
                    key={tier}
                    label={tier}
                    value={String(count)}
                    color={tierColor(tier)}
                  />
                ))}
              </div>

              {/* ── Assessment table ── */}
              <div
                style={{
                  background: C.white,
                  borderRadius: 20,
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    padding: "20px 28px",
                    borderBottom: `1px solid ${C.gray6}`,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h2 style={{ fontSize: 16, fontWeight: 600 }}>Assessments</h2>
                  <span style={{ fontSize: 13, color: C.gray4 }}>
                    {data.assessments.length} total
                  </span>
                </div>

                {/* Table header */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "2fr 1.2fr 0.8fr 1fr 1fr 0.8fr",
                    gap: 12,
                    padding: "12px 28px",
                    borderBottom: `1px solid ${C.gray6}`,
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: C.gray4,
                  }}
                >
                  <span>Client</span>
                  <span>Vessel</span>
                  <span>Score</span>
                  <span>Tier</span>
                  <span>LTV Band</span>
                  <span>Date</span>
                </div>

                {/* Rows */}
                {data.assessments.map((a) => (
                  <div
                    key={a.id}
                    onClick={() => router.push(`/dashboard/${a.id}`)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") router.push(`/dashboard/${a.id}`);
                    }}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1.2fr 0.8fr 1fr 1fr 0.8fr",
                      gap: 12,
                      padding: "16px 28px",
                      borderBottom: `1px solid ${C.gray6}`,
                      cursor: "pointer",
                      transition: "background .15s",
                      fontSize: 14,
                      alignItems: "center",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "#fafaf8";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "transparent";
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, marginBottom: 2 }}>{a.clientName}</div>
                      <div style={{ fontSize: 12, color: C.gray4 }}>{a.clientResidency}</div>
                    </div>
                    <div>
                      <div style={{ fontWeight: 500 }}>{formatPrice(a.vesselPrice)}</div>
                      <div style={{ fontSize: 12, color: C.gray4 }}>
                        {a.vesselYear} · {a.vesselUsage.toLowerCase()}
                      </div>
                    </div>
                    <div>
                      <span
                        style={{
                          fontFamily: "var(--font-serif), 'Instrument Serif', serif",
                          fontSize: 24,
                          fontWeight: 400,
                          color: tierColor(a.tier),
                        }}
                      >
                        {a.readinessScore ?? "—"}
                      </span>
                    </div>
                    <div>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "3px 10px",
                          borderRadius: 8,
                          fontSize: 12,
                          fontWeight: 600,
                          background:
                            a.tier?.toLowerCase().includes("ready")
                              ? "#dcfce7"
                              : a.tier?.toLowerCase().includes("conditional")
                              ? "#fef3c7"
                              : "#fef2f2",
                          color: tierColor(a.tier),
                        }}
                      >
                        {a.tier ?? "—"}
                      </span>
                    </div>
                    <div style={{ color: C.gray2 }}>
                      {a.ltvMin && a.ltvMax ? `${a.ltvMin}–${a.ltvMax}%` : "—"}
                    </div>
                    <div style={{ fontSize: 13, color: C.gray4 }}>
                      {formatDate(a.createdAt)}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ── Stat card component ── */
function StatCard({
  label,
  value,
  accent,
  color,
}: {
  label: string;
  value: string;
  accent?: boolean;
  color?: string;
}) {
  return (
    <div
      style={{
        background: C.white,
        borderRadius: 16,
        padding: "24px 24px 20px",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 600,
          letterSpacing: 1,
          textTransform: "uppercase",
          color: C.gray4,
          marginBottom: 8,
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontFamily: "var(--font-serif), 'Instrument Serif', serif",
          fontSize: 36,
          fontWeight: 400,
          color: color || (accent ? C.black : C.black),
          lineHeight: 1,
        }}
      >
        {value}
      </div>
    </div>
  );
}