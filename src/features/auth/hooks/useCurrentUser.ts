import { useAuthStore } from "@/store/authStore";

export interface CurrentUser {
  firstName: string;
  lastName: string;
  email: string;
}

export const useCurrentUser = (): CurrentUser | null => {
  return useAuthStore(
    (state) => state.user
  );
};