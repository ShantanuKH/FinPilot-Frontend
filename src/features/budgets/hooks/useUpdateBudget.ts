import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { budgetApi } from "../api/budgetApi";

export const useUpdateBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: budgetApi.updateBudget,

    onSuccess: () => {
      toast.success("Budget updated successfully.");

      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });

      queryClient.invalidateQueries({
        queryKey: ["budget-analytics"],
      });
    },

    onError: () => {
      toast.error("Failed to update budget.");
    },
  });
};