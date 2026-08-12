import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { expenseApi } from "../api/expenseApi";
import type { CreateExpenseRequest } from "../types/expense.types";

export const useCreateExpense = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (request: CreateExpenseRequest) =>
      expenseApi.createExpense(request),

    onSuccess: () => {
      toast.success("Expense added successfully!");

      queryClient.invalidateQueries({
        queryKey: ["expenses"],
      });
    },

    onError: () => {
      toast.error("Failed to add expense");
    },
  });
};