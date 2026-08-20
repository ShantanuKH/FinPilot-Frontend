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
          rounded-[var(--radius)]
          border
          border-border
          bg-card
          p-6
          shadow-sm
          transition-all
          duration-300
          ease-out
          hover:border-primary/30
          hover:shadow-md
        `,
        className
      )}
    >
      {children}
    </section>
  );
};

export default DashboardCard;