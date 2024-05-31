// table.tsx
"use client"
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { BudgetProposal, getBudgetProposals } from "@/actions/budget-propsal.action";

export default function BudgetProposalTable() {
  const [budgetProposals, setBudgetProposals] = useState<BudgetProposal[]>([]); // Initialize budgetProposals with an empty array of BudgetProposal type

  useEffect(() => {
    getBudgetProposals().then(data => setBudgetProposals(data));
  }, []);

  return (
    <table className="my-4 bg-cornsilk-500 rounded-lg">
      <thead className="border-4 border-black">
        <tr>
          <th className="border-r-4 border-black p-2">ID</th>
          <th className="border-r-4 border-black md:w-[600px]">Title</th>
          <th className="border-r-4 border-black p-2">Status</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {budgetProposals.map(proposal => (
          <tr key={proposal.id} className="border-b-4 border-black md:text-white">
            <td className="text-center border-l-4 border-r-4 border-black">{proposal.id}</td>
            <td className="text-center border-r-4 border-black">{proposal.title}</td>
            <td className="text-center border-r-4 border-black">{proposal.status}</td>
            <td className="text-center border-r-4 border-black">
              <div className="md:h-full md:w-full md:flex md:justify-center md:items-center md:gap-y-3 md:gap-x-3 md:px-2 md:py-4">
                <Button className="md:h-[50px] md:w-[200px] md:text-[20px] md:rounded-full">Update</Button>
                <Button className="md:h-[50px] md:w-[200px] md:text-[20px] md:rounded-full">Delete</Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}