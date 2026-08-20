import {
  Wallet,
  Trophy,
  BarChart3,
  Briefcase,
} from "lucide-react";

import type { InvestmentSummary as InvestmentSummaryType } from "../../types/investment.types";

interface Props {
  summary: InvestmentSummaryType;
}

const InvestmentSummary = ({ summary }: Props) => {
  const cards = [
    {
      title: "Total Investment",
      value: `₹${summary.totalInvestment.toLocaleString("en-IN")}`,
      icon: Wallet,
      iconColor: "text-emerald-600",
      iconBg: "bg-emerald-50",
    },
    {
      title: "Largest Investment",
      value: `₹${summary.largestInvestment.toLocaleString("en-IN")}`,
      icon: Trophy,
      iconColor: "text-blue-600",
      iconBg: "bg-blue-50",
    },
    {
      title: "Average Investment",
      value: `₹${summary.averageInvestment.toLocaleString("en-IN", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`,
      icon: BarChart3,
      iconColor: "text-primary",
      iconBg: "bg-accent",
    },
    {
      title: "Investments",
      value: summary.investmentCount.toLocaleString("en-IN"),
      icon: Briefcase,
      iconColor: "text-orange-600",
      iconBg: "bg-orange-50",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-slate-200/80
              bg-white
              p-6
              shadow-sm
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-slate-300
              hover:shadow-xl
            "
          >
            {/* Subtle background glow */}
            <div
              className="
                pointer-events-none
                absolute
                -right-8
                -top-8
                h-24
                w-24
                rounded-full
                bg-slate-50
                opacity-0
                blur-2xl
                transition-opacity
                duration-300
                group-hover:opacity-100
              "
            />

            <div className="relative flex items-start justify-between gap-4">
              {/* Content */}
              <div className="min-w-0">
                <p className="text-sm font-medium text-slate-500">
                  {card.title}
                </p>

                <h3
                  className="
                    mt-2
                    truncate
                    text-2xl
                    font-bold
                    tracking-tight
                    text-slate-900
                    sm:text-3xl
                  "
                >
                  {card.value}
                </h3>
              </div>

              {/* Icon */}
              <div
                className={`
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  ${card.iconBg}
                  ${card.iconColor}
                  transition-transform
                  duration-300
                  group-hover:scale-110
                `}
              >
                <Icon size={23} strokeWidth={2.2} />
              </div>
            </div>

            {/* Bottom accent */}
            <div
              className="
                absolute
                bottom-0
                left-6
                right-6
                h-px
                bg-gradient-to-r
                from-transparent
                via-slate-200
                to-transparent
              "
            />
          </div>
        );
      })}
    </div>
  );
};

export default InvestmentSummary;