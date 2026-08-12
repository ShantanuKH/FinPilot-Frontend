import { useQuery } from "@tanstack/react-query";

import { budgetApi } from "../api/budgetApi";

export const useBudgetAnalytics = () =>
  useQuery({
    queryKey: ["budget-analytics"],
    queryFn: budgetApi.getBudgetAnalytics,
  });