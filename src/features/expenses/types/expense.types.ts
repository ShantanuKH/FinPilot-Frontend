export interface Expense {
  id: number;
  title: string;
  amount: number;
  description: string;
  expenseDate: string;
  category: ExpenseCategory;
}

export type ExpenseCategory =
  | "FOOD"
  | "TRANSPORT"
  | "SHOPPING"
  | "ENTERTAINMENT"
  | "HEALTH"
  | "BILLS"
  | "EDUCATION"
  | "TRAVEL"
  | "OTHER";

export interface CreateExpenseRequest {
  title: string;
  amount: number;
  category: ExpenseCategory;
  expenseDate: string;
  description?: string;
}

export interface UpdateExpenseRequest {
  title: string;
  amount: number;
  description: string;
  expenseDate: string;
  category: ExpenseCategory;
}

export interface PagedResponse<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  first: boolean;
  last: boolean;
}