interface Props {
  status: "ON_TRACK" | "WARNING" | "EXCEEDED";
}

const statusStyles = {
  ON_TRACK:
    "bg-emerald-100 text-emerald-700",

  WARNING:
    "bg-amber-100 text-amber-700",

  EXCEEDED:
    "bg-red-100 text-red-700",
};

const statusText = {
  ON_TRACK: "On Track",

  WARNING: "Warning",

  EXCEEDED: "Exceeded",
};

const BudgetStatusBadge = ({
  status,
}: Props) => {
  return (
    <span
      className={`
        rounded-full
        px-3
        py-1
        text-xs
        font-semibold
        ${statusStyles[status]}
      `}
    >
      {statusText[status]}
    </span>
  );
};

export default BudgetStatusBadge;