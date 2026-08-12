import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import BudgetForm from "./BudgetForm";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddBudgetDialog = ({
  open,
  onOpenChange,
}: Props) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Create Budget
          </DialogTitle>

          <DialogDescription>
            Set a monthly spending limit for a category.
          </DialogDescription>
        </DialogHeader>

        <BudgetForm
          onSuccess={() =>
            onOpenChange(false)
          }
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddBudgetDialog;