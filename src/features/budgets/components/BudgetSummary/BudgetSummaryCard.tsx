import type { LucideIcon } from "lucide-react";

interface BudgetSummaryCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  iconColor: string;
}

const BudgetSummaryCard = ({
  title,
  value,
  icon: Icon,
  iconColor,
}: BudgetSummaryCardProps) => {
  return (
    <div
      className="
        rounded-3xl
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
          <p className="text-sm font-medium text-slate-500">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold text-slate-900">
            {value}
          </h3>
        </div>

        <div
          className="rounded-2xl p-4"
          style={{
            backgroundColor: `${iconColor}15`,
          }}
        >
          <Icon
            size={26}
            style={{
              color: iconColor,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default BudgetSummaryCard;