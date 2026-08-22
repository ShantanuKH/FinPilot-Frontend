import {
  LogOut,
  MessageSquare,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { useAuthStore } from "@/store/authStore";

interface SidebarFooterProps {
  isCollapsed: boolean;
  onFeedback: () => void;
}

const SidebarFooter = ({
  isCollapsed,
  onFeedback,
}: SidebarFooterProps) => {
  const navigate = useNavigate();

  const logout = useAuthStore(
    (state) => state.logout
  );

  const handleLogout = () => {
    // Clear authentication state
    logout();

    // Remove stored user information
    localStorage.removeItem("user");

    // Redirect to login page
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div
      className={`
        shrink-0
        border-t
        border-sidebar-border
        p-3
        transition-all
        duration-300
        ${isCollapsed ? "md:px-2" : "md:px-4"}
      `}
    >
      {/* Welcome Message */}
      {!isCollapsed && (
        <div className="px-2 pt-2">
          <p className="text-sm font-semibold text-sidebar-foreground">
            Welcome 👋
          </p>

          <p className="mt-1 text-xs leading-5 text-muted-foreground">
            Ready to manage your finances?
          </p>
        </div>
      )}

      {/* Feedback */}
      <button
        type="button"
        onClick={onFeedback}
        title={
          isCollapsed
            ? "Help us improve"
            : undefined
        }
        className={`
          group
          relative
          mt-3
          flex
          w-full
          items-center
          rounded-xl
          text-muted-foreground
          transition-all
          duration-200
          hover:bg-primary/10
          hover:text-primary

          ${
            isCollapsed
              ? "justify-center px-0 py-3"
              : "gap-3 px-3 py-3"
          }
        `}
      >
        <MessageSquare
          size={20}
          strokeWidth={2}
          className="
            shrink-0
            transition-transform
            duration-200
            group-hover:-translate-y-0.5
          "
        />

        {!isCollapsed && (
          <div className="text-left">
            <p className="font-medium">
              Help us improve
            </p>

            <p className="text-xs text-muted-foreground">
              Share your feedback
            </p>
          </div>
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
              bg-foreground
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
            Help us improve
          </span>
        )}
      </button>

      {/* Logout */}
      <button
        type="button"
        onClick={handleLogout}
        title={
          isCollapsed
            ? "Logout"
            : undefined
        }
        className={`
          group
          relative
          mt-1
          flex
          w-full
          items-center
          rounded-xl
          text-muted-foreground
          transition-all
          duration-200
          hover:bg-destructive/10
          hover:text-destructive

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
              bg-foreground
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