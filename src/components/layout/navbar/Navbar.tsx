import {
  Bell,
  Menu,
  Search,
} from "lucide-react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

interface NavbarProps {
  onMenuClick: () => void;
}

const PAGE_INFO: Record<
  string,
  {
    title: string;
    subtitle: string;
  }
> = {
  "/dashboard": {
    title: "Dashboard",
    subtitle:
      "Your financial overview for this month",
  },

  "/expenses": {
    title: "Expenses",
    subtitle:
      "Track and manage your daily expenses",
  },

  "/budgets": {
    title: "Budgets",
    subtitle:
      "Plan and monitor your monthly budgets",
  },

  "/investments": {
    title: "Investments",
    subtitle:
      "Track and grow your investment portfolio",
  },

  "/recommendations": {
    title: "Smart Recommendations",
    subtitle:
      "Personalized financial insights generated from your expenses, budgets and investments.",
  },

  "/ai": {
    title: "FinPilot AI",
    subtitle:
      "Ask financial questions and receive personalized AI-powered guidance.",
  },

  "/profile": {
    title: "Profile",
    subtitle:
      "Manage your personal information and financial preferences",
  },

  "/settings": {
    title: "Settings",
    subtitle:
      "Customize your FinPilot experience",
  },
};

const Navbar = ({
  onMenuClick,
}: NavbarProps) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const page =
    PAGE_INFO[pathname] ??
    PAGE_INFO["/dashboard"];

  // =====================================
  // Current User
  // =====================================

  const user = useCurrentUser();

  const userName = [
    user?.firstName,
    user?.lastName,
  ]
    .filter(Boolean)
    .join(" ");

  const userEmail =
    user?.email || "Unknown";

  const userFirstName =
    user?.firstName || "User";

  const userInitials = [
    user?.firstName?.charAt(0),
    user?.lastName?.charAt(0),
  ]
    .filter(Boolean)
    .join("")
    .toUpperCase();

  // =====================================
  // Profile Navigation
  // =====================================

  const handleProfileClick = () => {
    navigate("/settings");
  };

  return (
    <div className="flex h-full items-center gap-4">

      {/* =====================================
          Mobile Menu
          ===================================== */}

      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Open navigation"
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-xl
          text-muted-foreground

          transition-all
          duration-300
          ease-out

          hover:bg-muted
          hover:text-foreground

          md:hidden
        "
      >
        <Menu
          size={22}
          className="
            transition-transform
            duration-300
            ease-out
            group-hover:scale-105
          "
        />
      </button>

      {/* =====================================
          Page Information
          ===================================== */}

      <div className="min-w-0 shrink-0">
        <h1
          className="
            truncate
            text-lg
            font-bold
            tracking-tight
            text-foreground
            sm:text-xl
          "
        >
          {page.title}
        </h1>

        <p
          className="
            mt-1
            hidden
            max-w-[420px]
            truncate
            text-sm
            text-muted-foreground
            sm:block
          "
        >
          {page.subtitle}
        </p>
      </div>

      {/* =====================================
          Search
          ===================================== */}

      <div className="hidden flex-1 justify-center xl:flex">
        <div className="relative w-full max-w-xl">
          <Search
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-muted-foreground
            "
          />

          <input
            type="text"
            placeholder="Search expenses, budgets, investments..."
            className="
              h-12
              w-full
              rounded-2xl
              border
              border-border
              bg-muted
              pl-12
              pr-4
              text-sm
              text-foreground
              placeholder:text-muted-foreground
              outline-none

              transition-all
              duration-300
              ease-out

              focus:border-primary
              focus:bg-card
              focus:ring-4
              focus:ring-primary/20
            "
          />
        </div>
      </div>

      {/* =====================================
          Right Actions
          ===================================== */}

      <div className="ml-auto flex items-center gap-3 sm:gap-4">

        {/* ===================================
            Notifications
            =================================== */}

        <div className="group relative">

          <button
            type="button"
            aria-label="Notifications"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-border
              bg-card

              transition-all
              duration-300
              ease-out

              hover:-translate-y-0.5
              hover:bg-muted
              hover:shadow-sm

              sm:h-11
              sm:w-11
            "
          >
            <Bell
              size={19}
              className="
                text-muted-foreground

                transition-all
                duration-300
                ease-out

                group-hover:scale-105
                group-hover:text-primary
              "
            />
          </button>

          {/* Notification Tooltip */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-[calc(100%+12px)]
              z-50

              whitespace-nowrap

              rounded-xl
              border
              border-border
              bg-card
              px-4
              py-2.5

              translate-y-2
              scale-95
              opacity-0

              shadow-lg

              transition-all
              duration-300
              ease-out

              group-hover:translate-y-0
              group-hover:scale-100
              group-hover:opacity-100
            "
          >
            <p
              className="
                text-xs
                font-semibold
                text-foreground
              "
            >
              Notifications
            </p>

            <p
              className="
                mt-0.5
                text-xs
                text-muted-foreground
              "
            >
              Coming soon
            </p>
          </div>
        </div>

        {/* ===================================
            User Profile
            =================================== */}

        <div className="group relative">

          {/* Profile Button */}

          <button
            type="button"
            onClick={handleProfileClick}
            aria-label="Open settings"
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-border
              bg-card
              px-2
              py-1.5

              transition-all
              duration-300
              ease-out

              hover:-translate-y-0.5
              hover:bg-muted
              hover:shadow-sm

              sm:px-3
            "
          >
            {/* User Initials */}

            <div
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-primary/10
                text-xs
                font-semibold
                text-primary

                transition-all
                duration-300
                ease-out

                group-hover:scale-105
                group-hover:bg-primary/15

                sm:h-8
                sm:w-8
              "
            >
              {userInitials || "U"}
            </div>

            {/* User Name */}

            <div className="hidden text-left lg:block">

              <p
                className="
                  text-xs
                  text-muted-foreground
                "
              >
                Welcome Back
              </p>

              <p
                className="
                  max-w-[120px]
                  truncate
                  text-sm
                  font-semibold
                  text-foreground
                "
              >
                {userFirstName}
              </p>

            </div>
          </button>

          {/* =================================
              User Information Popup
              ================================= */}

          <div
            className="
              pointer-events-none
              absolute
              right-0
              top-[calc(100%+12px)]
              z-50
              w-72

              translate-y-2
              scale-[0.97]
              opacity-0

              rounded-2xl
              border
              border-border
              bg-card
              p-4
              shadow-xl

              transition-all
              duration-300
              ease-out

              group-hover:pointer-events-auto
              group-hover:translate-y-0
              group-hover:scale-100
              group-hover:opacity-100
            "
          >

            {/* Profile Header */}

            <div className="flex items-center gap-3">

              {/* Initials */}

              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-primary/10
                  text-sm
                  font-bold
                  text-primary

                  transition-all
                  duration-300
                  ease-out

                  group-hover:bg-primary/15
                "
              >
                {userInitials || "U"}
              </div>

              {/* Name + Email */}

              <div className="min-w-0">

                <p
                  className="
                    truncate
                    text-sm
                    font-semibold
                    text-foreground
                  "
                >
                  {userName || "User"}
                </p>

                <p
                  className="
                    mt-0.5
                    truncate
                    text-xs
                    text-muted-foreground
                  "
                >
                  {userEmail}
                </p>

              </div>
            </div>

            {/* Divider */}

            <div className="my-3 border-t border-border" />

            {/* Account Information */}

            <div className="space-y-2">

              <div className="flex items-center justify-between gap-4">

                <span
                  className="
                    text-xs
                    text-muted-foreground
                  "
                >
                  Account
                </span>

                <span
                  className="
                    text-xs
                    font-medium
                    text-foreground
                  "
                >
                  Active
                </span>

              </div>

              <div className="flex items-center justify-between gap-4">

                <span
                  className="
                    text-xs
                    text-muted-foreground
                  "
                >
                  Profile
                </span>

                <span
                  className="
                    text-xs
                    font-medium
                    text-primary
                  "
                >
                  FinPilot User
                </span>

              </div>

            </div>

            {/* Bottom Message */}

            <div
              className="
                mt-3
                rounded-xl
                bg-muted
                px-3
                py-2.5
              "
            >
              <p
                className="
                  text-xs
                  leading-5
                  text-muted-foreground
                "
              >
                Manage your personal information
                and financial preferences from your
                profile.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;