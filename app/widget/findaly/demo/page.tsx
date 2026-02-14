// app/widget/findaly/demo/page.tsx
"use client";

export default function FindalyDemoPage() {
  return (
    <div style={{
      fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif",
      background: "#f5f5f0",
      minHeight: "100vh",
      color: "#1a1a1a",
    }}>
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      {/* Fake Findaly nav */}
      <nav style={{
        background: "#fff",
        borderBottom: "1px solid #e5e5e5",
        padding: "14px 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5 }}>
          findaly
        </div>
        <div style={{ display: "flex", gap: 24, fontSize: 14, color: "#6b7280" }}>
          <span>Buy</span>
          <span>Sell</span>
          <span>Financing</span>
          <span>About</span>
        </div>
      </nav>

      <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
        {/* Breadcrumb */}
        <div style={{ fontSize: 13, color: "#9ca3af", marginBottom: 24 }}>
          Home › Motor Yachts › Mediterranean › Sunseeker Manhattan 66
        </div>

        {/* Listing header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginBottom: 40 }}>
          {/* Image placeholder */}
          <div style={{
            background: "linear-gradient(135deg, #1a365d 0%, #2d5c8a 50%, #4a90c4 100%)",
            borderRadius: 16,
            height: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(255,255,255,0.4)",
            fontSize: 14,
          }}>
            [Vessel Image]
          </div>

          {/* Details */}
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 700, letterSpacing: -0.5, marginBottom: 8 }}>
              Sunseeker Manhattan 66
            </h1>
            <div style={{ fontSize: 32, fontWeight: 700, color: "#1a1a1a", marginBottom: 16, letterSpacing: -1 }}>
              €685,000
            </div>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
              marginBottom: 24,
            }}>
              <DetailItem label="Year" value="2019" />
              <DetailItem label="Length" value="20.73m" />
              <DetailItem label="Cabins" value="4" />
              <DetailItem label="Location" value="Antibes, France" />
              <DetailItem label="Engines" value="2× MAN V12" />
              <DetailItem label="Flag" value="Malta" />
            </div>
            <button style={{
              width: "100%",
              padding: "14px 24px",
              background: "#1a1a1a",
              color: "#fff",
              fontSize: 15,
              fontWeight: 600,
              borderRadius: 12,
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
            }}>
              Contact Broker
            </button>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #e5e5e5", margin: "0 0 32px" }} />

        {/* ═══════ WAAZA WIDGET EMBEDDED HERE ═══════ */}
        <div style={{ marginBottom: 40 }}>
          {/* 
            In production, this would be:
            <div id="waaza-finance" data-price="685000" data-year="2019" data-usage="private"></div>
            <script src="https://www.waaza.co/widget/findaly.js"></script>
            
            For demo, we render the widget directly via iframe:
          */}
          <iframe
            src="/widget/findaly?price=685000&year=2019&usage=private"
            style={{
              width: "100%",
              maxWidth: 592,
              height: 480,
              border: "none",
              borderRadius: 16,
              display: "block",
              margin: "0 auto",
            }}
            title="Financing Calculator — Waaza"
          />
        </div>

        {/* Divider */}
        <div style={{ borderTop: "1px solid #e5e5e5", margin: "0 0 32px" }} />

        {/* Fake listing description */}
        <div style={{ maxWidth: 640, marginBottom: 60 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>Description</h2>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "#4b5563" }}>
            Stunning Sunseeker Manhattan 66 in excellent condition, berthed in the heart of Antibes.
            This vessel has been meticulously maintained by her sole owner since delivery in 2019.
            Features include a flybridge with wet bar, four generous cabins, crew quarters,
            and twin MAN V12 engines with low hours. Ready for immediate Mediterranean cruising.
          </p>
        </div>

        {/* Popularity (like GreenAcres) */}
        <div style={{ borderTop: "1px solid #e5e5e5", paddingTop: 24, marginBottom: 40 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, fontStyle: "italic", marginBottom: 8 }}>Popularity</h3>
          <p style={{ fontSize: 13, color: "#9ca3af" }}>Seen 652 times since 12/3/2025</p>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }: { label: string; value: string }) {
  return (
    <div style={{
      padding: "10px 14px",
      background: "#f9f8f5",
      borderRadius: 10,
      border: "1px solid #f0efeb",
    }}>
      <div style={{ fontSize: 11, color: "#9ca3af", fontWeight: 500 }}>{label}</div>
      <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>{value}</div>
    </div>
  );
}