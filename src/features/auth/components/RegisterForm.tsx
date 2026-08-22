import { Link, useNavigate } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";
import { AxiosError } from "axios";

import { useRegister } from "../hooks/useRegister";

import {
  registerSchema,
  type RegisterFormData,
} from "../validation/registerSchema";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FormField,
  Input,
} from "@/components/ui";

const RegisterForm = () => {
  const navigate = useNavigate();

  const registerMutation = useRegister();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (
    data: RegisterFormData
  ) => {
    try {
      await registerMutation.mutateAsync(data);

      toast.success(
        "Account created successfully!"
      );

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      const axiosError =
        error as AxiosError<{
          message?: string;
        }>;

      toast.error(
        axiosError.response?.data?.message ??
          "Unable to create your account. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-8 sm:px-6">
      <div
        className="
          mx-auto
          flex
          min-h-[calc(100vh-4rem)]
          w-full
          max-w-lg
          flex-col
          items-center
          justify-center
        "
      >
        {/* =========================
            BRAND
        ========================== */}
        <div className="mb-7 text-center">
          <div
            className="
              mx-auto
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              bg-gradient-to-br
              from-emerald-500
              to-teal-500
              text-2xl
              font-bold
              text-white
              shadow-lg
              shadow-emerald-200
            "
          >
            F
          </div>

          <h1
            className="
              mt-4
              text-3xl
              font-bold
              tracking-tight
              text-slate-900
            "
          >
            FinPilot
          </h1>

          <p className="mt-1 text-sm text-slate-500">
            Smart finance, made simple.
          </p>
        </div>

        {/* =========================
            REGISTER CARD
        ========================== */}
        <Card
          variant="elevated"
          className="
            relative
            w-full
            overflow-hidden
            rounded-[28px]
            border
            border-slate-200
            bg-white
            shadow-xl
            shadow-slate-200/60
          "
        >
          {/* Gradient top line */}
          <div
            className="
              absolute
              left-0
              right-0
              top-0
              h-1
              bg-gradient-to-r
              from-emerald-500
              via-teal-500
              to-cyan-400
            "
          />

          {/* =========================
              HEADER
          ========================== */}
          <CardHeader
            className="
              px-8
              pb-5
              pt-9
              sm:px-10
            "
          >
            <div
              className="
                mb-5
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-emerald-50
                px-3
                py-1.5
                text-xs
                font-semibold
                uppercase
                tracking-wide
                text-emerald-700
              "
            >
              <Sparkles size={14} />

              Get Started
            </div>

            <CardTitle
              className="
                text-2xl
                font-bold
                text-slate-900
              "
            >
              Create your account 🚀
            </CardTitle>

            <CardDescription
              className="
                mt-2
                max-w-md
                text-sm
                leading-6
                text-slate-500
              "
            >
              Start managing your expenses,
              budgets and investments with
              FinPilot.
            </CardDescription>
          </CardHeader>

          {/* =========================
              FORM
          ========================== */}
          <form
            onSubmit={handleSubmit(onSubmit)}
          >
            <CardContent
              className="
                space-y-5
                px-8
                sm:px-10
              "
            >
              {/* First + Last Name */}
              <div
                className="
                  grid
                  grid-cols-1
                  gap-5
                  sm:grid-cols-2
                "
              >
                {/* First Name */}
                <FormField
                  label="First name"
                  required
                  error={
                    errors.firstName?.message
                  }
                >
                  <Input
                    type="text"
                    autoComplete="given-name"
                    placeholder="First name"
                    leftIcon={
                      <User size={18} />
                    }
                    {...register("firstName")}
                  />
                </FormField>

                {/* Last Name */}
                <FormField
                  label="Last name"
                  required
                  error={
                    errors.lastName?.message
                  }
                >
                  <Input
                    type="text"
                    autoComplete="family-name"
                    placeholder="Last name"
                    leftIcon={
                      <User size={18} />
                    }
                    {...register("lastName")}
                  />
                </FormField>
              </div>

              {/* Email */}
              <FormField
                label="Email"
                required
                error={errors.email?.message}
              >
                <Input
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  leftIcon={
                    <Mail size={18} />
                  }
                  {...register("email")}
                />
              </FormField>

              {/* Password */}
              <FormField
                label="Password"
                required
                error={
                  errors.password?.message
                }
              >
                <Input
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create a password"
                  leftIcon={
                    <Lock size={18} />
                  }
                  {...register("password")}
                />
              </FormField>

              {/* Password Hint */}
              <div
                className="
                  rounded-xl
                  border
                  border-slate-100
                  bg-slate-50
                  px-4
                  py-3
                "
              >
                <p
                  className="
                    text-xs
                    leading-5
                    text-slate-500
                  "
                >
                  Use at least 6 characters
                  for a secure password.
                </p>
              </div>
            </CardContent>

            {/* =========================
                FOOTER
            ========================== */}
            <CardFooter
              className="
                flex
                flex-col
                gap-5
                px-8
                pb-9
                pt-6
                sm:px-10
              "
            >
              {/* Create Account Button */}
              <Button
                type="submit"
                fullWidth
                size="lg"
                loading={
                  registerMutation.isPending
                }
                loadingText="Creating Account..."
                className="
                  h-12
                  rounded-xl
                  bg-gradient-to-r
                  from-emerald-500
                  to-teal-500
                  font-semibold
                  shadow-lg
                  shadow-emerald-200
                  transition-all
                  duration-200
                  hover:-translate-y-0.5
                  hover:shadow-xl
                  hover:shadow-emerald-200
                "
              >
                Create Account

                <ArrowRight
                  size={18}
                />
              </Button>

              {/* Security Information */}
              <div
                className="
                  flex
                  w-full
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-slate-100
                  bg-slate-50
                  px-4
                  py-3
                "
              >
                <div
                  className="
                    flex
                    h-9
                    w-9
                    shrink-0
                    items-center
                    justify-center
                    rounded-lg
                    bg-emerald-100
                    text-emerald-600
                  "
                >
                  <ShieldCheck
                    size={17}
                  />
                </div>

                <div>
                  <p
                    className="
                      text-xs
                      font-semibold
                      text-slate-700
                    "
                  >
                    Your data is protected
                  </p>

                  <p
                    className="
                      mt-0.5
                      text-[11px]
                      text-slate-400
                    "
                  >
                    Secure authentication
                    with FinPilot
                  </p>
                </div>
              </div>

              {/* Login Link */}
              <p
                className="
                  text-center
                  text-sm
                  text-slate-500
                "
              >
                Already have an account?{" "}

                <Link
                  to="/login"
                  className="
                    font-semibold
                    text-emerald-600
                    transition-colors
                    hover:text-emerald-700
                  "
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </form>
        </Card>

        {/* =========================
            FOOTER
        ========================== */}
        <p
          className="
            mt-6
            text-xs
            text-slate-400
          "
        >
          © 2026 FinPilot · Personal finance,
          simplified.
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;