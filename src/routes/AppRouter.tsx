import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

// Layouts
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

// Route Guards
import ProtectedRoute from "@/routes/ProtectedRoute";

// Auth Pages
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";

// Dashboard
import DashboardPage from "@/features/dashboard/pages/DashboardPage";

// Expenses
import ExpensePage from "@/features/expenses/page/ExpensePage";

// Budgets
import BudgetPage from "@/features/budgets/page/BudgetPage";

// Investments
import InvestmentPage from "@/features/investment/page/InvestmentPage";

// Recommendations
import RecommendationPage from "@/features/recommendations/page/RecommendationPage";

// AI
import AiPage from "@/features/ai/page/AiPage";

// Settings
import SettingsPage from "@/features/settings/pages/SettingsPage";

// Common Pages
import NotFoundPage from "@/pages/NotFoundPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect Root */}
        <Route
          path="/"
          element={
            <Navigate
              to="/dashboard"
              replace
            />
          }
        />

        {/* ================= Public Routes ================= */}
        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={<LoginPage />}
          />

          <Route
            path="/register"
            element={<RegisterPage />}
          />
        </Route>

        {/* ================= Protected Routes ================= */}
        <Route element={<ProtectedRoute />}>
          <Route
            element={<DashboardLayout />}
          >
            {/* Dashboard */}
            <Route
              path="/dashboard"
              element={<DashboardPage />}
            />

            {/* Expenses */}
            <Route
              path="/expenses"
              element={<ExpensePage />}
            />

            {/* Budgets */}
            <Route
              path="/budgets"
              element={<BudgetPage />}
            />

            {/* Investments */}
            <Route
              path="/investments"
              element={
                <InvestmentPage />
              }
            />

            {/* Recommendations */}
            <Route
              path="/recommendations"
              element={
                <RecommendationPage />
              }
            />

            {/* AI */}
            <Route
              path="/ai"
              element={<AiPage />}
            />

            {/* Settings */}
            <Route
              path="/settings"
              element={
                <SettingsPage />
              }
            />
          </Route>
        </Route>

        {/* ================= 404 ================= */}
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;