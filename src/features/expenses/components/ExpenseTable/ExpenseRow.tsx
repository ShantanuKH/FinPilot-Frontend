import { Pencil, Trash2 } from "lucide-react";

import type { Expense } from "../../types/expense.types";
import EditExpenseDialog from "../EditExpenseDialog/EditExpenseDialog";
import DeleteExpenseDialog from "../DeleteExpenseDialog/DeleteExpenseDialog";
interface Props {
  expense: Expense;
}

const categoryStyles: Record<string, string> = {
  FOOD: "bg-orange-100 text-orange-700",
  TRANSPORT: "bg-blue-100 text-blue-700",
  SHOPPING: "bg-purple-100 text-purple-700",
  HEALTH: "bg-red-100 text-red-700",
  BILLS: "bg-amber-100 text-amber-700",
  ENTERTAINMENT: "bg-pink-100 text-pink-700",
  OTHER: "bg-slate-100 text-slate-700",
};

const ExpenseRow = ({ expense }: Props) => {
  return (
    <tr className="group transition-all duration-200 hover:bg-slate-50">

      {/* Category */}
      <td className="px-6 py-5">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
            categoryStyles[expense.category] ??
            categoryStyles.OTHER
          }`}
        >
          {expense.category}
        </span>
      </td>

      {/* Title */}
      <td className="px-6 py-5">
        <div>
          <p className="font-semibold text-slate-900">
            {expense.title}
          </p>

          <p className="mt-1 text-sm text-slate-500">
            {expense.description || "No description"}
          </p>
        </div>
      </td>

      {/* Amount */}
      <td className="px-6 py-5 text-right">
        <span className="text-lg font-bold text-slate-900">
          ₹{expense.amount.toLocaleString("en-IN")}
        </span>
      </td>

      {/* Date */}
      <td className="px-6 py-5 text-slate-600">
        {new Date(expense.expenseDate).toLocaleDateString(
          "en-IN",
          {
            day: "2-digit",
            month: "short",
            year: "numeric",
          }
        )}
      </td>

      {/* Actions */}
      <td className="px-6 py-5">
        <div className="flex justify-center gap-2">

          <EditExpenseDialog expense={expense} />

        <DeleteExpenseDialog
  expenseId={expense.id}
  expenseTitle={expense.title}
/>

        </div>
      </td>

    </tr>
  );
};

export default ExpenseRow;