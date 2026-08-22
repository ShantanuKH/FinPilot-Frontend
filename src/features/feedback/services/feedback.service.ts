import emailjs from "@emailjs/browser";

import type { FeedbackFormData } from "../types/feedback.types";

const SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID;

const TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_FEEDBACK_TEMPLATE_ID;

const PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

interface SendFeedbackParams {
  formData: FeedbackFormData;
  userName: string;
}

export const sendFeedback = async ({
  formData,
  userName,
}: SendFeedbackParams): Promise<void> => {
  if (
    !SERVICE_ID ||
    !TEMPLATE_ID ||
    !PUBLIC_KEY
  ) {
    throw new Error(
      "EmailJS configuration is missing."
    );
  }

  const templateParams = {
    user_name: userName || "FinPilot User",
    user_email: formData.email || "Not provided",
    feedback_type: formData.feedbackType,
    message: formData.message,
    submitted_at: new Date().toLocaleString(
      "en-IN",
      {
        dateStyle: "medium",
        timeStyle: "short",
      }
    ),
  };

  await emailjs.send(
    SERVICE_ID,
    TEMPLATE_ID,
    templateParams,
    {
      publicKey: PUBLIC_KEY,
    }
  );
};