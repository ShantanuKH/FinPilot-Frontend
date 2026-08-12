import { useQuery } from "@tanstack/react-query";

import { profileApi } from "../api/profileApi";

export const useFinancialHealth = () => {
  return useQuery({
    queryKey: ["financial-health"],

    queryFn: profileApi.getFinancialHealth,

    staleTime: 1000 * 60 * 5,
  });
};