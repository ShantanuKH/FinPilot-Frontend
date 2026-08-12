import {
  TrendingUp,
  Building2,
  BriefcaseBusiness,
  Bitcoin,
  Pencil,
  Trash2,
} from "lucide-react";

import type { Investment } from "../../types/investment.types";

interface Props {
  investment: Investment;
  onEdit: (investment: Investment) => void;
  onDelete: (investment: Investment) => void;
}

const InvestmentCard = ({
  investment,
  onEdit,
  onDelete,
}: Props) => {
  const getIcon = () => {
    switch (investment.investmentType) {
      case "STOCK":
        return TrendingUp;

      case "MUTUAL_FUND":
        return Building2;

      case "CRYPTO":
        return Bitcoin;

      default:
        return BriefcaseBusiness;
    }
  };

  const Icon = getIcon();

  const formattedDate = new Date(
    investment.investmentDate
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-emerald-200
        hover:shadow-md
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-emerald-50
              text-emerald-600
            "
          >
            <Icon
              size={21}
              strokeWidth={2}
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-slate-900">
              {investment.name}
            </h3>

            <p
              className="
                mt-0.5
                text-xs
                font-medium
                uppercase
                tracking-wide
                text-slate-400
              "
            >
              {investment.investmentType.replace(
                "_",
                " "
              )}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => onEdit(investment)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              text-slate-500
              transition
              hover:border-emerald-200
              hover:bg-emerald-50
              hover:text-emerald-600
            "
            aria-label="Edit investment"
          >
            <Pencil size={16} />
          </button>

          <button
            type="button"
            onClick={() => onDelete(investment)}
            className="
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-xl
              border
              border-slate-200
              text-slate-400
              transition
              hover:border-red-200
              hover:bg-red-50
              hover:text-red-500
            "
            aria-label="Delete investment"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Details */}
      <div
        className="
          mt-5
          grid
          grid-cols-2
          gap-4
          border-t
          border-slate-100
          pt-4
        "
      >
        <div>
          <p className="text-xs font-medium text-slate-400">
            Amount
          </p>

          <p className="mt-1 text-lg font-bold text-slate-900">
            ₹
            {investment.amount.toLocaleString(
              "en-IN"
            )}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs font-medium text-slate-400">
            Invested On
          </p>

          <p className="mt-1 text-sm font-semibold text-slate-700">
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;