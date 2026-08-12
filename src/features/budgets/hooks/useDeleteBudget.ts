import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { budgetApi } from "../api/budgetApi";

export const useDeleteBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: budgetApi.deleteBudget,

    onSuccess: () => {
      toast.success("Budget deleted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });

      queryClient.invalidateQueries({
        queryKey: ["budget-analytics"],
      });
    },

    onError: () => {
      toast.error("Failed to delete budget.");
    },
  });
};