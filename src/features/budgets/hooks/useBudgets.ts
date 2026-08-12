import { useQuery } from "@tanstack/react-query";

import { budgetApi } from "../api/budgetApi";

export const useBudgets = () =>
  useQuery({
    queryKey: ["budgets"],
    queryFn: budgetApi.getBudgets,
  });