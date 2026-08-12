import {
  CreditCard,
  Receipt,
  TrendingUp,
  Wallet,
} from "lucide-react";

import StatCard from "../StatCard";

import type { DashboardSummary } from "../../types/dashboard.types";

interface Props {
  summary: DashboardSummary;
}

const SummaryCards = ({ summary }: Props) => {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Expenses"
        value={`₹${summary.totalExpenses.toLocaleString("en-IN")}`}
        subtitle="Spent this month"
        icon={Wallet}
        iconBgColor="bg-emerald-50"
        iconColor="text-emerald-600"
      />

      <StatCard
        title="Expense Count"
        value={summary.expenseCount.toString()}
        subtitle="Transactions this month"
        icon={Receipt}
        iconBgColor="bg-blue-50"
        iconColor="text-blue-600"
      />

      <StatCard
        title="Highest Expense"
        value={`₹${summary.highestExpense.toLocaleString("en-IN")}`}
        subtitle="Largest transaction"
        icon={TrendingUp}
        iconBgColor="bg-orange-50"
        iconColor="text-orange-600"
      />

      <StatCard
        title="Average Expense"
        value={`₹${summary.averageExpense.toLocaleString(
          "en-IN",
          {
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
          }
        )}`}
        subtitle="Average per transaction"
        icon={CreditCard}
        iconBgColor="bg-violet-50"
        iconColor="text-violet-600"
      />
    </section>
  );
};

export default SummaryCards;