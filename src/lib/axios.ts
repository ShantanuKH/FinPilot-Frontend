import axios from "axios";
import { useAuthStore } from "@/store/authStore";

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// =========================
// Request Interceptor
// =========================

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    // Don't send JWT for public authentication APIs
    const isAuthRequest =
      config.url?.includes("/auth/login") ||
      config.url?.includes("/auth/register");

    if (token && !isAuthRequest) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

// =========================
// Response Interceptor
// =========================

let isSessionExpiredHandled = false;

apiClient.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401 && !isSessionExpiredHandled) {
      isSessionExpiredHandled = true;

      // Mark that the session expired so the login page
      // can show the notification after the redirect.
      sessionStorage.setItem("sessionExpired", "true");

      // Clear authentication state
      useAuthStore.getState().logout();

      // Redirect to login
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);