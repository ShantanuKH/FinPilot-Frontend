export interface DashboardSummary {
  totalExpenses: number;
  expenseCount: number;
  highestExpense: number;
  averageExpense: number;
}

export interface BudgetHealth {
  monthlyIncome: number;
  totalExpenses: number;
  remainingAmount: number;
  savingRate: number;
}

export interface CategoryBreakdown {
  category: string;
  totalAmount: number;
}

export interface MonthlySummary {
  month: string;
  totalAmount: number;
}