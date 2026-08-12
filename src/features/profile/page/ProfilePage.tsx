import ProfileHero from "../components/ProfileHero/ProfileHero";
import ProfileStats from "../components/ProfileStats/ProfileStats";
import PersonalInformation from "../components/PersonalInformation/PersonalInformation";
import FinancialPreferences from "../components/FinancialPreferences/FinancialPreferences";

import { useProfile } from "../hooks/useProfile";
import { useFinancialHealth } from "../hooks/useFinancialHealth";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import EditProfileDialog from "../components/EditProfileDialog/EditProfileDialog";

const ProfilePage = () => {
  const profile = useProfile();
  const financialHealth = useFinancialHealth();

  const [openEditDialog, setOpenEditDialog] =
  useState(false);

  if (
    profile.isLoading ||
    financialHealth.isLoading
  ) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-slate-500">
          Loading profile...
        </p>
      </div>
    );
  }

  if (
    profile.isError ||
    financialHealth.isError
  ) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-red-500">
          Failed to load profile.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <ProfileHero
        firstName={profile.data!.firstName}
      />

      <ProfileStats
        financialHealth={financialHealth.data!}
      />

      <PersonalInformation
        profile={profile.data!}
      />

      <FinancialPreferences
        profile={profile.data!}
      />

      <div className="flex justify-end">
  <Button
    size="lg"
    onClick={() => setOpenEditDialog(true)}
  >
    Edit Profile
  </Button>
</div>

<EditProfileDialog
  open={openEditDialog}
  onOpenChange={setOpenEditDialog}
  profile={profile.data!}
/>
    </div>
  );
};

export default ProfilePage;