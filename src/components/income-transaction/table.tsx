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

export default function TransactionHistory() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <Table className="w-[1300px] h-[620px] overflow-auto">
        <TableCaption>A list of your recent Income Sources.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Income Source</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Date of transaction</TableHead>
            <TableHead>Reference number</TableHead>
            <TableHead>Notes</TableHead>
            <TableHead>Receipt</TableHead>
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
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
