import { useQuery } from "@tanstack/react-query";

import { getPortfolioAllocation } from "../services/investment.service";

export const usePortfolioAllocation = () => {
  return useQuery({
    queryKey: ["portfolio-allocation"],
    queryFn: getPortfolioAllocation,
  });
};