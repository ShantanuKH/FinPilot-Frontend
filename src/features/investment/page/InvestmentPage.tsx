import { useState } from "react";

import InvestmentHero from "../components/InvestmentHero/InvestmentHero";
import InvestmentSummary from "../components/InvestmentSummary/InvestmentSummary";
import PortfolioAllocation from "../components/PortfolioAllocation/PortfolioAllocation";
import RiskAnalysisCard from "../components/RiskAnalysis/RiskAnalysisCard";
import InvestmentGrid from "../components/InvestmentGrid/InvestmentGrid";

import AddInvestmentDialog from "../components/AddInvestmentDialog/AddInvestmentDialog";
import EditInvestmentDialog from "../components/EditInvestmentDialog/EditInvestmentDialog";
import DeleteInvestmentDialog from "../components/DeleteInvestmentDialog/DeleteInvestmentDialog";

import DashboardCard from "@/features/dashboard/components/shared/DashboardCard";
import DashboardSection from "@/features/dashboard/components/shared/DashboardSection";

import { useInvestments } from "../hooks/useInvestments";
import { useInvestmentSummary } from "../hooks/useInvestmentSummary";
import { usePortfolioAllocation } from "../hooks/usePortfolioAllocation";
import { useRiskAnalysis } from "../hooks/useRiskAnalysis";

import type { Investment } from "../types/investment.types";

const InvestmentPage = () => {
  const [openAddDialog, setOpenAddDialog] = useState(false);

  const [openEditDialog, setOpenEditDialog] = useState(false);

  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);

  const [selectedInvestment, setSelectedInvestment] =
    useState<Investment>();

  const investments = useInvestments();

  const summary = useInvestmentSummary();

  const allocation = usePortfolioAllocation();

  const risk = useRiskAnalysis();

  if (
    investments.isLoading ||
    summary.isLoading ||
    allocation.isLoading ||
    risk.isLoading
  ) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-slate-500">
          Loading investments...
        </p>
      </div>
    );
  }

  if (
    investments.isError ||
    summary.isError ||
    allocation.isError ||
    risk.isError
  ) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-red-500">
          Failed to load investment data.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero */}
      <InvestmentHero
        onAddInvestment={() =>
          setOpenAddDialog(true)
        }
      />

      {/* Summary */}
      <InvestmentSummary
        summary={summary.data!}
      />

      {/* Allocation & Risk */}
      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardCard>
          <PortfolioAllocation
            allocation={allocation.data ?? []}
          />
        </DashboardCard>

        <DashboardCard>
          <RiskAnalysisCard
            risk={risk.data!}
          />
        </DashboardCard>
      </div>

      {/* Investment List */}
      <DashboardSection
        title="Your Investments"
        description="Manage your investment portfolio."
      >
        <DashboardCard>
          <InvestmentGrid
            investments={
              investments.data ?? []
            }
            onEdit={(investment) => {
              setSelectedInvestment(
                investment
              );
              setOpenEditDialog(true);
            }}
            onDelete={(investment) => {
              setSelectedInvestment(
                investment
              );
              setOpenDeleteDialog(true);
            }}
          />
        </DashboardCard>
      </DashboardSection>

      {/* Add Investment */}
      <AddInvestmentDialog
        open={openAddDialog}
        onOpenChange={
          setOpenAddDialog
        }
      />

      {/* Edit Investment */}
      <EditInvestmentDialog
        open={openEditDialog}
        onOpenChange={
          setOpenEditDialog
        }
        investment={
          selectedInvestment
        }
      />

      {/* Delete Investment */}
      <DeleteInvestmentDialog
        open={openDeleteDialog}
        onOpenChange={
          setOpenDeleteDialog
        }
        investment={
          selectedInvestment
        }
      />
    </div>
  );
};

export default InvestmentPage;