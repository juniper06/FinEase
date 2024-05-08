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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const Categories = z.enum(["Salary", "Freelance", "Investment", "Other"]);
const FrequencyType = z.enum(["Daily", "Weekly", "Monthly", "Yearly"]);
const StatusType = z.enum(["Active", "Closed"]);

const formSchema = z.object({
  categories: Categories,
  recurringAmount: z.number().nonnegative(),
  frequencyType: FrequencyType,
  status: StatusType,
});

export default function AddExpensesFrequency() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categories: "Salary",
      recurringAmount: 0,
      frequencyType: "Daily",
      status: "Active",
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
        <FormField
          control={form.control}
          name="categories"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Select Category
                </FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-[300px] md:w-[555px] h-[60px] rounded-[5px] bg-white drop-shadow-xl">
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
        <FormField
          control={form.control}
          name="recurringAmount"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Recurring Amount
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
          name="frequencyType"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Select Frequency Type
                </FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-[300px] md:w-[555px] h-[60px] rounded-[5px] bg-white drop-shadow-xl">
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
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Select Status
                </FormLabel>
                <FormControl>
                  <Select>
                    <SelectTrigger className="w-[300px] md:w-[555px] h-[60px] rounded-[5px] bg-white drop-shadow-xl">
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
