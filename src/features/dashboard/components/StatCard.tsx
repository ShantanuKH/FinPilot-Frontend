import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
}

const StatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  iconBgColor = "bg-emerald-50",
  iconColor = "text-emerald-600",
}: StatCardProps) => {
  return (
    <div
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/80
        bg-white
        px-5
        py-5
        shadow-[0_1px_3px_rgba(15,23,42,0.04)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-slate-300
        hover:shadow-[0_8px_25px_rgba(15,23,42,0.07)]
      "
    >
      {/* Subtle top accent */}
      <div
        className={`
          absolute
          inset-x-0
          top-0
          h-[2px]
          ${iconColor.replace("text-", "bg-")}
          opacity-0
          transition-opacity
          duration-300
          group-hover:opacity-100
        `}
      />

      <div className="flex items-start justify-between gap-4">
        {/* Content */}
        <div className="min-w-0">
          <p className="text-[13px] font-medium text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 truncate text-[26px] font-bold tracking-tight text-slate-900">
            {value}
          </h2>

          <p className="mt-1 text-xs text-slate-400">
            {subtitle}
          </p>
        </div>

        {/* Icon */}
        <div
          className={`
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            ${iconBgColor}
            transition-transform
            duration-300
            group-hover:scale-105
          `}
        >
          <Icon
            size={19}
            strokeWidth={2}
            className={iconColor}
          />
        </div>
      </div>
    </div>
  );
};

export default StatCard;