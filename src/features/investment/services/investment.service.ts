import { apiClient } from "@/lib/axios";

import type {
  CreateInvestmentRequest,
  Investment,
  InvestmentRiskAnalysis,
  InvestmentSummary,
  PortfolioAllocation,
  UpdateInvestmentRequest,
} from "../types/investment.types";

export const getInvestments = async () => {
  const { data } =
    await apiClient.get<Investment[]>(
      "/investments"
    );

  return data;
};

export const createInvestment = async (
  request: CreateInvestmentRequest
) => {
  const { data } =
    await apiClient.post<Investment>(
      "/investments",
      request
    );

  return data;
};

export const updateInvestment = async (
  id: number,
  request: UpdateInvestmentRequest
) => {
  const { data } =
    await apiClient.put<Investment>(
      `/investments/${id}`,
      request
    );

  return data;
};

export const deleteInvestment = async (
  id: number
) => {
  await apiClient.delete(
    `/investments/${id}`
  );
};

export const getInvestmentSummary =
  async () => {
    const { data } =
      await apiClient.get<InvestmentSummary>(
        "/investments/summary"
      );

    return data;
  };

export const getPortfolioAllocation =
  async () => {
    const { data } =
      await apiClient.get<
        PortfolioAllocation[]
      >("/investments/allocation");

    return data;
  };

export const getRiskAnalysis =
  async () => {
    const { data } =
      await apiClient.get<InvestmentRiskAnalysis>(
        "/investments/risk-analysis"
      );

    return data;
  };