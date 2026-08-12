import {
  SendHorizontal,
} from "lucide-react";
import { useState } from "react";

interface Props {
  onSend: (message: string) => void;
}

const ChatInput = ({
  onSend,
}: Props) => {
  const [message, setMessage] =
    useState("");

  const send = () => {
    if (!message.trim()) return;

    
    onSend(message);

    setMessage("");
  };

  return (
    <div className="border-t border-slate-200 p-4">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3">
        <input
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              send();
            }
          }}
          placeholder="Ask Fin about your finances..."
          className="flex-1 outline-none"
        />

        <button
          onClick={send}
          className="
            rounded-xl
            bg-violet-600
            p-3
            text-white
            transition
            hover:bg-violet-700
          "
        >
          <SendHorizontal size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;