import {
  LayoutDashboard,
  Receipt,
  Wallet,
  TrendingUp,
  Sparkles,
  Bot,
  User,
  Settings,
} from "lucide-react";

export const navigationItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/dashboard",
  },
  {
    title: "Expenses",
    icon: Receipt,
    path: "/expenses",
  },
  {
    title: "Budgets",
    icon: Wallet,
    path: "/budgets",
  },
  {
    title: "Investments",
    icon: TrendingUp,
    path: "/investments",
  },
  {
    title: "Recommendations",
    icon: Sparkles,
    path: "/recommendations",
  },
  {
    title: "FinPilot AI",
    icon: Bot,
    path: "/ai",
  },
  
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];