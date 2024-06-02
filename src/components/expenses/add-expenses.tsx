"use client";
import React, { useEffect, useState } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import { addExpenses, getExpensesCategoryList } from "@/actions/expenses-action";

const modeOfPayment = z.enum([
  "Cash",
  "Credit Card",
  "Bank Transfer",
  "Online Payment Systems",
]);

const formSchema = z.object({
  title: z.string().min(1),
  sourceId: z.string().min(1), // Updated to be a string to accommodate dynamic categories
  amount: z.coerce.number(),
  date: z.date(),
  modeOfPayment: modeOfPayment,
  notes: z.string().min(1),
});

export default function AddExpenses() {
  const { toast } = useToast();
  const [file, setFile] = useState<File>();
  const [categoryList, setCategoryList] = useState<any[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      sourceId: "",
      amount: 0,
      date: new Date(),
      modeOfPayment: "Cash",
      notes: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getExpensesCategoryList();
      setCategoryList(result);
      console.log(result);
      console.log("Successfully fetched");
    };
    fetchData();
  }, []);

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => {
      formData.append(
        key,
        String(values[key as keyof z.infer<typeof formSchema>])
      );
    });
    console.log(formData.getAll);
    console.log(values);
    const result = await addExpenses(formData);
    if (result.error) {
      console.log(result.message);
      toast({
        title: "Failed to add Expenses Information",
      });
      return;
    }
    toast({
      title: "Successfully added Expenses Information",
    });
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
        className="w-[500px] flex flex-col gap-5 justify-center items-center"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Expenses Title
                </FormLabel>
                <FormControl>
                  <Input {...field} className="w-[340px] md:w-[555px]" />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex gap-1">
          <FormField
            control={form.control}
            name="sourceId"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    Select Category
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-[170px] md:w-[245px] h-[60px] rounded-[5px] bg-white drop-shadow-xl">
                        <SelectValue placeholder="Select Income Source" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#119fa4] text-white font-medium w-[150px] md:w-[245px]">
                        {categoryList.map((expensesCategory) => (
                          <SelectItem
                            key={expensesCategory.id}
                            value={String(expensesCategory.id)}
                          >
                            {expensesCategory.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    Input Amount
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-[170px] md:w-[245px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <div className="flex gap-1">
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Date
                </FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-[160px] md:w-[245px] h-[60px] pl-3 text-[20px] flex justify-center text-left font-medium bg-white text-black rounded-[5px] drop-shadow-xl border border-input",
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
                  <PopoverContent
                    className="w-auto p-0 bg-white "
                    align="start"
                  >
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
          <FormField
            control={form.control}
            name="modeOfPayment"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    Select Mode of Payment
                  </FormLabel>
                  <FormControl>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger className="w-[160px] md:w-[245px] h-[60px] rounded-[5px] bg-white drop-shadow-xl">
                        <SelectValue placeholder="Select Mode of Payment" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#119fa4] text-white font-medium ">
                        <SelectGroup>
                          <SelectLabel>Mode of Payment</SelectLabel>
                          <SelectItem value="Cash">Cash</SelectItem>
                          <SelectItem value="Credit Card">
                            Credit Card
                          </SelectItem>
                          <SelectItem value="Bank Transfer">
                            Bank Transfer
                          </SelectItem>
                          <SelectItem value="Online Payment Systems">
                            Online Payment Systems
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
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
              className="bg-white w-[300px] md:w-[555px]"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input notes
                </FormLabel>
                <FormControl>
                  <Textarea {...field} className="w-[340px] md:w-[555px]" />
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
