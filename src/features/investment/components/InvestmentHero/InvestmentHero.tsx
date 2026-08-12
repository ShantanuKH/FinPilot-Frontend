import { Plus } from "lucide-react";

interface Props {
  onAddInvestment: () => void;
}

const InvestmentHero = ({
  onAddInvestment,
}: Props) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-8
        shadow-sm
      "
    >
      <div>
        <p
          className="
            inline-flex
            rounded-full
            bg-violet-50
            px-4
            py-2
            text-sm
            font-medium
            text-violet-600
          "
        >
          Investment Management
        </p>

        <h2
          className="
            mt-4
            text-4xl
            font-bold
            text-slate-900
          "
        >
          Manage Your Investments
        </h2>

        <p
          className="
            mt-3
            max-w-xl
            text-lg
            leading-8
            text-slate-600
          "
        >
          Track your portfolio, monitor performance,
          and make smarter investment decisions in
          one place.
        </p>
      </div>

      <button
        onClick={onAddInvestment}
        className="
          flex
          items-center
          gap-2
          rounded-2xl
          bg-violet-600
          px-6
          py-3
          font-semibold
          text-white
          shadow-sm
          transition-all
          hover:bg-violet-700
        "
      >
        <Plus size={20} />
        Add Investment
      </button>
    </div>
  );
};

export default InvestmentHero;