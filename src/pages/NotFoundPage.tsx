import {
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();


  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4 py-8">
      <div className="w-full max-w-2xl text-center">

        {/* Animated Icon */}
        <div className="relative mx-auto flex h-20 w-20 items-center justify-center">
          <div
            className="
              absolute
              inset-0
              animate-ping
              rounded-3xl
              bg-emerald-100
              opacity-50
            "
          />

          <div
            className="
              relative
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-emerald-50
              text-emerald-600
              shadow-sm
            "
          >
            <Sparkles size={34} />
          </div>
        </div>

        {/* Heading */}
        <h1
          className="
            mt-7
            text-3xl
            font-bold
            tracking-tight
            text-slate-900
            sm:text-4xl
          "
        >
          FinPilot is getting smarter.
        </h1>

        {/* Description */}
        <p
          className="
            mx-auto
            mt-4
            max-w-xl
            text-sm
            leading-7
            text-slate-500
            sm:text-base
          "
        >
          We're building a smarter financial dashboard
          to give you a clearer picture of your money,
          goals, and future.
        </p>

        {/* Status */}
        <div className="mt-5 flex justify-center">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-emerald-50
              px-3.5
              py-2
              text-xs
              font-semibold
              text-emerald-700
            "
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
           New Features Coming Soon
          </span>
        </div>

    

        {/* CTA */}
        <button
          type="button"
          onClick={() => navigate("/expenses")}
          className="
            mt-9
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-emerald-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-200
            hover:-translate-y-0.5
            hover:bg-emerald-700
            hover:shadow-md
          "
        >
          Explore FinPilot
          <ArrowRight size={17} />
        </button>

        {/* Footer */}
        <p className="mt-6 text-xs text-slate-400">
          More financial intelligence is on the way ✨
        </p>
      </div>
    </div>
  );
};

export default DashboardPage;