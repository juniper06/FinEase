"use server";
import { useFetch } from "@/lib/fetch";

export interface BudgetProposal {
  id: number;
  title: string;
  status: string;
}

export async function addBudgetProposal(values: any) {
  const response = await useFetch(
    `${process.env.SERVER_API}/budget-proposal`,
    {
      method: "POST",
      body: JSON.stringify(values),
    }
  );
  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }
  return response.json();
}

export async function getBudgetProposals() {
  const response = await useFetch(`${process.env.SERVER_API}/budget-proposal`, {
    method: "GET",
  });

  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }

  return response.json();
}

export async function getBudgetProposalById(id: string) {
  const response = await useFetch(`${process.env.SERVER_API}/budget-proposal/${id}`, {
    method: "GET",
  });

  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }

  return response.json();
}

export async function deleteBudgetProposal(id: string) {
  const response = await useFetch(`${process.env.SERVER_API}/budget-proposal/${id}`, {
    method: "DELETE",
  });

  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }

  return response.json();
}