import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Mail,
  ShieldCheck,
  Sparkles,
  Wallet,
  PieChart,
} from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import toast from "react-hot-toast";
import { AxiosError } from "axios";

import { useLogin } from "../hooks/useLogin";
import { useAuthStore } from "@/store/authStore";

import {
  loginSchema,
  type LoginFormData,
} from "../validation/loginSchema";

import {
  Button,
  Checkbox,
  FormField,
  Input,
} from "@/components/ui";

const LoginForm = () => {
  const navigate = useNavigate();

  const { login } = useAuthStore();

  const loginMutation = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response =
        await loginMutation.mutateAsync(data);

      login(response.token);

      toast.success("Welcome back to FinPilot!");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      const axiosError =
        error as AxiosError<{
          message: string;
        }>;

      toast.error(
        axiosError.response?.data?.message ??
          "Unable to sign in. Please try again."
      );
    }
  };

  return (
    <div className="min-h-screen w-full bg-background">
      <div className="mx-auto flex min-h-screen max-w-[1500px]">

        {/* ================================================= */}
        {/* LEFT BRAND PANEL */}
        {/* ================================================= */}

        <div
          className="
            relative
            hidden
            w-[48%]
            overflow-hidden
            bg-gradient-to-br
            from-emerald-50
            via-white
            to-teal-50
            px-12
            py-12
            lg:flex
            lg:flex-col
            xl:px-16
          "
        >
          {/* Decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              -left-32
              -bottom-32
              h-[500px]
              w-[500px]
              rounded-full
              bg-emerald-200/30
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              right-[-180px]
              top-[-180px]
              h-[450px]
              w-[450px]
              rounded-full
              bg-teal-200/20
              blur-3xl
            "
          />

          {/* Brand */}
          <div className="relative z-10 flex items-center gap-3">
            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-2xl
                bg-gradient-to-br
                from-emerald-500
                to-teal-600
                text-xl
                font-bold
                text-white
                shadow-lg
                shadow-emerald-200
              "
            >
              F
            </div>

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                FinPilot
              </h1>

              <p className="text-xs text-slate-500">
                Smart finance, made simple.
              </p>
            </div>
          </div>

          {/* Main heading */}
          <div className="relative z-10 mt-20 max-w-xl">
            <div
              className="
                mb-5
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-white
                px-3
                py-1.5
                text-xs
                font-semibold
                text-emerald-700
                shadow-sm
              "
            >
              <Sparkles size={14} />

              PERSONAL FINANCE
            </div>

            <h2
              className="
                text-5xl
                font-bold
                leading-[1.08]
                tracking-tight
                text-slate-900
                xl:text-6xl
              "
            >
              All your finances,
              <span className="block text-emerald-500">
                under control.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-500">
              Track expenses, set budgets, invest wisely
              and make smarter financial decisions —
              all from one place.
            </p>
          </div>

          {/* Dashboard Preview */}
          <div className="relative z-10 mt-14">

            {/* Main graph card */}
            <div
              className="
                relative
                w-[82%]
                rounded-3xl
                border
                border-white
                bg-white/90
                p-5
                shadow-[0_20px_50px_-20px_rgba(15,23,42,0.18)]
                backdrop-blur
              "
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-400">
                    Portfolio Overview
                  </p>

                  <p className="mt-1 text-2xl font-bold text-slate-900">
                    ₹1,24,560
                  </p>
                </div>

                <div
                  className="
                    rounded-full
                    bg-emerald-50
                    px-3
                    py-1.5
                    text-xs
                    font-semibold
                    text-emerald-600
                  "
                >
                  +12.5%
                </div>
              </div>

              {/* Graph */}
              <div className="relative mt-5 h-32">
                <svg
                  viewBox="0 0 500 130"
                  className="h-full w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="areaGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#10b981"
                        stopOpacity="0.20"
                      />

                      <stop
                        offset="100%"
                        stopColor="#10b981"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="
                      M0 100
                      C35 70 55 88 90 78
                      S145 45 180 65
                      S230 90 265 55
                      S320 35 350 45
                      S410 20 450 32
                      S480 15 500 10
                      L500 130
                      L0 130
                      Z
                    "
                    fill="url(#areaGradient)"
                  />

                  <path
                    d="
                      M0 100
                      C35 70 55 88 90 78
                      S145 45 180 65
                      S230 90 265 55
                      S320 35 350 45
                      S410 20 450 32
                      S480 15 500 10
                    "
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Floating stats */}
            <div
              className="
                absolute
                -bottom-8
                left-[-20px]
                flex
                gap-3
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white
                  bg-white
                  px-4
                  py-3
                  shadow-lg
                "
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-50 text-rose-500">
                  <Wallet size={17} />
                </div>

                <div>
                  <p className="text-[10px] text-slate-400">
                    Expenses
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    ₹24,560
                  </p>
                </div>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white
                  bg-white
                  px-4
                  py-3
                  shadow-lg
                "
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-50 text-violet-500">
                  <PieChart size={17} />
                </div>

                <div>
                  <p className="text-[10px] text-slate-400">
                    Investments
                  </p>

                  <p className="text-sm font-bold text-slate-800">
                    +18.6%
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom message */}
          <div className="relative z-10 mt-auto pt-16">
            <div className="flex gap-4">
              <div className="text-4xl leading-none text-emerald-400">
                "
              </div>

              <div>
                <p className="max-w-md text-sm leading-6 text-slate-500">
                  Better financial decisions start with
                  understanding where your money goes.
                </p>

                <p className="mt-2 text-xs font-semibold text-emerald-600">
                  — FinPilot
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================================================= */}
        {/* RIGHT LOGIN PANEL */}
        {/* ================================================= */}

        <div
          className="
            flex
            w-full
            items-center
            justify-center
            px-5
            py-10
            lg:w-[52%]
            lg:px-10
            xl:px-16
          "
        >
          <div className="w-full max-w-xl">

            {/* Mobile logo */}
            <div className="mb-8 text-center lg:hidden">
              <div
                className="
                  mx-auto
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-gradient-to-br
                  from-emerald-500
                  to-teal-600
                  text-xl
                  font-bold
                  text-white
                  shadow-lg
                "
              >
                F
              </div>

              <h1 className="mt-3 text-2xl font-bold text-slate-900">
                FinPilot
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Smart finance, made simple.
              </p>
            </div>

            {/* Login Card */}
            <div
              className="
                overflow-hidden
                rounded-[2rem]
                border
                border-slate-200
                bg-white
                shadow-[0_25px_70px_-25px_rgba(15,23,42,0.20)]
              "
            >
              {/* Accent */}
              <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />

              <div className="p-7 sm:p-10">

                {/* Header */}
                <div className="mb-8">
                  <div
                    className="
                      mb-5
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-emerald-50
                      px-3
                      py-1.5
                      text-xs
                      font-semibold
                      text-emerald-700
                    "
                  >
                    <Sparkles size={13} />
                    SECURE ACCESS
                  </div>

                  <h2
                    className="
                      text-3xl
                      font-bold
                      tracking-tight
                      text-slate-900
                    "
                  >
                    Welcome back 👋
                  </h2>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                    Sign in to continue managing your
                    expenses, budgets and investments.
                  </p>
                </div>

                {/* Form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-5"
                >
                  {/* Email */}
                  <FormField
                    label="Email"
                    required
                    error={errors.email?.message}
                  >
                    <Input
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      leftIcon={<Mail size={18} />}
                      {...register("email")}
                    />
                  </FormField>

                  {/* Password */}
                  <FormField
                    label="Password"
                    required
                    error={errors.password?.message}
                  >
                    <Input
                      type="password"
                      autoComplete="current-password"
                      placeholder="Enter your password"
                      leftIcon={<Lock size={18} />}
                      {...register("password")}
                    />
                  </FormField>

                  {/* Options */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Checkbox id="remember" />

                      <label
                        htmlFor="remember"
                        className="cursor-pointer text-sm text-slate-600"
                      >
                        Remember me
                      </label>
                    </div>

                    <Link
                      to="/forgot-password"
                      className="
                        text-sm
                        font-semibold
                        text-emerald-600
                        transition-colors
                        hover:text-emerald-700
                      "
                    >
                      Forgot password?
                    </Link>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    fullWidth
                    size="lg"
                    loading={loginMutation.isPending}
                    loadingText="Signing in..."
                    className="
                      group
                      !rounded-xl
                      !bg-gradient-to-r
                      !from-emerald-500
                      !to-teal-600
                      !shadow-lg
                      !shadow-emerald-100
                      transition-all
                      duration-300
                      hover:!from-emerald-600
                      hover:!to-teal-700
                      hover:!shadow-emerald-200
                    "
                  >
                    <span>Sign in</span>

                    {!loginMutation.isPending && (
                      <ArrowRight
                        size={18}
                        className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    )}
                  </Button>
                </form>

                {/* Security */}
                <div
                  className="
                    mt-6
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    border
                    border-slate-100
                    bg-slate-50
                    px-4
                    py-3.5
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
                      rounded-xl
                      bg-emerald-100
                      text-emerald-600
                    "
                  >
                    <ShieldCheck size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-slate-700">
                      Your data is protected
                    </p>

                    <p className="mt-0.5 text-[11px] text-slate-400">
                      Secure authentication with FinPilot
                    </p>
                  </div>

                  <CheckCircle2
                    size={17}
                    className="ml-auto text-emerald-500"
                  />
                </div>

                {/* Register */}
                <div className="mt-7 text-center">
                  <p className="text-sm text-slate-500">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="
                        font-semibold
                        text-emerald-600
                        hover:text-emerald-700
                      "
                    >
                      Create an account
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="mt-6 text-center text-xs text-slate-400">
              © {new Date().getFullYear()} FinPilot ·
              Personal finance, simplified.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;