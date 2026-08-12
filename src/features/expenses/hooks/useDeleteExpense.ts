import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { expenseApi } from "../api/expenseApi";

export const useDeleteExpense = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => expenseApi.deleteExpense(id),

    onSuccess: () => {
      toast.success("Expense deleted successfully!");

      queryClient.invalidateQueries({
        queryKey: ["expenses"],
      });
    },

    onError: () => {
      toast.error("Failed to delete expense");
    },
  });
};