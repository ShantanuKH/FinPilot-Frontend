import type { ReactNode } from "react";
import clsx from "clsx";

interface DashboardCardProps {
  children: ReactNode;
  className?: string;
}

const DashboardCard = ({
  children,
  className,
}: DashboardCardProps) => {
  return (
    <section
      className={clsx(
        `
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-200
          bg-white
          p-6
          shadow-sm
          transition-all
          duration-300
          ease-out
          hover:-translate-y-0.5
          hover:border-slate-300
          hover:shadow-lg
        `,
        className
      )}
    >
      {children}
    </section>
  );
};

export default DashboardCard;