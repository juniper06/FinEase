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

export async function getExpensesCategoryList(){
  const response = await useFetch(
    `${process.env.SERVER_API}/expense-category`
  );
  return response.json();
}

export async function addExpenses(values: any) {
  const response = await useFetch(
    `${process.env.SERVER_API}/expense`,
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