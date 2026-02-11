// /lib/wizard/defaults.ts
import { WizardAnswers } from "./types";

export const defaultAnswers: WizardAnswers = {
  currency: "EUR",

  purchasePrice: null,
  usageIntent: null,
  yearBuilt: null,
  vesselCondition: null,

  intendedFlag: null,
  intendedFlagCountry: null,

  liquidityAvailable: null,
  liquidityHeld: null,

  incomeType: null,
  netWorthBand: null,

  taxResidencyCountry: null,
  isTaxResidentEU: null,

  ownershipIntent: null,

  riskFlags: [],

  proceedTimeline: null,
};
