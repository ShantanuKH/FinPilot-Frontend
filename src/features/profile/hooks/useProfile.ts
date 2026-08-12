import { useQuery } from "@tanstack/react-query";

import { profileApi } from "../api/profileApi";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],

    queryFn: profileApi.getProfile,

    staleTime: 1000 * 60 * 5,
  });
};