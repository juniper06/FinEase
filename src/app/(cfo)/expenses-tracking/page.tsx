import Layout from "@/components/Navbar";
import { Expenses, expensesColumns } from "@/components/cfo/expenses/columns";
import { } from "@/components/cfo/invoices/columns";
import { DataTable } from "@/components/data-table";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { CirclePlus } from "lucide-react";
import Link from "next/link";
import React from "react";

async function getData(): Promise<Expenses[]> {
  // Fetch data from your API here.
  return [
    {
      date: "16 Jun 2024",
      expenseAccount: "Tuslob Buwa",
      referenceNumber: "3123124",
      modeOfPayment: "Cash",
      amount: 1000,
    },
  ];
}

export default async function ItemsPage() {
  const data = await getData();

  return (
    <Layout>
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl w-full">
          All Expenses
        </h1>
        <Button className="flex gap-2 text-md" asChild>
          <Link href="/expenses-tracking/add-expenses">
            <CirclePlus className="h-6 w-6" />
            New
          </Link>
        </Button>
      </div>
      <Separator />
      <DataTable columns={expensesColumns} data={data} />
    </Layout>
  );
}

