"use client";
import * as z from "zod";
import { useForm, Controller } from "react-hook-form";
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
import { useState } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  cash: z.coerce.number(),
  monthlyBurn: z.coerce.number(),
});

export default function CashRunway() {
  const [runway, setRunway] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cash: 0,
      monthlyBurn: 0,
    },
  });

  const calculateRunway = (cash: number, monthlyBurn: number) => {
    if (monthlyBurn === 0) return null;
    return cash / monthlyBurn;
  };

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const { cash, monthlyBurn } = values;
    const calculatedRunway = calculateRunway(cash, monthlyBurn);
    setRunway(calculatedRunway);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="md:flex md:flex-col md:gap-5 md:justify-center md:items-center"
      >
        <FormField
          control={form.control}
          name="cash"
          render={({ field }) => {
            return (
              <FormItem className="md:flex md:flex-row md:justify-center md:items-center md:gap-[130px]">
                <FormLabel className="text-[20px] font-medium md:text-[#00FFFF]">
                  Total Cash
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="md:w-[400px] md:bg-transparent md:text-white md:border-[#00FFFF] md:text-[30px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="monthlyBurn"
          render={({ field }) => {
            return (
              <FormItem className="md:flex md:flex-row md:justify-center md:items-center md:gap-[100px] ">
                <FormLabel className="text-[20px] font-medium md:text-[#00FFFF]">
                  Average <br /> Monthly Burn
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="md:w-[400px] md:bg-transparent md:text-white md:border-[#00FFFF] md:text-[30px]"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="md:w-[1085px] md:h-[270px] md:border-solid md:border-2 md:border-[#00FFFF] md:mt-[20px] md:flex md:justify-center">
          <div className="md:w-[500px] md:flex md:justify-center md:items-center md:flex-col">
            <h1 className="md:text-[50px] md:text-[#00FFFF]">
              Your Cash Runway
            </h1>
            <div className=" md:border-solid md:border-2 md:border-[#00FFFF] md:w-[400px] md:h-[100px] md:flex md:justify-center md:items-center">
              <h1 className="md:text-[30px] md:text-white">
                {runway !== null ? `${runway.toFixed(2)} months` : "N/A"}
              </h1>
            </div>
          </div>
        </div>
        <Button type="submit">Calculate</Button>
      </form>
    </Form>
  );
}