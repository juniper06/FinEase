import DashboardBudgetProposalTable from '@/components/budget-proposal/dashboard-table'
import React from 'react'

export default function Home() {
  return (
    <div className='md:h-[88vh] md:w-screen md:p-5'>
      <div className='md:h-full md:w-full md:border-solid md:border-4 md:border-[#094547]'>
        <div className='md:h-[80px] md:flex  md:items-center'>
          <h1 className='md:text-[50px] md:text-white md:pl-5'>Dashboard</h1>
        </div>
        <div className='md:pl-5 md:flex md:h-auto md:w-full '>
          <div className='md:w-[1000px] md:border-solid'>
            <h1 className='text-[#00FFFF] text-[25px] font-semibold'>Budget Proposals</h1>
            <DashboardBudgetProposalTable/>
          </div>
          <div>testing</div>
        </div>
      </div>
    </div>
  )
}
