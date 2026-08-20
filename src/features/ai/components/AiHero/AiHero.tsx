import { Bot, Sparkles } from "lucide-react";

const AiHero = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        rounded-2xl
        bg-emerald-700
        p-8
        text-white
        shadow-lg
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-20 -right-16 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">
            <Sparkles size={18} />
            AI Powered Financial Assistant
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Meet
            <br />
            FinPilot AI
          </h1>

          <p className="mt-5 text-lg leading-8 text-white/90">
            Receive personalized financial advice, understand
            your spending habits, improve your savings and ask
            questions about your finances using AI powered by
            your real financial data.
          </p>
        </div>

        <div
          className="
            flex
            h-32
            w-32
            items-center
            justify-center
            rounded-2xl
            bg-white/20
            backdrop-blur
          "
        >
          <Bot size={60} />
        </div>
      </div>
    </section>
  );
};

export default AiHero;