// app/widget/demo/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Widget Demo — Waaza",
};

export default function WidgetDemoPage() {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #f8f8f8;
          color: #1a1a1a;
        }
        .demo-nav {
          background: #fff;
          border-bottom: 1px solid #e5e5e5;
          padding: 16px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .demo-nav h1 {
          font-size: 18px;
          font-weight: 700;
          letter-spacing: -0.3px;
        }
        .demo-hero {
          max-width: 800px;
          margin: 80px auto;
          padding: 0 40px;
          text-align: center;
        }
        .demo-hero h2 {
          font-size: 48px;
          font-weight: 300;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 20px;
        }
        .demo-hero p {
          font-size: 17px;
          color: #6b7280;
          line-height: 1.7;
          max-width: 500px;
          margin: 0 auto 40px;
        }
        .demo-badge {
          display: inline-block;
          padding: 10px 20px;
          background: #FFF86C;
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #0a0a0a;
        }
        .demo-info {
          max-width: 800px;
          margin: 60px auto;
          padding: 40px;
          background: #fff;
          border-radius: 20px;
          border: 1px solid #e5e5e5;
        }
        .demo-info h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .demo-info pre {
          background: #1a1a1a;
          color: #e5e7eb;
          padding: 20px;
          border-radius: 12px;
          font-size: 13px;
          line-height: 1.6;
          overflow-x: auto;
          white-space: pre-wrap;
          word-break: break-all;
        }
        .demo-info p {
          font-size: 14px;
          color: #6b7280;
          margin-top: 16px;
          line-height: 1.6;
        }

        @media (max-width: 640px){
          .demo-nav{padding:14px 18px}
          .demo-hero{padding:0 18px;margin:56px auto}
          .demo-hero h2{font-size:36px}
          .demo-info{padding:22px;margin:34px 18px;border-radius:16px}
        }
      `}</style>

      <div className="demo-nav">
        <h1>Sample Broker Website</h1>
        <span style={{ fontSize: 13, color: "#9ca3af" }}>This is a demo page</span>
      </div>

      <div className="demo-hero">
        <h2>Experience the Waaza Widget</h2>
        <p>
          This page simulates a broker website with the Waaza financing readiness widget embedded.
          Look at the bottom-right corner.
        </p>
        <div className="demo-badge">Widget is active ↘</div>
      </div>

      <div className="demo-info">
        <h3>How to embed on your website</h3>
        <pre>{`<script
  src="https://www.waaza.co/widget/embed.js"
  data-key="wza_your_api_key"
  data-theme="light"
  data-position="bottom-right"
></script>`}</pre>
        <p>
          Options: data-theme (&quot;light&quot; or &quot;dark&quot;), data-position
          (&quot;bottom-right&quot;, &quot;bottom-left&quot;, or &quot;inline&quot;),
          data-container (CSS selector for inline mode).
        </p>
      </div>

      {/* The actual widget embed (loaded after hydration) */}
      <Script
        src="/widget/embed.js"
        strategy="afterInteractive"
        data-theme="light"
        data-position="bottom-right"
      />
    </>
  );
}
