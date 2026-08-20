import {
  Bell,
  Menu,
  Search,
  UserCircle2,
} from "lucide-react";
import { useLocation } from "react-router-dom";

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
    title: "✨ Smart Recommendations",
    subtitle:
      "Personalized financial insights generated from your expenses, budgets and investments.",
  },

  "/ai": {
    title: "🤖 FinPilot AI",
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

  const page =
    PAGE_INFO[pathname] ??
    PAGE_INFO["/dashboard"];

  // TODO:
  // Replace with authenticated user later
  const userName = "Shantanu";

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
          duration-200
          hover:bg-muted
          hover:text-foreground
          md:hidden
        "
      >
        <Menu size={22} />
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
            truncate
            max-w-[420px]
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

      <div className="ml-auto flex items-center gap-2 sm:gap-3">

        {/* Notifications */}

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
            duration-200
            hover:bg-muted
            hover:shadow-sm
            sm:h-11
            sm:w-11
          "
        >
          <Bell
            size={19}
            className="text-muted-foreground"
          />
        </button>

        {/* User */}

        <button
          type="button"
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
            duration-200
            hover:bg-muted
            hover:shadow-sm
            sm:px-3
          "
        >
          <UserCircle2
            size={32}
            className="text-slate-600"
          />

          <div className="hidden text-left lg:block">
            <p
              className="
                text-sm
                font-semibold
                text-foreground
              "
            >
              {userName}
            </p>

            <p
              className="
                text-xs
                text-muted-foreground
              "
            >
              Welcome Back 👋
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;