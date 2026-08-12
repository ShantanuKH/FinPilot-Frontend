import { useEffect } from "react";
import LoginForm from "@/features/auth/components/LoginForm";
import { notify } from "@/utils/toast";

const LoginPage = () => {
  useEffect(() => {
    const sessionExpired = sessionStorage.getItem("sessionExpired");

    if (sessionExpired === "true") {
      notify.error(
        "Session expired. Please log in again to continue managing your finances."
      );

      sessionStorage.removeItem("sessionExpired");
    }
  }, []);

  return <LoginForm />;
};

export default LoginPage;