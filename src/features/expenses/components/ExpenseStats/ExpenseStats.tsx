import { Wallet, CalendarDays, Tags, TrendingUp } from "lucide-react";
import type { Expense } from "../../types/expense.types";

interface Props {
  expenses: Expense[];
}

const ExpenseStats = ({ expenses }: Props) => {
  const totalSpend = expenses.reduce(
    (sum, expense) => sum + expense.amount,
    0
  );

  const totalCategories = new Set(
    expenses.map((expense) => expense.category)
  ).size;

  const currentMonth = new Date().getMonth();
  const currentYear = new Date().getFullYear();

  const monthlySpend = expenses
    .filter((expense) => {
      const date = new Date(expense.expenseDate);

      return (
        date.getMonth() === currentMonth &&
        date.getFullYear() === currentYear
      );
    })
    .reduce((sum, expense) => sum + expense.amount, 0);

  const averageSpend =
    expenses.length > 0
      ? totalSpend / expenses.length
      : 0;

  const cards = [
    {
      title: "Total Spend",
      value: `₹${totalSpend.toLocaleString()}`,
      icon: Wallet,
    },
    {
      title: "This Month",
      value: `₹${monthlySpend.toLocaleString()}`,
      icon: CalendarDays,
    },
    {
      title: "Categories",
      value: totalCategories,
      icon: Tags,
    },
    {
      title: "Average",
      value: `₹${averageSpend.toFixed(0)}`,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              rounded-2xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
            "
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  {card.value}
                </h2>
              </div>

              <div className="rounded-xl bg-indigo-100 p-3">
                <Icon
                  className="text-primary"
                  size={24}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpenseStats;