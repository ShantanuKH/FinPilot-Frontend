import { useQuery } from "@tanstack/react-query";

import { getRecommendations } from "../services/recommendation.service";

export const useRecommendations =
  () => {
    return useQuery({
      queryKey: ["recommendations"],
      queryFn: getRecommendations,
    });
  };