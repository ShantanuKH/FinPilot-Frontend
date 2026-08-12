import { Sparkles, RefreshCw } from "lucide-react";

interface Props {
  onRefresh: () => void;
  isRefreshing?: boolean;
}

const RecommendationHero = ({
  onRefresh,
  isRefreshing = false,
}: Props) => {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-3xl
        bg-gradient-to-r
        from-violet-600
        via-indigo-600
        to-blue-600
        p-8
        text-white
        shadow-lg
      "
    >
      {/* Background Glow */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
            <Sparkles size={18} />
            AI Powered Financial Insights
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Smart Financial
            <br />
            Recommendations
          </h1>

          <p className="mt-5 max-w-xl text-lg text-white/90">
            Personalized recommendations generated from your
            expenses, budgets, investments and financial
            behaviour to help you make smarter money decisions.
          </p>
        </div>

        <button
          onClick={onRefresh}
          disabled={isRefreshing}
          className="
            flex
            items-center
            gap-2
            rounded-2xl
            bg-white
            px-6
            py-3
            font-semibold
            text-indigo-700
            transition
            hover:scale-105
            hover:shadow-xl
            disabled:opacity-60
          "
        >
          <RefreshCw
            size={18}
            className={
              isRefreshing
                ? "animate-spin"
                : ""
            }
          />

          {isRefreshing
            ? "Refreshing..."
            : "Refresh"}
        </button>
      </div>
    </section>
  );
};

export default RecommendationHero;