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
        border-sidebar-border
        text-left
        transition-all
        duration-200
        hover:bg-sidebar-accent
        focus:outline-none
        focus-visible:ring-2
        focus-visible:ring-sidebar-ring
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
            bg-primary
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
                text-sidebar-foreground
              "
            >
              FinPilot
            </h1>

            <p
              className="
                truncate
                text-xs
                font-medium
                text-muted-foreground
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
            text-muted-foreground
            transition-transform
            duration-200
            group-hover:text-sidebar-foreground
          "
        />
      )}
    </button>
  );
};

export default SidebarLogo;