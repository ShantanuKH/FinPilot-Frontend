import { useState } from "react";
import { Trash2, X } from "lucide-react";

import { useDeleteExpense } from "../../hooks/useDeleteExpense";

interface Props {
  expenseId: number;
  expenseTitle: string;
}

const DeleteExpenseDialog = ({
  expenseId,
  expenseTitle,
}: Props) => {
  const [open, setOpen] = useState(false);

  const deleteExpense = useDeleteExpense();

  const handleDelete = async () => {
    await deleteExpense.mutateAsync(expenseId);

    setOpen(false);
  };

  return (
    <>
      {/* Delete Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          rounded-xl
          p-2
          text-slate-500
          transition
          hover:bg-red-50
          hover:text-red-600
        "
      >
        <Trash2 size={18} />
      </button>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">

          <div className="w-full max-w-md rounded-3xl bg-white shadow-2xl">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 p-6">

              <h2 className="text-xl font-bold">
                Delete Expense
              </h2>

              <button
                onClick={() => setOpen(false)}
                className="rounded-lg p-2 hover:bg-slate-100"
              >
                <X size={18} />
              </button>

            </div>

            {/* Body */}
            <div className="p-6">

              <p className="text-slate-600">
                Are you sure you want to delete
              </p>

              <p className="mt-2 font-semibold text-slate-900">
                "{expenseTitle}"
              </p>

              <p className="mt-4 text-sm text-red-500">
                This action cannot be undone.
              </p>

            </div>

            {/* Footer */}
            <div className="flex justify-end gap-3 border-t border-slate-200 p-6">

              <button
                onClick={() => setOpen(false)}
                className="
                  rounded-xl
                  border
                  border-slate-300
                  px-5
                  py-2
                  transition
                  hover:bg-slate-100
                "
              >
                Cancel
              </button>

              <button
                onClick={handleDelete}
                disabled={deleteExpense.isPending}
                className="
                  rounded-xl
                  bg-red-600
                  px-5
                  py-2
                  text-white
                  transition
                  hover:bg-red-700
                  disabled:opacity-50
                "
              >
                {deleteExpense.isPending
                  ? "Deleting..."
                  : "Delete"}
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
};

export default DeleteExpenseDialog;