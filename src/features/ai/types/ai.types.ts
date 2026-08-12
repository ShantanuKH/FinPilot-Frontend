export interface AiAdviceResponse {
  summary: string;
  strengths: string[];
  improvements: string[];
  actionItems: string[];
  motivation: string;
}

export interface AiChatRequest {
  message: string;
}

export interface AiChatResponse {
  answer: string;
}