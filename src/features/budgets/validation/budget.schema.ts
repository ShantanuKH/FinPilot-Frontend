import { z } from "zod";

export const budgetSchema = z.object({
  category: z.enum([
    "FOOD",
    "TRANSPORT",
    "SHOPPING",
    "ENTERTAINMENT",
    "HEALTHCARE",
    "UTILITIES",
    "OTHER",
  ]),

  budgetAmount: z
    .number()
    .positive("Budget amount must be greater than 0"),

  month: z
    .string()
    .min(1, "Month is required"),
});

export type BudgetFormData = z.infer<
  typeof budgetSchema
>;