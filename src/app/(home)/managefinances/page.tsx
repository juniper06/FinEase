import ButtonChoices from "@/src/components/ButtonChoices";
import Link from "next/link";
import React from "react";

const ManageFinances = () => {
  return (
    <div className="w-full h-[700px] flex justify-center items-center">
      <div className="grid gap-[40px] grid-cols-3 grid-rows-2">
        <Link href="/managefinances/addincometransaction">
          <ButtonChoices>Add Income Transaction</ButtonChoices>
        </Link>
        <Link href="/managefinances/addincomesource">
          <ButtonChoices>Add Income Source</ButtonChoices>
        </Link>
        <Link href="/managefinances/addbudgetproposal">
          <ButtonChoices>Add Budget Proposal</ButtonChoices>
        </Link>
        <Link href="/managefinances/viewincomesource">
          <ButtonChoices>View Income Source</ButtonChoices>
        </Link>
        <Link href="/managefinances/viewtransactionhistory">
          <ButtonChoices>View Transaction History</ButtonChoices>
        </Link>
      </div>
    </div>
  );
};

export default ManageFinances;
