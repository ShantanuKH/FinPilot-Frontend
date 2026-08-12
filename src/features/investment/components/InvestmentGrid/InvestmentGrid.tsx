import InvestmentCard from "../InvestmentCard/InvestmentCard";

import type { Investment } from "../../types/investment.types";

interface Props {
  investments: Investment[];
  onEdit: (investment: Investment) => void;
  onDelete: (investment: Investment) => void;
}

const InvestmentGrid = ({
  investments,
  onEdit,
  onDelete,
}: Props) => {
  if (!investments.length) {
    return (
      <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-16 text-center">
        <h3 className="text-xl font-semibold text-slate-900">
          No Investments Found
        </h3>

        <p className="mt-2 text-slate-500">
          Add your first investment to
          start tracking your portfolio.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {investments.map(
        (investment) => (
          <InvestmentCard
            key={investment.id}
            investment={investment}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )
      )}
    </div>
  );
};

export default InvestmentGrid;