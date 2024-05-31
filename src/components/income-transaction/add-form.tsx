"use client";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
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
import { useToast } from "@/components/ui/use-toast";
import {
  addIncomeTransaction,
  getIncomeSourceList,
} from "@/actions/income-transaction.action";

const formSchema = z.object({
  sourceId: z.coerce.number(),
  incomeAmount: z.coerce.number(),
  transactionDate: z.date({
    required_error: "A date of income transaction is required.",
  }),
  referenceNumber: z.string().min(1),
  notes: z.string().min(1),
});

export default function AddBusinessTransaction() {
  const [file, setFile] = useState<File>();
  const [incomeSourceList, setIncomeSourceList] = useState<any[]>([]);
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      sourceId: 0,
      incomeAmount: 0,
      transactionDate: new Date(),
      referenceNumber: "",
      notes: "",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      const result = await getIncomeSourceList();
      setIncomeSourceList(result);
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
    const result = await addIncomeTransaction(formData);
    if (result.error) {
      console.log(result.message);
      toast({
        title: "Failed to add Income Transaction",
      });
      return;
    }
    toast({
      title: "Successfully added Income Source",
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
          name="sourceId"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Select Income Source
                </FormLabel>
                <Select
                  value={field.value ? String(field.value) : ""}
                  onValueChange={(value) => field.onChange(Number(value))}
                >
                  <FormControl>
                    <SelectTrigger className="w-[300px] md:w-[555px] h-[60px] rounded-[5px] bg-white drop-shadow-xl">
                      <SelectValue placeholder="Select Income Source" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-[#119fa4] text-white font-medium ">
                    {incomeSourceList.map((incomeSource) => (
                      <SelectItem key={incomeSource.id} value={String(incomeSource.id)}>
                        {incomeSource.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex flex-col justify-center items-center gap-2 md:flex-row">
          <FormField
            control={form.control}
            name="incomeAmount"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="md:text-[16px] font-medium">
                    Input Income Amount
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
            name="transactionDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input Date of Transaction
                </FormLabel>
                <br />
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-auto md:w-[275px] h-[60px] pl-3 text-left font-medium bg-white text-black rounded-[5px] drop-shadow-xl border border-input",
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
                      onChange={field.onChange}
                      value={field.value}
                      maxDate={new Date()}
                      minDate={new Date("1900-01-01")}
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
                  <Input {...field} className="w-[300px] md:w-[555px]" />
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
                  <Textarea {...field} className="w-[300px] md:w-[555px]" />
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
              className="bg-white w-[300px] md:w-[555px]"
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
