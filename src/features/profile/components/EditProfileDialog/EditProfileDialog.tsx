import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import EditProfileForm from "../EditProfileForm/EditProfileForm";

import type { Profile } from "../../types/profile.types";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  profile: Profile;
}

const EditProfileDialog = ({
  open,
  onOpenChange,
  profile,
}: Props) => {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
    >
      <DialogContent className="sm:max-w-lg rounded-3xl">

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Edit Profile
          </DialogTitle>

          <DialogDescription>
            Update your financial preferences and profile information.
          </DialogDescription>
        </DialogHeader>

        <EditProfileForm
          profile={profile}
          onSuccess={() => onOpenChange(false)}
        />

      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;