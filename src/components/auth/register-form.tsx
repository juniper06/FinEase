"use client";
import { addUser } from "@/actions/user.action";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const userSchema = z
  .object({
    username: z.string().min(1, {
      message: "Username of user must required!",
    }),
    password: z.string().min(1, {
      message: "Password of user must required!",
    }),
    confirmPassword: z.string(),
    mobileNumber: z.string().min(1, {
      message: "Mobile number of user must required!",
    }),
    email: z
      .string()
      .min(1, {
        message: "Sponsor of member must required!",
      })
      .email("This is not a valid email."),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type formSchemaType = z.infer<typeof userSchema>;

export default function RegisterForm() {
  const [error, setError] = useState<string | undefined>(undefined);
  const router = useRouter();

  const form = useForm<formSchemaType>({
    resolver: zodResolver(userSchema),
    defaultValues: {
      username: "",
      password: "",
      email: "",
      mobileNumber: "",
    },
  });

  const onSubmit = async (values: formSchemaType) => {
    const result = await addUser({
      username: values.username,
      password: values.password,
      email: values.email,
      mobileNumber: values.mobileNumber,
    });
    if (result.error) {
      setError(result.message);
      return;
    }
    router.push("/login");
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <input
        type="text"
        placeholder="Enter username"
        className="input input-bordered input-primary w-full"
        {...form.register("username")}
      />
      <input
        type="password"
        placeholder="Enter password"
        className="input input-bordered input-primary w-full"
        {...form.register("password")}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        className="input input-bordered input-primary w-full"
        {...form.register("confirmPassword")}
      />
      <input
        type="email"
        placeholder="Enter email"
        className="input input-bordered input-primary w-full"
        {...form.register("email")}
      />
      <input
        type="text"
        placeholder="Enter mobileNumber"
        className="input input-bordered input-primary w-full"
        {...form.register("mobileNumber")}
      />
      <button
        disabled={form.formState.isSubmitting}
        type="submit"
        className="btn btn-primary w-full"
      >
        Sign Up
      </button>
      {form.formState.isSubmitted && error && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
      {form.formState.isSubmitted && form.formState.errors && (
        <>
          {form.formState.errors.root && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col">
                <span>{form.formState.errors.root?.message}</span>
              </div>
            </div>
          )}
          {form.formState.errors.username && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col">
                <span>{form.formState.errors.username?.message}</span>
              </div>
            </div>
          )}
          {form.formState.errors.password && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col">
                <span>{form.formState.errors.password?.message}</span>
              </div>
            </div>
          )}
          {form.formState.errors.confirmPassword && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col">
                <span>{form.formState.errors.confirmPassword?.message}</span>
              </div>
            </div>
          )}
          {form.formState.errors.email && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col">
                <span>{form.formState.errors.email?.message}</span>
              </div>
            </div>
          )}
          {form.formState.errors.mobileNumber && (
            <div role="alert" className="alert alert-error">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-current shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="flex flex-col">
                <span>{form.formState.errors.mobileNumber?.message}</span>
              </div>
            </div>
          )}
        </>
      )}
    </form>
  );
}
