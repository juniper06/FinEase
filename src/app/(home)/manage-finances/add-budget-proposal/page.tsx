import AddBudgetProposal from "@/components/budget-proposal/add-form";
import React from "react";

export default async function BudgetProposal() {
  return (
    <div className="p-3 h-screen">
      <div className="w-full h-full rounded-[10px] bg-[#119fa4] flex flex-col items-center ">
        <div className="w-full text-center ">
          <h2 className="text-black text-[48px] font-medium">
            Add Budget Proposal
          </h2>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <AddBudgetProposal />
        </div>
      </div>
    </div>
  );
}
