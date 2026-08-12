import DashboardHero from "../components/DashboardHero/DashboardHero";
import SummaryCards from "../components/SummaryCards/SummaryCards";
import BudgetHealthCard from "../components/BudgetHealthCard/BudgetHealthCard";
import CategoryChart from "../components/CategoryChart/CategoryChart";
import CategoryLegend from "../components/CategoryChart/CategoryLegend";
import MonthlyChart from "../components/MonthlyChart/MonthlyChart";

import DashboardCard from "../components/shared/DashboardCard";
import DashboardSection from "../components/shared/DashboardSection";
import ChartContainer from "../components/shared/ChartContainer";

import { useDashboardSummary } from "../hooks/useDashboardSummary";
import { useBudgetHealth } from "../hooks/useBudgetHealth";
import { useCategoryBreakdown } from "../hooks/useCategoryBreakdown";
import { useMonthlySummary } from "../hooks/useMonthlySummary";

const DashboardPage = () => {
  const summary = useDashboardSummary();
  const budgetHealth = useBudgetHealth();
  const categoryBreakdown = useCategoryBreakdown();
  const monthlySummary = useMonthlySummary();

  const isLoading =
    summary.isLoading ||
    budgetHealth.isLoading ||
    categoryBreakdown.isLoading ||
    monthlySummary.isLoading;

  const isError =
    summary.isError ||
    budgetHealth.isError ||
    categoryBreakdown.isError ||
    monthlySummary.isError;

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-200 border-t-violet-600" />

          <p className="text-sm font-medium text-slate-500">
            Preparing your financial overview...
          </p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="rounded-2xl border border-red-100 bg-red-50 px-6 py-5 text-center">
          <p className="font-semibold text-red-700">
            Unable to load your dashboard
          </p>

          <p className="mt-1 text-sm text-red-500">
            Please refresh the page and try again.
          </p>
        </div>
      </div>
    );
  }

  if (
    !summary.data ||
    !budgetHealth.data ||
    !categoryBreakdown.data ||
    !monthlySummary.data
  ) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-slate-500">
          No dashboard data available.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-7">
      {/* =====================================================
          HERO
      ===================================================== */}
      <DashboardHero />

      {/* =====================================================
          FINANCIAL SUMMARY
      ===================================================== */}
      <SummaryCards summary={summary.data} />

      {/* =====================================================
          BUDGET HEALTH
      ===================================================== */}
      <DashboardSection
        title="Budget Health"
        description="A quick look at your income, spending and savings."
      >
        <DashboardCard>
          <BudgetHealthCard
            budgetHealth={budgetHealth.data}
          />
        </DashboardCard>
      </DashboardSection>

      {/* =====================================================
          ANALYTICS
      ===================================================== */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Category Breakdown */}
        <DashboardSection
          title="Category Breakdown"
          description="See where your money is going this month."
        >
          <DashboardCard className="h-full">
            <div className="grid h-full gap-6 lg:grid-cols-[1.05fr_0.95fr]">
              <ChartContainer>
                <CategoryChart
                  data={categoryBreakdown.data}
                />
              </ChartContainer>

              <CategoryLegend
                data={categoryBreakdown.data}
              />
            </div>
          </DashboardCard>
        </DashboardSection>

        {/* Monthly Expense Trend */}
        <DashboardSection
          title="Monthly Expense Trend"
          description="Track how your spending changes over time."
        >
          <DashboardCard className="h-full">
            <ChartContainer>
              <MonthlyChart
                data={monthlySummary.data}
              />
            </ChartContainer>
          </DashboardCard>
        </DashboardSection>
      </div>
    </div>
  );
};

export default DashboardPage;