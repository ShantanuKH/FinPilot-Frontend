import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import type { Budget } from "../../types/budget.types";
import {
  budgetSchema,
  type BudgetFormData,
} from "../../validation/budget.schema";

import { useCreateBudget } from "../../hooks/useCreateBudget";
import { useUpdateBudget } from "../../hooks/useUpdateBudget";

interface Props {
  budget?: Budget;
  onSuccess: () => void;
}

const BudgetForm = ({
  budget,
  onSuccess,
}: Props) => {
  const createBudget = useCreateBudget();
  const updateBudget = useUpdateBudget();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BudgetFormData>({
    resolver: zodResolver(budgetSchema),
    defaultValues: {
      category: budget?.category ?? "FOOD",
      budgetAmount: budget?.budgetAmount ?? 0,
      month: budget?.month ?? "",
    },
  });

  useEffect(() => {
    reset({
      category: budget?.category ?? "FOOD",
      budgetAmount: budget?.budgetAmount ?? 0,
      month: budget?.month ?? "",
    });
  }, [budget, reset]);

  const onSubmit = (data: BudgetFormData) => {
    if (budget) {
      updateBudget.mutate(
        {
          id: budget.id,
          request: data,
        },
        {
          onSuccess: () => {
            onSuccess();
          },
        }
      );
    } else {
      createBudget.mutate(data, {
        onSuccess: () => {
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
      {/* Category */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Category
        </label>

        <select
          {...register("category")}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        >
          <option value="FOOD">Food</option>
          <option value="TRANSPORT">
            Transport
          </option>
          <option value="SHOPPING">
            Shopping
          </option>
          <option value="ENTERTAINMENT">
            Entertainment
          </option>
          <option value="HEALTHCARE">
            Healthcare
          </option>
          <option value="UTILITIES">
            Utilities
          </option>
          <option value="OTHER">Other</option>
        </select>

        {errors.category && (
          <p className="mt-1 text-sm text-red-500">
            {errors.category.message}
          </p>
        )}
      </div>

      {/* Budget Amount */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Budget Amount
        </label>

        <input
          type="number"
          placeholder="10000"
          {...register("budgetAmount", {
            valueAsNumber: true,
          })}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        {errors.budgetAmount && (
          <p className="mt-1 text-sm text-red-500">
            {errors.budgetAmount.message}
          </p>
        )}
      </div>

      {/* Month */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Month
        </label>

        <input
          type="month"
          {...register("month")}
          className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-blue-500"
        />

        {errors.month && (
          <p className="mt-1 text-sm text-red-500">
            {errors.month.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <button
          type="button"
          onClick={onSuccess}
          className="rounded-xl border border-slate-200 px-5 py-2.5 font-medium transition hover:bg-slate-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={
            createBudget.isPending ||
            updateBudget.isPending
          }
          className="rounded-xl bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {budget
            ? updateBudget.isPending
              ? "Updating..."
              : "Update Budget"
            : createBudget.isPending
            ? "Creating..."
            : "Create Budget"}
        </button>
      </div>
    </form>
  );
};

export default BudgetForm;