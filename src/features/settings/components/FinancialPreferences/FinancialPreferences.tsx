import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Shield,
  Scale,
  TrendingUp,
  Check,
} from "lucide-react";

import {
  profileSchema,
  type ProfileFormData,
} from "../../validation/profile.schema";

import { useProfile } from "../../hooks/useProfile";
import { useUpdateProfile } from "../../hooks/useUpdateProfile";

const FinancialPreferences = () => {
  const profile = useProfile();
  const updateProfile = useUpdateProfile();

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
  });

  const selectedRisk = watch("riskProfile");

  useEffect(() => {
    if (profile.data) {
      reset({
        firstName: profile.data.firstName,
        lastName: profile.data.lastName,
        monthlyIncome: profile.data.monthlyIncome,
        riskProfile: profile.data.riskProfile,
        currency: profile.data.currency,
      });
    }
  }, [profile.data, reset]);

  const onSubmit = (data: ProfileFormData) => {
    updateProfile.mutate(data);
  };

  if (profile.isLoading) {
    return (
      <p className="text-muted-foreground">
        Loading financial preferences...
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      {/* Hidden fields */}
      <input type="hidden" {...register("firstName")} />
      <input type="hidden" {...register("lastName")} />

      {/* Monthly Income */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
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
            border-input
            bg-background
            px-4
            py-3
            text-foreground
            outline-none
            transition
            placeholder:text-muted-foreground
            focus:border-primary
            focus:ring-4
            focus:ring-primary/10
          "
        />

        {errors.monthlyIncome && (
          <p className="mt-1.5 text-sm text-red-500">
            {errors.monthlyIncome.message}
          </p>
        )}
      </div>

      {/* Risk Profile */}
      <div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-foreground">
            Risk Profile
          </label>

          <p className="mt-1 text-sm text-muted-foreground">
            Choose the level of investment risk you're
            comfortable with.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {/* Low Risk */}
          <button
            type="button"
            onClick={() =>
              setValue("riskProfile", "LOW", {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            className={`
              relative
              rounded-2xl
              border
              p-4
              text-left
              transition-all
              duration-200
              ${
                selectedRisk === "LOW"
                  ? "border-emerald-500 bg-emerald-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-emerald-300 hover:bg-slate-50"
              }
            `}
          >
            {selectedRisk === "LOW" && (
              <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600">
                <Check size={12} className="text-white" />
              </div>
            )}

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
              <Shield size={20} />
            </div>

            <p className="mt-3 font-semibold text-foreground">
              Low Risk
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              More stability
            </p>
          </button>

          {/* Medium Risk */}
          <button
            type="button"
            onClick={() =>
              setValue("riskProfile", "MEDIUM", {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            className={`
              relative
              rounded-2xl
              border
              p-4
              text-left
              transition-all
              duration-200
              ${
                selectedRisk === "MEDIUM"
                  ? "border-blue-500 bg-blue-50 shadow-sm"
                  : "border-slate-200 bg-white hover:border-blue-300 hover:bg-slate-50"
              }
            `}
          >
            {selectedRisk === "MEDIUM" && (
              <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                <Check size={12} className="text-white" />
              </div>
            )}

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
              <Scale size={20} />
            </div>

            <p className="mt-3 font-semibold text-foreground">
              Medium Risk
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Balanced approach
            </p>
          </button>

          {/* High Risk */}
          <button
            type="button"
            onClick={() =>
              setValue("riskProfile", "HIGH", {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            className={`
              relative
              rounded-2xl
              border
              p-4
              text-left
              transition-all
              duration-200
              ${
                selectedRisk === "HIGH"
                  ? "border-primary bg-accent shadow-sm"
                  : "border-border bg-background hover:border-primary/50 hover:bg-muted"
              }
            `}
          >
            {selectedRisk === "HIGH" && (
              <div className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                <Check size={12} className="text-white" />
              </div>
            )}

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
              <TrendingUp size={20} />
            </div>

            <p className="mt-3 font-semibold text-foreground">
              High Risk
            </p>

            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Higher growth potential
            </p>
          </button>
        </div>

        {errors.riskProfile && (
          <p className="mt-2 text-sm text-red-500">
            {errors.riskProfile.message}
          </p>
        )}
      </div>

      {/* Currency */}
      <div>
        <label className="mb-2 block text-sm font-medium text-foreground">
          Currency
        </label>

        <select
          {...register("currency")}
          className="
            w-full
            rounded-xl
            border
            border-input
            bg-background
            px-4
            py-3
            text-foreground
            outline-none
            transition
            focus:border-primary
            focus:ring-4
            focus:ring-primary/10
          "
        >
          <option value="INR">INR (₹)</option>
          <option value="USD">USD ($)</option>
          <option value="EUR">EUR (€)</option>
          <option value="GBP">GBP (£)</option>
        </select>

        {errors.currency && (
          <p className="mt-1.5 text-sm text-red-500">
            {errors.currency.message}
          </p>
        )}
      </div>

      {/* Save */}
      <div className="flex justify-end border-t border-border pt-6">
        <button
          type="submit"
          disabled={updateProfile.isPending}
          className="
            rounded-xl
            bg-primary
            px-6
            py-3
            font-medium
            text-white
            shadow-sm
            transition-all
            hover:bg-emerald-700
            hover:shadow-md
            disabled:cursor-not-allowed
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

export default FinancialPreferences;