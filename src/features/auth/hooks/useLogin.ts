import { useMutation } from "@tanstack/react-query";

import { authApi } from "../api/auth.api";
import { useAuthStore } from "@/store/authStore";


export const useLogin = () => {
  const login = useAuthStore(
    (state) => state.login
  );

  return useMutation({
    mutationFn: authApi.login,

    onSuccess: (response) => {
      login(
        response.token,
        {
          firstName: response.firstName,
          lastName: response.lastName,
        }
      );
    },
  });
};