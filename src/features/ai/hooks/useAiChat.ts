import { useMutation } from "@tanstack/react-query";

import { chatWithAi } from "../services/ai.service";

export const useAiChat = () => {
  return useMutation({
    mutationFn: chatWithAi,
  });
};