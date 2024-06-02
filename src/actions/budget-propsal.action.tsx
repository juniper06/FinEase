"use server";
import { useFetch } from "@/lib/fetch";

export interface BudgetProposal {
  id: number;
  title: string;
  status: string;
  createdAt: string;
  cost: number;
  salary: number;
  rental: number;
  maintenance: number;
  supplies: number;
  assumptions: string;
  methodology: string;
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

export async function updateBudgetProposal(id: string, values: any) {
  console.log(`Updating proposal with id: ${id}, values: ${JSON.stringify(values)}`);
  const response = await useFetch(
    `${process.env.SERVER_API}/budget-proposal/${id}`,
    {
      method: "PATCH",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  console.log(`Response status: ${response.status}`);
  
  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }
  if (response.status === 404) {
    return {
      error: "Not Found",
    };
  }

  return response.json();
}