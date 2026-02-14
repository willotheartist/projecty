// app/api/widget/assess/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { runAssessment } from "@/lib/engine/runAssessment";

export const dynamic = "force-dynamic";

function mapIncomeType(v: string) {
  const x = v.toLowerCase();
  if (x === "salary") return "SALARY" as const;
  if (x === "business") return "BUSINESS" as const;
  if (x === "passive") return "PASSIVE" as const;
  return "MIXED" as const;
}

/**
 * POST /api/widget/assess
 *
 * Lightweight assessment endpoint for the embeddable widget.
 * No auth required — creates under system user.
 * Rate limited by origin header (basic).
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const purchasePrice = Number(body?.purchasePrice ?? 0);
    const yearBuilt = Number(body?.yearBuilt ?? 0);
    const liquidityAvailable = Number(body?.liquidityAvailable ?? 0);
    const residency = String(body?.residency ?? "Unknown");
    const incomeType = mapIncomeType(String(body?.incomeType ?? "mixed"));

    if (!purchasePrice || purchasePrice <= 0) {
      return NextResponse.json({ error: "Invalid purchasePrice" }, { status: 400 });
    }
    if (!yearBuilt || yearBuilt < 1950) {
      return NextResponse.json({ error: "Invalid yearBuilt" }, { status: 400 });
    }
    if (!liquidityAvailable || liquidityAvailable <= 0) {
      return NextResponse.json({ error: "Invalid liquidityAvailable" }, { status: 400 });
    }

    // System user for widget assessments
    const systemEmail = "widget@waaza.co";
    const systemUser = await prisma.user.upsert({
      where: { email: systemEmail },
      update: {},
      create: { email: systemEmail, role: "ADMIN", name: "Widget" },
    });

    const client = await prisma.client.create({
      data: {
        name: "Widget Visitor",
        residency,
        liquidityAvailable,
        netWorthBand: "unknown",
        incomeType,
        ownershipIntent: "UNSURE",
        createdById: systemUser.id,
      },
    });

    const vessel = await prisma.vessel.create({
      data: {
        clientId: client.id,
        purchasePrice,
        yearBuilt,
        usageType: "PRIVATE",
        intendedFlag: null,
      },
    });

    const result = await runAssessment({
      clientId: client.id,
      vesselId: vessel.id,
      actorEmail: systemEmail,
    });

    // Return minimal response for widget
    return NextResponse.json({
      readinessScore: result.readinessScore,
      tier: result.tier,
      ltvEstimate: result.ltv,
      riskFlags: result.riskFlags,
      recommendedPath: result.recommendedPath,
    });
  } catch (err) {
    console.error("Widget assess error:", err);
    return NextResponse.json(
      { error: "Assessment failed" },
      { status: 500 }
    );
  }
}