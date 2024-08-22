"use client";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  email: z.string().min(1, {
    message: "Email is required!",
  }),
  password: z.string().min(1, {
    message: "Password is required!",
  }),
});

type formSchemaType = z.infer<typeof formSchema>;

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || DEFAULT_LOGIN_REDIRECT;
  const router = useRouter();
  const [error, setError] = useState<string | undefined>(undefined);

  const form = useForm<formSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setError(undefined);
    }, 5000);

    return () => clearTimeout(timeOut);
  }, [error]);

  const onSubmit = async (values: formSchemaType) => {
    const response = await signIn("credentials", {
      ...values,
      redirect: false,
    });
    if (!response) {
      setError("Something went wrong");
      return;
    }
    if (response.error) {
      setError("Invalid Credentials");
    } else {
      router.push(callbackUrl);
    }
  };

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email and password to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="text"
              {...form.register("email")}
            />
            {form.formState.errors.email && (
              <div role="alert" className="text-red-500 text-sm">
                {form.formState.errors.email.message}
              </div>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              {...form.register("password")}
            />
            {form.formState.errors.password && (
              <div role="alert" className="text-red-500 text-sm">
                {form.formState.errors.password.message}
              </div>
            )}
          </div>
          {error && (
            <div role="alert" className="text-red-500 text-sm">
              {error}
            </div>
          )}
          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            Login
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="underline">
            Sign up
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
