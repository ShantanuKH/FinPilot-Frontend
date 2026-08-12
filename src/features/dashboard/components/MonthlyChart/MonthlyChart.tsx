import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import type { MonthlySummary } from "../../types/dashboard.types";

interface Props {
  data: MonthlySummary[];
}

const formatMonth = (month: string) => {
  const date = new Date(`${month}-01`);

  return date.toLocaleDateString("en-IN", {
    month: "short",
    year: "numeric",
  });
};

const formatCurrency = (value: number) => {
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(1)}L`;
  }

  if (value >= 1000) {
    return `₹${(value / 1000).toFixed(0)}K`;
  }

  return `₹${value.toLocaleString("en-IN")}`;
};

const MonthlyChart = ({ data }: Props) => {
  if (!data.length) {
    return (
      <div className="flex h-full min-h-[320px] items-center justify-center">
        <div className="text-center">
          <p className="text-sm font-medium text-slate-700">
            No monthly expense data
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Your spending trend will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 12,
          right: 12,
          left: 4,
          bottom: 4,
        }}
      >
        <defs>
          <linearGradient
            id="expenseGradient"
            x1="0"
            y1="0"
            x2="0"
            y2="1"
          >
            <stop
              offset="0%"
              stopColor="#2563EB"
              stopOpacity={0.28}
            />

            <stop
              offset="100%"
              stopColor="#2563EB"
              stopOpacity={0.02}
            />
          </linearGradient>
        </defs>

        <CartesianGrid
          stroke="#E2E8F0"
          strokeDasharray="3 5"
          vertical={false}
        />

        <XAxis
          dataKey="month"
          tickFormatter={formatMonth}
          tickLine={false}
          axisLine={false}
          tick={{
            fill: "#94A3B8",
            fontSize: 12,
          }}
          dy={8}
        />

        <YAxis
          tickFormatter={(value) =>
            formatCurrency(Number(value))
          }
          tickLine={false}
          axisLine={false}
          width={48}
          tick={{
            fill: "#94A3B8",
            fontSize: 11,
          }}
        />

        <Tooltip
          labelFormatter={(label) =>
            formatMonth(String(label))
          }
          formatter={(value) => [
            `₹${Number(value).toLocaleString("en-IN")}`,
            "Expenses",
          ]}
          cursor={{
            stroke: "#CBD5E1",
            strokeDasharray: "4 4",
          }}
          contentStyle={{
            borderRadius: "14px",
            border: "1px solid #E2E8F0",
            backgroundColor: "#FFFFFF",
            padding: "10px 14px",
            boxShadow:
              "0 12px 30px rgba(15, 23, 42, 0.10)",
          }}
          labelStyle={{
            color: "#475569",
            fontSize: 12,
            fontWeight: 600,
            marginBottom: 4,
          }}
          itemStyle={{
            color: "#2563EB",
            fontSize: 13,
            fontWeight: 700,
          }}
        />

        <Area
          type="monotone"
          dataKey="totalAmount"
          stroke="#2563EB"
          strokeWidth={3}
          fill="url(#expenseGradient)"
          dot={false}
          activeDot={{
            r: 6,
            stroke: "#2563EB",
            strokeWidth: 3,
            fill: "#FFFFFF",
          }}
          animationBegin={150}
          animationDuration={900}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default MonthlyChart;