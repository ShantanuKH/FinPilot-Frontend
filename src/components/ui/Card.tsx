import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-xl border bg-white text-slate-900 transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-slate-200 shadow-sm",

        elevated: "border-slate-200 shadow-md",

        outline: "border-slate-300",

        ghost: "border-transparent bg-slate-50 shadow-none",
      },

      hover: {
        true: "hover:-translate-y-1 hover:shadow-lg",

        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      hover: false,
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = ({
  className,
  variant,
  hover,
  ...props
}: CardProps) => {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          hover,
        }),
        className
      )}
      {...props}
    />
  );
};

const CardHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 p-6",
      className
    )}
    {...props}
  />
);

const CardTitle = ({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      "text-xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
);

const CardDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn(
      "text-sm text-slate-500",
      className
    )}
    {...props}
  />
);

const CardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "px-6 pb-6",
      className
    )}
    {...props}
  />
);

const CardFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex items-center px-6 pb-6 pt-2",
      className
    )}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
};