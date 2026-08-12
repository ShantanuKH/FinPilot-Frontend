import { NavLink } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface SidebarItemProps {
  title: string;
  icon: LucideIcon;
  path: string;
  isCollapsed: boolean;
  onNavigate: () => void;
}

const SidebarItem = ({
  title,
  icon: Icon,
  path,
  isCollapsed,
  onNavigate,
}: SidebarItemProps) => {
  return (
    <NavLink
      to={path}
      onClick={onNavigate}
      title={isCollapsed ? title : undefined}
      className={({ isActive }) =>
        `
        group
        relative
        flex
        items-center
        rounded-xl
        transition-all
        duration-200

        ${
          isCollapsed
            ? "justify-center px-0 py-3"
            : "gap-3 px-4 py-3"
        }

        ${
          isActive
            ? "bg-violet-600 text-white shadow-md shadow-violet-200"
            : "text-slate-600 hover:bg-violet-50 hover:text-violet-600"
        }
        `
      }
    >
      {/* Icon */}
      <Icon
        size={20}
        strokeWidth={2}
        className="
          shrink-0
          transition-transform
          duration-200
          group-hover:scale-105
        "
      />

      {/* Label */}
      {!isCollapsed && (
        <span className="truncate font-medium">
          {title}
        </span>
      )}

      {/* Collapsed Tooltip */}
      {isCollapsed && (
        <span
          className="
            pointer-events-none
            absolute
            left-[calc(100%+12px)]
            top-1/2
            z-[60]
            -translate-y-1/2
            whitespace-nowrap
            rounded-lg
            bg-slate-900
            px-3
            py-2
            text-xs
            font-medium
            text-white
            opacity-0
            shadow-lg
            transition-all
            duration-200
            group-hover:translate-x-1
            group-hover:opacity-100
          "
        >
          {title}
        </span>
      )}
    </NavLink>
  );
};

export default SidebarItem;