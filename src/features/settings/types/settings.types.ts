export type RiskProfile =
  | "LOW"
  | "MEDIUM"
  | "HIGH";

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  monthlyIncome: number;
  riskProfile: RiskProfile;
  currency: string;
}

export interface UpdateProfileRequest {
  firstName: string;
  lastName: string;
  monthlyIncome: number;
  riskProfile: RiskProfile;
  currency: string;
}

export type FinancialHealthStatus =
  | "EXCELLENT"
  | "GOOD"
  | "NEEDS_IMPROVEMENT";

export interface FinancialHealth {
  monthlyIncome: number;
  totalExpenses: number;
  monthlySavings: number;
  savingsRate: number;
  status: FinancialHealthStatus;
}