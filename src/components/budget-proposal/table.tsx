import React from "react";
import { Button } from "../ui/button";

export default function BudgetProposalTable() {
  return (
    <table className="my-4 bg-cornsilk-500 rounded-lg">
      <thead className="border-4 border-black">
        <tr>
          <th className="border-r-4 border-black p-2">ID</th>
          <th className="border-r-4 border-black md:w-[600px]">Title</th>
          <th className="border-r-4 border-black p-2">Status</th>
          <th className="p-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-b-4 border-black md:text-white">
          <td className="text-center border-l-4 border-r-4 border-black">1</td>
          <td className="text-center border-r-4 border-black">Title ni ari</td>
          <td className="text-center border-r-4 border-black">Pending</td>
          <td className="text-center border-r-4 border-black">
            <div className="md:h-full md:w-full md:flex md:justify-center md:items-center md:gap-y-3 md:gap-x-3 md:px-2 md:py-4">
              <Button className="md:h-[50px] md:w-[200px] md:text-[20px] md:rounded-full">Update</Button>
              <Button className="md:h-[50px] md:w-[200px] md:text-[20px] md:rounded-full">Delete</Button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
