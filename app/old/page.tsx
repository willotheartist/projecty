// app/page.tsx
import Link from "next/link";


export default function Page() {
  return (
    <main className="min-h-screen bg-(--bg) text-(--text)">
      <header className="sticky top-0 z-50 border-b border-(--border) bg-(--bg)/85 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="text-[2px] font-semibold tracking-[-0.02em]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              ProjectY
            </Link>

            <nav className="hidden items-center gap-7 text-[13px] text-(--muted) md:flex">
              <Link className="hover:text-(--text)" href="/product">
                Product
              </Link>
              <Link className="hover:text-(--text)" href="/use-cases">
                Use cases
              </Link>
              <Link className="hover:text-(--text)" href="/resources">
                Resources
              </Link>
              <Link className="hover:text-(--text)" href="/partners">
                Partners
              </Link>
              <Link className="hover:text-(--text)" href="/stories">
                Customer stories
              </Link>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="hidden text-[13px] text-(--muted) hover:text-(--text) md:inline"
            >
              Sign in
            </Link>

            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-full bg-(--accent) px-4 py-2 text-[13px] font-medium text-white shadow-md hover:brightness-105 active:brightness-95"
            >
              Book a demo
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-(--tint)">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 text-[11px] tracking-[0.22em] text-(--muted)">
              YACHT FINANCE READINESS
            </div>

            <h1
              className="text-balance text-[52px] leading-[0.98] tracking-[-0.03em] md:text-[78px]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              Broker-grade financing reports
              <br />
              in minutes — not weeks.
            </h1>

            <p className="mx-auto mt-8 max-w-2xl text-pretty text-[15px] leading-relaxed text-(--muted) md:text-[16px]">
              Run an assessment, generate a shareable PDF, and standardize lender intake.
              Readiness score, risk flags, and a recommended path — consistent every time.
            </p>

            <div className="mx-auto mt-10 max-w-3xl">
         
            </div>

            <p className="mx-auto mt-6 max-w-3xl text-[11px] leading-relaxed text-(--muted)">
              Demo data is generated in your database via /api/dev/demo. You can replace this later with a real intake form.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto w-full max-w-7xl px-6 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-16">
              <Stat
                value="1"
                suffix=" PDF"
                title="Consistent report"
                body="A clean assessment report brokers can forward to banks and private lenders as-is."
              />
              <Stat
                value="60"
                suffix="/100"
                title="Readiness score"
                body="A single number that aligns stakeholders and removes uncertainty early."
              />
              <Stat
                value="35–50"
                suffix="%"
                title="LTV band"
                body="An indicative band based on buyer/vessel signals to pre-filter lender fit."
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-(--border)">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-[13px] text-(--muted)">
            © {new Date().getFullYear()} ProjectY.
          </div>
          <div className="flex flex-wrap gap-5 text-[13px] text-(--muted)">
            <Link className="hover:text-(--text)" href="/privacy">
              Privacy
            </Link>
            <Link className="hover:text-(--text)" href="/terms">
              Terms
            </Link>
            <Link className="hover:text-(--text)" href="/contact">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

function Stat(props: { value: string; suffix?: string; title: string; body: string }) {
  return (
    <div>
      <div className="flex items-end gap-2" style={{ fontFamily: "var(--font-serif)" }}>
        <div className="text-[72px] leading-none tracking-[-0.03em] md:text-[84px]">
          {props.value}
        </div>
        {props.suffix ? <div className="pb-2 text-[18px] text-(--muted)">{props.suffix}</div> : null}
      </div>

      <div className="mt-6 text-[15px] font-medium">{props.title}</div>
      <p className="mt-2 text-[13px] leading-relaxed text-(--muted)">{props.body}</p>
    </div>
  );
}
