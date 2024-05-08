"use server";
import { useFetch } from "@/lib/fetch";


export async function addIncomeTransaction(values: any) {
  const response = await useFetch(
    `${process.env.SERVER_API}/income-transaction`,
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

export async function getIncomeSourceList() {
  const response = await useFetch(
    `${process.env.SERVER_API}/income-source`
  );
  return response.json();
}
