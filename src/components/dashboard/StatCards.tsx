import {
  Wallet,
  IndianRupee,
  TrendingUp,
  PiggyBank,
} from "lucide-react";

import StatCard from "./StatCard";

const StatCards = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        title="Total Balance"
        value="₹2,34,500"
        icon={Wallet}
        change="+12.5% this month"
      />

      <StatCard
        title="Income"
        value="₹85,000"
        icon={IndianRupee}
        change="+8.4% this month"
      />

      <StatCard
        title="Expenses"
        value="₹48,000"
        icon={TrendingUp}
        change="-3.2% this month"
        positive={false}
      />

      <StatCard
        title="Savings"
        value="₹37,000"
        icon={PiggyBank}
        change="+18.6% this month"
      />
    </section>
  );
};

export default StatCards;