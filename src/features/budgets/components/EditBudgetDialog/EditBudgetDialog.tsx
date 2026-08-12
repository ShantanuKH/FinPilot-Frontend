import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import type { Budget } from "../../types/budget.types";
import BudgetForm from "../AddBudgetDialog/BudgetForm";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  budget?: Budget;
}

const EditBudgetDialog = ({
  open,
  onOpenChange,
  budget,
}: Props) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Edit Budget
          </DialogTitle>

          <DialogDescription>
            Update your monthly spending limit.
          </DialogDescription>
        </DialogHeader>

        <BudgetForm
          budget={budget}
          onSuccess={() =>
            onOpenChange(false)
          }
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditBudgetDialog;