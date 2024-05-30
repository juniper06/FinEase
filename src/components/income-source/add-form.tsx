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
import { useToast } from "@/components/ui/use-toast";
import { addIncomeSource } from "@/actions/income-source.action";

const formSchema = z.object({
  name: z.string().min(1),
  budget: z.coerce.number(),
});

export default function AddIncomeSource() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await addIncomeSource(values);
    if (result.error) {
      console.log(result.message);
      toast({
        title: "Failed to add Income Source",
      });
      return;
    }
    toast({
      title: "Successfully added Income Source",
    });
    console.log("Other form data:", values);
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-[500px] flex flex-col gap-5 justify-center items-center"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Income Source
                </FormLabel>
                <FormControl>
                  <Input {...field} className="w-[350px] md:w-[400px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex gap-2 justify-center mt-5">
          <Button type="submit">Submit</Button>
          <Button asChild variant="outline">
            <Link href="/">Cancel</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
