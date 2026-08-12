import {
  CircleDollarSign,
  HeartPulse,
  Car,
  Film,
  Pencil,
  ShoppingBag,
  Lightbulb,
  Trash2,
  UtensilsCrossed,
} from "lucide-react";

import BudgetProgressBar from "./BudgetProgressBar";
import BudgetStatusBadge from "./BudgetStatusBadge";

import type { BudgetAnalytics } from "../../types/budget.types";

interface Props {
  budget: BudgetAnalytics;
  onEdit: (budget: BudgetAnalytics) => void;
  onDelete: (budget: BudgetAnalytics) => void;
}

const categoryIcons = {
  FOOD: UtensilsCrossed,
  TRANSPORT: Car,
  SHOPPING: ShoppingBag,
  ENTERTAINMENT: Film,
  HEALTHCARE: HeartPulse,
  UTILITIES: Lightbulb,
  OTHER: CircleDollarSign,
};

const categoryLabels = {
  FOOD: "Food",
  TRANSPORT: "Transport",
  SHOPPING: "Shopping",
  ENTERTAINMENT: "Entertainment",
  HEALTHCARE: "Healthcare",
  UTILITIES: "Utilities",
  OTHER: "Other",
};

const BudgetAnalyticsCard = ({
  budget,
  onEdit,
  onDelete,
}: Props) => {
  const Icon =
    categoryIcons[budget.category] ?? CircleDollarSign;

  const categoryLabel =
    categoryLabels[budget.category] ?? budget.category;

  const isExceeded = budget.remainingAmount < 0;

  const percentage = Math.min(
    Math.max(budget.usagePercentage, 0),
    100
  );

  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:shadow-md
        ${
          isExceeded
            ? "border-red-100 hover:border-red-200"
            : "border-slate-200 hover:border-blue-200"
        }
      `}
    >
      {/* Subtle top accent */}
      <div
        className={`
          absolute left-0 top-0 h-1 w-full
          ${
            isExceeded
              ? "bg-red-400"
              : "bg-blue-500"
          }
        `}
      />

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className={`
              flex h-10 w-10 shrink-0 items-center
              justify-center rounded-xl
              ${
                isExceeded
                  ? "bg-red-50 text-red-500"
                  : "bg-blue-50 text-blue-600"
              }
            `}
          >
            <Icon size={19} strokeWidth={2} />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-[15px] font-semibold text-slate-900">
              {categoryLabel}
            </h3>

            <p className="mt-0.5 text-xs text-slate-400">
              Monthly spending
            </p>
          </div>
        </div>

        <BudgetStatusBadge
          status={budget.status}
        />
      </div>

      {/* Metrics */}
      <div className="mt-5 grid grid-cols-3 divide-x divide-slate-100 rounded-xl bg-slate-50/70 py-3">
        {/* Budget */}
        <div className="px-3">
          <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
            Budget
          </p>

          <p className="mt-1 text-sm font-bold text-slate-900">
            ₹{budget.budgetAmount.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Spent */}
        <div className="px-3">
          <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
            Spent
          </p>

          <p className="mt-1 text-sm font-bold text-red-500">
            ₹{budget.spentAmount.toLocaleString("en-IN")}
          </p>
        </div>

        {/* Remaining */}
        <div className="px-3">
          <p className="text-[11px] font-medium uppercase tracking-wide text-slate-400">
            Remaining
          </p>

          <p
            className={`mt-1 text-sm font-bold ${
              isExceeded
                ? "text-red-600"
                : "text-emerald-600"
            }`}
          >
            {isExceeded ? "-" : ""}
            ₹
            {Math.abs(
              budget.remainingAmount
            ).toLocaleString("en-IN")}
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-500">
            Budget used
          </span>

          <span
            className={`text-xs font-bold ${
              isExceeded
                ? "text-red-600"
                : "text-slate-700"
            }`}
          >
            {budget.usagePercentage.toFixed(1)}%
          </span>
        </div>

        <BudgetProgressBar
          percentage={percentage}
        />
      </div>

      {/* Footer */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3">
        <span className="text-[11px] text-slate-400">
          {isExceeded
            ? "Budget limit exceeded"
            : `${Math.max(
                0,
                100 - budget.usagePercentage
              ).toFixed(1)}% remaining`}
        </span>

        <div className="flex items-center gap-1.5">
          {/* Edit */}
          <button
            type="button"
            onClick={() => onEdit(budget)}
            className="
              flex h-8 w-8 items-center
              justify-center rounded-lg
              border border-slate-200
              text-slate-500
              transition-all
              hover:border-blue-200
              hover:bg-blue-50
              hover:text-blue-600
            "
            title="Edit Budget"
            aria-label="Edit budget"
          >
            <Pencil size={14} />
          </button>

          {/* Delete */}
          <button
            type="button"
            onClick={() => onDelete(budget)}
            className="
              flex h-8 w-8 items-center
              justify-center rounded-lg
              border border-slate-200
              text-slate-400
              transition-all
              hover:border-red-200
              hover:bg-red-50
              hover:text-red-500
            "
            title="Delete Budget"
            aria-label="Delete budget"
          >
            <Trash2 size={14} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BudgetAnalyticsCard;