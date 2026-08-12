import { Plus, Receipt } from "lucide-react";

const ExpenseEmptyState = () => {
  return (
    <div className="rounded-3xl border border-dashed border-slate-300 bg-white py-20">

      <div className="flex flex-col items-center">

        <div className="rounded-full bg-indigo-50 p-6">
          <Receipt
            size={44}
            className="text-indigo-500"
          />
        </div>

        <h2 className="mt-6 text-2xl font-bold text-slate-900">
          No Expenses Yet
        </h2>

        <p className="mt-3 max-w-md text-center text-slate-500">
          Start tracking your spending by adding your first
          expense. Every financial journey starts with the
          first entry.
        </p>

        <button
          className="
            mt-8
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-indigo-600
            px-6
            py-3
            font-medium
            text-white
            transition
            hover:bg-indigo-700
          "
        >
          <Plus size={18} />
          Add Expense
        </button>

      </div>
    </div>
  );
};

export default ExpenseEmptyState;