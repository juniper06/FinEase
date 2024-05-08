import React from "react";
import ButtonChoices from "@/components/ButtonChoices";
import Link from "next/link";

export default function ExpensesTracking() {
  return (
    <div className="w-full h-[700px] flex justify-center items-center">
      <div className="grid grid-cols-2 grid-rows-2 gap-[20px] md:gap-[40px] md:grid-cols-3 md:grid-rows-2">
        <Link href="/expenses-tracking/add-expenses">
          <ButtonChoices>Add Expenses</ButtonChoices>
        </Link>
        <Link href="/expenses-tracking/add-expenses-category">
          <ButtonChoices>Add Expense Category</ButtonChoices>
        </Link>
        <Link href="/expenses-tracking/add-expenses-frequency">
          <ButtonChoices>Add Expenses Frequency</ButtonChoices>
        </Link>
        <Link href="/expenses-tracking/view-expenses-tracking">
          <ButtonChoices>View Expense Tracking</ButtonChoices>
        </Link>
      </div>
    </div>
  );
}
