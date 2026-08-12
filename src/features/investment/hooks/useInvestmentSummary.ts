import { useQuery } from "@tanstack/react-query";
import { getInvestmentSummary } from "../services/investment.service";

export const useInvestmentSummary = () => {
  return useQuery({
    queryKey: ["investment-summary"],
    queryFn: getInvestmentSummary,
  });
};