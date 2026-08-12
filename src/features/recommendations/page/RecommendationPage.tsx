import RecommendationHero from "../components/RecommendationHero/RecommendationHero";
import RecommendationGrid from "../components/RecommendationGrid/RecommendationGrid";

import DashboardCard from "@/features/dashboard/components/shared/DashboardCard";
import DashboardSection from "@/features/dashboard/components/shared/DashboardSection";

import { useRecommendations } from "../hooks/useRecommendations";

const RecommendationPage = () => {
  const recommendations =
    useRecommendations();

  if (recommendations.isLoading) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-slate-500">
          Loading recommendations...
        </p>
      </div>
    );
  }

  if (recommendations.isError) {
    return (
      <div className="flex h-96 items-center justify-center">
        <p className="text-red-500">
          Failed to load recommendations.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero */}
      <RecommendationHero
        onRefresh={() =>
          recommendations.refetch()
        }
        isRefreshing={
          recommendations.isFetching
        }
      />

      {/* Recommendations */}
      <DashboardSection
        title="Your Financial Recommendations"
        description="Personalized financial insights generated from your expenses, budgets, investments and financial profile."
      >
        <DashboardCard>
          <RecommendationGrid
            recommendations={
              recommendations.data
                ?.recommendations ?? []
            }
          />
        </DashboardCard>
      </DashboardSection>
    </div>
  );
};

export default RecommendationPage;