// app/api/wizard/assess/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { runAssessment } from "@/lib/engine/runAssessment";
import { WizardAnswers } from "@/lib/wizard/types";

export const dynamic = "force-dynamic";

function mapIncomeType(v: any) {
  const x = String(v || "").toLowerCase();
  if (x === "salary") return "SALARY" as const;
  if (x === "business_owner") return "BUSINESS" as const;
  if (x === "investments_dividends") return "PASSIVE" as const;
  return "MIXED" as const;
}

function mapUsageType(v: any) {
  const x = String(v || "").toLowerCase();
  // Prisma enum: PRIVATE / CHARTER
  if (x === "private") return "PRIVATE" as const;
  return "CHARTER" as const; // private_plus_charter, commercial_charter -> CHARTER
}

function mapOwnershipIntent(v: any) {
  const x = String(v || "").toLowerCase();
  if (x === "personal") return "PERSONAL" as const;
  if (x === "spv") return "SPV" as const;
  return "UNSURE" as const;
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<WizardAnswers>;

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

    // Actor (simple for now)
    const actorEmail = "founder@projecty.local";
    const actor = await prisma.user.upsert({
      where: { email: actorEmail },
      update: {},
      create: { email: actorEmail, role: "ADMIN" },
    });

    // Create lightweight Client + Vessel so the engine can run
    const client = await prisma.client.create({
      data: {
        name: "Wizard Buyer",
        residency: taxResidencyCountry,
        liquidityAvailable,
        netWorthBand,
        incomeType,
        ownershipIntent,
        createdById: actor.id,
      },
    });

    const vessel = await prisma.vessel.create({
      data: {
        clientId: client.id,
        purchasePrice,
        yearBuilt,
        usageType,
        intendedFlag:
          body?.intendedFlag === "specific_country"
            ? String(body?.intendedFlagCountry ?? "").trim() || null
            : body?.intendedFlag
            ? String(body.intendedFlag)
            : null,
      },
    });

    // Run the engine (defaults to latest ruleset)
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
    });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err?.message ?? "Unknown error" },
      { status: 500 }
    );
  }
}
