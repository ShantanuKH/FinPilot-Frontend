import { LogOut } from "lucide-react";

interface SidebarFooterProps {
  isCollapsed: boolean;
}

const SidebarFooter = ({
  isCollapsed,
}: SidebarFooterProps) => {
  return (
    <div
      className={`
        shrink-0
        border-t
        border-slate-200
        p-3
        transition-all
        duration-300
        ${isCollapsed ? "md:px-2" : "md:px-4"}
      `}
    >
      {/* Welcome Message */}
      {!isCollapsed && (
        <div className="px-2 pt-2">
          <p className="text-sm font-semibold text-slate-900">
            Welcome 👋
          </p>

          <p className="mt-1 text-xs leading-5 text-slate-400">
            Ready to manage your finances?
          </p>
        </div>
      )}

      {/* Logout */}
      <button
        type="button"
        title={isCollapsed ? "Logout" : undefined}
        className={`
          group
          mt-3
          flex
          w-full
          items-center
          rounded-xl
          text-slate-500
          transition-all
          duration-200
          hover:bg-red-50
          hover:text-red-600

          ${
            isCollapsed
              ? "justify-center px-0 py-3"
              : "gap-3 px-3 py-3"
          }
        `}
      >
        <LogOut
          size={20}
          strokeWidth={2}
          className="
            shrink-0
            transition-transform
            duration-200
            group-hover:translate-x-0.5
          "
        />

        {!isCollapsed && (
          <span className="font-medium">
            Logout
          </span>
        )}

        {/* Collapsed Tooltip */}
        {isCollapsed && (
          <span
            className="
              pointer-events-none
              absolute
              left-[calc(100%+12px)]
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
            Logout
          </span>
        )}
      </button>
    </div>
  );
};

export default SidebarFooter;