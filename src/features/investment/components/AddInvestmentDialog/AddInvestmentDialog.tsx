import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import InvestmentForm from "./InvestmentForm";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddInvestmentDialog = ({
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
            Add Investment
          </DialogTitle>
        </DialogHeader>

        <InvestmentForm
          onSuccess={() =>
            onOpenChange(false)
          }
        />
      </DialogContent>
    </Dialog>
  );
};

export default AddInvestmentDialog;