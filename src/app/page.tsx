import { getByAuth } from "@/actions/user.action";
import { LogoutButton } from "@/components/auth/logout-button";
import Image from "next/image";

export default async function Home() {
  const result = await getByAuth();
  if (result.error) {
    throw new Error(result.error.message);
  }
  const user = result.data;
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {user.username}
      <LogoutButton />
    </main>
  );
}
