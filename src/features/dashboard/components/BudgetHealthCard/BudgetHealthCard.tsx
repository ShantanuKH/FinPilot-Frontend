import {
  ArrowDownRight,
  ArrowUpRight,
  PiggyBank,
  Wallet,
} from "lucide-react";

import type { BudgetHealth } from "../../types/dashboard.types";

interface Props {
  budgetHealth: BudgetHealth;
}

const BudgetHealthCard = ({ budgetHealth }: Props) => {
  const savingsRate = Math.max(
    0,
    Math.min(100, budgetHealth.savingRate)
  );

  const remainingAmount = budgetHealth.remainingAmount;

  const isPositive = remainingAmount >= 0;

  return (
    <div className="space-y-6">
      {/* Main financial overview */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Remaining */}
        <div
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-emerald-100
            bg-emerald-50/60
            p-5
          "
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
                Remaining
              </p>

              <h3
                className={`
                  mt-2
                  text-2xl
                  font-bold
                  tracking-tight
                  ${
                    isPositive
                      ? "text-emerald-700"
                      : "text-red-600"
                  }
                `}
              >
                ₹
                {Math.abs(
                  remainingAmount
                ).toLocaleString("en-IN")}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {isPositive
                  ? "Available this month"
                  : "Over your monthly income"}
              </p>
            </div>

            <div
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                ${
                  isPositive
                    ? "bg-emerald-100 text-emerald-600"
                    : "bg-red-100 text-red-600"
                }
              `}
            >
              {isPositive ? (
                <ArrowDownRight size={19} />
              ) : (
                <ArrowUpRight size={19} />
              )}
            </div>
          </div>
        </div>

        {/* Income */}
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50/60
            p-5
          "
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Monthly Income
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                ₹
                {budgetHealth.monthlyIncome.toLocaleString(
                  "en-IN"
                )}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Your monthly earnings
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm">
              <Wallet size={19} />
            </div>
          </div>
        </div>

        {/* Expenses */}
        <div
          className="
            rounded-2xl
            border
            border-slate-200
            bg-slate-50/60
            p-5
          "
        >
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                Total Expenses
              </p>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                ₹
                {budgetHealth.totalExpenses.toLocaleString(
                  "en-IN"
                )}
              </h3>

              <p className="mt-1 text-xs text-slate-400">
                Spent this month
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-600 shadow-sm">
              <ArrowUpRight size={19} />
            </div>
          </div>
        </div>
      </div>

      {/* Savings rate */}
      <div
        className="
          rounded-2xl
          border
          border-slate-200
          bg-white
          p-5
        "
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <PiggyBank size={19} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Savings Rate
              </p>

              <p className="text-xs text-slate-400">
                Percentage of income remaining
              </p>
            </div>
          </div>

          <span className="text-xl font-bold text-emerald-600">
            {budgetHealth.savingRate.toFixed(1)}%
          </span>
        </div>

        {/* Progress */}
        <div className="mt-4">
          <div className="h-2.5 overflow-hidden rounded-full bg-slate-100">
            <div
              className="
                h-full
                rounded-full
                bg-emerald-500
                transition-all
                duration-700
                ease-out
              "
              style={{
                width: `${savingsRate}%`,
              }}
            />
          </div>
        </div>

        <div className="mt-2 flex justify-between text-[11px] text-slate-400">
          <span>0%</span>
          <span>Healthy savings: 20%+</span>
          <span>100%</span>
        </div>
      </div>
    </div>
  );
};

export default BudgetHealthCard;