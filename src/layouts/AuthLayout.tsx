import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="flex min-h-screen items-center justify-center p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;