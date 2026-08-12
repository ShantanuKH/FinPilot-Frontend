import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

import { updateProfile } from "../services/settings.service";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["profile"],
      });

      queryClient.invalidateQueries({
        queryKey: ["financial-health"],
      });

      toast.success(
        "Account settings updated successfully!"
      );
    },

    onError: () => {
      toast.error(
        "Failed to update account settings."
      );
    },
  });
};