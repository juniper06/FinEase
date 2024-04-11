import ButtonChoices from "@/components/ButtonChoices";
import Link from "next/link";
import React from "react";

export default function ManageFinances() {
  return (
    <div className="w-full h-[700px] flex justify-center items-center">
      <div className="grid gap-[40px] grid-cols-3 grid-rows-2">
        <Link href="/manage-finances/add-income-transaction">
          <ButtonChoices>Add Income Transaction</ButtonChoices>
        </Link>
        <Link href="/manage-finances/add-income-source">
          <ButtonChoices> Add Income Source</ButtonChoices>
        </Link>
        <Link href="/manage-finances/add-budget-proposal">
          <ButtonChoices>Add Budget Proposal </ButtonChoices>
        </Link>
        <Link href="/manage-finances/add-financial-ratios">
          <ButtonChoices>Add Financial Ratios</ButtonChoices>
        </Link>
        <Link href="/manage-finances/add-tax-information">
          <ButtonChoices>Add Tax Information</ButtonChoices>
        </Link>
        <Link href="/manage-finances/view-income-source">
          <ButtonChoices>View Income Source</ButtonChoices>
        </Link>
        <Link href="/manage-finances/view-transaction-history">
          <ButtonChoices>View Transaction History</ButtonChoices>
        </Link>
      </div>
    </div>
  );
}
