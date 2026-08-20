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
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Settings
        </h1>

        <p className="mt-2 text-sm text-muted-foreground">
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

        </div>
      </div>
    </div>
  );
};

export default SettingsPage;