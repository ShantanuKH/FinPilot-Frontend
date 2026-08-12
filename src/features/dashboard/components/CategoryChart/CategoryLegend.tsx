import type { CategoryBreakdown } from "../../types/dashboard.types";
import { CHART_COLORS } from "./CategoryChart";

interface Props {
  data: CategoryBreakdown[];
}

const formatCategoryName = (category: string) => {
  return category
    .toLowerCase()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const CategoryLegend = ({ data }: Props) => {
  const total = data.reduce(
    (sum, item) => sum + item.totalAmount,
    0
  );

  if (!data.length) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="text-sm text-slate-400">
          No category data available
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Categories
        </p>

        <p className="text-xs text-slate-400">
          {data.length} categories
        </p>
      </div>

      {/* Categories */}
      <div className="space-y-1.5">
        {data.map((item, index) => {
          const percentage =
            total > 0
              ? (item.totalAmount / total) * 100
              : 0;

          const color =
            CHART_COLORS[
              index % CHART_COLORS.length
            ];

          return (
            <div
              key={item.category}
              className="
                group
                flex
                items-center
                justify-between
                rounded-xl
                px-3
                py-2.5
                transition-all
                duration-200
                hover:bg-slate-50
              "
            >
              {/* Category */}
              <div className="flex min-w-0 items-center gap-3">
                <span
                  className="
                    h-2.5
                    w-2.5
                    shrink-0
                    rounded-full
                  "
                  style={{
                    backgroundColor: color,
                  }}
                />

                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-slate-700">
                    {formatCategoryName(item.category)}
                  </p>

                  <p className="text-[11px] text-slate-400">
                    {percentage.toFixed(1)}%
                  </p>
                </div>
              </div>

              {/* Amount */}
              <p className="ml-4 shrink-0 text-sm font-semibold text-slate-900">
                ₹
                {item.totalAmount.toLocaleString(
                  "en-IN"
                )}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryLegend;