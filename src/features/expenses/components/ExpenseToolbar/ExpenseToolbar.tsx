import { Search, SlidersHorizontal } from "lucide-react";

import AddExpenseDialog from "../AddExpenseDialog/AddExpenseDialog";
import type { ExpenseCategory } from "../../types/expense.types";

interface ExpenseToolbarProps {
  search: string;
  onSearchChange: (value: string) => void;

  category: ExpenseCategory | "";
  onCategoryChange: (
    value: ExpenseCategory | ""
  ) => void;

  sort: string;
  onSortChange: (value: string) => void;
}

const ExpenseToolbar = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  sort,
  onSortChange,
}: ExpenseToolbarProps) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Section */}
        <div className="flex flex-1 flex-col gap-4 md:flex-row">

          {/* Search */}
          <div className="relative flex-1">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search expenses..."
              className="
                w-full
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-3
                pl-11
                pr-4
                text-sm
                outline-none
                transition
                focus:border-indigo-500
                focus:bg-white
                focus:ring-4
                focus:ring-indigo-100
              "
            />
          </div>

          {/* Category */}
          <select
            value={category}
            onChange={(e) =>
              onCategoryChange(
                e.target.value as ExpenseCategory | ""
              )
            }
            className="
              rounded-xl
              border
              border-slate-200
              bg-slate-50
              px-4
              py-3
              text-sm
              outline-none
              transition
              focus:border-indigo-500
              focus:bg-white
              focus:ring-4
              focus:ring-indigo-100
            "
          >
            <option value="">All Categories</option>
            <option value="FOOD">Food</option>
            <option value="TRANSPORT">Transport</option>
            <option value="SHOPPING">Shopping</option>
            <option value="BILLS">Bills</option>
            <option value="HEALTH">Health</option>
            <option value="ENTERTAINMENT">Entertainment</option>
            <option value="EDUCATION">Education</option>
            <option value="TRAVEL">Travel</option>
            <option value="OTHER">Other</option>
          </select>

          {/* Sort */}
          <div className="relative">
            <SlidersHorizontal
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
            />

            <select
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
              className="
                rounded-xl
                border
                border-slate-200
                bg-slate-50
                py-3
                pl-11
                pr-4
                text-sm
                outline-none
                transition
                focus:border-indigo-500
                focus:bg-white
                focus:ring-4
                focus:ring-indigo-100
              "
            >
              <option value="expenseDate,desc">
                Newest First
              </option>

              <option value="expenseDate,asc">
                Oldest First
              </option>

              <option value="amount,desc">
                Highest Amount
              </option>

              <option value="amount,asc">
                Lowest Amount
              </option>

              <option value="title,asc">
                A → Z
              </option>

              <option value="title,desc">
                Z → A
              </option>
            </select>
          </div>

        </div>

        {/* Right Section */}
        <AddExpenseDialog />

      </div>
    </div>
  );
};

export default ExpenseToolbar;