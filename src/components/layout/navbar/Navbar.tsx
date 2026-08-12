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
          text-slate-600
          transition-all
          duration-200
          hover:bg-slate-100
          hover:text-slate-900
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
            text-slate-900
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
            text-slate-500
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
              text-slate-400
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
              border-slate-200
              bg-slate-50
              pl-12
              pr-4
              text-sm
              text-slate-700
              placeholder:text-slate-400
              outline-none
              transition-all
              duration-300
              focus:border-violet-500
              focus:bg-white
              focus:ring-4
              focus:ring-violet-100
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
            border-slate-200
            bg-white
            transition-all
            duration-200
            hover:bg-slate-50
            hover:shadow-sm
            sm:h-11
            sm:w-11
          "
        >
          <Bell
            size={19}
            className="text-slate-600"
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
            border-slate-200
            bg-white
            px-2
            py-1.5
            transition-all
            duration-200
            hover:bg-slate-50
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
                text-slate-900
              "
            >
              {userName}
            </p>

            <p
              className="
                text-xs
                text-slate-500
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