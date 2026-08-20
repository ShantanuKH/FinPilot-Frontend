import { FileText } from "lucide-react";

interface Props {
  summary: string;
}

const AiSummary = ({
  summary,
}: Props) => {
  return (
    <div
      className="
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
      "
    >
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-2xl bg-violet-100 p-3">
          <FileText
            size={24}
            className="text-primary"
          />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">
            Financial Summary
          </h2>

          <p className="text-sm text-slate-500">
            AI-generated overview of your financial health.
          </p>
        </div>
      </div>

      <p className="leading-8 text-slate-600">
        {summary}
      </p>
    </div>
  );
};

export default AiSummary;