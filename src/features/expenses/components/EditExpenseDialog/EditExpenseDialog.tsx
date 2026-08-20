import { useState } from "react";
import { Pencil, X } from "lucide-react";

import ExpenseForm from "../ExpenseForm/ExpenseForm";
import { useUpdateExpense } from "../../hooks/useUpdateExpense";
import type { Expense } from "../../types/expense.types";

interface Props {
  expense: Expense;
}

const EditExpenseDialog = ({ expense }: Props) => {
  const [open, setOpen] = useState(false);

  const updateExpense = useUpdateExpense();

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          rounded-xl
          p-2
          text-slate-500
          transition
          hover:bg-indigo-50
          hover:text-primary
        "
      >
        <Pencil size={18} />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-2xl rounded-3xl bg-white shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-6">

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Edit Expense
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Update your expense details.
                </p>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={20} />
              </button>

            </div>

            {/* Form */}
            <div className="p-6">
              <ExpenseForm
                defaultValues={expense}
                isSubmitting={updateExpense.isPending}
                onSubmit={async (data) => {
                  await updateExpense.mutateAsync({
                    id: expense.id,
                    request: {
                      ...data,
                      description: data.description ?? "",
                    },
                  });

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

export default EditExpenseDialog;