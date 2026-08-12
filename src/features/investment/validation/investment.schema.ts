import { z } from "zod";

export const investmentSchema = z.object({
  name: z
    .string()
    .min(1, "Investment name is required"),

  amount: z
    .number()
    .positive("Amount must be greater than 0"),

  investmentType: z.enum([
    "STOCK",
    "MUTUAL_FUND",
    "CRYPTO",
    "FIXED_DEPOSIT",
    "GOLD",
    "REAL_ESTATE",
    "OTHER",
  ]),

  investmentDate: z
    .string()
    .min(1, "Investment date is required"),
});

export type InvestmentFormData =
  z.infer<typeof investmentSchema>;