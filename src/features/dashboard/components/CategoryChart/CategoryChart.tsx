import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
  Tooltip,
} from "recharts";

import type { CategoryBreakdown } from "../../types/dashboard.types";

interface Props {
  data: CategoryBreakdown[];
}

export const CHART_COLORS = [
  "#10B981", // Emerald
  "#3B82F6", // Blue
  "#8B5CF6", // Violet
  "#F59E0B", // Amber
  "#EF4444", // Red
  "#06B6D4", // Cyan
  "#EC4899", // Pink
  "#84CC16", // Lime
];

const CategoryChart = ({ data }: Props) => {
  const totalExpenses = data.reduce(
    (sum, item) => sum + item.totalAmount,
    0
  );

  if (!data.length) {
    return (
      <div className="flex h-full min-h-[300px] items-center justify-center">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
            <span className="text-xl">∅</span>
          </div>

          <p className="mt-3 text-sm font-medium text-slate-700">
            No expense data yet
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Add expenses to see your spending breakdown.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full min-h-[300px] w-full">
      <ResponsiveContainer
        width="100%"
        height="100%"
      >
        <PieChart>
          <Pie
            data={data}
            dataKey="totalAmount"
            nameKey="category"
            cx="50%"
            cy="50%"
            innerRadius={72}
            outerRadius={108}
            paddingAngle={3}
            cornerRadius={7}
            animationBegin={100}
            animationDuration={800}
            animationEasing="ease-out"
          >
            {data.map((item, index) => (
              <Cell
                key={`${item.category}-${index}`}
                fill={
                  CHART_COLORS[
                    index % CHART_COLORS.length
                  ]
                }
                stroke="#ffffff"
                strokeWidth={3}
              />
            ))}
          </Pie>

          <Tooltip
            formatter={(value) =>
              `₹${Number(value).toLocaleString("en-IN")}`
            }
            contentStyle={{
              borderRadius: "12px",
              border: "1px solid #E2E8F0",
              padding: "10px 12px",
              boxShadow:
                "0 8px 20px rgba(15, 23, 42, 0.08)",
              backgroundColor: "#ffffff",
            }}
            labelStyle={{
              color: "#0F172A",
              fontWeight: 600,
              marginBottom: "4px",
            }}
            itemStyle={{
              color: "#475569",
              fontSize: "13px",
            }}
          />

          {/* Center amount */}
          <text
            x="50%"
            y="47%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-900 text-[21px] font-bold"
          >
            ₹
            {totalExpenses.toLocaleString("en-IN")}
          </text>

          {/* Center label */}
          <text
            x="50%"
            y="56%"
            textAnchor="middle"
            dominantBaseline="middle"
            className="fill-slate-400 text-[11px]"
          >
            Total Spent
          </text>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryChart;