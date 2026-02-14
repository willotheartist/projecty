//·app/api/assess/route.ts

import { NextResponse } from "next/server";
import { scoreAssessment } from "@/lib/wizard/scoring";
import { WizardAnswers } from "@/lib/wizard/types";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  const body = (await req.json()) as Partial<WizardAnswers>;

  // Minimal sanity; add zod later if you want strictness
  const result = scoreAssessment({
    purchasePrice: body.purchasePrice ?? null,
    currency: body.currency ?? "EUR",
    usageIntent: body.usageIntent ?? null,
    yearBuilt: body.yearBuilt ?? null,
    vesselCondition: body.vesselCondition ?? null,
    intendedFlag: body.intendedFlag ?? null,
    intendedFlagCountry: body.intendedFlagCountry ?? "",
    liquidityAvailable: body.liquidityAvailable ?? null,
    liquidityHeld: body.liquidityHeld ?? null,
    incomeType: body.incomeType ?? null,
    netWorthBand: body.netWorthBand ?? null,
    taxResidencyCountry: body.taxResidencyCountry ?? null,
    isTaxResidentEU: body.isTaxResidentEU ?? null,
    ownershipIntent: body.ownershipIntent ?? null,
    riskFlags: body.riskFlags ?? [],
    proceedTimeline: body.proceedTimeline ?? null,
  });

  return NextResponse.json({ ok: true, result });
}
