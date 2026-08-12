import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import InvestmentForm from "../AddInvestmentDialog/InvestmentForm";

import type { Investment } from "../../types/investment.types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  investment?: Investment;
}

const EditInvestmentDialog = ({
  open,
  onOpenChange,
  investment,
}: Props) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>
            Edit Investment
          </DialogTitle>
        </DialogHeader>

        <InvestmentForm
          investment={investment}
          onSuccess={() =>
            onOpenChange(false)
          }
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditInvestmentDialog;