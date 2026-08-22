import { useAuthStore } from "@/store/authStore";

export interface CurrentUser {
  firstName: string;
  lastName: string;
}

export const useCurrentUser = (): CurrentUser | null => {
  return useAuthStore(
    (state) => state.user
  );
};