"use client"
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate, formatNumber } from "@/lib/utils";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import Link from "next/link";
import { Expenses } from "@/actions/cfo/expenses.action";

// Separate the ActionCell into its own component
const ActionCell = ({ expense, onDelete }: { expense: Expenses; onDelete: (id: string) => Promise<void>; }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleDelete = async () => {
    await onDelete(expense.id);
    setIsAlertOpen(false);
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            {/* <Link href={`/expenses-tracking/edit-expenses/${expense.id}`}>
              Edit
            </Link> */}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setIsAlertOpen(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the item.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export const expensesColumns: ColumnDef<Expenses>[] = [
  {
    accessorKey: "transactionDate",
    header: "Transaction Date",
    cell: ({ getValue }) => formatDate(getValue() as string),
  },
  {
    accessorKey: "categoryName",
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
    cell: ({ row }) => formatNumber(row.original.amount),
  },
  {
    id: "actions",
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row, table }) => {
      const expense = row.original;
      const { onDelete } = table.options.meta as {
        onDelete: (id: string) => Promise<void>;
      };

      return <ActionCell expense={expense} onDelete={onDelete} />;
    },
  },
];
