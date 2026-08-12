import {ChevronLeft, Sparkles } from "lucide-react";

interface SidebarLogoProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

const SidebarLogo = ({
  isCollapsed,
  onToggle,
}: SidebarLogoProps) => {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={
        isCollapsed
          ? "Expand sidebar"
          : "Collapse sidebar"
      }
      title={
        isCollapsed
          ? "Expand sidebar"
          : "Collapse sidebar"
      }
      className={`
        group
        flex
        h-20
        w-full
        shrink-0
        items-center
        border-b
        border-slate-200
        text-left
        transition-all
        duration-200
        hover:bg-slate-50
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-violet-500
        focus-visible:ring-inset
        ${
          isCollapsed
            ? "justify-center px-3"
            : "justify-between px-4"
        }
      `}
    >
      {/* Brand */}
      <div
        className={`
          flex
          min-w-0
          items-center
          ${
            isCollapsed
              ? "justify-center"
              : "gap-3"
          }
        `}
      >
        {/* Logo */}
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-xl
            bg-gradient-to-br
            from-violet-600
            to-purple-600
            text-white
            shadow-md
            transition-transform
            duration-200
            group-hover:scale-105
          "
        >
          <Sparkles
            size={21}
            strokeWidth={2.2}
          />
        </div>

        {/* Brand Text */}
        {!isCollapsed && (
          <div className="min-w-0">
            <h1
              className="
                truncate
                text-lg
                font-bold
                tracking-tight
                text-slate-900
              "
            >
              FinPilot
            </h1>

            <p
              className="
                truncate
                text-xs
                font-medium
                text-slate-400
              "
            >
              Smart Finance
            </p>
          </div>
        )}
      </div>

      {/* Collapse Indicator */}
      {!isCollapsed && (
        <ChevronLeft
          size={18}
          className="
            shrink-0
            text-slate-400
            transition-transform
            duration-200
            group-hover:text-slate-600
          "
        />
      )}
    </button>
  );
};

export default SidebarLogo;