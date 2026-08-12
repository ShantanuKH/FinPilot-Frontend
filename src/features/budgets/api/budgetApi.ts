import { apiClient } from "@/lib/axios";

import type {
  Budget,
  BudgetAnalytics,
  CreateBudgetRequest,
  UpdateBudgetRequest,
} from "../types/budget.types";

export const budgetApi = {
  getBudgets: async (): Promise<Budget[]> => {
    const response = await apiClient.get("/budgets");
    return response.data;
  },

  getBudgetAnalytics: async (): Promise<
    BudgetAnalytics[]
  > => {
    const response = await apiClient.get(
      "/budgets/analytics"
    );

    return response.data;
  },

  createBudget: async (
    request: CreateBudgetRequest
  ): Promise<Budget> => {
    const response = await apiClient.post(
      "/budgets",
      request
    );

    return response.data;
  },

  updateBudget: async ({
    id,
    request,
  }: {
    id: number;
    request: UpdateBudgetRequest;
  }): Promise<Budget> => {
    const response = await apiClient.put(
      `/budgets/${id}`,
      request
    );

    return response.data;
  },

  deleteBudget: async (
    id: number
  ): Promise<void> => {
    await apiClient.delete(`/budgets/${id}`);
  },
};