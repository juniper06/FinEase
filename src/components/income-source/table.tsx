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
import { Separator } from "@/components/ui/separator"


export default function IncomeSourceTable() {
  return (
    <div>
      <Table className="w-[1300px] h-[620px] ">
        <TableCaption>A list of your recent Income Sources.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Income Source</TableHead>
            <TableHead>Income Budget</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Paid</TableCell>
          </TableRow>
            <TableRow>
              <TableCell>INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Paid</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
