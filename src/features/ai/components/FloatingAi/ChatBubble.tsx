import { Bot, UserCircle2 } from "lucide-react";

interface Props {
  message: string;
  isUser: boolean;
}

const ChatBubble = ({
  message,
  isUser,
}: Props) => {
  if (isUser) {
    return (
      <div className="mb-5 flex justify-end">
        <div
          className="
            flex
            max-w-[80%]
            items-end
            gap-3
          "
        >
          <div
            className="
              rounded-3xl
              rounded-br-md
              bg-gradient-to-r
              from-emerald-600
              to-emerald-700
              px-5
              py-3
              text-sm
              leading-7
              text-white
              shadow
            "
          >
            {message}
          </div>

          <UserCircle2
            size={34}
            className="text-slate-500"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="mb-5 flex">
      <div
        className="
          flex
          max-w-[85%]
          items-start
          gap-3
        "
      >
        <div
          className="
            rounded-full
            bg-gradient-to-r
            from-emerald-600
            to-emerald-700
            p-2
            text-white
          "
        >
          <Bot size={20} />
        </div>

        <div
          className="
            rounded-3xl
            rounded-tl-md
            bg-slate-100
            px-5
            py-3
            text-sm
            leading-7
            text-slate-700
          "
        >
          {message}
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;