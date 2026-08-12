import { useEffect } from "react";
import {
  Navigate,
  Outlet,
  useLocation,
} from "react-router-dom";
import toast from "react-hot-toast";

import { useAuthStore } from "@/store/authStore";

const ProtectedRoute = () => {
  const { isAuthenticated } =
    useAuthStore();

  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error("Login required", {
        duration: 3000,
      });
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        replace
        state={{
          from: location.pathname,
        }}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;