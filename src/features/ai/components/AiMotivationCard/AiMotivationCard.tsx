import { Sparkles } from "lucide-react";

interface Props {
  motivation: string;
}

const AiMotivationCard = ({
  motivation,
}: Props) => {
  return (
    <div
      className="
        relative
        overflow-hidden
        rounded-2xl
        bg-emerald-700
        p-6
        text-white
        shadow-lg
      "
    >
      {/* Background Glow */}
      <div className="absolute -top-16 -right-16 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-20 left-0 h-52 w-52 rounded-full bg-white/10 blur-3xl" />

      <div className="relative">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-2xl bg-white/20 p-3 backdrop-blur">
            <Sparkles size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Stay Motivated
            </h2>

            <p className="text-sm text-white/80">
              Your AI financial coach.
            </p>
          </div>
        </div>

        <p className="text-lg leading-8 text-white/95 italic">
          "{motivation}"
        </p>
      </div>
    </div>
  );
};

export default AiMotivationCard;