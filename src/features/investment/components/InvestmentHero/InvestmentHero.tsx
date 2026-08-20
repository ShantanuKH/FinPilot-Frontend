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
        rounded-2xl
        border
        border-border
        bg-card
        p-8
        shadow-sm
      "
    >
      <div>
        <p
          className="
            inline-flex
            rounded-full
            border border-primary/20
            bg-accent
            px-4
            py-2
            text-sm
            font-medium
            text-accent-foreground
          "
        >
          Investment Management
        </p>

        <h2
          className="
            mt-4
            text-4xl
            font-bold
            text-foreground
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
            text-muted-foreground
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
          rounded-xl
          bg-primary
          px-6
          py-3
          font-semibold
          text-white
          shadow-sm
          transition-all
          hover:bg-emerald-700
        "
      >
        <Plus size={20} />
        Add Investment
      </button>
    </div>
  );
};

export default InvestmentHero;