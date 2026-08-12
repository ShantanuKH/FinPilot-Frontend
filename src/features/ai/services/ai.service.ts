import { apiClient } from "@/lib/axios";

import type {
  AiAdviceResponse,
  AiChatRequest,
  AiChatResponse,
} from "../types/ai.types";

export const getAiAdvice =
  async (): Promise<AiAdviceResponse> => {
    const { data } =
      await apiClient.get<AiAdviceResponse>(
        "/ai/advice"
      );

    return data;
  };

export const chatWithAi = async (
  request: AiChatRequest
): Promise<AiChatResponse> => {
  const { data } =
    await apiClient.post<AiChatResponse>(
      "/ai/chat",
      request
    );

  return data;
};