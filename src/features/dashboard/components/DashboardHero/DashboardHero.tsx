import { Sparkles, ArrowUpRight } from "lucide-react";

const DashboardHero = () => {
  const userName = "Shantanu";

  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white px-6 py-7 shadow-sm sm:px-8 sm:py-8">
      {/* Subtle background decoration */}
      <div className="pointer-events-none absolute -right-20 -top-24 h-56 w-56 rounded-full bg-violet-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-40 w-40 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="relative flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        {/* Main content */}
        <div>
          {/* Small label */}
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-3 py-1.5">
            <Sparkles
              size={14}
              className="text-violet-600"
            />

            <span className="text-xs font-semibold text-violet-700">
              Financial Overview
            </span>
          </div>

          {/* Greeting */}
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {greeting}, {userName}{" "}
            <span className="inline-block origin-bottom animate-[wave_2s_ease-in-out_infinite]">
              👋
            </span>
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
            Here's a quick look at your spending, budgets and
            financial progress this month.
          </p>
        </div>

        {/* Right side mini status */}
        <div className="hidden shrink-0 items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-3 lg:flex">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-100">
            <ArrowUpRight
              size={18}
              className="text-emerald-600"
            />
          </div>

          <div>
            <p className="text-xs font-medium text-slate-400">
              Keep going
            </p>

            <p className="text-sm font-semibold text-slate-800">
              Stay on top of your finances
            </p>
          </div>
        </div>
      </div>

      {/* Small bottom accent */}
      <div className="relative mt-6 h-px w-full bg-gradient-to-r from-violet-200 via-slate-100 to-transparent" />
    </section>
  );
};

export default DashboardHero;