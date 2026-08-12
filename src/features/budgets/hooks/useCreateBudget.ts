import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { budgetApi } from "../api/budgetApi";

    import axios from "axios";

export const useCreateBudget = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: budgetApi.createBudget,

    onSuccess: () => {
      toast.success("Budget created successfully.");

      queryClient.invalidateQueries({
        queryKey: ["budgets"],
      });

      queryClient.invalidateQueries({
        queryKey: ["budget-analytics"],
      });
    },


onError: (error) => {
  if (axios.isAxiosError(error)) {
    toast.error(
      error.response?.data?.message ??
      "Failed to create budget."
    );
  } else {
    toast.error("Failed to create budget.");
  }
}
  });
};