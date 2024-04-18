"use client";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

const IncomeSourceEnum = z.enum(["Salary", "Freelance", "Investment", "Other"]);

const formSchema = z.object({
  incomeSource: IncomeSourceEnum,
  incomeAmount: z.number(),
  transactionDate: z.date({
    required_error: "A date of income transaction is required.",
  }),
  referenceNumber: z.string().optional(),
  notes: z.string().min(1),
});

export default function AddBusinessTransaction() {
  const [file, setFile] = useState<File>();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      incomeSource: "Salary",
      incomeAmount: 0,
      transactionDate: new Date(),
      referenceNumber: "",
      notes: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(
        key,
        String(values[key as keyof z.infer<typeof formSchema>])
      );
    });

    // Remaining form data
    console.log("Other form data:", values);
  };

  const handleChangeReceipt = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-[500px] flex flex-col gap-5">
        <FormField
          control={form.control}
          name="incomeAmount"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Select Income Source
                </FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-full h-[60px] rounded-[5px] bg-white drop-shadow-xl">
                      <SelectValue placeholder="Select Income Source" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#119fa4] text-white font-medium ">
                      <SelectGroup>
                        <SelectLabel>Income Sources</SelectLabel>
                        <SelectItem value="apple">Apple</SelectItem>
                        <SelectItem value="banana">Banana</SelectItem>
                        <SelectItem value="blueberry">Blueberry</SelectItem>
                        <SelectItem value="grapes">Grapes</SelectItem>
                        <SelectItem value="pineapple">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex gap-2">
          <FormField
            control={form.control}
            name="incomeAmount"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    Input Income Amount
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-[245px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="transactionDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Date of Transaction
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[249px] h-[60px] pl-3 text-left font-medium bg-white text-black rounded-[5px] drop-shadow-xl border border-input",
                          !field.value && "text-muted-foreground"
                        )}>
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
        <FormField
          control={form.control}
          name="referenceNumber"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Reference Number
                </FormLabel>
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
          name="notes"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Notes
                </FormLabel>
                <FormControl>
                  <Textarea {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormItem>
          <FormLabel className="text-[16px] font-medium">
            Attach Receipt
          </FormLabel>
          <FormControl>
            <Input
              type="file"
              accept="image/*"
              multiple={false}
              onChange={handleChangeReceipt}
              className="bg-white"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
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
