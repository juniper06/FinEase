"use server";
import { useFetch } from "@/lib/fetch";

export async function addInvoice(values: any) {
  const response = await useFetch(`${process.env.SERVER_API}/invoice`, {
    method: "POST",
    body: JSON.stringify(values),
  });
  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }
  return response.json();
}