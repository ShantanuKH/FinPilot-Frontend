import { useQuery } from "@tanstack/react-query";

import { getRiskAnalysis } from "../services/investment.service";

export const useRiskAnalysis = () => {
  return useQuery({
    queryKey: ["investment-risk"],
    queryFn: getRiskAnalysis,
  });
};