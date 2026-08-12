import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  expenseSchema,
  type ExpenseFormData,
} from "../../schema/expense.schema";

import type { ExpenseCategory } from "../../types/expense.types";

interface ExpenseFormProps {
  defaultValues?: Partial<ExpenseFormData>;
  isSubmitting?: boolean;
  onSubmit: (data: ExpenseFormData) => void;
}

const categories: ExpenseCategory[] = [
  "FOOD",
  "TRANSPORT",
  "SHOPPING",
  "BILLS",
  "HEALTH",
  "ENTERTAINMENT",
  "OTHER",
];

const ExpenseForm = ({
  defaultValues,
  isSubmitting = false,
  onSubmit,
}: ExpenseFormProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(expenseSchema),

    defaultValues: {
      title: "",
      amount: 0,
      category: "FOOD",
      expenseDate: new Date().toISOString().split("T")[0],
      description: "",
      ...defaultValues,
    },
  });

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      {/* Title */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Title
        </label>

        <input
          {...register("title")}
          placeholder="Enter expense title"
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
          "
        />

        {errors.title && (
          <p className="mt-2 text-sm text-red-500">
            {errors.title.message}
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
          step="0.01"
          {...register("amount", {
            valueAsNumber: true,
          })}
          placeholder="0.00"
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
          "
        />

        {errors.amount && (
          <p className="mt-2 text-sm text-red-500">
            {errors.amount.message}
          </p>
        )}
      </div>

      {/* Category */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Category
        </label>

        <select
          {...register("category")}
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
          "
        >
          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}
        </select>

        {errors.category && (
          <p className="mt-2 text-sm text-red-500">
            {errors.category.message}
          </p>
        )}
      </div>

      {/* Expense Date */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Expense Date
        </label>

        <input
          type="date"
          {...register("expenseDate")}
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
          "
        />

        {errors.expenseDate && (
          <p className="mt-2 text-sm text-red-500">
            {errors.expenseDate.message}
          </p>
        )}
      </div>

      {/* Description */}
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-700">
          Description
        </label>

        <textarea
          rows={4}
          {...register("description")}
          placeholder="Optional description"
          className="
            w-full
            rounded-xl
            border
            border-slate-300
            px-4
            py-3
            outline-none
            transition
            focus:border-indigo-500
            focus:ring-4
            focus:ring-indigo-100
          "
        />

        {errors.description && (
          <p className="mt-2 text-sm text-red-500">
            {errors.description.message}
          </p>
        )}
      </div>

      {/* Buttons */}
      <div className="flex justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className="
            rounded-xl
            bg-indigo-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-indigo-700
            disabled:cursor-not-allowed
            disabled:opacity-50
          "
        >
          {isSubmitting
            ? "Saving..."
            : "Save Expense"}
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;