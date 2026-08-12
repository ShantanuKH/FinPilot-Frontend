import BudgetAnalyticsCard from "./BudgetAnalyticsCard";

import type { BudgetAnalytics } from "../../types/budget.types";

interface Props {
  analytics: BudgetAnalytics[];
  onEdit: (budget: BudgetAnalytics) => void;
  onDelete: (budget: BudgetAnalytics) => void;
}

const BudgetAnalyticsGrid = ({
  analytics,
  onEdit,
  onDelete,
}: Props) => {
  if (!analytics.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center">
        <h3 className="text-xl font-semibold text-slate-900">
          No Budgets Found
        </h3>

        <p className="mt-2 text-slate-500">
          Create your first monthly budget to start tracking your spending.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {analytics.map((budget) => (
        <BudgetAnalyticsCard
          key={budget.budgetId}
          budget={budget}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default BudgetAnalyticsGrid;