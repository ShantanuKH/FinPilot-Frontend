import { z } from "zod";

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name is required"),

  lastName: z
    .string()
    .min(2, "Last name is required"),

  monthlyIncome: z
  .number()
  .positive("Monthly income must be greater than 0"),

 riskProfile: z.enum([
  "LOW",
  "MODERATE",
  "HIGH",
]),

  currency: z
    .string()
    .min(1, "Currency is required"),
});

export type ProfileFormData =
  z.infer<typeof profileSchema>;