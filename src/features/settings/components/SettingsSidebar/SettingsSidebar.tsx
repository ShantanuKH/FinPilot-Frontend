import {
  User,
  Activity,
  Shield,
  Palette,
  ChevronRight,
} from "lucide-react";

const items = [
  {
    id: "profile",
    title: "Account Setting",
    icon: User,
  },
  {
    id: "financial-health",
    title: "Financial Health",
    icon: Activity,
  },
  {
    id: "security",
    title: "Security",
    icon: Shield,
  },
  {
    id: "appearance",
    title: "Appearance",
    icon: Palette,
  },
];

const SettingsSidebar = () => {
  const scrollToSection = (
    id: string
  ) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <aside
      className="
        sticky
        top-8
        h-fit
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900">
          Settings
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Manage your account and preferences.
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() =>
                scrollToSection(item.id)
              }
              className="
                group
                flex
                w-full
                items-center
                justify-between
                rounded-2xl
                px-4
                py-3
                text-left
                transition-all
                duration-200
                hover:bg-violet-50
                hover:shadow-sm
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    rounded-xl
                    bg-slate-100
                    p-2
                    transition
                    group-hover:bg-violet-100
                  "
                >
                  <Icon
                    size={18}
                    className="text-slate-600 group-hover:text-violet-600"
                  />
                </div>

                <span className="font-medium text-slate-700 group-hover:text-violet-700">
                  {item.title}
                </span>
              </div>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default SettingsSidebar;