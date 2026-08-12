import { Plus } from "lucide-react";

interface Props {
  onAddBudget: () => void;
}

const BudgetHero = ({ onAddBudget }: Props) => {
  return (
    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Budget Planner
        </h1>

        <p className="mt-2 text-slate-500">
          Plan, track and optimize your monthly spending.
        </p>
      </div>

      <button
        onClick={onAddBudget}
        className="
          inline-flex
          items-center
          gap-2
          rounded-2xl
          bg-blue-600
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-blue-700
          hover:shadow-lg
        "
      >
        <Plus size={18} />
        Add Budget
      </button>
    </div>
  );
};

export default BudgetHero;