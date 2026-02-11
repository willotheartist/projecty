import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function getObj(v: unknown): Record<string, unknown> {
  return isRecord(v) ? v : {};
}

function fmtEUR(n: number) {
  const x = Number.isFinite(n) ? n : 0;
  try {
    return new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(x);
  } catch {
    return `€${Math.round(x).toLocaleString()}`;
  }
}

function humanTier(tier: string) {
  const t = String(tier || "").toUpperCase();
  if (t === "FINANCE_READY") return "Finance Ready";
  if (t === "CONDITIONAL") return "Conditional";
  if (t === "HIGH_RISK") return "High Complexity";
  return tier || "Unknown";
}

export async function POST(req: Request) {
  try {
    const raw = (await req.json()) as unknown;
    const body = getObj(raw);

    const assessmentId = String(body.assessmentId ?? "");
    if (!assessmentId) {
      return NextResponse.json({ ok: false, error: "Missing assessmentId" }, { status: 400 });
    }

    const assessment = await prisma.assessment.findUnique({
      where: { id: assessmentId },
    });

    if (!assessment) {
      return NextResponse.json({ ok: false, error: "Assessment not found" }, { status: 404 });
    }

    const run = await prisma.assessmentRun.findFirst({
      where: { assessmentId },
      orderBy: { createdAt: "desc" },
    });

    if (!run) {
      return NextResponse.json(
        { ok: false, error: "No AssessmentRun found. Run /api/assessments/run first." },
        { status: 404 }
      );
    }

    const snap = getObj(run.inputSnapshot);
    const client = getObj(snap.client);
    const vessel = getObj(snap.vessel);

    const buyerName = String(client.name ?? "Buyer");
    const residency = String(client.residency ?? "Unknown");

    const purchasePrice = Number(vessel.purchasePrice ?? 0);
    const yearBuilt = Number(vessel.yearBuilt ?? 0);
    const usageType = String(vessel.usageType ?? "Unknown");
    const intendedFlag = vessel.intendedFlag ? String(vessel.intendedFlag) : "—";

    const score = Number(assessment.readinessScore ?? 0);
    const tierRaw = String(assessment.tier ?? "UNKNOWN");
    const tier = humanTier(tierRaw);

    const ltvMin = Number(assessment.ltvEstimateMin ?? 0);
    const ltvMax = Number(assessment.ltvEstimateMax ?? 0);

    const flags: string[] = Array.isArray(assessment.riskFlags)
      ? (assessment.riskFlags as unknown[]).map((x) => String(x))
      : [];

    const bankParagraph =
      `Financing pre-screen summary (${run.ruleSetVersion}, ${run.engineVersion}): ` +
      `${buyerName} (${residency}) is assessing finance for a vessel priced at ${fmtEUR(purchasePrice)} ` +
      `(${yearBuilt}, ${usageType}, intended flag: ${intendedFlag}). ` +
      `Readiness score: ${score}/100 (${tier}); indicative LTV band: ${ltvMin}–${ltvMax}%. ` +
      (flags.length ? `Notes: ${flags.join("; ")}.` : `No major risk flags triggered.`);

    const buyerParagraph =
      `Your finance readiness is currently ${tier.toLowerCase()} (${score}/100). ` +
      `Based on the current profile and vessel details, an indicative LTV range is ${ltvMin}–${ltvMax}%. ` +
      (flags.length
        ? `A couple of items to tighten up before lender outreach: ${flags.join("; ")}.`
        : `You’re in a strong position to move toward lender outreach with a structured document pack.`);

    return NextResponse.json({
      ok: true,
      summary: {
        toBank: bankParagraph,
        toBuyer: buyerParagraph,
      },
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
