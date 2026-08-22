import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

import { authApi } from "../api/auth.api";
import { useAuthStore } from "@/store/authStore";

export const useRegister = () => {
  const navigate = useNavigate();

  const login = useAuthStore(
    (state) => state.login
  );

  return useMutation({
    mutationFn: authApi.register,

    onSuccess: (response) => {
      // Store JWT + user information
      login(
        response.token,
        {
          firstName: response.firstName,
          lastName: response.lastName,
        }
      );

      // Directly enter the application
      navigate("/dashboard", {
        replace: true,
      });
    },
  });
};