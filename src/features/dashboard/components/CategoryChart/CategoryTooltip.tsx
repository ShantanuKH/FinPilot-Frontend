import type { TooltipContentProps } from "recharts";

interface CategoryTooltipProps
  extends TooltipContentProps<number, string> {
  totalExpenses: number;
}

const CategoryTooltip = ({
  active,
  payload,
  totalExpenses,
}: CategoryTooltipProps) => {
  if (!active || !payload?.length) {
    return null;
  }

  const item = payload[0];

  const amount = Number(item.value ?? 0);
  const category = String(item.name ?? "Unknown");

  const percentage =
    totalExpenses > 0
      ? ((amount / totalExpenses) * 100).toFixed(1)
      : "0.0";

  return (
    <div
      className="
        min-w-[190px]
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-4
        shadow-xl
      "
    >
      {/* Category */}
      <div className="flex items-center gap-2">
        <span
          className="h-2.5 w-2.5 rounded-full"
          style={{
            backgroundColor:
              typeof item.color === "string"
                ? item.color
                : "#64748b",
          }}
        />

        <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {category}
        </span>
      </div>

      {/* Amount */}
      <p className="mt-2 text-xl font-bold text-slate-900">
        ₹{amount.toLocaleString("en-IN")}
      </p>

      {/* Percentage */}
      <div className="mt-2 flex items-center justify-between">
        <span className="text-xs text-slate-400">
          Share of expenses
        </span>

        <span className="text-xs font-semibold text-slate-700">
          {percentage}%
        </span>
      </div>
    </div>
  );
};

export default CategoryTooltip;