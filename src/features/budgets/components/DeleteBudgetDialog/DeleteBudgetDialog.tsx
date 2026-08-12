import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Trash2 } from "lucide-react";

import { useDeleteBudget } from "../../hooks/useDeleteBudget";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  budgetId?: number;
}

const DeleteBudgetDialog = ({
  open,
  onOpenChange,
  budgetId,
}: Props) => {
  const deleteBudget =
    useDeleteBudget();

  const handleDelete = () => {
    if (!budgetId) return;

    deleteBudget.mutate(budgetId, {
      onSuccess: () => {
        onOpenChange(false);
      },
    });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
            <Trash2
              className="text-red-600"
              size={28}
            />
          </div>

          <DialogTitle className="text-center">
            Delete Budget
          </DialogTitle>

          <DialogDescription className="text-center">
            Are you sure you want to delete this
            budget? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-4">
          <button
            type="button"
            onClick={() =>
              onOpenChange(false)
            }
            className="rounded-xl border border-slate-200 px-5 py-2.5 font-medium hover:bg-slate-50"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={handleDelete}
            disabled={
              deleteBudget.isPending
            }
            className="rounded-xl bg-red-600 px-5 py-2.5 font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
          >
            {deleteBudget.isPending
              ? "Deleting..."
              : "Delete"}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteBudgetDialog;