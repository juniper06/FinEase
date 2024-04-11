"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ExpensesTrackingTable() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Table className="w-[1300px] h-[620px] overflow-auto">
        <TableCaption>A list of your recent Income Sources.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Expenses</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Mode of Payment</TableHead>
            <TableHead>File</TableHead>
            <TableHead>Note</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
