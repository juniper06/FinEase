import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex w-full h-32 items-center px-10">
      <Link href="/" className="w-1/3 text-5xl text-white">
        FinEase
      </Link>

      <div className="flex gap-x-20 text-white">
        <Link
          href="/dashboard"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#247881] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center focus:border-b-4 border-[#247881]"
        >
          Dashboard
        </Link>
        <Link
          href="/managefinances"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#247881] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center focus:border-b-4 border-[#247881]"
        >
          Manage Finances
        </Link>
        <Link
          href="/expensestracking"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#247881] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center focus:border-b-4 border-[#247881]"
        >
          Expenses Tracking
        </Link>
        <Link
          href="/financialforecasting"
          className="relative text-xl w-fit block after:block after:content-[''] after:absolute after:h-[3px] after:bg-[#247881] after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center focus:border-b-4 border-[#247881]"
        >
          Financial Forecasting
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
