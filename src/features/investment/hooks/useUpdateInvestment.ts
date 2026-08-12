import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateInvestment } from "../services/investment.service";

export const useUpdateInvestment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      request,
    }: {
      id: number;
      request: Parameters<typeof updateInvestment>[1];
    }) => updateInvestment(id, request),

    onSuccess: () => {
      toast.success("Investment updated successfully.");

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
      toast.error("Failed to update investment.");
    },
  });
};