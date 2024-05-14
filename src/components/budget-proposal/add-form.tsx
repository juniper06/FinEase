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
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { addBudgetProposal } from "@/actions/budget-propsal.action";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  title: z.string().min(1),
  salary:z.coerce.number(),
  cost: z.coerce.number(),
  rental: z.coerce.number(),
  maintenance: z.coerce.number(),
  supplies: z.coerce.number(),
  assumptions: z.string().min(1),
  methodology: z.string().min(1),
});

export default function AddBudgetProposal() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      salary: 0,
      cost: 0,
      rental: 0,
      maintenance: 0,
      supplies: 0,
      assumptions: "",
      methodology: "",
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    const result = await addBudgetProposal(values);
    if(result.error) {
      console.log(result.message);
      toast({
        title: "Failed to Add Budget Proposal"
      });
      return;
    }
    toast({
      title: "Successfully added Budget Proposal",
    });
    console.log("Other form data:", values);
    console.log({ values });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-5 justify-center items-center"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                  Input project investment or source
                </FormLabel>
                <FormControl>
                  <Input {...field} className="w-[300px] md:w-[555px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex gap-1">
          <FormField
            control={form.control}
            name="salary"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    Input salaries
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-[150px] md:w-[245px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="cost"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    Input utility cost
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-[150px] md:w-[245px]" />
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
            name="rental"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    <br/>
                    Input rental fee
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-[150px] md:w-[245px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
          <FormField
            control={form.control}
            name="maintenance"
            render={({ field }) => {
              return (
                <FormItem>
                  <FormLabel className="text-[16px] font-medium">
                    Input maintenance <br/> cost
                  </FormLabel>
                  <FormControl>
                    <Input {...field} className="w-[150px] md:w-[245px]" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              );
            }}
          />
        </div>
        <FormField
          control={form.control}
          name="supplies"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                Input budget supplies
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
          name="assumptions"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                Input assumptions
                </FormLabel>
                <FormControl>
                  <Textarea {...field} className="w-[300px] md:w-[555px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="methodology"
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel className="text-[16px] font-medium">
                Input methodology
                </FormLabel>
                <FormControl>
                  <Textarea {...field} className="w-[300px] md:w-[555px]"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <div className="flex gap-2 justify-center mb-5">
          <Button type="submit">Submit</Button>
          <Button asChild variant="outline">
            <Link href="/">Cancel</Link>
          </Button>
        </div>
      </form>
    </Form>
  );
}
