import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { expenseApi } from "../api/expenseApi";
import type { UpdateExpenseRequest } from "../types/expense.types";

interface UpdateExpensePayload {
  id: number;
  request: UpdateExpenseRequest;
}

export const useUpdateExpense = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, request }: UpdateExpensePayload) =>
      expenseApi.updateExpense(id, request),

    onSuccess: () => {
      toast.success("Expense updated successfully!");

      queryClient.invalidateQueries({
        queryKey: ["expenses"],
      });
    },

    onError: () => {
      toast.error("Failed to update expense");
    },
  });
};