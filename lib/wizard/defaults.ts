import { WizardAnswers } from "./types";

export const defaultAnswers: WizardAnswers = {
  purchasePrice: null,
  currency: "EUR",

  usageIntent: null,

  yearBuilt: null,
  vesselCondition: null,

  intendedFlag: null,
  intendedFlagCountry: "",

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
