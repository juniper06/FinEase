"use server";
import { useFetch } from "@/lib/fetch";
import { revalidatePath } from "next/cache";

export async function editUser(id: string, values: any) {
  const response = await useFetch(
    `${process.env.SERVER_API}/user/edit/${id}`,
    {
      method: "PUT",
      body: JSON.stringify(values),
    }
  );
  revalidatePath("/user");
  return response.json();
}

export async function addUser(values: any) {
  const response = await useFetch(`${process.env.SERVER_API}/user/create`, {
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

export async function getByAuth() {
  const response = await useFetch(
    `${process.env.SERVER_API}/user/get-by-auth`
  );
  return response.json();
}

export type User = {
  id: string;
  username: string;
  email: string;
  createdAt: string;
};
