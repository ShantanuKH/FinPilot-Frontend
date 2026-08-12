import { useQuery } from "@tanstack/react-query";

import { expenseApi } from "../api/expenseApi";
import type { ExpenseCategory } from "../types/expense.types";

interface UseExpensesParams {
  page?: number;
  size?: number;
  search?: string;
  category?: ExpenseCategory;
  sort?: string;
}

export const useExpenses = ({
  page = 0,
  size = 10,
  search,
  category,
  sort,
}: UseExpensesParams = {}) => {
 return useQuery({
  queryKey: [
    "expenses",
    page,
    size,
    search,
    category,
    sort,
  ],

  queryFn: () =>
    expenseApi.getExpenses({
      page,
      size,
      search,
      category,
      sort,
    }),

  staleTime: 1000 * 60 * 5,

  placeholderData: (previousData) => previousData,
})};