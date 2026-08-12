import { useQuery } from "@tanstack/react-query";

import { getProfile } from "../services/settings.service";

export const useProfile = () => {
  return useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
};