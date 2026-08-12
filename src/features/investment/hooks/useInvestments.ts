import { useQuery } from "@tanstack/react-query";

import { getInvestments } from "../services/investment.service";

export const useInvestments = () => {
  return useQuery({
    queryKey: ["investments"],
    queryFn: getInvestments,
  });
};