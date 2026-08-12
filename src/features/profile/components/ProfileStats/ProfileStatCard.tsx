import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
  iconBgColor?: string;
  iconColor?: string;
}

const ProfileStatCard = ({
  title,
  value,
  icon: Icon,
  iconBgColor = "bg-emerald-100",
  iconColor = "text-emerald-600",
}: Props) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </h2>
        </div>

        <div
          className={`flex h-12 w-12 items-center justify-center rounded-2xl ${iconBgColor}`}
        >
          <Icon
            size={22}
            className={iconColor}
          />
        </div>

      </div>

    </div>
  );
};

export default ProfileStatCard;