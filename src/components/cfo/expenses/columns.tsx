"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Expenses = {
  date: string;
  expenseAccount: string;
  referenceNumber: string;
  modeOfPayment: string;
  amount: number;
};

export const expensesColumns: ColumnDef<Expenses>[] = [
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "expenseAccount",
    header: "Expense Account",
  },
  {
    accessorKey: "referenceNumber",
    header: "Reference #",
  },
  {
    accessorKey: "modeOfPayment",
    header: "Mode of Payment",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    id: "actions",
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];