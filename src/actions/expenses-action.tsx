"use server";
import { useFetch } from "@/lib/fetch";


export async function addExpensesCategory(values: any) {
  const response = await useFetch(
    `${process.env.SERVER_API}/expense-category`,
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