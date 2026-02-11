// lib/engine/loanSimulator.ts
export type LoanSimInput = {
  principal: number; // loan amount
  annualRatePct: number; // e.g. 5.8
  termYears: number; // e.g. 15
};

export type LoanSimOutput = {
  monthlyPayment: number;
  totalInterest: number;
  totalCost: number;
  months: number;
};

export function simulateAmortizedLoan(input: LoanSimInput): LoanSimOutput {
  const P = Math.max(0, Number(input.principal || 0));
  const annual = Math.max(0, Number(input.annualRatePct || 0));
  const years = Math.max(0, Number(input.termYears || 0));

  const n = Math.round(years * 12);
  if (!P || !n) {
    return { monthlyPayment: 0, totalInterest: 0, totalCost: 0, months: n };
  }

  // monthly interest rate
  const r = annual / 100 / 12;

  // zero-rate edge case
  if (r === 0) {
    const m0 = P / n;
    return {
      monthlyPayment: m0,
      totalInterest: 0,
      totalCost: P,
      months: n,
    };
  }

  // M = P * (r (1+r)^n) / ((1+r)^n - 1)
  const pow = Math.pow(1 + r, n);
  const M = P * ((r * pow) / (pow - 1));

  const totalCost = M * n;
  const totalInterest = totalCost - P;

  return {
    monthlyPayment: M,
    totalInterest,
    totalCost,
    months: n,
  };
}
