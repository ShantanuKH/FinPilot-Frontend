import {
  useEffect,
  useState,
} from "react";

import {
  Bug,
  CheckCircle2,
  Lightbulb,
  MessageSquare,
  Send,
  Sparkles,
  X,
} from "lucide-react";

import { sendFeedback } from "../services/feedback.service";

import type {
  FeedbackFormData,
  FeedbackType,
} from "../types/feedback.types";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  userEmail?: string;
}

const feedbackTypes: {
  value: FeedbackType;
  label: string;
  description: string;
  icon: typeof Bug;
}[] = [
  {
    value: "Bug Report",
    label: "Report a problem",
    description:
      "Something isn't working correctly.",
    icon: Bug,
  },
  {
    value: "Feature Request",
    label: "Request a feature",
    description:
      "Suggest something you'd like to see.",
    icon: Lightbulb,
  },
  {
    value: "Improvement",
    label: "Suggest an improvement",
    description:
      "Tell us how we can make FinPilot better.",
    icon: Sparkles,
  },
  {
    value: "General Feedback",
    label: "General feedback",
    description:
      "Share your thoughts about FinPilot.",
    icon: MessageSquare,
  },
];

const FeedbackModal = ({
  isOpen,
  onClose,
  userName = "",
  userEmail = "",
}: FeedbackModalProps) => {
  const [feedbackType, setFeedbackType] =
    useState<FeedbackType>("General Feedback");

  const [message, setMessage] =
    useState("");

  const [email, setEmail] =
    useState(userEmail);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [isSuccess, setIsSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setEmail(userEmail);
    setError("");
    setIsSuccess(false);
  }, [isOpen, userEmail]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleEscape = (
      event: KeyboardEvent
    ) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener(
      "keydown",
      handleEscape
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const trimmedMessage =
      message.trim();

    const trimmedEmail =
      email.trim();

    if (!trimmedMessage) {
      setError(
        "Please tell us a little about your feedback."
      );
      return;
    }

    if (trimmedMessage.length < 10) {
      setError(
        "Please provide a little more detail so we can understand your feedback."
      );
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await sendFeedback({
        formData: {
          feedbackType,
          message: trimmedMessage,
          email: trimmedEmail,
        },
        userName,
      });

      setIsSuccess(true);
      setMessage("");
    } catch (submissionError) {
      console.error(
        "Failed to send feedback:",
        submissionError
      );

      setError(
        "We couldn't send your feedback right now. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (isSubmitting) {
      return;
    }

    onClose();
  };

  return (
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-center
        justify-center
        bg-slate-950/40
        p-4
        backdrop-blur-sm
      "
      onMouseDown={(event) => {
        if (
          event.target === event.currentTarget
        ) {
          handleClose();
        }
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="feedback-title"
        className="
          relative
          w-full
          max-w-xl
          overflow-hidden
          rounded-3xl
          border
          border-border
          bg-card
          shadow-2xl
        "
      >
        {/* Header */}
        <div className="border-b border-border px-6 py-5 sm:px-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-start gap-3">
              <div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  bg-primary/10
                  text-primary
                "
              >
                <MessageSquare
                  size={21}
                  strokeWidth={2}
                />
              </div>

              <div>
                <h2
                  id="feedback-title"
                  className="
                    text-lg
                    font-bold
                    tracking-tight
                    text-foreground
                  "
                >
                  Help us improve FinPilot
                </h2>

                <p className="mt-1 text-sm leading-5 text-muted-foreground">
                  Found a problem or have an idea?
                  We'd love to hear from you.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClose}
              disabled={isSubmitting}
              aria-label="Close feedback"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-xl
                text-muted-foreground
                transition
                hover:bg-muted
                hover:text-foreground
                disabled:cursor-not-allowed
                disabled:opacity-50
              "
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {isSuccess ? (
          <div className="px-6 py-12 text-center sm:px-7">
            <div
              className="
                mx-auto
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-full
                bg-emerald-100
                text-emerald-600
              "
            >
              <CheckCircle2
                size={28}
              />
            </div>

            <h3 className="mt-5 text-xl font-bold text-foreground">
              Thanks for helping us improve!
            </h3>

            <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
              Your feedback has been received.
              We appreciate you taking the time to
              make FinPilot better.
            </p>

            <button
              type="button"
              onClick={onClose}
              className="
                mt-7
                rounded-xl
                bg-primary
                px-5
                py-2.5
                text-sm
                font-semibold
                text-primary-foreground
                shadow-sm
                transition
                hover:opacity-90
              "
            >
              Done
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6 px-6 py-6 sm:px-7"
          >
            {/* Feedback type */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-foreground">
                What would you like to share?
              </label>

              <div className="grid gap-2 sm:grid-cols-2">
                {feedbackTypes.map(
                  ({
                    value,
                    label,
                    description,
                    icon: Icon,
                  }) => {
                    const isSelected =
                      feedbackType === value;

                    return (
                      <button
                        key={value}
                        type="button"
                        onClick={() =>
                          setFeedbackType(value)
                        }
                        className={`
                          flex
                          items-start
                          gap-3
                          rounded-2xl
                          border
                          p-3
                          text-left
                          transition-all
                          duration-200

                          ${
                            isSelected
                              ? "border-primary bg-primary/5 shadow-sm"
                              : "border-border bg-background hover:border-primary/30 hover:bg-muted/50"
                          }
                        `}
                      >
                        <div
                          className={`
                            mt-0.5
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl

                            ${
                              isSelected
                                ? "bg-primary/10 text-primary"
                                : "bg-muted text-muted-foreground"
                            }
                          `}
                        >
                          <Icon size={17} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground">
                            {label}
                          </p>

                          <p className="mt-0.5 text-xs leading-4 text-muted-foreground">
                            {description}
                          </p>
                        </div>
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="feedback-email"
                className="mb-2 block text-sm font-semibold text-foreground"
              >
                Email
                <span className="ml-1 font-normal text-muted-foreground">
                  (optional)
                </span>
              </label>

              <input
                id="feedback-email"
                type="email"
                value={email}
                onChange={(event) =>
                  setEmail(event.target.value)
                }
                placeholder="you@example.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-border
                  bg-background
                  px-4
                  py-3
                  text-sm
                  text-foreground
                  outline-none
                  transition
                  placeholder:text-muted-foreground
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              />

              <p className="mt-1.5 text-xs text-muted-foreground">
                Leave your email if you'd like us to
                follow up with you.
              </p>
            </div>

            {/* Message */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="feedback-message"
                  className="text-sm font-semibold text-foreground"
                >
                  Your feedback
                </label>

                <span className="text-xs text-muted-foreground">
                  {message.length}/1000
                </span>
              </div>

              <textarea
                id="feedback-message"
                value={message}
                maxLength={1000}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                placeholder="Tell us what happened, what you'd like to see, or how we can improve FinPilot..."
                rows={5}
                className="
                  w-full
                  resize-none
                  rounded-xl
                  border
                  border-border
                  bg-background
                  px-4
                  py-3
                  text-sm
                  leading-6
                  text-foreground
                  outline-none
                  transition
                  placeholder:text-muted-foreground
                  focus:border-primary
                  focus:ring-2
                  focus:ring-primary/10
                "
              />
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-destructive/20 bg-destructive/5 px-4 py-3">
                <p className="text-sm font-medium text-destructive">
                  {error}
                </p>
              </div>
            )}

            {/* Actions */}
            <div className="flex justify-end gap-3 border-t border-border pt-5">
              <button
                type="button"
                onClick={handleClose}
                disabled={isSubmitting}
                className="
                  rounded-xl
                  border
                  border-border
                  bg-background
                  px-4
                  py-2.5
                  text-sm
                  font-semibold
                  text-foreground
                  transition
                  hover:bg-muted
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={
                  isSubmitting ||
                  !message.trim()
                }
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-xl
                  bg-primary
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-primary-foreground
                  shadow-sm
                  transition
                  hover:opacity-90
                  disabled:cursor-not-allowed
                  disabled:opacity-50
                "
              >
                {isSubmitting ? (
                  <>
                    <span
                      className="
                        h-4
                        w-4
                        animate-spin
                        rounded-full
                        border-2
                        border-primary-foreground/30
                        border-t-primary-foreground
                      "
                    />

                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} />

                    Send Feedback
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default FeedbackModal;