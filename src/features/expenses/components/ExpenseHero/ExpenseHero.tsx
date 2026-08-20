import { Plus } from "lucide-react";

const ExpenseHero = () => {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      {/* Background Accent */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-100 blur-3xl opacity-50" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left Content */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
            Expense Management
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Track Every Expense
          </h1>

          <p className="mt-3 text-base leading-7 text-muted-foreground">
            Stay on top of your finances by managing daily expenses,
            monitoring spending habits, and building healthier financial
            decisions.
          </p>
        </div>

        {/* Right Button */}
        <button
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-primary
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:bg-emerald-700
          "
        >
          <Plus size={20} />
          Add Expense
        </button>
      </div>
    </section>
  );
};

export default ExpenseHero;