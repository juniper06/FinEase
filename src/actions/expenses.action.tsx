"use server";
import { useFetch } from "@/lib/fetch";

export async function addExpenses(values: any) {
  try {
    const response = await useFetch(`${process.env.SERVER_API}/expenses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      let errorMessage = "Failed to add expenses.";
      if (response.status === 404) {
        errorMessage = "Expenses not found.";
      } else if (response.status === 500) {
        errorMessage = "Internal server error.";
      } else {
        errorMessage = "Something went wrong.";
      }
      return {
        error: errorMessage,
      };
    }
    const data = await response.json();
    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      error: "Network error. Please try again.",
    };
  }
}