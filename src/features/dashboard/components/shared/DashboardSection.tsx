import type { ReactNode } from "react";

interface DashboardSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const DashboardSection = ({
  title,
  description,
  children,
}: DashboardSectionProps) => {
  return (
    <section className="space-y-4">
      {/* Section Header */}
      <div>
        <h2 className="text-lg font-semibold tracking-tight text-slate-900">
          {title}
        </h2>

        {description && (
          <p className="mt-1 text-sm leading-5 text-slate-500">
            {description}
          </p>
        )}
      </div>

      {/* Section Content */}
      {children}
    </section>
  );
};

export default DashboardSection;