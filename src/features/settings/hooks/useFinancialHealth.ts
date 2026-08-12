import { useQuery } from "@tanstack/react-query";

import { getFinancialHealth } from "../services/settings.service";

export const useFinancialHealth = () => {
  return useQuery({
    queryKey: ["financial-health"],
    queryFn: getFinancialHealth,
  });
};