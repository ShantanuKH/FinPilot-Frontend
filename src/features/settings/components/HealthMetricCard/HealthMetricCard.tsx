import type { LucideIcon } from "lucide-react";

interface HealthMetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  description?: string;
}

const HealthMetricCard = ({
  title,
  value,
  icon: Icon,
  iconBgColor,
  iconColor,
  description,
}: HealthMetricCardProps) => {
  return (
    <div
      className="
        group
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-md
      "
    >
      {/* Icon */}
      <div
        className={`
          mb-5
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-2xl
          ${iconBgColor}
        `}
      >
        <Icon
          size={21}
          className={iconColor}
        />
      </div>

      {/* Title */}
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      {/* Value */}
      <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
        {value}
      </h3>

      {/* Description */}
      {description && (
        <p className="mt-2 text-xs leading-5 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
};

export default HealthMetricCard;