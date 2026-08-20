import {
  Wallet,
  Receipt,
  PiggyBank,
  TrendingUp,
  Activity,
} from "lucide-react";

import HealthMetricCard from "../HealthMetricCard/HealthMetricCard";
import { useFinancialHealth } from "../../hooks/useFinancialHealth";
import { useProfile } from "../../hooks/useProfile";

const FinancialHealth = () => {
  const financialHealth = useFinancialHealth();
  const profile = useProfile();

  if (
    financialHealth.isLoading ||
    profile.isLoading
  ) {
    return (
      <div className="grid gap-5 md:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="
              h-40
              animate-pulse
              rounded-3xl
              border
              border-slate-200
              bg-slate-100
            "
          />
        ))}
      </div>
    );
  }

  if (
    financialHealth.isError ||
    profile.isError
  ) {
    return (
      <div className="rounded-3xl border border-red-200 bg-red-50 p-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-red-100 p-2">
            <Activity
              size={20}
              className="text-red-600"
            />
          </div>

          <div>
            <h3 className="font-semibold text-red-900">
              Unable to load financial health
            </h3>

            <p className="mt-1 text-sm text-red-600">
              We couldn't retrieve your financial
              health information. Please try again
              later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (
    !financialHealth.data ||
    !profile.data
  ) {
    return (
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
        <Activity
          size={32}
          className="mx-auto text-slate-400"
        />

        <p className="mt-3 font-medium text-slate-700">
          No financial health data available
        </p>

        <p className="mt-1 text-sm text-slate-500">
          Add your financial information to see
          your financial health.
        </p>
      </div>
    );
  }

  const {
    monthlyIncome,
    totalExpenses,
    monthlySavings,
    savingsRate,
    status,
  } = financialHealth.data;

  /*
   * Use the currency saved in the user's profile.
   * Example:
   * INR → ₹
   * USD → $
   * EUR → €
   */
  const currency =
    profile.data.currency || "INR";

  const formatCurrency = (
    value: number
  ) => {
    try {
      return new Intl.NumberFormat(
        "en-IN",
        {
          style: "currency",
          currency,
          maximumFractionDigits: 0,
        }
      ).format(value);
    } catch {
      return new Intl.NumberFormat(
        "en-IN",
        {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        }
      ).format(value);
    }
  };

  const getStatusConfig = () => {
    switch (status) {
      case "EXCELLENT":
        return {
          label: "Excellent",
          description:
            "You're maintaining a strong savings rate. Keep up the great financial habits.",
          container:
            "border-emerald-200 bg-emerald-50",
          iconBg:
            "bg-emerald-100",
          iconColor:
            "text-emerald-600",
          textColor:
            "text-emerald-700",
        };

      case "GOOD":
        return {
          label: "Good",
          description:
            "Your finances are in a healthy position, with room to improve your savings further.",
          container:
            "border-blue-200 bg-blue-50",
          iconBg:
            "bg-blue-100",
          iconColor:
            "text-blue-600",
          textColor:
            "text-blue-700",
        };

      case "NEEDS_IMPROVEMENT":
        return {
          label: "Needs Improvement",
          description:
            "Your current savings rate could be improved. Focus on controlling expenses and increasing savings.",
          container:
            "border-amber-200 bg-amber-50",
          iconBg:
            "bg-amber-100",
          iconColor:
            "text-amber-600",
          textColor:
            "text-amber-700",
        };

      default:
        return {
          label: status,
          description:
            "Review your financial activity to better understand your current financial health.",
          container:
            "border-slate-200 bg-slate-50",
          iconBg:
            "bg-slate-100",
          iconColor:
            "text-slate-600",
          textColor:
            "text-slate-700",
        };
    }
  };

  const statusConfig =
    getStatusConfig();

  return (
    <div className="space-y-6">
      {/* Financial Metrics */}

      <div className="grid gap-5 md:grid-cols-2">
        <HealthMetricCard
          title="Monthly Income"
          value={formatCurrency(
            monthlyIncome
          )}
          icon={Wallet}
          iconBgColor="bg-blue-100"
          iconColor="text-blue-600"
          description="Your current monthly income"
        />

        <HealthMetricCard
          title="Total Expenses"
          value={formatCurrency(
            totalExpenses
          )}
          icon={Receipt}
          iconBgColor="bg-rose-100"
          iconColor="text-rose-600"
          description="Total expenses recorded"
        />

        <HealthMetricCard
          title="Monthly Savings"
          value={formatCurrency(
            monthlySavings
          )}
          icon={PiggyBank}
          iconBgColor="bg-emerald-100"
          iconColor="text-emerald-600"
          description="Income remaining after expenses"
        />

        <HealthMetricCard
          title="Savings Rate"
          value={`${savingsRate.toFixed(2)}%`}
          icon={TrendingUp}
          iconBgColor="bg-violet-100"
          iconColor="text-primary"
          description="Percentage of income you're saving"
        />
      </div>

      {/* Overall Financial Health */}

      <div
        className={`
          rounded-3xl
          border
          p-6
          ${statusConfig.container}
        `}
      >
        <div className="flex items-start gap-4">
          <div
            className={`
              rounded-2xl
              p-3
              ${statusConfig.iconBg}
            `}
          >
            <Activity
              size={24}
              className={
                statusConfig.iconColor
              }
            />
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium text-slate-500">
              Overall Financial Health
            </p>

            <h3
              className={`
                mt-1
                text-2xl
                font-bold
                ${statusConfig.textColor}
              `}
            >
              {statusConfig.label}
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              {statusConfig.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialHealth;