import { useState } from "react";

import BudgetHero from "../components/BudgetHero/BudgetHero";
import BudgetSummary from "../components/BudgetSummary/BudgetSummary";
import BudgetAnalyticsGrid from "../components/BudgetAnalytics/BudgetAnalyticsGrid";

import DashboardCard from "@/features/dashboard/components/shared/DashboardCard";
import DashboardSection from "@/features/dashboard/components/shared/DashboardSection";

import { useBudgets } from "../hooks/useBudgets";
import { useBudgetAnalytics } from "../hooks/useBudgetAnalytics";

import AddBudgetDialog from "../components/AddBudgetDialog/AddBudgetDialog";
import EditBudgetDialog from "../components/EditBudgetDialog/EditBudgetDialog";
import DeleteBudgetDialog from "../components/DeleteBudgetDialog/DeleteBudgetDialog";

import type {
  Budget,
  BudgetAnalytics,
} from "../types/budget.types";

const BudgetPage = () => {
  const [openAddDialog, setOpenAddDialog] =
    useState(false);

  const [openEditDialog, setOpenEditDialog] =
    useState(false);

  const [
    openDeleteDialog,
    setOpenDeleteDialog,
  ] = useState(false);

  const [selectedBudget, setSelectedBudget] =
    useState<Budget>();

  const [selectedBudgetId, setSelectedBudgetId] =
    useState<number>();

  const budgets = useBudgets();
  const analytics = useBudgetAnalytics();

  if (
    budgets.isLoading ||
    analytics.isLoading
  ) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-slate-500">
          Loading budgets...
        </p>
      </div>
    );
  }

  if (
    budgets.isError ||
    analytics.isError
  ) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-red-500">
          Failed to load budgets.
        </p>
      </div>
    );
  }

  const handleEdit = (
    analyticsBudget: BudgetAnalytics
  ) => {
    const budget = budgets.data?.find(
      (b) => b.id === analyticsBudget.budgetId
    );

    if (!budget) return;

    setSelectedBudget(budget);
    setOpenEditDialog(true);
  };

  const handleDelete = (
    analyticsBudget: BudgetAnalytics
  ) => {
    setSelectedBudgetId(
      analyticsBudget.budgetId
    );

    setOpenDeleteDialog(true);
  };

  return (
    <div className="space-y-8">
      {/* Hero */}
      <BudgetHero
        onAddBudget={() =>
          setOpenAddDialog(true)
        }
      />

      {/* Summary */}
      <BudgetSummary
        analytics={analytics.data ?? []}
      />

      {/* Analytics */}
      <DashboardSection
        title="Budget Analytics"
        description="Track your spending against each monthly budget."
      >
        <DashboardCard>
          <BudgetAnalyticsGrid
            analytics={analytics.data ?? []}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </DashboardCard>
      </DashboardSection>

      {/* Add Budget */}
      <AddBudgetDialog
        open={openAddDialog}
        onOpenChange={setOpenAddDialog}
      />

      {/* Edit Budget */}
      <EditBudgetDialog
        open={openEditDialog}
        onOpenChange={setOpenEditDialog}
        budget={selectedBudget}
      />

      {/* Delete Budget */}
      <DeleteBudgetDialog
        open={openDeleteDialog}
        onOpenChange={
          setOpenDeleteDialog
        }
        budgetId={selectedBudgetId}
      />
    </div>
  );
};

export default BudgetPage;