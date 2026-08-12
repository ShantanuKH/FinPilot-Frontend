import { Plus } from "lucide-react";

const ExpenseHero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      {/* Background Accent */}
      <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-100 blur-3xl opacity-50" />

      <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        {/* Left Content */}
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full bg-indigo-50 px-4 py-1 text-sm font-medium text-indigo-600">
            Expense Management
          </span>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">
            Track Every Expense
          </h1>

          <p className="mt-3 text-lg leading-relaxed text-slate-600">
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
            bg-indigo-600
            px-6
            py-3
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-105
            hover:bg-indigo-700
            active:scale-95
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