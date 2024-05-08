import AddTaxInformation from '@/components/tax-information/add-form'
import React from 'react'

export default async function TaxInformation() {
  return (
    <div className="p-3">
      <div className="w-full h-[775px] rounded-[10px] bg-[#119fa4] flex flex-col items-center ">
        <div className="w-full text-center ">
          <h2 className="mt-5 text-black text-[25px] font-bold md:text-[48px]">
          Add Tax Information
          </h2>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <AddTaxInformation />
        </div>
      </div>
    </div>
  )
}
