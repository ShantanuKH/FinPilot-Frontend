import { useState } from "react";
import { Plus, X } from "lucide-react";

import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { useCreateExpense } from "../../hooks/useCreateExpense";

const AddExpenseDialog = () => {
  const [open, setOpen] = useState(false);

  const createExpense = useCreateExpense();

  return (
    <>
      {/* Open Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          inline-flex
          items-center
          gap-2
          rounded-xl
          bg-primary
          px-6
          py-3
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-indigo-700
          hover:scale-105
          active:scale-95
        "
      >
        <Plus size={18} />
        Add Expense
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-6">

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Add Expense
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Record a new expense.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="
                  rounded-lg
                  p-2
                  text-slate-500
                  transition
                  hover:bg-slate-100
                "
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6">
              <ExpenseForm
                isSubmitting={createExpense.isPending}
                onSubmit={async (data) => {
                  await createExpense.mutateAsync(data);

                  setOpen(false);
                }}
              />
            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default AddExpenseDialog;