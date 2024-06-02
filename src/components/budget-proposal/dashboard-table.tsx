"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import {
  BudgetProposal,
  getBudgetProposals,
  updateBudgetProposal,
} from "@/actions/budget-propsal.action";
import { deleteBudgetProposal } from "@/actions/budget-propsal.action";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DashboardBudgetProposalTable() {
  const [budgetProposals, setBudgetProposals] = useState<BudgetProposal[]>([]);
  const [selectedProposal, setSelectedProposal] =
    useState<BudgetProposal | null>(null);

  useEffect(() => {
    getBudgetProposals().then((data) => setBudgetProposals(data));
  }, []);

  const handleUpdateStatus = async (id: number, status: string) => {
    try {
      console.log(`Updating status for proposal with id: ${id} to ${status}`);
      const updatedProposal = await updateBudgetProposal(String(id), { status });
      console.log("Proposal updated successfully:", updatedProposal);
      // Update the proposal in the state
      setBudgetProposals((prevProposals) =>
        prevProposals.map((proposal) =>
          proposal.id === id ? { ...proposal, status } : proposal
        )
      );
    } catch (error) {
      console.error("Error updating proposal status:", error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString("default", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      <table className="my-4 bg-cornsilk-500 rounded-lg md:w-full">
        <thead className="border-2 border-[#00FFFF]">
          <tr className="text-white">
            <th className="border-[#00FFFF] p-2">ID</th>
            <th className="border-[#00FFFF] md:w-[600px]">Title</th>
            <th className="border-[#00FFFF] p-2">Status</th>
            <th className="p-2 ">Date</th>
          </tr>
        </thead>
        <tbody>
          {budgetProposals.map((proposal) => (
            <Dialog key={proposal.id}>
              <DialogTrigger asChild>
                <tr
                  className="border-b-2 border-[#00FFFF] md:text-white cursor-pointer"
                  onClick={() => setSelectedProposal(proposal)}
                >
                  <td className="text-center border-l-2 border-[#00FFFF]">
                    {proposal.id}
                  </td>
                  <td className="text-center border-[#00FFFF]">
                    {proposal.title}
                  </td>
                  <td className="text-center border-[#00FFFF]">
                    {proposal.status}
                  </td>
                  <td className="text-center border-[#00FFFF] border-r-2 md:pl-5">
                    {formatDate(proposal.createdAt)}
                  </td>
                </tr>
              </DialogTrigger>
              <DialogContent className="bg-[#0f3235] text-white md:w-full gap-3x">
                <DialogHeader>
                  <DialogTitle className="text-[40px] font-semibold text-center">
                    Budget Proposal
                  </DialogTitle>
                </DialogHeader>
                {selectedProposal && (
                  <div className="p-4 text-white ">
                    <div>
                      <strong className="text-[#00FFFF]">
                        Project Source/Investment:
                      </strong>
                      <br />
                      <div className="bg-[#1e646b] md:w-full md:h-[60px] text-[30px] pl-5 rounded-xl flex items-center ">
                        {" "}
                        {selectedProposal.title}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-full">
                        <strong className="text-[#00FFFF]">Salary:</strong>
                        <br />{" "}
                        <div className="bg-[#1e646b] h-[60px] text-[30px] pl-5 rounded-xl flex items-center">
                          {selectedProposal.salary}
                        </div>
                      </div>
                      <div className="w-full">
                        <strong className="text-[#00FFFF]">Cost:</strong>
                        <br />
                        <div className="bg-[#1e646b] h-[60px] text-[30px] pl-5 rounded-xl flex items-center">
                          {selectedProposal.cost}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-full">
                        <strong className="text-[#00FFFF]">Rental Fee:</strong>
                        <br />{" "}
                        <div className="bg-[#1e646b] h-[60px] text-[30px] pl-5 rounded-xl flex items-center">
                          {selectedProposal.rental}
                        </div>
                      </div>
                      <div className="w-full">
                        <strong className="text-[#00FFFF]">
                          Maintenance Cost:
                        </strong>
                        <br />
                        <div className="bg-[#1e646b] h-[60px] text-[30px] pl-5 rounded-xl flex items-center">
                          {selectedProposal.maintenance}
                        </div>
                      </div>
                    </div>
                    <div>
                      <strong className="text-[#00FFFF]">
                        Budget Supplies:
                      </strong>
                      <br />
                      <div className="bg-[#1e646b] md:w-full md:h-[60px] text-[30px] pl-5 rounded-xl flex items-center ">
                        {" "}
                        {selectedProposal.supplies}
                      </div>
                    </div>
                    <div>
                      <strong className="text-[#00FFFF]">Assumptions:</strong>
                      <br />
                      <div className="bg-[#1e646b] md:w-full md:h-[60px] text-[30px] pl-5 rounded-xl flex items-center ">
                        {" "}
                        {selectedProposal.assumptions}
                      </div>
                    </div>
                    <div>
                      <strong className="text-[#00FFFF]">Methodologies:</strong>
                      <br />
                      <div className="bg-[#1e646b] md:w-full md:h-[60px] text-[30px] pl-5 rounded-xl flex items-center ">
                        {" "}
                        {selectedProposal.methodology}
                      </div>
                    </div>
                  </div>
                )}
                <div className="flex gap-2">
                  <Button
                    onClick={() => handleUpdateStatus(proposal.id, "Accepted")}
                  >
                    Accept
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => handleUpdateStatus(proposal.id, "Denied")}
                  >
                    Reject
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </tbody>
      </table>
    </>
  );
}
