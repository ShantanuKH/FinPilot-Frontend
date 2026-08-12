import {
  ShieldCheck,
  ShieldAlert,
  ShieldQuestion,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

import type { InvestmentRiskAnalysis } from "../../types/investment.types";

interface Props {
  risk: InvestmentRiskAnalysis;
}

const RiskAnalysisCard = ({ risk }: Props) => {
  const isMatched =
    risk.portfolioRisk === risk.userRiskProfile;

  const isHighRisk =
    risk.portfolioRisk === "HIGH";

  const getRiskConfig = () => {
    if (isMatched) {
      return {
        icon: ShieldCheck,
        label: "Well Aligned",
        description:
          "Your portfolio risk matches your preferred risk profile.",
        iconBg: "bg-emerald-100",
        iconColor: "text-emerald-600",
        badgeBg: "bg-emerald-50",
        badgeText: "text-emerald-700",
        accent: "bg-emerald-500",
      };
    }

    if (isHighRisk) {
      return {
        icon: ShieldAlert,
        label: "High Risk",
        description:
          "Your portfolio carries a higher level of risk than recommended.",
        iconBg: "bg-red-100",
        iconColor: "text-red-600",
        badgeBg: "bg-red-50",
        badgeText: "text-red-700",
        accent: "bg-red-500",
      };
    }

    return {
      icon: ShieldQuestion,
      label: "Review Recommended",
      description:
        "Your portfolio risk may need some adjustment.",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      badgeBg: "bg-amber-50",
      badgeText: "text-amber-700",
      accent: "bg-amber-500",
    };
  };

  const config = getRiskConfig();
  const Icon = config.icon;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Accent */}
      <div
        className={`absolute left-0 top-0 h-full w-1 ${config.accent}`}
      />

      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-2xl ${config.iconBg}`}
          >
            <Icon
              size={26}
              className={config.iconColor}
            />
          </div>

          <div>
            <h3 className="text-lg font-semibold text-slate-900">
              Risk Analysis
            </h3>

            <p className="mt-0.5 text-sm text-slate-500">
              Portfolio health
            </p>
          </div>
        </div>

        {/* Status */}
        <span
          className={`rounded-full px-3 py-1.5 text-xs font-semibold ${config.badgeBg} ${config.badgeText}`}
        >
          {config.label}
        </span>
      </div>

      {/* Risk comparison */}
      <div className="mt-7 grid grid-cols-2 gap-4">
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-2">
            <ShieldQuestion
              size={16}
              className="text-slate-400"
            />

            <p className="text-xs font-medium text-slate-500">
              Your Profile
            </p>
          </div>

          <p className="mt-2 text-xl font-bold text-slate-900">
            {risk.userRiskProfile}
          </p>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="flex items-center gap-2">
            {isHighRisk ? (
              <AlertTriangle
                size={16}
                className="text-red-500"
              />
            ) : (
              <TrendingUp
                size={16}
                className="text-emerald-500"
              />
            )}

            <p className="text-xs font-medium text-slate-500">
              Portfolio
            </p>
          </div>

          <p className="mt-2 text-xl font-bold text-slate-900">
            {risk.portfolioRisk}
          </p>
        </div>
      </div>

      {/* Insight */}
      <div
        className={`mt-4 rounded-2xl p-4 ${config.badgeBg}`}
      >
        <div className="flex gap-3">
          <Icon
            size={18}
            className={`mt-0.5 shrink-0 ${config.iconColor}`}
          />

          <p className="text-sm leading-6 text-slate-600">
            {risk.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskAnalysisCard;