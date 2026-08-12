import type { ReactNode } from "react";
import clsx from "clsx";

interface ChartContainerProps {
  children: ReactNode;
  className?: string;
  height?: string;
}

const ChartContainer = ({
  children,
  className,
  height = "h-[360px]",
}: ChartContainerProps) => {
  return (
    <div
      className={clsx(
        "relative w-full min-w-0 overflow-hidden",
        "rounded-2xl",
        "bg-white",
        height,
        className
      )}
    >
      {children}
    </div>
  );
};

export default ChartContainer;