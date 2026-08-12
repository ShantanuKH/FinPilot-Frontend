interface Props {
  percentage: number;
}

const BudgetProgressBar = ({
  percentage,
}: Props) => {
  const value = Math.min(
    percentage,
    100
  );

  const color =
    percentage >= 100
      ? "bg-red-500"
      : percentage >= 80
      ? "bg-amber-500"
      : "bg-emerald-500";

  return (
    <div>
      <div className="mb-2 flex justify-between text-sm">
        <span className="font-medium text-slate-600">
          Budget Used
        </span>

        <span className="font-semibold text-slate-900">
          {percentage.toFixed(1)}%
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
};

export default BudgetProgressBar;