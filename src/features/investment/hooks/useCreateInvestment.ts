import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { createInvestment } from "../services/investment.service";

export const useCreateInvestment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createInvestment,

    onSuccess: () => {
      toast.success("Investment created successfully.");

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
      toast.error("Failed to create investment.");
    },
  });
};