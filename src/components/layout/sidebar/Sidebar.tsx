import SidebarFooter from "../sidebar/SidebarFooter";
import SidebarItem from "../sidebar/SidebarItem";
import SidebarLogo from "../sidebar/SidebarLogo";

import { navigationItems } from "../navigation";

interface SidebarProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}

const Sidebar = ({
  isCollapsed,
  isMobileOpen,
  onToggle,
  onNavigate,
}: SidebarProps) => {
  return (
    <aside
      className={`
        fixed
        inset-y-0
        left-0
        z-50
        flex
        flex-col
        border-r
        border-sidebar-border
        bg-sidebar
        shadow-sm
        transition-all
        duration-300
        ease-in-out

        w-[280px]

        ${
          isMobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }

        md:translate-x-0

        ${
          isCollapsed
            ? "md:w-[76px]"
            : "md:w-[260px]"
        }
      `}
    >
      {/* =================================
          Logo / Sidebar Toggle
          ================================= */}

      <SidebarLogo
        isCollapsed={isCollapsed}
        onToggle={onToggle}
      />

      {/* =================================
          Navigation
          ================================= */}

      <nav
        className={`
          flex-1
          overflow-y-auto
          p-3
          ${
            isCollapsed
              ? "md:px-3"
              : "md:px-4"
          }
        `}
      >
        <div className="space-y-2">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.path}
              {...item}
              isCollapsed={isCollapsed}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </nav>

      {/* =================================
          Sidebar Footer
          ================================= */}

      <SidebarFooter
        isCollapsed={isCollapsed}
      />
    </aside>
  );
};

export default Sidebar;