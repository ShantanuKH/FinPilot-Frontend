import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import toast from "react-hot-toast";


import { profileApi } from "../api/profileApi";

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

 return useMutation({
  mutationFn: profileApi.updateProfile,

  onSuccess: () => {
    toast.success("Profile updated successfully!");

    queryClient.invalidateQueries({
      queryKey: ["profile"],
    });

    queryClient.invalidateQueries({
      queryKey: ["financial-health"],
    });

    queryClient.invalidateQueries({
      queryKey: ["dashboard-summary"],
    });

    queryClient.invalidateQueries({
      queryKey: ["budget-health"],
    });
  },

  onError: () => {
    toast.error("Failed to update profile.");
  },
});
};