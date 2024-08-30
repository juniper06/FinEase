"use server";
import { useFetch } from "@/lib/fetch";

export async function addCustomer(values: any) {
  try {
    const response = await useFetch(`${process.env.SERVER_API}/customer`, {
      method: "POST",
      body: JSON.stringify(values),
    });
    if (!response.ok) {
      let errorMessage = "Failed to add customer.";
      if (response.status === 404) {
        errorMessage = "customer not found.";
      } else {
        errorMessage = "Something went wrong.";
      }
      return {
        error: errorMessage,
      };
    }
    return {
      success: true,
    };
  } catch (error) {
    return {
      error: "Network error. Please try again.",
    };
  }
}