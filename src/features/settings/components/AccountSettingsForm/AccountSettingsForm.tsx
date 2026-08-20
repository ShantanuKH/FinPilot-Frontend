import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  User,
  Wallet,
  Mail,
} from "lucide-react";

import {
  profileSchema,
  type ProfileFormData,
} from "../../validation/profile.schema";

import { useProfile } from "../../hooks/useProfile";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";

const AccountSettingsForm = () => {
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
      reset(profile.data);
    }
  }, [profile.data, reset]);

  const onSubmit = (
    data: ProfileFormData
  ) => {
    updateProfile.mutate(data);
  };

  if (profile.isLoading) {
    return (
      <div className="flex h-60 items-center justify-center">
        <p className="text-slate-500">
          Loading account...
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      {/* ---------------- Personal Information ---------------- */}

      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
        "
      >
        <div className="mb-8 flex items-start gap-4">
          <div className="rounded-2xl bg-violet-100 p-3">
            <User
              className="text-primary"
              size={24}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Personal Information
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Keep your account
              information up to date.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* First Name */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              First Name
            </label>

            <input
              {...register("firstName")}
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                transition
                focus:border-violet-500
                focus:ring-4
                focus:ring-violet-100
              "
            />

            {errors.firstName && (
              <p className="mt-2 text-sm text-red-500">
                {
                  errors.firstName
                    .message
                }
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
              className="
                w-full
                rounded-2xl
                border
                border-slate-200
                px-4
                py-3
                outline-none
                transition
                focus:border-violet-500
                focus:ring-4
                focus:ring-violet-100
              "
            />

            {errors.lastName && (
              <p className="mt-2 text-sm text-red-500">
                {
                  errors.lastName
                    .message
                }
              </p>
            )}
          </div>

          {/* Email */}

          <div className="md:col-span-2">
            <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-700">
              <Mail size={16} />

              Email Address
            </label>

            <input
              value={
                profile.data?.email ??
                ""
              }
              readOnly
              className="
                w-full
                cursor-not-allowed
                rounded-2xl
                border
                border-slate-200
                bg-slate-100
                px-4
                py-3
                text-slate-500
              "
            />
          </div>
        </div>
      </div>

            {/* ---------------- Financial Preferences ---------------- */}

      <div
        className="
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-8
          shadow-sm
        "
      >
        <div className="mb-8 flex items-start gap-4">
          <div className="rounded-2xl bg-emerald-100 p-3">
            <Wallet
              className="text-emerald-600"
              size={24}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold text-slate-900">
              Financial Preferences
            </h3>

            <p className="mt-1 text-sm text-slate-500">
              Configure your financial profile and
              investment preferences.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
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
                rounded-2xl
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

          {/* Currency */}

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Currency
            </label>

            <select
              {...register("currency")}
              className="
                w-full
                rounded-2xl
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
              <option value="INR">
                INR (₹)
              </option>

              <option value="USD">
                USD ($)
              </option>

              <option value="EUR">
                EUR (€)
              </option>

              <option value="GBP">
                GBP (£)
              </option>
            </select>

            {errors.currency && (
              <p className="mt-2 text-sm text-red-500">
                {errors.currency.message}
              </p>
            )}
          </div>

          {/* Risk Profile */}

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Risk Profile
            </label>

            <select
              {...register("riskProfile")}
              className="
                w-full
                rounded-2xl
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
              <option value="LOW">
                🟢 Conservative
              </option>

              <option value="MEDIUM">
                🟡 Moderate
              </option>

              <option value="HIGH">
                🔴 Aggressive
              </option>
            </select>

            {errors.riskProfile && (
              <p className="mt-2 text-sm text-red-500">
                {errors.riskProfile.message}
              </p>
            )}
          </div>
        </div>
      </div>
            {/* ---------------- Save Section ---------------- */}

      <div className="flex flex-col items-center justify-center gap-3 rounded-3xl border border-slate-200 bg-gradient-to-r from-violet-50 via-white to-emerald-50 p-8">
        <p className="text-center text-sm text-slate-500">
          Your changes will be applied immediately to your FinPilot
          account.
        </p>

        <button
          type="submit"
          disabled={updateProfile.isPending}
          className="
            inline-flex
            items-center
            justify-center
            rounded-2xl
            bg-primary
            px-8
            py-3
            text-sm
            font-semibold
            text-white
            shadow-lg
            shadow-violet-200
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-emerald-700
            hover:shadow-xl
            hover:shadow-violet-300
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {updateProfile.isPending
            ? "Saving Changes..."
            : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default AccountSettingsForm;