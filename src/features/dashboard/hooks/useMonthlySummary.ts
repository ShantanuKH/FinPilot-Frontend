import { useQuery } from "@tanstack/react-query";

import { dashboardApi } from "../api/dashboard.api";

export const useMonthlySummary = () => {
  return useQuery({
    queryKey: ["monthly-summary"],
    queryFn: dashboardApi.getMonthlySummary,
  });
};