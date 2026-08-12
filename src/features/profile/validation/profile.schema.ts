import { z } from "zod";

export const profileSchema = z.object({
 monthlyIncome: z
  .number()
  .positive("Monthly income must be greater than 0"),

  riskProfile: z.enum([
    "LOW",
    "MEDIUM",
    "HIGH",
  ]),

  currency: z
    .string()
    .min(1, "Currency is required"),
});

export type ProfileFormData = z.infer<
  typeof profileSchema
>;