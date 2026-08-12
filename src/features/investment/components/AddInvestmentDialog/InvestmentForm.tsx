import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  investmentSchema,
  type InvestmentFormData,
} from "../../validation/investment.schema";

import { useCreateInvestment } from "../../hooks/useCreateInvestment";
import { useUpdateInvestment } from "../../hooks/useUpdateInvestment";

import type { Investment } from "../../types/investment.types";

interface Props {
  investment?: Investment;
  onSuccess: () => void;
}

const InvestmentForm = ({
  investment,
  onSuccess,
}: Props) => {
  const createInvestment =
    useCreateInvestment();

  const updateInvestment =
    useUpdateInvestment();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InvestmentFormData>({
    resolver: zodResolver(
      investmentSchema
    ),
    defaultValues: {
      name: "",
      amount: 0,
      investmentType: "STOCK",
      investmentDate: "",
    },
  });

  useEffect(() => {
    if (investment) {
      reset({
        name: investment.name,
        amount: investment.amount,
        investmentType:
          investment.investmentType,
        investmentDate:
          investment.investmentDate,
      });
    }
  }, [investment, reset]);

  const onSubmit = (
    data: InvestmentFormData
  ) => {
    if (investment) {
      updateInvestment.mutate(
        {
          id: investment.id,
          request: data,
        },
        {
          onSuccess: () => {
            reset();
            onSuccess();
          },
        }
      );
    } else {
      createInvestment.mutate(data, {
        onSuccess: () => {
          reset();
          onSuccess();
        },
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      {/* Investment Name */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Investment Name
        </label>

        <input
          {...register("name")}
          placeholder="Apple Inc."
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Amount */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Amount
        </label>

        <input
          type="number"
          {...register("amount", {
            valueAsNumber: true,
          })}
          placeholder="100000"
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        />

        {errors.amount && (
          <p className="mt-1 text-sm text-red-500">
            {errors.amount.message}
          </p>
        )}
      </div>

      {/* Investment Type */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Investment Type
        </label>

        <select
          {...register("investmentType")}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        >
          <option value="STOCK">Stock</option>
          <option value="MUTUAL_FUND">
            Mutual Fund
          </option>
          <option value="CRYPTO">
            Crypto
          </option>
          <option value="FIXED_DEPOSIT">
            Fixed Deposit
          </option>
          <option value="GOLD">Gold</option>
          <option value="REAL_ESTATE">
            Real Estate
          </option>
          <option value="OTHER">Other</option>
        </select>

        {errors.investmentType && (
          <p className="mt-1 text-sm text-red-500">
            {
              errors.investmentType
                .message
            }
          </p>
        )}
      </div>

      {/* Investment Date */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Investment Date
        </label>

        <input
          type="date"
          {...register("investmentDate")}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-emerald-500"
        />

        {errors.investmentDate && (
          <p className="mt-1 text-sm text-red-500">
            {
              errors.investmentDate
                .message
            }
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onSuccess}
          className="rounded-xl border border-slate-200 px-5 py-2.5 font-medium hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={
            createInvestment.isPending ||
            updateInvestment.isPending
          }
          className="rounded-xl bg-emerald-600 px-5 py-2.5 font-medium text-white transition hover:bg-emerald-700 disabled:opacity-50"
        >
          {createInvestment.isPending ||
          updateInvestment.isPending
            ? "Saving..."
            : investment
            ? "Update Investment"
            : "Create Investment"}
        </button>
      </div>
    </form>
  );
};

export default InvestmentForm;