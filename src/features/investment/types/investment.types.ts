export type InvestmentType =
  | "STOCK"
  | "MUTUAL_FUND"
  | "CRYPTO"
  | "FIXED_DEPOSIT"
  | "GOLD"
  | "REAL_ESTATE"
  | "OTHER";

export interface Investment {
  id: number;
  name: string;
  amount: number;
  investmentType: InvestmentType;
  investmentDate: string;
}

export interface CreateInvestmentRequest {
  name: string;
  amount: number;
  investmentType: InvestmentType;
  investmentDate: string;
}

export interface UpdateInvestmentRequest {
  name: string;
  amount: number;
  investmentType: InvestmentType;
  investmentDate: string;
}

export interface InvestmentSummary {
  totalInvestment: number;
  investmentCount: number;
  largestInvestment: number;
  averageInvestment: number;
}

export interface PortfolioAllocation {
  investmentType: InvestmentType;
  amount: number;
  percentage: number;
}

export interface InvestmentRiskAnalysis {
  userRiskProfile: "LOW" | "MEDIUM" | "HIGH";
  portfolioRisk: string;
  message: string;
}