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
    const status = error.response?.status;
    const requestUrl = error.config?.url ?? "";

    // =========================
    // Authentication APIs
    // =========================
    // 401 from login/register means the
    // authentication request itself failed.
    //
    // DO NOT treat it as session expiration.

    const isAuthRequest =
      requestUrl.includes("/auth/login") ||
      requestUrl.includes("/auth/register");

    // =========================
    // Session Expiration
    // =========================

    if (
      status === 401 &&
      !isAuthRequest &&
      !isSessionExpiredHandled
    ) {
      isSessionExpiredHandled = true;

      // Mark session as expired so LoginPage
      // can show the notification after redirect.
      sessionStorage.setItem(
        "sessionExpired",
        "true"
      );

      // Clear authentication state
      useAuthStore.getState().logout();

      // Redirect to login
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);