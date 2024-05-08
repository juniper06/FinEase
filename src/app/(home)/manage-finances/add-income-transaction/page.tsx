import AddBusinessTransaction from "@/components/income-transaction/add-form";
import React from "react";

export default async function AddIncomeTransaction() {
  return (
    <div className="p-3">
      <div className="w-full h-screen md:h-[775px] rounded-[10px] bg-[#119fa4] flex flex-col items-center">
        <div className="w-full text-center ">
          <h2 className="mt-5 text-black text-[25px] font-bold md:text-[48px]">
            Add Business Income Transaction
          </h2>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <AddBusinessTransaction />
        </div>
      </div>
    </div>
  );
}
