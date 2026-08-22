import {
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { useCurrentUser } from "@/features/auth/hooks/useCurrentUser";

const DashboardHero = () => {
  const user = useCurrentUser();

  const userName = user?.firstName || "there";

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
        ? "Good Afternoon"
        : "Good Evening";

  return (
    <section className="relative overflow-hidden rounded-[var(--radius)] border border-border bg-card px-6 py-7 shadow-sm sm:px-8 sm:py-8">

      {/* Background decoration */}

      <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-40 w-40 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

        {/* Main content */}

        <div>

          {/* Label */}

          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3 py-1.5">

            <Sparkles
              size={14}
              className="text-primary"
            />

            <span className="text-xs font-semibold text-accent-foreground">
              Financial Overview
            </span>

          </div>

          {/* Greeting */}

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">

            {greeting},{" "}

            {userName}{" "}

            <span className="inline-block origin-bottom animate-[wave_2s_ease-in-out_infinite]">
              👋
            </span>

          </h1>

          {/* Description */}

          <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
            Here's a quick look at your spending, budgets and
            financial progress this month.
          </p>

        </div>

        {/* Right side */}

        <div className="hidden shrink-0 items-center gap-3 rounded-xl border border-border bg-muted/70 px-4 py-3 lg:flex">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100">

            <ArrowUpRight
              size={18}
              className="text-emerald-600"
            />

          </div>

          <div>

            <p className="text-xs font-medium text-muted-foreground">
              Keep going
            </p>

            <p className="text-sm font-semibold text-foreground">
              Stay on top of your finances
            </p>

          </div>

        </div>

      </div>

      {/* Bottom accent */}

      <div className="relative mt-6 h-px w-full bg-gradient-to-r from-primary/40 via-border to-transparent" />

    </section>
  );
};

export default DashboardHero;