import RegisterForm from "@/components/auth/register-form";
import Link from "next/link";
import { Suspense } from "react";

export default async function LoginPage() {
  return (
    <div className="grid grid-cols-2 min-h-screen">
      <div className="hidden md:flex items-center md:col-span-1">
        <div className="container max-w-4xl space-y-5">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold">Welcome back!</h1>
          </div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
            quas consequuntur repudiandae ipsa rerum temporibus quaerat aliquid
            ut pariatur quo est assumenda dignissimos, commodi corporis dolorum
            cum, illo, provident debitis?
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center col-span-2 md:col-span-1">
        <div className="container max-w-lg space-y-5">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-medium">Register</h1>
            <p className="text-gray-500">Enter your credentials here</p>
          </div>
          <Suspense>
            <RegisterForm />
          </Suspense>
          <Link className="link link-primary" href="/login">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}
