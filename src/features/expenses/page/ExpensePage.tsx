import { useEffect, useState } from "react";

import ExpenseHero from "../components/ExpenseHero/ExpenseHero";
import ExpenseStats from "../components/ExpenseStats/ExpenseStats";
import ExpenseToolbar from "../components/ExpenseToolbar/ExpenseToolbar";
import ExpenseTable from "../components/ExpenseTable/ExpenseTable";
import ExpensePagination from "../components/ExpensePagination/ExpensePagination";

import { useExpenses } from "../hooks/useExpenses";
import { useDebounce } from "@/hooks/useDebounce";

import type { ExpenseCategory } from "../types/expense.types";

const ExpensePage = () => {
  // Pagination
  const [page, setPage] = useState(0);

  // Search
  const [search, setSearch] = useState("");

  // Category
  const [category, setCategory] =
    useState<ExpenseCategory | "">("");

  // Sort
  const [sort, setSort] = useState("expenseDate,desc");

  // Debounced Search
  const debouncedSearch = useDebounce(search, 500);

  // Reset page whenever filters change
  useEffect(() => {
    setPage(0);
  }, [debouncedSearch, category, sort]);

  const {
    data,
    isLoading,
    isError,
    error,
  } = useExpenses({
    page,
    size: 5,
    search: debouncedSearch,
    category: category || undefined,
    sort,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>{(error as Error).message}</div>;
  }

  const expenses = data?.content ?? [];

  return (
    <div className="space-y-8">

      <ExpenseHero />

      <ExpenseStats expenses={expenses} />

      <ExpenseToolbar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        sort={sort}
        onSortChange={setSort}
      />

      <ExpenseTable expenses={expenses} />

      <ExpensePagination
        page={page}
        totalPages={data?.totalPages ?? 0}
        onPageChange={setPage}
      />

    </div>
  );
};

export default ExpensePage;