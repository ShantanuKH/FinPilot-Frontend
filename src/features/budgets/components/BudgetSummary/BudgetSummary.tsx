import {
  IndianRupee,
  Wallet,
  TrendingDown,
  AlertTriangle,
} from "lucide-react";

import BudgetSummaryCard from "./BudgetSummaryCard";

import type { BudgetAnalytics } from "../../types/budget.types";

interface Props {
  analytics: BudgetAnalytics[];
}

const BudgetSummary = ({
  analytics,
}: Props) => {
  const totalBudget = analytics.reduce(
    (sum, budget) => sum + budget.budgetAmount,
    0
  );

  const totalSpent = analytics.reduce(
    (sum, budget) => sum + budget.spentAmount,
    0
  );

  const totalRemaining = analytics.reduce(
    (sum, budget) => sum + budget.remainingAmount,
    0
  );

  const exceededCount = analytics.filter(
    (budget) => budget.status === "EXCEEDED"
  ).length;

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <BudgetSummaryCard
        title="Total Budget"
        value={`₹${totalBudget.toLocaleString()}`}
        icon={Wallet}
        iconColor="#2563EB"
      />

      <BudgetSummaryCard
        title="Total Spent"
        value={`₹${totalSpent.toLocaleString()}`}
        icon={TrendingDown}
        iconColor="#F59E0B"
      />

      <BudgetSummaryCard
        title="Remaining"
        value={`₹${totalRemaining.toLocaleString()}`}
        icon={IndianRupee}
        iconColor="#10B981"
      />

      <BudgetSummaryCard
        title="Exceeded"
        value={String(exceededCount)}
        icon={AlertTriangle}
        iconColor="#EF4444"
      />
    </div>
  );
};

export default BudgetSummary;