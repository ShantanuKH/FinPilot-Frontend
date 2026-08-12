import { apiClient } from "@/lib/axios";

import type {
  FinancialHealth,
  Profile,
  UpdateProfileRequest,
} from "../types/profile.types";

export const profileApi = {
  getProfile: async (): Promise<Profile> => {
    const response = await apiClient.get("/profile");
    return response.data;
  },

  updateProfile: async (
    request: UpdateProfileRequest
  ): Promise<Profile> => {
    const response = await apiClient.put(
      "/profile/update",
      request
    );

    return response.data;
  },

  getFinancialHealth: async (): Promise<FinancialHealth> => {
    const response = await apiClient.get(
      "/profile/financial-health"
    );

    return response.data;
  },
};