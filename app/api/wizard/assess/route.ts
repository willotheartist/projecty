// app/api/wizard/assess/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { runAssessment } from "@/lib/engine/runAssessment";
import { WizardAnswers } from "@/lib/wizard/types";
import { getSessionUser } from "@/lib/auth";

export const dynamic = "force-dynamic";

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function mapIncomeType(v: unknown) {
  const x = String(v ?? "").toLowerCase();
  if (x === "salary") return "SALARY" as const;
  if (x === "business_owner") return "BUSINESS" as const;
  if (x === "investments_dividends") return "PASSIVE" as const;
  return "MIXED" as const;
}

function mapUsageType(v: unknown) {
  const x = String(v ?? "").toLowerCase();
  if (x === "private") return "PRIVATE" as const;
  return "CHARTER" as const;
}

function mapOwnershipIntent(v: unknown) {
  const x = String(v ?? "").toLowerCase();
  if (x === "personal") return "PERSONAL" as const;
  if (x === "spv") return "SPV" as const;
  return "UNSURE" as const;
}

export async function POST(req: Request) {
  try {
    const raw = (await req.json()) as unknown;
    const body: Partial<WizardAnswers> = isRecord(raw) ? (raw as Partial<WizardAnswers>) : {};

    const purchasePrice = Number(body?.purchasePrice ?? 0);
    const yearBuilt = Number(body?.yearBuilt ?? 0);
    const liquidityAvailable = Number(body?.liquidityAvailable ?? 0);

    const taxResidencyCountry = String(body?.taxResidencyCountry ?? "Unknown");
    const netWorthBand = String(body?.netWorthBand ?? "unknown");

    const incomeType = mapIncomeType(body?.incomeType);
    const ownershipIntent = mapOwnershipIntent(body?.ownershipIntent);
    const usageType = mapUsageType(body?.usageIntent);

    if (!purchasePrice || purchasePrice <= 0) {
      return NextResponse.json({ ok: false, error: "Missing/invalid purchasePrice" }, { status: 400 });
    }
    if (!yearBuilt || yearBuilt < 1950) {
      return NextResponse.json({ ok: false, error: "Missing/invalid yearBuilt" }, { status: 400 });
    }
    if (!liquidityAvailable || liquidityAvailable <= 0) {
      return NextResponse.json({ ok: false, error: "Missing/invalid liquidityAvailable" }, { status: 400 });
    }

    // ── Resolve actor: logged-in user OR fallback to system user ──
    const sessionUser = await getSessionUser();
    let actorId: string;
    let actorEmail: string;

    if (sessionUser) {
      actorId = sessionUser.id;
      actorEmail = sessionUser.email;
    } else {
      // Fallback for unauthenticated wizard usage (e.g. landing page demo)
      const fallbackEmail = "system@waaza.co";
      const systemUser = await prisma.user.upsert({
        where: { email: fallbackEmail },
        update: {},
        create: { email: fallbackEmail, role: "ADMIN", name: "System" },
      });
      actorId = systemUser.id;
      actorEmail = systemUser.email;
    }

    // Create Client + Vessel
    const client = await prisma.client.create({
      data: {
        name: (raw as Record<string, unknown>)?.clientName as string || "Assessment Buyer",
        residency: taxResidencyCountry,
        liquidityAvailable,
        netWorthBand,
        incomeType,
        ownershipIntent,
        createdById: actorId,
      },
    });

    const intendedFlag =
      body?.intendedFlag === "specific_country"
        ? String(body?.intendedFlagCountry ?? "").trim() || null
        : body?.intendedFlag
        ? String(body.intendedFlag)
        : null;

    const vessel = await prisma.vessel.create({
      data: {
        clientId: client.id,
        purchasePrice,
        yearBuilt,
        usageType,
        intendedFlag,
      },
    });

    // Run the engine
    const result = await runAssessment({
      clientId: client.id,
      vesselId: vessel.id,
      actorEmail,
    });

    return NextResponse.json({
      ok: true,
      ids: {
        clientId: client.id,
        vesselId: vessel.id,
        assessmentId: result.assessmentId,
        assessmentRunId: result.assessmentRunId,
      },
      result,
      authenticated: !!sessionUser,
    });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("Wizard assess error:", msg);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}