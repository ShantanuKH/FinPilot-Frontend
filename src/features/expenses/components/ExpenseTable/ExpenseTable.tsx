import type { Expense } from "../../types/expense.types";

import ExpenseRow from "./ExpenseRow";
import ExpenseTableHeader from "./ExpenseTableHeader";
import ExpenseEmptyState from "./ExpenseEmptyState";

interface Props {
  expenses: Expense[];
}

const ExpenseTable = ({
  expenses,
}: Props) => {
  if (!expenses.length) {
    return <ExpenseEmptyState />;
  }

  return (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <ExpenseTableHeader />

          <tbody className="divide-y divide-slate-100">
            {expenses.map((expense) => (
              <ExpenseRow
                key={expense.id}
                expense={expense}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseTable;