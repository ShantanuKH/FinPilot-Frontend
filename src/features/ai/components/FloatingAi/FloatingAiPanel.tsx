import { Bot, X } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import ChatBubble from "./ChatBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestion from "./SuggestedQuestion";
import TypingIndicator from "./TypingIndicator";

import { useAiChat } from "../../hooks/useAiChat";

interface Props {
  onClose: () => void;
}

type Message = {
  id: number;
  text: string;
  isUser: boolean;
};

const QUESTIONS = [
  "How can I save more money?",
  "Review my budget",
  "Explain my portfolio",
  "How is my investment risk?",
];

const FloatingAiPanel = ({
  onClose,
}: Props) => {
  const chat = useAiChat();

  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: 1,
        isUser: false,
        text: `👋 Hi!

I'm Fin, your personal financial copilot.

I've already analyzed your expenses, budgets, investments and recommendations.

Ask me anything about your finances.`,
      },
    ]);

  const messagesEndRef =
    useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, chat.isPending]);

  const sendMessage = (
    message: string
  ) => {
    if (!message.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: message,
      isUser: true,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    chat.mutate(
      { message },
      {
        onSuccess: (response) => {
          setMessages((prev) => [
            ...prev,
            {
              id: Date.now() + 1,
              text: response.answer,
              isUser: false,
            },
          ]);
        },
      }
    );
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.85,
        y: 40,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.85,
        y: 40,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        fixed
        bottom-8
        right-8
        z-50
        flex
        h-[700px]
        w-[420px]
        flex-col
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        shadow-2xl
      "
    >
      {/* Header */}
      <div
        className="
          flex
          items-center
          justify-between
          bg-gradient-to-r
          from-emerald-600
          via-emerald-600
          to-emerald-700
          px-6
          py-5
          text-white
        "
      >
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-white/20 p-3">
            <Bot size={24} />
          </div>

          <div>
            <h2 className="text-lg font-bold">
              Fin
            </h2>

            <p className="text-sm text-white/80">
              Your Financial Copilot
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="
            rounded-xl
            p-2
            transition
            hover:bg-white/20
          "
        >
          <X size={20} />
        </button>
      </div>

      {/* Conversation */}
      <div className="flex-1 overflow-y-auto bg-slate-50 p-5">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            message={message.text}
            isUser={message.isUser}
          />
        ))}

        {chat.isPending && (
          <TypingIndicator />
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Questions */}
      <div className="border-t border-slate-200 bg-white p-4">
        <p className="mb-3 text-sm font-semibold text-slate-700">
          Try asking
        </p>

        <div className="flex flex-wrap gap-2">
          {QUESTIONS.map((question) => (
            <SuggestedQuestion
              key={question}
              question={question}
              onClick={sendMessage}
            />
          ))}
        </div>
      </div>

      {/* Input */}
      <ChatInput
        onSend={sendMessage}
      />
    </motion.div>
  );
};

export default FloatingAiPanel;