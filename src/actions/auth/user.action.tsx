"use server";
import { useFetch } from "@/lib/fetch";

export async function getByAuth() {
  const response = await useFetch(`${process.env.SERVER_API}/user/get-by-auth`);
  return response.json();
}

export async function getUserData() {
  const result = await getByAuth();
  if (result.error) {
    throw new Error(result.error.message);
  }
  return result.data;
}

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
};
