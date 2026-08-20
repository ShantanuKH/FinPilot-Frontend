import {
  Mail,
  User,
} from "lucide-react";

import DashboardCard from "@/features/dashboard/components/shared/DashboardCard";

import type { Profile } from "../../types/profile.types";

interface Props {
  profile: Profile;
}

const PersonalInformation = ({
  profile,
}: Props) => {
  return (
    <DashboardCard>
      <div className="space-y-6">

        <div>
          <h2 className="text-xl font-semibold text-slate-900">
            Personal Information
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Basic information associated with your account.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-emerald-100 p-3">
              <User
                size={20}
                className="text-emerald-600"
              />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                First Name
              </p>

              <p className="font-semibold text-slate-900">
                {profile.firstName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-blue-100 p-3">
              <User
                size={20}
                className="text-blue-600"
              />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Last Name
              </p>

              <p className="font-semibold text-slate-900">
                {profile.lastName}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 md:col-span-2">
            <div className="rounded-xl bg-purple-100 p-3">
              <Mail
                size={20}
                className="text-primary"
              />
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Email Address
              </p>

              <p className="font-semibold text-slate-900">
                {profile.email}
              </p>
            </div>
          </div>

        </div>

      </div>
    </DashboardCard>
  );
};

export default PersonalInformation;