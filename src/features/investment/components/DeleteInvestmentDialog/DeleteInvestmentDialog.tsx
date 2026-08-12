import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { useDeleteInvestment } from "../../hooks/useDeleteInvestment";

import type { Investment } from "../../types/investment.types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  investment?: Investment;
}

const DeleteInvestmentDialog = ({
  open,
  onOpenChange,
  investment,
}: Props) => {
  const deleteInvestment =
    useDeleteInvestment();

  const handleDelete = () => {
    if (!investment) return;

    deleteInvestment.mutate(
      investment.id,
      {
        onSuccess: () => {
          onOpenChange(false);
        },
      }
    );
  };

  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-md">
       <DialogHeader className="space-y-4">
  <DialogTitle className="text-2xl font-bold text-slate-900">
    Delete Investment
  </DialogTitle>

  <DialogDescription className="text-base leading-7 text-slate-600">
    You are about to permanently remove your{" "}
    <span className="font-semibold text-slate-900">
      {investment?.investmentType.replaceAll("_", " ")}
    </span>{" "}
    investment{" "}
    <span className="font-semibold text-emerald-600">
      "{investment?.name}"
    </span>
    .
    <br />
    <br />
    This action is <span className="font-semibold text-red-600">permanent</span> and
    cannot be undone.
  </DialogDescription>
</DialogHeader>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={() =>
              onOpenChange(false)
            }
            className="rounded-xl border border-slate-200 px-5 py-2.5"
          >
            Cancel
          </button>

          <button
            onClick={handleDelete}
            disabled={
              deleteInvestment.isPending
            }
            className="rounded-xl bg-red-600 px-5 py-2.5 text-white hover:bg-red-700 disabled:opacity-50"
          >
            {deleteInvestment.isPending
              ? "Deleting..."
              : "Delete"}
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteInvestmentDialog;