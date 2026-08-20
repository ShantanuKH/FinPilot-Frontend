import { Bot } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  onClick: () => void;
}

const FloatingAiButton = ({
  onClick,
}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        duration: 0.3,
      }}
      className="fixed bottom-8 right-8 z-50"
    >
      <button
        onClick={onClick}
        className="group relative"
      >
        {/* Pulse */}
        <span
          className="
            absolute
            inset-0
            animate-ping
            rounded-full
            bg-emerald-500/30
          "
        />

        {/* Main Button */}
        <div
          className="
            relative
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            bg-emerald-600
            text-white
            shadow-lg
            transition-all
            duration-300
            group-hover:rotate-6
            group-hover:shadow-emerald-400/40
          "
        >
          <Bot size={30} />

          {/* Online */}
          <span
            className="
              absolute
              bottom-1
              right-1
              h-4
              w-4
              rounded-full
              border-2
              border-white
              bg-emerald-400
            "
          />
        </div>

        {/* Tooltip */}
        <div
          className="
            absolute
            right-20
            top-1/2
            hidden
            -translate-y-1/2
            whitespace-nowrap
            rounded-2xl
            bg-white
            px-4
            py-3
            text-left
            shadow-xl
            transition-all
            duration-300
            group-hover:block
          "
        >
          <p className="font-semibold text-slate-900">
            Hi 👋 I'm Fin
          </p>

          <p className="text-sm text-slate-500">
            Ask me anything about
            your finances.
          </p>
        </div>
      </button>
    </motion.div>
  );
};

export default FloatingAiButton;