import { useQuery } from "@tanstack/react-query";
import { dashboardApi } from "../api/dashboard.api";

export const useBudgetHealth = () =>
  useQuery({
    queryKey: ["budget-health"],
    queryFn: dashboardApi.getBudgetHealth,
  });