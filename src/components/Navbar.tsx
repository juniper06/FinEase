import Link from "next/link";
import React from "react";
import ProfileMenu from "./ProfileMenu";

export default function Navbar() {
  return (
    <nav className="px-5 flex items-center">
      <h2 className="text-white text-[48px] font-medium">FinEase</h2>
      <div className="w-full flex justify-center items-center">
        <ul className="flex gap-8 text-white text-[20px] font-medium">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>
            <Link href="/">Manage Finances</Link>
          </li>
          <li>
            <Link href="/">Expenses Tracking</Link>
          </li>
          <li>
            <Link href="/">Financial Forecasting</Link>
          </li>
        </ul>
      </div>
      <ProfileMenu />
    </nav>
  );
}
