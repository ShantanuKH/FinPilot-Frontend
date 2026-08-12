import {
  BadgeDollarSign,
  CircleDollarSign,
  Shield,
} from "lucide-react";

import DashboardCard from "@/features/dashboard/components/shared/DashboardCard";

import type { Profile } from "../../types/profile.types";

interface Props {
  profile: Profile;
}

const FinancialPreferences = ({
  profile,
}: Props) => {
  return (
    <DashboardCard>
      <div className="space-y-6">

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Financial Preferences
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your financial settings and investment preferences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-emerald-100 p-3">
              <BadgeDollarSign
                size={20}
                className="text-emerald-600"
              />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Monthly Income
              </p>

              <p className="font-semibold text-slate-900">
                ₹{profile.monthlyIncome.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-orange-100 p-3">
              <Shield
                size={20}
                className="text-orange-600"
              />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Risk Profile
              </p>

              <p className="font-semibold text-slate-900">
                {profile.riskProfile}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-100 p-3">
              <CircleDollarSign
                size={20}
                className="text-blue-600"
              />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Currency
              </p>

              <p className="font-semibold text-slate-900">
                {profile.currency}
              </p>
            </div>
          </div>

        </div>

      </div>
    </DashboardCard>
  );
};

export default FinancialPreferences;