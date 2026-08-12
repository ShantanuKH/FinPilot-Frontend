const ExpenseTableHeader = () => {
  return (
    <thead className="sticky top-0 bg-slate-50">
      <tr className="border-b border-slate-200">

        <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
          Category
        </th>

        <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
          Expense
        </th>

        <th className="px-6 py-5 text-right text-xs font-bold uppercase tracking-wider text-slate-500">
          Amount
        </th>

        <th className="px-6 py-5 text-left text-xs font-bold uppercase tracking-wider text-slate-500">
          Date
        </th>

        <th className="px-6 py-5 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
          Actions
        </th>

      </tr>
    </thead>
  );
};

export default ExpenseTableHeader;