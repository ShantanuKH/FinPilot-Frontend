import type { LucideIcon } from "lucide-react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  change: string;
  positive?: boolean;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  change,
  positive = true,
}: StatCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h2>
        </div>

        <div className="rounded-xl bg-emerald-100 p-3">
          <Icon className="text-emerald-600" size={22} />
        </div>
      </div>

      <div
        className={`mt-6 flex items-center gap-2 text-sm font-medium ${
          positive ? "text-emerald-600" : "text-red-500"
        }`}
      >
        {positive ? (
          <TrendingUp size={16} />
        ) : (
          <TrendingDown size={16} />
        )}

        <span>{change}</span>
      </div>
    </div>
  );
};

export default StatCard;