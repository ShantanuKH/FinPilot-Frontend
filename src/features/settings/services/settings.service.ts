import { apiClient } from "@/lib/axios";

import type {
  FinancialHealth,
  UpdateProfileRequest,
  UserProfile,
} from "../types/settings.types";

export const getProfile =
  async (): Promise<UserProfile> => {
    const { data } =
      await apiClient.get<UserProfile>(
        "/users/me"
      );

    return data;
  };

export const updateProfile =
  async (
    request: UpdateProfileRequest
  ): Promise<UserProfile> => {
    const { data } =
      await apiClient.put<UserProfile>(
        "/users/me",
        request
      );

    return data;
  };

export const getFinancialHealth =
  async (): Promise<FinancialHealth> => {
    const { data } =
      await apiClient.get<FinancialHealth>(
        "/profile/financial-health"
      );

    return data;
  };