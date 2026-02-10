import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  const rs = await prisma.ruleSet.findUnique({
    where: { version: "v1.0" },
    include: { rules: true },
  });

  if (!rs) {
    return NextResponse.json({ ok: false, error: "RuleSet v1.0 not found" }, { status: 404 });
  }

  let updated = 0;

  for (const r of rs.rules) {
    const cond = r.condition as any;
    if (!cond?.field) continue;

    let nextField = cond.field as string;

    // patch known v1 fields
    if (nextField === "liquidityAvailable") nextField = "client.liquidityAvailable";
    if (nextField === "yearBuilt") nextField = "vessel.yearBuilt";
    if (nextField === "usageType") nextField = "vessel.usageType";

    if (nextField !== cond.field) {
      await prisma.rule.update({
        where: { id: r.id },
        data: { condition: { ...cond, field: nextField } },
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
