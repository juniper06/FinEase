"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const formSchema = z
  .object({
    currentPassword: z.string().min(8),
    newPassword: z.string().min(8),
    confirmNewPassword: z.string().min(8),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New passwords do not match",
    path: ["confirmNewPassword"],
  });

export default function EditPassword() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-[500px] flex flex-col gap-5"
      >
        <FormField
          control={form.control}
          name="currentPassword"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">Enter Current Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <br />
        <FormField
          control={form.control}
          name="newPassword"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">Enter New Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="confirmNewPassword"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">Re-Enter New Password</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex gap-2 justify-center">
          <Button type="submit">Submit</Button>
          <Button asChild variant="outline">
            <Link href="/">Cancel</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
