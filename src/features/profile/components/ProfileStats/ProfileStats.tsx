import {
  Wallet,
  TrendingDown,
  PiggyBank,
  ShieldCheck,
} from "lucide-react";

import type { FinancialHealth } from "../../types/profile.types";

import ProfileStatCard from "./ProfileStatCard";

interface Props {
  financialHealth: FinancialHealth;
}

const ProfileStats = ({
  financialHealth,
}: Props) => {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      <ProfileStatCard
        title="Monthly Income"
        value={`₹${financialHealth.monthlyIncome.toLocaleString()}`}
        icon={Wallet}
      />

      <ProfileStatCard
        title="Total Expenses"
        value={`₹${financialHealth.totalExpenses.toLocaleString()}`}
        icon={TrendingDown}
        iconBgColor="bg-red-100"
        iconColor="text-red-600"
      />

      <ProfileStatCard
        title="Monthly Savings"
        value={`₹${financialHealth.monthlySavings.toLocaleString()}`}
        icon={PiggyBank}
        iconBgColor="bg-blue-100"
        iconColor="text-blue-600"
      />

      <ProfileStatCard
        title="Financial Health"
        value={financialHealth.status.replace("_", " ")}
        icon={ShieldCheck}
        iconBgColor="bg-purple-100"
        iconColor="text-primary"
      />

    </section>
  );
};

export default ProfileStats;