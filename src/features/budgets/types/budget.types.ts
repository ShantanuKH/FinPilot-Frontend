export type ExpenseCategory =
  | "FOOD"
  | "TRANSPORT"
  | "SHOPPING"
  | "ENTERTAINMENT"
  | "HEALTHCARE"
  | "UTILITIES"
  | "OTHER";

export type BudgetStatus =
  | "ON_TRACK"
  | "WARNING"
  | "EXCEEDED";

export interface Budget {
  id: number;
  category: ExpenseCategory;
  budgetAmount: number;
  month: string;
}

export interface BudgetAnalytics {
  budgetId: number;
  category: ExpenseCategory;
  budgetAmount: number;
  spentAmount: number;
  remainingAmount: number;
  usagePercentage: number;
  status: BudgetStatus;
}

export interface CreateBudgetRequest {
  category: ExpenseCategory;
  budgetAmount: number;
  month: string;
}

export interface UpdateBudgetRequest {
  category: ExpenseCategory;
  budgetAmount: number;
  month: string;
}