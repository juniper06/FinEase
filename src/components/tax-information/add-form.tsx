"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";

const formSchema = z.object({
  stateIncomeTax: z.number().nonnegative(),
  salesTaxRate: z.number().nonnegative(),
  payrollTaxRate: z.number().nonnegative(),
  dueDate: z.date({
    required_error: "A date of income transaction is required.",
  }),
});

export default function AddTaxInformation() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      stateIncomeTax: 0,
      salesTaxRate: 0,
      payrollTaxRate: 0,
      dueDate: new Date(),
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-[500px] flex flex-col gap-5 justify-center items-center"
      >
        <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
          <FormField
            control={form.control}
            name="stateIncomeTax"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    Input State income tax
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-[300px] md:w-[275px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="salesTaxRate"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    Input Sales Tax Rate
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-[300px] md:w-[275px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="w-[200px] flex flex-col justify-center items-center gap-2 md:flex-row">
          <FormField
            control={form.control}
            name="payrollTaxRate"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    Input Payroll tax rate
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-[300px] md:w-[275px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="dueDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Due Date
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[300px] md:w-[275px] h-[60px] pl-3 text-left font-medium bg-white text-black rounded-[5px] drop-shadow-xl border border-input",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
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
