import {
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Props {
  recommendation: string;
}

const getRecommendationTitle = (
  recommendation: string
) => {
  const text = recommendation.toLowerCase();

  if (text.includes("food"))
    return "🍔 Food Budget";

  if (text.includes("shopping"))
    return "🛍️ Shopping Budget";

  if (text.includes("transport"))
    return "🚗 Transport Budget";

  if (text.includes("entertainment"))
    return "🎬 Entertainment Budget";

  if (text.includes("health"))
    return "🏥 Healthcare Budget";

  if (
    text.includes("portfolio") &&
    text.includes("diversified")
  )
    return "🌍 Portfolio Diversification";

  if (
    text.includes("portfolio") &&
    text.includes("risk")
  )
    return "📈 Portfolio Risk";

  if (text.includes("investment"))
    return "💹 Investments";

  if (text.includes("saving"))
    return "💰 Savings";

  if (text.includes("emergency"))
    return "🏦 Emergency Fund";

  if (text.includes("budget"))
    return "📊 Budget";

  return "✨ Financial Insight";
};

const RecommendationCard = ({
  recommendation,
}: Props) => {
  const navigate = useNavigate();

  const handleExplain = () => {
    navigate("/pilot-ai", {
      state: {
        recommendation,
        prompt: `Explain this financial recommendation to me in simple terms: ${recommendation}`,
      },
    });
  };

  return (
    <div
      className="
        group
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-violet-200
        hover:shadow-md
      "
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-xl
              bg-violet-50
              text-violet-600
            "
          >
            <Sparkles size={19} />
          </div>

          <h3
            className="
              truncate
              text-[15px]
              font-semibold
              text-slate-900
            "
          >
            {getRecommendationTitle(
              recommendation
            )}
          </h3>
        </div>

        <span
          className="
            shrink-0
            rounded-full
            bg-violet-50
            px-2.5
            py-1
            text-[11px]
            font-medium
            text-violet-600
          "
        >
          AI Insight
        </span>
      </div>

      {/* Recommendation */}
      <p
        className="
          mt-4
          line-clamp-2
          text-sm
          leading-6
          text-slate-600
        "
      >
        {recommendation}
      </p>

      {/* Footer */}
      <div
        className="
          mt-4
          flex
          justify-end
          border-t
          border-slate-100
          pt-3
        "
      >
        <button
          type="button"
          onClick={handleExplain}
          className="
            flex
            items-center
            gap-1.5
            text-sm
            font-semibold
            text-violet-600
            transition-all
            duration-200
            hover:gap-2
            hover:text-violet-700
          "
        >
          AI Explain
          <ArrowRight
            size={16}
            className="transition-transform duration-200"
          />
        </button>
      </div>
    </div>
  );
};

export default RecommendationCard;