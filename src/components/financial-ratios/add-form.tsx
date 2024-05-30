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
import { addFinancialRatio } from "@/actions/financial-ratio.action";

const formSchema = z.object({
  assets: z.coerce.number(),
  revenue: z.coerce.number(),
  liabilities: z.coerce.number(),
  netIncome: z.coerce.number(),
});

export default function AddFinancialRatios() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      assets: 0,
      revenue: 0,
      liabilities: 0,
      netIncome: 0,
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await addFinancialRatio(values);
    if(result.error) {
      console.log(result.message);
      toast({
        title: "Failed to add Financial Ratio"
      });
      return;
    }
    toast({
      title: "Successfully added Financial Ratio",
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
          name="assets"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Current Assets
                </FormLabel>
                <FormControl>
                  <Input {...field} className="w-[300px] md:w-[555px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="revenue"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Revenue
                </FormLabel>
                <FormControl>
                  <Input {...field} className="w-[300px] md:w-[555px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="liabilities"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Current Liabilities
                </FormLabel>
                <FormControl>
                  <Input {...field} className="w-[300px] md:w-[555px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="netIncome"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Net Income
                </FormLabel>
                <FormControl>
                  <Input {...field} className="w-[300px] md:w-[555px]"/>
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
