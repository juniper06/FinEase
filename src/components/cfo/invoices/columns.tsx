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
import { formatDate } from "@/lib/utils";

export type Invoices = {
  createdAt: string;
  invoiceNumber: string;
  customerName: string;
  dueDate: string;
  total: number;
};

export const invoicesColumns: ColumnDef<Invoices>[] = [
  {
    accessorKey: "createdAt",
    header: "Date",
    cell: ({ getValue }) => formatDate(getValue() as string),
  },
  {
    accessorKey: "invoiceNumber",
    header: "Invoice No.",
  },
  {
    accessorKey: "customerName",
    header: "Customer Name",
  },
  {
    accessorKey: "dueDate",
    header: "Due Date",
    cell: ({ getValue }) => formatDate(getValue() as string),
  },
  {
    accessorKey: "total",
    header: "Total Amount",
  },
  {
    id: "actions",
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const invoice = row.original;

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