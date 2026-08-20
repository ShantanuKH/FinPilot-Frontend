import {
  User,
  Activity,
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
        rounded-2xl
        border
        border-border
        bg-card
        p-6
        shadow-sm
      "
    >
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-foreground">
          Settings
        </h2>

        <p className="mt-2 text-sm text-muted-foreground">
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
                hover:bg-accent
                hover:shadow-sm
              "
            >
              <div className="flex items-center gap-3">
                <div
                  className="
                    rounded-xl
                    bg-muted
                    p-2
                    transition
                    group-hover:bg-accent
                  "
                >
                  <Icon
                    size={18}
                    className="text-muted-foreground group-hover:text-primary"
                  />
                </div>

                <span className="font-medium text-foreground group-hover:text-accent-foreground">
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