// app/dashboard/dashboard-client.tsx
"use client";

import { useState, useEffect, useCallback } from "react";

const C = {
  bg: "#f4f3ef",
  white: "#ffffff",
  yellow: "#FFF86C",
  yellowPale: "#fffde0",
  black: "#0a0a0a",
  gray1: "#1a1a1a",
  gray2: "#4b5563",
  gray3: "#6b7280",
  gray4: "#9ca3af",
  gray5: "#d1d5db",
  gray6: "#eae9e4",
  green: "#059669",
  greenBg: "#ecfdf5",
  greenBorder: "#a7f3d0",
  amber: "#d97706",
  amberBg: "#fffbeb",
  red: "#dc2626",
};

type Yacht = {
  id: string;
  name: string;
  slug: string;
  lengthM: number | null;
  operatingCurrency: string;
  crewMemberships: {
    id: string;
    roleOnYacht: string;
    user: { id: string; name: string | null; email: string; stripeOnboardingStatus: string };
  }[];
  _count: { charters: number };
};

type Charter = {
  id: string;
  startDate: string;
  endDate: string;
  baseCharterFee: number;
  feeCurrency: string;
  region: string;
  guestName: string | null;
  status: string;
  yacht: { name: string; slug: string };
  tipSession: {
    id: string;
    tipLinkToken: string;
    status: string;
    tipAmount: number | null;
    waazaFee: number | null;
    paidAt: string | null;
    splitType: string;
    suggestedPercentage: number;
  } | null;
};

const ROLE_LABELS: Record<string, string> = {
  CAPTAIN: "Captain",
  CHEF: "Chef",
  STEW: "Steward/ess",
  DECKHAND: "Deckhand",
  ENGINEER: "Engineer",
  OTHER: "Crew",
};

function fmt(n: number, cur: string) {
  return n.toLocaleString("en", { style: "currency", currency: cur, minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

function StatusPill({ status }: { status: string }) {
  const s = status.toUpperCase();
  const bg = s === "PAID" ? C.greenBg : s === "PENDING" ? C.amberBg : C.bg;
  const color = s === "PAID" ? C.green : s === "PENDING" ? C.amber : C.gray4;
  const label = s === "PAID" ? "Paid" : s === "PENDING" ? "Awaiting tip" : s.toLowerCase();
  return (
    <span
      style={{
        display: "inline-block",
        padding: "3px 10px",
        borderRadius: 6,
        fontSize: 12,
        fontWeight: 600,
        background: bg,
        color,
      }}
    >
      {label}
    </span>
  );
}

// ── SECTION COMPONENTS ──

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div style={{ background: C.white, borderRadius: 14, padding: "20px 24px", flex: 1, minWidth: 160 }}>
      <div style={{ fontSize: 12, fontWeight: 500, color: C.gray4, marginBottom: 6, textTransform: "uppercase", letterSpacing: 0.5 }}>{label}</div>
      <div style={{ fontSize: 28, fontWeight: 700, color: C.black, letterSpacing: -0.5 }}>{value}</div>
      {sub && <div style={{ fontSize: 12, color: C.gray4, marginTop: 2 }}>{sub}</div>}
    </div>
  );
}

function EmptyState({ icon, title, sub, action, onAction }: { icon: string; title: string; sub: string; action: string; onAction: () => void }) {
  return (
    <div style={{ textAlign: "center", padding: "48px 24px" }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
      <div style={{ fontSize: 16, fontWeight: 600, color: C.black, marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 13, color: C.gray4, marginBottom: 20, maxWidth: 320, margin: "0 auto 20px" }}>{sub}</div>
      <button onClick={onAction} style={btnPrimary}>{action}</button>
    </div>
  );
}

const btnPrimary: React.CSSProperties = {
  padding: "10px 20px",
  background: C.black,
  color: "#fff",
  fontSize: 13,
  fontWeight: 600,
  borderRadius: 8,
  border: "none",
  cursor: "pointer",
  fontFamily: "inherit",
};

const btnSecondary: React.CSSProperties = {
  padding: "10px 20px",
  background: C.white,
  color: C.black,
  fontSize: 13,
  fontWeight: 600,
  borderRadius: 8,
  border: `1px solid ${C.gray5}`,
  cursor: "pointer",
  fontFamily: "inherit",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  fontSize: 14,
  border: `1px solid ${C.gray5}`,
  borderRadius: 8,
  background: C.bg,
  fontFamily: "inherit",
  boxSizing: "border-box",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: C.gray2,
  marginBottom: 4,
};

// ── MAIN DASHBOARD ──

export default function DashboardClient({
  userName,
  userEmail,
}: {
  userId: string;
  userName: string | null;
  userEmail: string;
}) {
  const [tab, setTab] = useState<"yachts" | "charters" | "tips">("yachts");
  const [yachts, setYachts] = useState<Yacht[]>([]);
  const [charters, setCharters] = useState<Charter[]>([]);
  const [loading, setLoading] = useState(true);

  // Modals
  const [showAddYacht, setShowAddYacht] = useState(false);
  const [showAddCrew, setShowAddCrew] = useState<string | null>(null);
  const [showAddCharter, setShowAddCharter] = useState(false);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const [yRes, cRes] = await Promise.all([
      fetch("/api/tipping/yachts"),
      fetch("/api/tipping/charters"),
    ]);
    if (yRes.ok) {
      const d = await yRes.json();
      setYachts(d.yachts || []);
    }
    if (cRes.ok) {
      const d = await cRes.json();
      setCharters(d.charters || []);
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchData(); }, [fetchData]);

  // Stats
  const totalTips = charters.filter((c) => c.tipSession?.status === "PAID").length;
  const totalAmount = charters.reduce((sum, c) => sum + (c.tipSession?.tipAmount || 0), 0);
  const pendingCount = charters.filter((c) => c.tipSession?.status === "PENDING").length;
  const mainCurrency = yachts[0]?.operatingCurrency || "EUR";

  const copyTipLink = (token: string) => {
    const url = `${window.location.origin}/tip/${token}`;
    navigator.clipboard.writeText(url);
    setCopiedLink(token);
    setTimeout(() => setCopiedLink(null), 2000);
  };

  const tabs = [
    { key: "yachts" as const, label: "Yachts", count: yachts.length },
    { key: "charters" as const, label: "Charters", count: charters.length },
    { key: "tips" as const, label: "Tip history", count: totalTips },
  ];

  return (
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "32px clamp(16px,4vw,40px)" }}>
      {/* Welcome */}
      <div style={{ marginBottom: 28 }}>
        <h1 style={{ fontSize: 22, fontWeight: 600, color: C.black, marginBottom: 2 }}>
          {userName ? `Hey, ${userName}` : "Dashboard"}
        </h1>
        <p style={{ fontSize: 13, color: C.gray4 }}>{userEmail}</p>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 12, marginBottom: 28, flexWrap: "wrap" }}>
        <StatCard label="Yachts" value={String(yachts.length)} />
        <StatCard label="Tips received" value={String(totalTips)} sub={totalAmount > 0 ? fmt(totalAmount, mainCurrency) + " total" : undefined} />
        <StatCard label="Pending" value={String(pendingCount)} sub={pendingCount > 0 ? "awaiting guest payment" : "all clear"} />
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 0, borderBottom: `1px solid ${C.gray6}`, marginBottom: 24 }}>
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            style={{
              padding: "10px 20px",
              fontSize: 13,
              fontWeight: tab === t.key ? 600 : 500,
              color: tab === t.key ? C.black : C.gray4,
              background: "none",
              border: "none",
              borderBottom: tab === t.key ? `2px solid ${C.black}` : "2px solid transparent",
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all .15s",
            }}
          >
            {t.label}
            {t.count > 0 && (
              <span
                style={{
                  marginLeft: 6,
                  fontSize: 11,
                  fontWeight: 600,
                  background: tab === t.key ? C.yellow : C.gray6,
                  color: C.black,
                  padding: "2px 7px",
                  borderRadius: 10,
                }}
              >
                {t.count}
              </span>
            )}
          </button>
        ))}
      </div>

      {loading && <p style={{ color: C.gray4, fontSize: 14, textAlign: "center", padding: 40 }}>Loading...</p>}

      {/* ── YACHTS TAB ── */}
      {!loading && tab === "yachts" && (
        <>
          {yachts.length === 0 ? (
            <EmptyState
              icon="⛵"
              title="Add your first yacht"
              sub="Set up a yacht to start managing crew and generating tip links for charter guests."
              action="Add yacht"
              onAction={() => setShowAddYacht(true)}
            />
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.gray2 }}>{yachts.length} yacht{yachts.length !== 1 ? "s" : ""}</div>
                <button onClick={() => setShowAddYacht(true)} style={btnPrimary}>Add yacht</button>
              </div>

              {yachts.map((yacht) => (
                <div key={yacht.id} style={{ background: C.white, borderRadius: 14, padding: "20px 24px", marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                    <div>
                      <div style={{ fontSize: 17, fontWeight: 600, color: C.black }}>{yacht.name}</div>
                      <div style={{ fontSize: 12, color: C.gray4, marginTop: 2 }}>
                        {yacht.lengthM ? `${yacht.lengthM}m` : ""}{yacht.lengthM ? " · " : ""}{yacht.operatingCurrency} · {yacht._count.charters} charter{yacht._count.charters !== 1 ? "s" : ""}
                      </div>
                    </div>
                    <button onClick={() => setShowAddCrew(yacht.id)} style={btnSecondary}>Add crew</button>
                  </div>

                  {/* Crew list */}
                  {yacht.crewMemberships.length > 0 && (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {yacht.crewMemberships.map((cm) => (
                        <div
                          key={cm.id}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 6,
                            background: C.bg,
                            borderRadius: 6,
                            padding: "4px 10px",
                            fontSize: 12,
                          }}
                        >
                          <span style={{ fontWeight: 600, color: C.gray2 }}>{cm.user.name || cm.user.email}</span>
                          <span style={{ color: C.gray4 }}>{ROLE_LABELS[cm.roleOnYacht] || cm.roleOnYacht}</span>
                          {cm.user.stripeOnboardingStatus === "COMPLETE" ? (
                            <span style={{ color: C.green, fontSize: 10 }}>●</span>
                          ) : (
                            <span style={{ color: C.amber, fontSize: 10 }}>●</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  {yacht.crewMemberships.length === 0 && (
                    <p style={{ fontSize: 12, color: C.gray4, fontStyle: "italic" }}>No crew added yet</p>
                  )}
                </div>
              ))}
            </>
          )}
        </>
      )}

      {/* ── CHARTERS TAB ── */}
      {!loading && tab === "charters" && (
        <>
          {charters.length === 0 ? (
            <EmptyState
              icon="📋"
              title="No charters yet"
              sub="Create a charter to generate a tip link you can share with your guests."
              action="Create charter"
              onAction={() => setShowAddCharter(true)}
            />
          ) : (
            <>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: C.gray2 }}>{charters.length} charter{charters.length !== 1 ? "s" : ""}</div>
                <button onClick={() => setShowAddCharter(true)} style={btnPrimary}>Create charter</button>
              </div>

              {charters.map((charter) => (
                <div key={charter.id} style={{ background: C.white, borderRadius: 14, padding: "20px 24px", marginBottom: 12 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: C.black }}>{charter.yacht.name}</div>
                      <div style={{ fontSize: 12, color: C.gray4, marginTop: 2 }}>
                        {fmtDate(charter.startDate)} – {fmtDate(charter.endDate)} · {fmt(charter.baseCharterFee, charter.feeCurrency)}{charter.guestName ? ` · ${charter.guestName}` : ""}
                      </div>
                    </div>
                    {charter.tipSession && <StatusPill status={charter.tipSession.status} />}
                  </div>

                  {charter.tipSession && charter.tipSession.status === "PENDING" && (
                    <div style={{ marginTop: 12, display: "flex", gap: 8, alignItems: "center" }}>
                      <button
                        onClick={() => copyTipLink(charter.tipSession!.tipLinkToken)}
                        style={{
                          ...btnSecondary,
                          background: copiedLink === charter.tipSession.tipLinkToken ? C.greenBg : C.white,
                          color: copiedLink === charter.tipSession.tipLinkToken ? C.green : C.black,
                          borderColor: copiedLink === charter.tipSession.tipLinkToken ? C.greenBorder : C.gray5,
                          transition: "all .2s",
                        }}
                      >
                        {copiedLink === charter.tipSession.tipLinkToken ? "✓ Copied!" : "Copy tip link"}
                      </button>
                      <span style={{ fontSize: 11, color: C.gray4, flex: 1 }}>
                        Share this with your charter guest
                      </span>
                    </div>
                  )}

                  {charter.tipSession && charter.tipSession.status === "PAID" && (
                    <div
                      style={{
                        marginTop: 12,
                        background: C.greenBg,
                        border: `1px solid ${C.greenBorder}`,
                        borderRadius: 8,
                        padding: "8px 14px",
                        fontSize: 13,
                        color: C.green,
                        fontWeight: 500,
                      }}
                    >
                      {fmt(charter.tipSession.tipAmount || 0, charter.feeCurrency)} received · {new Date(charter.tipSession.paidAt!).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                    </div>
                  )}
                </div>
              ))}
            </>
          )}
        </>
      )}

      {/* ── TIPS TAB ── */}
      {!loading && tab === "tips" && (
        <>
          {totalTips === 0 ? (
            <EmptyState
              icon="💰"
              title="No tips yet"
              sub="When a guest pays through a tip link, it'll show up here."
              action="Create a charter"
              onAction={() => { setTab("charters"); setShowAddCharter(true); }}
            />
          ) : (
            <>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.gray2, marginBottom: 16 }}>
                {totalTips} tip{totalTips !== 1 ? "s" : ""} · {fmt(totalAmount, mainCurrency)} total
              </div>

              {charters
                .filter((c) => c.tipSession?.status === "PAID")
                .map((charter) => (
                  <div key={charter.id} style={{ background: C.white, borderRadius: 14, padding: "16px 24px", marginBottom: 10, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: C.black }}>{charter.yacht.name}</div>
                      <div style={{ fontSize: 12, color: C.gray4 }}>
                        {charter.guestName || "Guest"} · {fmtDate(charter.startDate)} – {fmtDate(charter.endDate)}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 17, fontWeight: 700, color: C.green }}>
                        {fmt(charter.tipSession!.tipAmount || 0, charter.feeCurrency)}
                      </div>
                      <div style={{ fontSize: 11, color: C.gray4 }}>
                        {new Date(charter.tipSession!.paidAt!).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </>
      )}

      {/* ── ADD YACHT MODAL ── */}
      {showAddYacht && (
        <Modal title="Add yacht" onClose={() => setShowAddYacht(false)}>
          <AddYachtForm
            onSuccess={() => {
              setShowAddYacht(false);
              fetchData();
            }}
          />
        </Modal>
      )}

      {/* ── ADD CREW MODAL ── */}
      {showAddCrew && (
        <Modal title="Add crew member" onClose={() => setShowAddCrew(null)}>
          <AddCrewForm
            yachtId={showAddCrew}
            onSuccess={() => {
              setShowAddCrew(null);
              fetchData();
            }}
          />
        </Modal>
      )}

      {/* ── CREATE CHARTER MODAL ── */}
      {showAddCharter && (
        <Modal title="Create charter" onClose={() => setShowAddCharter(false)}>
          <CreateCharterForm
            yachts={yachts}
            onSuccess={() => {
              setShowAddCharter(false);
              fetchData();
            }}
          />
        </Modal>
      )}
    </div>
  );
}

// ── MODAL ──

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
        padding: 24,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: C.white,
          borderRadius: 16,
          padding: "28px 28px 24px",
          width: "100%",
          maxWidth: 420,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <h2 style={{ fontSize: 18, fontWeight: 600, color: C.black }}>{title}</h2>
          <button onClick={onClose} style={{ background: "none", border: "none", fontSize: 20, color: C.gray4, cursor: "pointer" }}>×</button>
        </div>
        {children}
      </div>
    </div>
  );
}

// ── ADD YACHT FORM ──

function AddYachtForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState("");
  const [lengthM, setLengthM] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    setLoading(true);
    setError("");

    const res = await fetch("/api/tipping/yachts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name.trim(), lengthM: lengthM || null, operatingCurrency: currency }),
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || "Failed to create yacht");
      setLoading(false);
      return;
    }

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Yacht name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. M/Y Serenity" required style={inputStyle} />
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Length (m)</label>
          <input type="number" value={lengthM} onChange={(e) => setLengthM(e.target.value)} placeholder="e.g. 32" style={inputStyle} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Currency</label>
          <select value={currency} onChange={(e) => setCurrency(e.target.value)} style={inputStyle}>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>
      {error && <p style={{ color: C.red, fontSize: 13, marginBottom: 10 }}>{error}</p>}
      <button type="submit" disabled={loading} style={{ ...btnPrimary, width: "100%", opacity: loading ? 0.6 : 1 }}>
        {loading ? "Creating..." : "Add yacht"}
      </button>
    </form>
  );
}

// ── ADD CREW FORM ──

function AddCrewForm({ yachtId, onSuccess }: { yachtId: string; onSuccess: () => void }) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("OTHER");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    setError("");

    const res = await fetch(`/api/tipping/yachts/${yachtId}/crew`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim(), name: name.trim() || null, roleOnYacht: role }),
    });

    if (!res.ok) {
      const d = await res.json();
      setError(d.error || "Failed to add crew member");
      setLoading(false);
      return;
    }

    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="crew@example.com" required style={inputStyle} />
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="First Last" style={inputStyle} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} style={inputStyle}>
            <option value="CAPTAIN">Captain</option>
            <option value="CHEF">Chef</option>
            <option value="STEW">Steward/ess</option>
            <option value="DECKHAND">Deckhand</option>
            <option value="ENGINEER">Engineer</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
      </div>
      {error && <p style={{ color: C.red, fontSize: 13, marginBottom: 10 }}>{error}</p>}
      <button type="submit" disabled={loading} style={{ ...btnPrimary, width: "100%", opacity: loading ? 0.6 : 1 }}>
        {loading ? "Adding..." : "Add crew member"}
      </button>
    </form>
  );
}

// ── CREATE CHARTER FORM ──

function CreateCharterForm({ yachts, onSuccess }: { yachts: Yacht[]; onSuccess: () => void }) {
  const [yachtId, setYachtId] = useState(yachts[0]?.id || "");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [fee, setFee] = useState("");
  const [region, setRegion] = useState("MED");
  const [guestName, setGuestName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [tipLink, setTipLink] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!yachtId || !startDate || !endDate || !fee) return;
    setLoading(true);
    setError("");

    const res = await fetch("/api/tipping/charters", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        yachtId,
        startDate,
        endDate,
        baseCharterFee: parseFloat(fee),
        region,
        guestName: guestName.trim() || null,
      }),
    });

    const d = await res.json();

    if (!res.ok) {
      setError(d.error || "Failed to create charter");
      setLoading(false);
      return;
    }

    setTipLink(d.tipLink);
    setLoading(false);
  };

  if (tipLink) {
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 36, marginBottom: 12 }}>✓</div>
        <div style={{ fontSize: 16, fontWeight: 600, color: C.black, marginBottom: 8 }}>Charter created</div>
        <p style={{ fontSize: 13, color: C.gray4, marginBottom: 16 }}>Share this link with your guest:</p>
        <div
          style={{
            background: C.yellowPale,
            border: `1px solid ${C.yellow}`,
            borderRadius: 10,
            padding: "12px 16px",
            fontSize: 13,
            fontWeight: 500,
            color: C.black,
            wordBreak: "break-all",
            marginBottom: 16,
          }}
        >
          {tipLink}
        </div>
        <button
          onClick={() => {
            navigator.clipboard.writeText(tipLink);
          }}
          style={{ ...btnPrimary, width: "100%", marginBottom: 8 }}
        >
          Copy link
        </button>
        <button
          onClick={() => { onSuccess(); }}
          style={{ ...btnSecondary, width: "100%", border: "none", color: C.gray4 }}
        >
          Done
        </button>
      </div>
    );
  }

  if (yachts.length === 0) {
    return <p style={{ color: C.gray4, fontSize: 13, textAlign: "center" }}>Add a yacht first before creating a charter.</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Yacht</label>
        <select value={yachtId} onChange={(e) => setYachtId(e.target.value)} style={inputStyle}>
          {yachts.map((y) => (
            <option key={y.id} value={y.id}>{y.name}</option>
          ))}
        </select>
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Start date</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required style={inputStyle} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>End date</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required style={inputStyle} />
        </div>
      </div>
      <div style={{ display: "flex", gap: 10, marginBottom: 14 }}>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Charter fee</label>
          <input type="number" value={fee} onChange={(e) => setFee(e.target.value)} placeholder="80000" required style={inputStyle} />
        </div>
        <div style={{ flex: 1 }}>
          <label style={labelStyle}>Region</label>
          <select value={region} onChange={(e) => setRegion(e.target.value)} style={inputStyle}>
            <option value="MED">Mediterranean</option>
            <option value="CARIBBEAN">Caribbean</option>
            <option value="US">US waters</option>
            <option value="OTHER">Other</option>
          </select>
        </div>
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Guest name (optional)</label>
        <input value={guestName} onChange={(e) => setGuestName(e.target.value)} placeholder="Guest name" style={inputStyle} />
      </div>
      {error && <p style={{ color: C.red, fontSize: 13, marginBottom: 10 }}>{error}</p>}
      <button type="submit" disabled={loading} style={{ ...btnPrimary, width: "100%", opacity: loading ? 0.6 : 1 }}>
        {loading ? "Creating..." : "Create charter & generate tip link"}
      </button>
    </form>
  );
}