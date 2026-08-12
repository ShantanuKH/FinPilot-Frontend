import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const ExpensePagination = ({
  page,
  totalPages,
  onPageChange,
}: Props) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">

      <button
        onClick={() => onPageChange(page - 1)}
        disabled={page === 0}
        className="
          flex items-center gap-2 rounded-xl border border-slate-200
          px-4 py-2 text-sm font-medium transition
          disabled:cursor-not-allowed disabled:opacity-50
          hover:bg-slate-50
        "
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => onPageChange(index)}
            className={`h-10 w-10 rounded-xl text-sm font-semibold transition ${
              page === index
                ? "bg-indigo-600 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages - 1}
        className="
          flex items-center gap-2 rounded-xl border border-slate-200
          px-4 py-2 text-sm font-medium transition
          disabled:cursor-not-allowed disabled:opacity-50
          hover:bg-slate-50
        "
      >
        Next
        <ChevronRight size={18} />
      </button>

    </div>
  );
};

export default ExpensePagination;