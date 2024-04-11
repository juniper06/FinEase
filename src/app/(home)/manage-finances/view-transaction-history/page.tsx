import TransactionHistory from "@/components/income-transaction/table";
import React from "react";

export default async function ViewTransactionHistory() {
  return (
    <div className="p-3">
      <div className="w-full h-[775px] rounded-[10px] bg-[#119fa4] flex flex-col items-center ">
        <div className="w-full text-center ">
          <h2 className="text-black text-[48px] font-medium">
            Add Business Income Transaction
          </h2>
        </div>
        <div className="w-full h-full flex justify-center items-center">
          <TransactionHistory />
        </div>
      </div>
    </div>
  );
}
