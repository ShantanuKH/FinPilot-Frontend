import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  profileSchema,
  type ProfileFormData,
} from "../../validation/profile.schema";

import { useProfile } from "../../hooks/useProfile";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";

const ProfileSection = () => {
  const profile = useProfile();
  const updateProfile =
    useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(
      profileSchema
    ),
  });

  useEffect(() => {
    if (profile.data) {
      reset({
        firstName:
          profile.data.firstName,
        lastName:
          profile.data.lastName,
        monthlyIncome:
          profile.data.monthlyIncome,
        riskProfile:
          profile.data.riskProfile,
        currency:
          profile.data.currency,
      });
    }
  }, [profile.data, reset]);

  const onSubmit = (
    data: ProfileFormData
  ) => {
    updateProfile.mutate(data);
  };

  if (profile.isLoading) {
    return (
      <p className="text-muted-foreground">
        Loading profile...
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* First Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          First Name
        </label>

        <input
          {...register("firstName")}
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
        />

        {errors.firstName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Last Name
        </label>

        <input
          {...register("lastName")}
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none focus:border-primary focus:ring-4 focus:ring-primary/10"
        />

        {errors.lastName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.lastName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Email
        </label>

        <input
          value={
            profile.data?.email ?? ""
          }
          readOnly
          className="w-full cursor-not-allowed rounded-xl border border-input bg-muted px-4 py-3 text-muted-foreground"
        />
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={
            updateProfile.isPending
          }
          className="rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:bg-emerald-700 disabled:opacity-50"
        >
          {updateProfile.isPending
            ? "Saving..."
            : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default ProfileSection;