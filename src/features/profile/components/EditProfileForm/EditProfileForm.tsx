import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useUpdateProfile } from "../../hooks/useUpdateProfile";

import {
  profileSchema,
  type ProfileFormData,
} from "../../validation/profile.schema";

import type { Profile } from "../../types/profile.types";

interface Props {
  profile: Profile;
  onSuccess?: () => void;
}

const EditProfileForm = ({
  profile,
  onSuccess,
}: Props) => {
  const updateProfile = useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      monthlyIncome: profile.monthlyIncome,
      riskProfile: profile.riskProfile,
      currency: profile.currency,
    },
  });

  useEffect(() => {
    reset({
      monthlyIncome: profile.monthlyIncome,
      riskProfile: profile.riskProfile,
      currency: profile.currency,
    });
  }, [profile, reset]);

  const onSubmit = async (
    data: ProfileFormData
  ) => {
    await updateProfile.mutateAsync(data);

    onSuccess?.();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Monthly Income */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Monthly Income
        </label>

        <input
          type="number"
          {...register("monthlyIncome", {
            valueAsNumber: true,
          })}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            outline-none
            transition
            focus:border-emerald-500
            focus:ring-4
            focus:ring-emerald-100
          "
        />

        {errors.monthlyIncome && (
          <p className="mt-2 text-sm text-red-500">
            {errors.monthlyIncome.message}
          </p>
        )}
      </div>

      {/* Risk Profile */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Risk Profile
        </label>

        <select
          {...register("riskProfile")}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            outline-none
            transition
            focus:border-emerald-500
            focus:ring-4
            focus:ring-emerald-100
          "
        >
          <option value="LOW">Low</option>
          <option value="MODERATE">Medium</option>
          <option value="HIGH">High</option>
        </select>

        {errors.riskProfile && (
          <p className="mt-2 text-sm text-red-500">
            {errors.riskProfile.message}
          </p>
        )}
      </div>

      {/* Currency */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Currency
        </label>

        <select
          {...register("currency")}
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-4
            py-3
            outline-none
            transition
            focus:border-emerald-500
            focus:ring-4
            focus:ring-emerald-100
          "
        >
          <option value="INR">INR</option>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
        </select>

        {errors.currency && (
          <p className="mt-2 text-sm text-red-500">
            {errors.currency.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 pt-2">
        <button
          type="button"
          onClick={onSuccess}
          className="
            rounded-xl
            border
            border-slate-200
            px-5
            py-2.5
            font-medium
            transition
            hover:bg-slate-50
          "
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={updateProfile.isPending}
          className="
            rounded-xl
            bg-emerald-600
            px-5
            py-2.5
            font-medium
            text-white
            transition
            hover:bg-emerald-700
            disabled:opacity-50
          "
        >
          {updateProfile.isPending
            ? "Saving..."
            : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default EditProfileForm;