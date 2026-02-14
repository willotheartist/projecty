// app/dashboard/settings/settings-client.tsx
"use client";

import { useEffect, useState } from "react";

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
  red: "#dc2626",
};

interface ApiKeyRecord {
  id: string;
  name: string;
  prefix: string;
  active: boolean;
  lastUsedAt: string | null;
  requestCount: number;
  rateLimit: number;
  createdAt: string;
}

export default function SettingsClient({
  userId: _userId,
  userEmail: _userEmail,
}: {
  userId: string;
  userEmail: string;
}) {
  const [keys, setKeys] = useState<ApiKeyRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [newKeyName, setNewKeyName] = useState("");
  const [createdKey, setCreatedKey] = useState<string | null>(null);
  const [creating, setCreating] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchKeys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchKeys() {
    try {
      const res = await fetch("/api/keys");
      const data = await res.json();
      setKeys(data.keys || []);
    } catch (err) {
      console.error("Failed to load keys:", err);
    } finally {
      setLoading(false);
    }
  }

  async function createKey() {
    setCreating(true);
    setCreatedKey(null);
    try {
      const res = await fetch("/api/keys", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: newKeyName || "Default" }),
      });
      const data = await res.json();
      if (data.key) {
        setCreatedKey(data.key);
        setNewKeyName("");
        fetchKeys();
      }
    } catch (err) {
      console.error("Failed to create key:", err);
    } finally {
      setCreating(false);
    }
  }

  async function revokeKey(keyId: string) {
    try {
      await fetch("/api/keys", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyId }),
      });
      fetchKeys();
    } catch (err) {
      console.error("Failed to revoke key:", err);
    }
  }

  function copyKey() {
    if (createdKey) {
      navigator.clipboard.writeText(createdKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div style={{ padding: "32px clamp(24px,5vw,80px) 60px" }}>
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <h1
          style={{
            fontFamily: "var(--font-serif), 'Instrument Serif', serif",
            fontSize: 36,
            fontWeight: 400,
            letterSpacing: -0.5,
            marginBottom: 8,
          }}
        >
          API Settings
        </h1>
        <p style={{ fontSize: 14, color: C.gray3, marginBottom: 40 }}>
          Manage API keys for integrating Waaza into external systems.
        </p>

        {/* Create new key */}
        <div
          style={{
            background: C.white,
            borderRadius: 20,
            padding: "28px 28px",
            marginBottom: 20,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: C.gray4,
              marginBottom: 20,
            }}
          >
            CREATE NEW KEY
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "flex-end", flexWrap: "wrap" }}>
            <div style={{ flex: 1, minWidth: 200 }}>
              <label
                style={{
                  display: "block",
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.gray2,
                  marginBottom: 6,
                }}
              >
                Key name
              </label>
              <input
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="e.g. My Broker Website"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  fontSize: 14,
                  border: `1px solid ${C.gray5}`,
                  borderRadius: 10,
                  background: C.bg,
                  fontFamily: "inherit",
                  boxSizing: "border-box",
                }}
              />
            </div>
            <button
              onClick={createKey}
              disabled={creating}
              style={{
                padding: "10px 20px",
                background: C.black,
                color: "#fff",
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 10,
                border: "none",
                cursor: creating ? "not-allowed" : "pointer",
                opacity: creating ? 0.6 : 1,
                fontFamily: "inherit",
                whiteSpace: "nowrap",
              }}
            >
              {creating ? "Creating..." : "Generate Key"}
            </button>
          </div>

          {/* Show created key */}
          {createdKey && (
            <div
              style={{
                marginTop: 20,
                padding: "16px 16px",
                borderRadius: 12,
                background: "#dcfce7",
                border: "1px solid #86efac",
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, color: C.green, marginBottom: 8 }}>
                Key created — copy it now, it won&apos;t be shown again.
              </div>
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                }}
              >
                <code
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    borderRadius: 8,
                    background: "#fff",
                    fontSize: 13,
                    fontFamily: "monospace",
                    wordBreak: "break-all",
                    border: "1px solid #d1d5db",
                  }}
                >
                  {createdKey}
                </code>
                <button
                  onClick={copyKey}
                  style={{
                    padding: "8px 16px",
                    background: C.black,
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 600,
                    borderRadius: 8,
                    border: "none",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    whiteSpace: "nowrap",
                  }}
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Key list */}
        <div style={{ background: C.white, borderRadius: 20, overflow: "hidden" }}>
          <div
            style={{
              padding: "20px 28px",
              borderBottom: `1px solid ${C.gray6}`,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: C.gray4,
            }}
          >
            YOUR API KEYS
          </div>

          {loading ? (
            <div style={{ padding: "40px 28px", color: C.gray4, textAlign: "center" }}>Loading...</div>
          ) : keys.length === 0 ? (
            <div style={{ padding: "40px 28px", textAlign: "center" }}>
              <p style={{ fontSize: 14, color: C.gray4 }}>No API keys yet. Create one above to get started.</p>
            </div>
          ) : (
            keys.map((k) => (
              <div
                key={k.id}
                style={{
                  padding: "16px 28px",
                  borderBottom: `1px solid ${C.gray6}`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: 16,
                  opacity: k.active ? 1 : 0.5,
                }}
              >
                <div style={{ minWidth: 0 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>{k.name}</div>
                  <div style={{ fontSize: 13, color: C.gray4, fontFamily: "monospace" }}>{k.prefix}</div>
                  <div style={{ fontSize: 12, color: C.gray4, marginTop: 4 }}>
                    {k.requestCount} requests
                    {k.lastUsedAt
                      ? ` · Last used ${new Date(k.lastUsedAt).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "short",
                        })}`
                      : " · Never used"}
                    {" · "}
                    Created{" "}
                    {new Date(k.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                  {k.active ? (
                    <button
                      onClick={() => revokeKey(k.id)}
                      style={{
                        padding: "6px 14px",
                        fontSize: 12,
                        fontWeight: 600,
                        borderRadius: 8,
                        border: `1px solid #fecaca`,
                        background: "#fef2f2",
                        color: C.red,
                        cursor: "pointer",
                        fontFamily: "inherit",
                      }}
                    >
                      Revoke
                    </button>
                  ) : (
                    <span
                      style={{
                        padding: "6px 14px",
                        fontSize: 12,
                        fontWeight: 600,
                        borderRadius: 8,
                        background: C.gray6,
                        color: C.gray4,
                      }}
                    >
                      Revoked
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* API Documentation */}
        <div
          style={{
            background: C.white,
            borderRadius: 20,
            padding: "28px 28px",
            marginTop: 20,
          }}
        >
          <div
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: 2,
              textTransform: "uppercase",
              color: C.gray4,
              marginBottom: 20,
            }}
          >
            QUICK START
          </div>
          <div style={{ fontSize: 14, color: C.gray2, lineHeight: 1.7 }}>
            <p style={{ marginBottom: 16 }}>Use your API key to create assessments programmatically:</p>
            <pre
              style={{
                padding: "16px 18px",
                borderRadius: 12,
                background: C.gray1,
                color: "#e5e7eb",
                fontSize: 13,
                lineHeight: 1.6,
                fontFamily: "monospace",
                overflowX: "auto",
                whiteSpace: "pre-wrap",
                wordBreak: "break-word",
              }}
            >
              {`curl -X POST https://www.waaza.co/api/v1/assessments \\
  -H "Authorization: Bearer wza_your_key_here" \\
  -H "Content-Type: application/json" \\
  -d '{
    "buyer": {
      "name": "John Smith",
      "residency": "United Kingdom",
      "liquidityAvailable": 1500000,
      "netWorthBand": "3_10m",
      "incomeType": "business",
      "ownershipIntent": "spv"
    },
    "vessel": {
      "purchasePrice": 4500000,
      "yearBuilt": 2019,
      "usageType": "private",
      "intendedFlag": "Malta"
    }
  }'`}
            </pre>
            <p style={{ marginTop: 16, fontSize: 13, color: C.gray3 }}>
              Endpoints: POST /api/v1/assessments · GET /api/v1/assessments · GET /api/v1/assessments/:id · POST
              /api/v1/reports
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
