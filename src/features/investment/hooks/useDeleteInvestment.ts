import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { deleteInvestment } from "../services/investment.service";

export const useDeleteInvestment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteInvestment,

    onSuccess: () => {
      toast.success("Investment deleted successfully.");

      queryClient.invalidateQueries({
        queryKey: ["investments"],
      });

      queryClient.invalidateQueries({
        queryKey: ["investment-summary"],
      });

      queryClient.invalidateQueries({
        queryKey: ["portfolio-allocation"],
      });

      queryClient.invalidateQueries({
        queryKey: ["investment-risk"],
      });
    },

    onError: () => {
      toast.error("Failed to delete investment.");
    },
  });
};