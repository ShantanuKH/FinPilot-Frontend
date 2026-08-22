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

import {
  ArrowRight,
  Plus,
  Sparkles,
  WalletCards,
} from "lucide-react";

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

  /*
   * Loading state
   */
  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-border border-t-primary" />

          <p className="text-sm font-medium text-muted-foreground">
            Preparing your financial overview...
          </p>
        </div>
      </div>
    );
  }

  /*
   * Actual API/server error
   *
   * This should ONLY appear when the request itself failed.
   */
  if (isError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <div className="max-w-md rounded-3xl border border-destructive/20 bg-destructive/5 px-8 py-7 text-center">
          <p className="font-semibold text-destructive">
            Unable to load your dashboard
          </p>

          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            We couldn't retrieve your financial information right now.
            Please try again in a moment.
          </p>
        </div>
      </div>
    );
  }

  /*
   * Safely fall back to empty dashboard values.
   *
   * A new user is allowed to have no financial data.
   */
  const dashboardSummary = summary.data ?? {
    totalExpenses: 0,
    expenseCount: 0,
    highestExpense: 0,
    averageExpense: 0,
  };

  const dashboardBudgetHealth = budgetHealth.data ?? {
    monthlyIncome: 0,
    totalExpenses: 0,
    remainingAmount: 0,
    savingRate: 0,
  };

  const dashboardCategories = categoryBreakdown.data ?? [];
  const dashboardMonthlySummary = monthlySummary.data ?? [];

  const isNewUser =
    dashboardSummary.expenseCount === 0 &&
    dashboardSummary.totalExpenses === 0 &&
    dashboardCategories.length === 0;

  return (
    <div className="space-y-7">
      {/* =====================================================
          HERO
      ===================================================== */}

      <DashboardHero />

      {/* =====================================================
          NEW USER WELCOME
      ===================================================== */}

      {isNewUser && (
        <DashboardCard className="overflow-hidden border-primary/15 bg-gradient-to-r from-primary/[0.06] via-white to-emerald-50/40">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10">
                <Sparkles
                  size={22}
                  className="text-primary"
                />
              </div>

              <div>
                <p className="text-sm font-semibold text-primary">
                  Welcome to FinPilot
                </p>

                <h2 className="mt-1 text-xl font-bold text-slate-900">
                  Let's get your finances organized.
                </h2>

                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                  Start by adding your first expense. FinPilot will
                  automatically organize your spending and help you
                  understand where your money goes.
                </p>
              </div>
            </div>

            <a
              href="/expenses"
              className="
                inline-flex
                shrink-0
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-primary
                px-5
                py-3
                text-sm
                font-semibold
                text-white
                shadow-sm
                transition-all
                hover:-translate-y-0.5
                hover:shadow-md
              "
            >
              <Plus size={17} />
              Add your first expense
              <ArrowRight size={16} />
            </a>
          </div>
        </DashboardCard>
      )}

      {/* =====================================================
          FINANCIAL SUMMARY
      ===================================================== */}

      <SummaryCards summary={dashboardSummary} />

      {/* =====================================================
          BUDGET HEALTH
      ===================================================== */}

      <DashboardSection
        title="Budget Health"
        description="A quick look at your income, spending and savings."
      >
        <DashboardCard>
          <BudgetHealthCard
            budgetHealth={dashboardBudgetHealth}
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
            {dashboardCategories.length > 0 ? (
              <div className="grid h-full gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <ChartContainer>
                  <CategoryChart
                    data={dashboardCategories}
                  />
                </ChartContainer>

                <CategoryLegend
                  data={dashboardCategories}
                />
              </div>
            ) : (
              <EmptyDashboardState
                icon={WalletCards}
                title="No spending data yet"
                description="Add your first expense to see your spending breakdown by category."
                actionLabel="Add Expense"
                href="/expenses"
              />
            )}
          </DashboardCard>
        </DashboardSection>

        {/* Monthly Expense Trend */}

        <DashboardSection
          title="Monthly Expense Trend"
          description="Track how your spending changes over time."
        >
          <DashboardCard className="h-full">
            {dashboardMonthlySummary.length > 0 ? (
              <ChartContainer>
                <MonthlyChart
                  data={dashboardMonthlySummary}
                />
              </ChartContainer>
            ) : (
              <EmptyDashboardState
                icon={WalletCards}
                title="Your spending trend will appear here"
                description="Once you start recording expenses, FinPilot will show how your spending changes over time."
                actionLabel="Add Expense"
                href="/expenses"
              />
            )}
          </DashboardCard>
        </DashboardSection>
      </div>
    </div>
  );
};

interface EmptyDashboardStateProps {
  icon: React.ElementType;
  title: string;
  description: string;
  actionLabel: string;
  href: string;
}

const EmptyDashboardState = ({
  icon: Icon,
  title,
  description,
  actionLabel,
  href,
}: EmptyDashboardStateProps) => {
  return (
    <div className="flex min-h-[380px] flex-col items-center justify-center px-6 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100">
        <Icon
          size={25}
          className="text-slate-500"
        />
      </div>

      <h3 className="mt-5 text-base font-semibold text-slate-900">
        {title}
      </h3>

      <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
        {description}
      </p>

      <a
        href={href}
        className="
          mt-5
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-slate-200
          bg-white
          px-4
          py-2.5
          text-sm
          font-semibold
          text-slate-700
          shadow-sm
          transition-all
          hover:border-primary/30
          hover:bg-primary/[0.03]
        "
      >
        <Plus size={16} />
        {actionLabel}
      </a>
    </div>
  );
};

export default DashboardPage;