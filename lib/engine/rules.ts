// lib/engine/rules.ts

export type Operator =
  | "=="
  | "!="
  | ">="
  | "<="
  | ">"
  | "<"
  | "in"
  | "contains";

export type RiskSeverity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

/**
 * Rules are stored in DB as JSON. We keep value as unknown and handle comparisons safely.
 * (This removes `any` while preserving flexibility.)
 */
export type RuleCondition = {
  field: string;
  op: Operator;
  value: unknown;
};

export type RuleEffect = {
  scoreDelta?: number;
  flagCode?: string | null;
  severity?: RiskSeverity;
};

export type RuleRow = {
  id: string;
  condition: RuleCondition;
  weight: number;
  effect: RuleEffect;
};

export type EvalHit = {
  ruleId: string;
  matched: boolean;
  weightedDelta: number;
  flagCode?: string;
  severity?: RiskSeverity;
};

function isRecord(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function getByPath(obj: unknown, path: string): unknown {
  const parts = path.split(".");
  let cur: unknown = obj;

  for (const p of parts) {
    if (!isRecord(cur)) return undefined;
    cur = cur[p];
  }

  return cur;
}

function toNumber(v: unknown): number {
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : NaN;
}

function opCompare(left: unknown, op: Operator, right: unknown): boolean {
  if (op === "==") return left === right;
  if (op === "!=") return left !== right;

  if (op === ">=") return toNumber(left) >= toNumber(right);
  if (op === "<=") return toNumber(left) <= toNumber(right);
  if (op === ">") return toNumber(left) > toNumber(right);
  if (op === "<") return toNumber(left) < toNumber(right);

  if (op === "in") {
    if (!Array.isArray(right)) return false;
    return right.includes(left);
  }

  if (op === "contains") {
    if (typeof left === "string") return left.includes(String(right));
    if (Array.isArray(left)) return left.includes(right);
    return false;
  }

  return false;
}

export function evaluateRule(
  rule: RuleRow,
  context: Record<string, unknown>
): EvalHit {
  const left = getByPath(context, rule.condition.field);
  const matched = opCompare(left, rule.condition.op, rule.condition.value);

  if (!matched) {
    return { ruleId: rule.id, matched: false, weightedDelta: 0 };
  }

  const baseDelta = Number(rule.effect.scoreDelta ?? 0);
  const weightedDelta = baseDelta * rule.weight;

  return {
    ruleId: rule.id,
    matched: true,
    weightedDelta,
    flagCode: rule.effect.flagCode ?? undefined,
    severity: rule.effect.severity,
  };
}

export function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}
