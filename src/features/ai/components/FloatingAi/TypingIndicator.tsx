import { Bot } from "lucide-react";

const TypingIndicator = () => {
  return (
    <div className="mb-5 flex items-start gap-3">
      <div
        className="
          rounded-full
          bg-gradient-to-r
          from-violet-600
          to-indigo-600
          p-2
          text-white
        "
      >
        <Bot size={20} />
      </div>

      <div className="rounded-3xl rounded-tl-md bg-slate-100 px-5 py-4">
        <div className="mb-2 text-sm font-medium text-slate-600">
          Fin is thinking...
        </div>

        <div className="flex gap-1">
          <span className="h-2 w-2 animate-bounce rounded-full bg-violet-500" />

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-violet-500"
            style={{
              animationDelay: "0.15s",
            }}
          />

          <span
            className="h-2 w-2 animate-bounce rounded-full bg-violet-500"
            style={{
              animationDelay: "0.3s",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;