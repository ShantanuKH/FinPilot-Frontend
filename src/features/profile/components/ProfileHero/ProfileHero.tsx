import { UserCircle2 } from "lucide-react";

interface Props {
  firstName: string;
}

const ProfileHero = ({
  firstName,
}: Props) => {
  return (
    <section className="flex items-center gap-5">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
        <UserCircle2
          size={48}
          className="text-emerald-600"
        />
      </div>

      <div>
        <h1 className="text-4xl font-bold text-slate-900">
          {firstName}
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your account and financial preferences.
        </p>
      </div>
    </section>
  );
};

export default ProfileHero;