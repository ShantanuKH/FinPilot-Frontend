import { create } from "zustand";

interface User {
  firstName: string;
  lastName: string;
}

interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;

  login: (
    token: string,
    user: User
  ) => void;

  logout: () => void;
}

export const useAuthStore =
  create<AuthState>((set) => ({

    token: localStorage.getItem("token"),

    user: (() => {
      const storedUser =
        localStorage.getItem("user");

      if (!storedUser) {
        return null;
      }

      try {
        return JSON.parse(storedUser);
      } catch {
        return null;
      }
    })(),

    isAuthenticated:
      !!localStorage.getItem("token"),

    // =====================================
    // Login / Registration
    // =====================================

    login: (token, user) => {

      localStorage.setItem(
        "token",
        token
      );

      localStorage.setItem(
        "user",
        JSON.stringify(user)
      );

      // Clear previous session-expired state
      sessionStorage.removeItem(
        "sessionExpired"
      );

      set({
        token,
        user,
        isAuthenticated: true,
      });
    },

    // =====================================
    // Logout
    // =====================================

    logout: () => {

      localStorage.removeItem(
        "token"
      );

      localStorage.removeItem(
        "user"
      );

      set({
        token: null,
        user: null,
        isAuthenticated: false,
      });
    },
  }));