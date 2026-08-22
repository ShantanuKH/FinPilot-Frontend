export type FeedbackType =
  | "Bug Report"
  | "Feature Request"
  | "Improvement"
  | "General Feedback";

export interface FeedbackFormData {
  feedbackType: FeedbackType;
  message: string;
  email: string;
}