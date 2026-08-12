import { useQuery } from "@tanstack/react-query";

import { getAiAdvice } from "../services/ai.service";

export const useAiAdvice = () => {
  return useQuery({
    queryKey: ["ai-advice"],
    queryFn: getAiAdvice,
  });
};