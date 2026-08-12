import SettingsSidebar from "../components/SettingsSidebar/SettingsSidebar";
import SettingsSection from "../components/SettingsSection/SettingsSection";
import ProfileSection from "../components/ProfileSection/ProfileSection";
import FinancialPreferences from "../components/FinancialPreferences/FinancialPreferences";
import FinancialHealth from "../components/FinancialHealth/FinancialHealth";

const SettingsPage = () => {
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Settings
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Manage your account, financial preferences,
          and application experience.
        </p>
      </div>

      {/* Settings Layout */}
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <SettingsSidebar />

        {/* Content */}
        <div className="min-w-0 space-y-8">
          {/* Profile */}
          <SettingsSection
            id="profile"
            title="Profile"
            description="Manage your personal information."
          >
            <ProfileSection />
          </SettingsSection>

          {/* Financial Preferences */}
          <SettingsSection
            id="financial-preferences"
            title="Financial Preferences"
            description="Configure your financial settings."
          >
            <FinancialPreferences />
          </SettingsSection>

          {/* Financial Health */}
          <SettingsSection
            id="financial-health"
            title="Financial Health"
            description="Track your current financial wellness and savings performance."
          >
            <FinancialHealth />
          </SettingsSection>

          {/* Security */}
          <SettingsSection
            id="security"
            title="Security"
            description="Manage your account security and authentication."
          >
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
              <p className="font-medium text-slate-700">
                Security settings coming soon.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Password and authentication controls will be available here.
              </p>
            </div>
          </SettingsSection>

          {/* Appearance */}
          <SettingsSection
            id="appearance"
            title="Appearance"
            description="Customize your FinPilot experience."
          >
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
              <p className="font-medium text-slate-700">
                Appearance settings coming soon.
              </p>

              <p className="mt-1 text-sm text-slate-500">
                Theme and interface preferences will be available here.
              </p>
            </div>
          </SettingsSection>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;