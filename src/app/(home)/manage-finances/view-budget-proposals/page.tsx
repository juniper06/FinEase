import BudgetProposalTable from '@/components/budget-proposal/table'
import React from 'react'

export default function BudgetProposalPage() {
  return (
    <div className="p-3">
      <div className="w-full h-[775px] rounded-[10px] bg-[#119fa4] flex flex-col items-center ">
        <div className="w-full text-center ">
          <h2 className="text-black text-[48px] font-medium">
            Budget Proposal History
          </h2>
        </div>
        <div className="container flex flex-col h-full flex-1">
          <BudgetProposalTable />
        </div>
      </div>
    </div>
  )
}
