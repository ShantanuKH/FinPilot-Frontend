interface Props {
  question: string;
  onClick: (question: string) => void;
}

const SuggestedQuestion = ({
  question,
  onClick,
}: Props) => {
  return (
    <button
      onClick={() =>
        onClick(question)
      }
      className="
        rounded-full
        border
        border-slate-200
        bg-slate-100
        px-4
        py-2
        text-sm
        transition-all
        hover:-translate-y-0.5
        hover:border-violet-300
        hover:bg-violet-50
      "
    >
      {question}
    </button>
  );
};

export default SuggestedQuestion;