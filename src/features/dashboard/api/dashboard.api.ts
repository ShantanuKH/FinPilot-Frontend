import { apiClient } from "@/lib/axios";
import type {
  DashboardSummary,
  BudgetHealth,
  CategoryBreakdown,
  MonthlySummary,
} from "../types/dashboard.types";

export const dashboardApi = {
  getSummary: async (): Promise<DashboardSummary> => {
    const response = await apiClient.get("/dashboard/summary");
    return response.data;
  },

  getBudgetHealth: async (): Promise<BudgetHealth> => {
    const response = await apiClient.get("/dashboard/budget-health");
    return response.data;
  },

  getCategoryBreakdown: async (): Promise<CategoryBreakdown[]> => {
    const response = await apiClient.get("/dashboard/category-breakdown");
    return response.data;
  },

  getMonthlySummary: async (): Promise<MonthlySummary[]> => {
    const response = await apiClient.get("/dashboard/monthly-summary");
    return response.data;
  },
};