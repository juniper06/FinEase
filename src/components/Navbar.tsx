import Link from "next/link";
import React from "react";
import ProfileMenu from "./ProfileMenu";

export default function Navbar() {
  return (
    <nav className="m-5 flex items-center">
      <Link href="/" className="text-white ml-4 text-[48px] font-medium">FinEase</Link>
      <div className="w-full flex justify-center items-center">
        <ul className="flex gap-8 text-white text-[20px] font-medium">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/manage-finances">Manage Finances</Link>
          </li>
          <li>
            <Link href="/expenses-tracking">Expenses Tracking</Link>
          </li>
          <li>
            <Link href="/financial-forecasting">Financial Forecasting</Link>
          </li>
        </ul>
      </div>
      <ProfileMenu />
    </nav>
  );
}
