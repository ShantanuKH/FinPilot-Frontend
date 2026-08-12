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
      <p className="text-slate-500">
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
        <label className="mb-2 block text-sm font-medium text-slate-700">
          First Name
        </label>

        <input
          {...register("firstName")}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
        />

        {errors.firstName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.firstName.message}
          </p>
        )}
      </div>

      {/* Last Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Last Name
        </label>

        <input
          {...register("lastName")}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-violet-500"
        />

        {errors.lastName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.lastName.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Email
        </label>

        <input
          value={
            profile.data?.email ?? ""
          }
          readOnly
          className="w-full cursor-not-allowed rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500"
        />
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={
            updateProfile.isPending
          }
          className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700 disabled:opacity-50"
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