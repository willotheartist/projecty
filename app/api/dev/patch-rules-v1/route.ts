import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

export async function POST() {
  const rs = await prisma.ruleSet.findUnique({
    where: { version: "v1.0" },
    include: { rules: true },
  });

  if (!rs) {
    return NextResponse.json(
      { ok: false, error: "RuleSet v1.0 not found" },
      { status: 404 }
    );
  }

  let updated = 0;

  for (const r of rs.rules) {
    const condUnknown = r.condition as unknown;
    if (!isRecord(condUnknown)) continue;

    const fieldVal = condUnknown.field;
    if (typeof fieldVal !== "string" || !fieldVal.trim()) continue;

    const originalField = fieldVal;
    let nextField = originalField;

    // patch known v1 fields
    if (nextField === "liquidityAvailable") nextField = "client.liquidityAvailable";
    if (nextField === "yearBuilt") nextField = "vessel.yearBuilt";
    if (nextField === "usageType") nextField = "vessel.usageType";

    if (nextField !== originalField) {
      const nextCond: Record<string, unknown> = { ...condUnknown, field: nextField };

      await prisma.rule.update({
        where: { id: r.id },
        data: {
          condition: nextCond as Prisma.InputJsonValue,
        },
      });

      updated += 1;
    }
  }

  return NextResponse.json({
    ok: true,
    ruleSetVersion: rs.version,
    rulesTotal: rs.rules.length,
    rulesUpdated: updated,
  });
}
