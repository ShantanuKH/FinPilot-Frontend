import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import type { PortfolioAllocation as PortfolioAllocationType } from "../../types/investment.types";

interface Props {
  allocation: PortfolioAllocationType[];
}

const COLORS = [
  "#10b981",
  "#3b82f6",
  "#8b5cf6",
  "#f59e0b",
  "#ef4444",
  "#06b6d4",
  "#84cc16",
];

const PortfolioAllocation = ({ allocation }: Props) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <h3 className="text-xl font-semibold text-slate-900">
          Portfolio Allocation
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Distribution of your investments.
        </p>
      </div>

      {allocation.length === 0 ? (
        <div className="flex h-80 items-center justify-center">
          <p className="text-sm text-slate-500">
            No investment allocation data available.
          </p>
        </div>
      ) : (
        <div className="mt-6 h-80">
          <ResponsiveContainer
            width="100%"
            height="100%"
          >
            <PieChart>
              <Pie
                data={allocation}
                dataKey="amount"
                nameKey="investmentType"
                cx="50%"
                cy="50%"
                outerRadius={105}
                innerRadius={55}
                paddingAngle={2}
                label={({ percent }) =>
                  `${((percent ?? 0) * 100).toFixed(0)}%`
                }
              >
                {allocation.map((item, index) => (
                  <Cell
                    key={`${item.investmentType}-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>

              <Tooltip
  formatter={(value) => {
    const numericValue =
      typeof value === "number"
        ? value
        : Number(value ?? 0);

    return `₹${numericValue.toLocaleString("en-IN")}`;
  }}
/>

              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default PortfolioAllocation;