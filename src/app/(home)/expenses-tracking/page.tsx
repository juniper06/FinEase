import { Button } from "@/src/components/Button";
import ButtonChoices from "@/src/components/ButtonChoices";
import Link from "next/link";
import React from "react";

const ExpensesTracking = () => {
  return (
    <div className="w-full h-[700px] flex justify-center items-center">
      <div className="grid gap-[40px] grid-cols-3">
        <Link href='/expenses-tracking/create-expenses-frequency'><ButtonChoices>Create Expenses Frequency</ButtonChoices></Link>
        <Link href='/expenses-tracking/create-expenses-category'><ButtonChoices>Create Expenses Category</ButtonChoices></Link>
        <Link href='/expenses-tracking/create-expenses'><ButtonChoices>Create Expenses</ButtonChoices></Link>
        <Link href='/expenses-tracking/view-expenses-tracking'><ButtonChoices>View Expenses Tracking</ButtonChoices></Link>
      </div>
    </div>
  );
};

export default ExpensesTracking;
