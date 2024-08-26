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

export async function getAllInvoices(userId: string) {
  const response = await useFetch(`${process.env.SERVER_API}/invoice`, {
    method: "GET",
  });
  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }
  const invoices = await response.json();
  return invoices.filter(
    (invoice: { userId: string }) => invoice.userId === userId
  );
}

export async function getInvoice(id: string) {
  const response = await useFetch(`${process.env.SERVER_API}/invoice/${id}`, {
    method: "GET",
  });
  if (response.status === 500) {
    return {
      error: "Something went wrong",
    };
  }
  if (response.status === 404) {
    return {
      error: "Invoice not found",
    };
  }
  return response.json();
}