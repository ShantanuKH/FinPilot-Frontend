import { z } from "zod";
import type { ExpenseCategory } from "../types/expense.types";

const expenseCategories = [
  "FOOD",
  "TRANSPORT",
  "SHOPPING",
  "ENTERTAINMENT",
  "HEALTH",
  "BILLS",
  "EDUCATION",
  "TRAVEL",
  "OTHER",
] as const;

export const expenseSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters")
    .max(50, "Title cannot exceed 50 characters"),

  amount: z
    .number({
      error: "Amount is required",
    })
    .positive("Amount must be greater than 0"),

  category: z.enum(expenseCategories),

  expenseDate: z.string().min(1, "Expense date is required"),

  description: z
    .string()
    .max(255)
    .optional(),
});

export type ExpenseFormData = {
  title: string;
  amount: number;
  category: ExpenseCategory;
  expenseDate: string;
  description?: string;
};