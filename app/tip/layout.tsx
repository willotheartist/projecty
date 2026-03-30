// app/tip/layout.tsx — standalone layout for guest tipping pages (no site nav)
export default function TipLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#FFF86C",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        fontFamily: "var(--font-sans), 'Inter', sans-serif",
      }}
    >
      <div style={{ width: "100%", maxWidth: 480 }}>{children}</div>
    </div>
  );
}
