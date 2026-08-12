import RecommendationCard from "../RecommendationCard/RecommendationCard";

interface Props {
  recommendations: string[];
}

const RecommendationGrid = ({
  recommendations,
}: Props) => {
  if (!recommendations.length) {
    return (
      <div
        className="
          rounded-3xl
          border
          border-dashed
          border-slate-300
          bg-white
          p-16
          text-center
        "
      >
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
          🎉
        </div>

        <h2 className="text-2xl font-bold text-slate-900">
          Great Job!
        </h2>

        <p className="mt-3 max-w-md mx-auto text-slate-500 leading-7">
          You currently have no financial recommendations.
          Keep tracking your expenses, budgets and investments
          to receive personalized insights.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {recommendations.map(
        (recommendation, index) => (
          <RecommendationCard
            key={index}
            recommendation={recommendation}
          />
        )
      )}
    </div>
  );
};

export default RecommendationGrid;