import { apiClient } from "@/lib/axios";

import type { RecommendationResponse } from "../types/recommendation.types";

export const getRecommendations =
  async () => {
    const { data } =
      await apiClient.get<RecommendationResponse>(
        "/recommendations"
      );

    return data;
  };