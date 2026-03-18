// lib/og.tsx
import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function generateOgImage(title: string, label?: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0a0a0a",
          padding: "0",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Accent bar — top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "#fff86c",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            padding: "56px 72px",
          }}
        >
          {/* Top — wordmark */}
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div
              style={{
                height: 28,
                width: 28,
                background: "#fff86c",
                borderRadius: 6,
                display: "flex",
              }}
            />
            <span
              style={{
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(255,248,108,0.6)",
                fontFamily: "sans-serif",
              }}
            >
              Waaza
            </span>
          </div>

          {/* Middle — title */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {label && (
              <span
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,248,108,0.45)",
                  fontFamily: "sans-serif",
                }}
              >
                {label}
              </span>
            )}
            <div
              style={{
                fontSize: title.length > 50 ? 52 : 64,
                fontWeight: 400,
                lineHeight: 1.06,
                letterSpacing: "-0.025em",
                color: "#f4f3ef",
                maxWidth: 900,
                display: "flex",
                fontFamily: "serif",
              }}
            >
              {title}
            </div>
          </div>

          {/* Bottom — trust strip */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
              paddingTop: 24,
              borderTop: "1px solid rgba(255,248,108,0.1)",
            }}
          >
            {["Yacht Financing Intelligence", "Structuring · Scoring · Reporting", "waaza.co"].map(
              (item) => (
                <span
                  key={item}
                  style={{
                    fontSize: 13,
                    color: "rgba(244,243,239,0.35)",
                    fontFamily: "sans-serif",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
