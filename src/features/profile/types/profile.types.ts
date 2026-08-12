export interface Profile {
  firstName: string;
  lastName: string;
  email: string;
  monthlyIncome: number;
  riskProfile: RiskProfile;
  currency: string;
}

export type RiskProfile =
  | "LOW"
  | "MEDIUM"
  | "HIGH";

export interface UpdateProfileRequest {
  monthlyIncome: number;
  riskProfile: RiskProfile;
  currency: string;
}

export interface FinancialHealth {
  monthlyIncome: number;
  totalExpenses: number;
  monthlySavings: number;
  savingsRate: number;
  status: FinancialHealthStatus;
}

export type FinancialHealthStatus =
  | "EXCELLENT"
  | "GOOD"
  | "NEEDS_IMPROVEMENT";