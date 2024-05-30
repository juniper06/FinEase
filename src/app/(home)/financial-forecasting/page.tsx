import CashRunway from '@/components/financial-forecasting/add-form'
import React from 'react'

export default function FinancialForecasting() {
  return (
      <div className='md:m-0 md:w-[2130px] md:h-[900px] md:border-solid md:border-4 md:border-[#094547] md:p-5 md:flex md:justify-center md:items-center md:flex-col'>
        <h1 className='md:text-[40px] md:text-white'>Cash Runway Calculator</h1>
        <CashRunway/>
    </div>
  )
}
