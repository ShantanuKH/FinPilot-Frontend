import { cva, type VariantProps } from "class-variance-authority";
import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  "rounded-[var(--radius)] border bg-card text-card-foreground transition-all duration-200",
  {
    variants: {
      variant: {
        default: "border-border shadow-sm",

        elevated: "border-border shadow-md",

        outline: "border-border",

        ghost: "border-transparent bg-muted shadow-none",
      },

      hover: {
        true: "hover:border-primary/40 hover:shadow-md",

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
      "text-sm text-muted-foreground",
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