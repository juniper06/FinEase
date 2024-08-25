import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  category: z.string({
    message: "Due Date is Required",
  }),
});

export const AddCategory = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="md:w-60 md:text-lg ">
                Category Name
              </FormLabel>
              <FormControl>
                <Input required {...field} className="md:w-[400px]" />
              </FormControl>
            </FormItem>
          )}
        />
        <div className="flex justify-end mt-10 gap-5">
          <Button variant="outline" className="w-[100px]">Cancel</Button>
          <Button className="w-[100px]" onClick={form.handleSubmit(handleSubmit)}>Add</Button>
        </div>
      </form>
    </Form>
  );
};