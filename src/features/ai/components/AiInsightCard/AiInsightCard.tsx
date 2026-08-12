import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconBgColor: string;
  iconColor: string;
  items: string[];
}

const AiInsightCard = ({
  title,
  subtitle,
  icon: Icon,
  iconBgColor,
  iconColor,
  items,
}: Props) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      {/* Header */}
      <div className="mb-6 flex items-center gap-3">
        <div
          className={`rounded-2xl p-3 ${iconBgColor}`}
        >
          <Icon
            size={24}
            className={iconColor}
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            {title}
          </h2>

          <p className="text-sm text-slate-500">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Items */}
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
          >
            <div className="mt-2 h-2.5 w-2.5 rounded-full bg-violet-500" />

            <p className="leading-7 text-slate-600">
              {item}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AiInsightCard;