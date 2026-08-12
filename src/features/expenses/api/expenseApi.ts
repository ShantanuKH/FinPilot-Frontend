import { apiClient } from "@/lib/axios";

import type {
  Expense,
  PagedResponse,
  CreateExpenseRequest,
  UpdateExpenseRequest,
  ExpenseCategory,
} from "../types/expense.types";

interface GetExpensesParams {
  page?: number;
  size?: number;
  search?: string;
  category?: ExpenseCategory;
  sort?: string;
}

export const expenseApi = {
  getExpenses: async (
    params?: GetExpensesParams
  ): Promise<PagedResponse<Expense>> => {
    const response = await apiClient.get("/expenses", {
      params,
    });

    return response.data;
  },

  createExpense: async (
    request: CreateExpenseRequest
  ): Promise<Expense> => {
    const response = await apiClient.post(
      "/expenses",
      request
    );

    return response.data;
  },

  updateExpense: async (
    id: number,
    request: UpdateExpenseRequest
  ): Promise<Expense> => {
    const response = await apiClient.put(
      `/expenses/${id}`,
      request
    );

    return response.data;
  },

  deleteExpense: async (
    id: number
  ): Promise<string> => {
    const response = await apiClient.delete(
      `/expenses/${id}`
    );

    return response.data;
  },
};