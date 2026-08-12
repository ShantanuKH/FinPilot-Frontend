import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const spinnerVariants = cva(
  "animate-spin rounded-full border-2 border-current border-t-transparent",
  {
    variants: {
      size: {
        sm: "h-4 w-4",
        md: "h-6 w-6",
        lg: "h-8 w-8",
        xl: "h-10 w-10",
      },

      variant: {
        primary: "text-emerald-600",
        secondary: "text-slate-600",
        white: "text-white",
        danger: "text-red-600",
      },
    },

    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

export interface SpinnerProps
  extends VariantProps<typeof spinnerVariants> {
  className?: string;
}

const Spinner = ({
  size,
  variant,
  className,
}: SpinnerProps) => {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={cn(
        spinnerVariants({
          size,
          variant,
        }),
        className
      )}
    />
  );
};

export default Spinner;