import { Button } from "@/src/components/Button";
import ButtonChoices from "@/src/components/ButtonChoices";
import Link from "next/link";
import React from "react";

const ExpensesTracking = () => {
  return (
    <div className="w-full h-[700px] flex justify-center items-center">
      <div className="grid gap-[40px] grid-cols-3">
        <Link href='/expensestracking/createexpensesfrequency'><ButtonChoices>Create Expenses Frequency</ButtonChoices></Link>
        <Link href='/expensestracking/createexpensecategory'><ButtonChoices>Create Expense Category</ButtonChoices></Link>
        <Link href='/expensestracking/viewexpensetracking'><ButtonChoices>View Expense Tracking</ButtonChoices></Link>
      </div>
    </div>
  );
};

export default ExpensesTracking;
