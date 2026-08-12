import { useQuery } from "@tanstack/react-query";

import { dashboardApi } from "../api/dashboard.api";

export const useCategoryBreakdown = () => {
  return useQuery({
    queryKey: ["category-breakdown"],
    queryFn: dashboardApi.getCategoryBreakdown,
  });
};