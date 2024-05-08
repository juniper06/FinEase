import AddIncomeSource from "@/components/income-source/add-form";
import React from "react";

export default async function IncomeSource() {
  return (
    <div className="p-3">
      <div className="w-full h-[775px] rounded-[10px] bg-[#119fa4] flex flex-col items-center ">
        <div className="w-full text-center ">
          <h2 className="mt-5 text-black text-[30px] font-bold md:text-[48px]">
            Add Income Source
          </h2>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <AddIncomeSource />
        </div>
      </div>
    </div>
  );
}
