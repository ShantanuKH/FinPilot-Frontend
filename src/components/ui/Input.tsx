import {
  forwardRef,
  useState,
  type InputHTMLAttributes,
  type ReactNode,
} from "react";
import { Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = "text",
      leftIcon,
      rightIcon,
      error = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    const inputType =
      isPassword && showPassword ? "text" : type;

    return (
      <div className="relative w-full">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
            {leftIcon}
          </div>
        )}

        <input
          ref={ref}
          type={inputType}
          disabled={disabled}
          className={cn(
            "h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground",
            "transition-colors duration-200",
            "focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500",
            "disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground",

            leftIcon && "pl-10",

            (rightIcon || isPassword) && "pr-10",

            error
              ? "border-destructive focus:ring-destructive focus:border-destructive"
              : "border-input",

            className
          )}
          {...props}
        />

        {isPassword ? (
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? (
              <EyeOff size={18} />
            ) : (
              <Eye size={18} />
            )}
          </button>
        ) : (
          rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {rightIcon}
            </div>
          )
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;