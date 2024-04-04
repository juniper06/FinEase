"use client";
import React from "react";

const Dashboard = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-[1880px] h-[810px] border-white border border-e-[#247881]  border-b-[#247881] p-5 flex flex-col gap-5">
        <h2 className="text-[48px] text-white ml-5">Dashboard</h2>

        <div className="w-full h-[340px] flex gap-5">
          <div className="w-[910px] h-[320px] flex flex-col">
            <h3 className="text-[20px] text-[#00FFFF]">
              Financial Goal Progress
            </h3>
            <div className="w-full h-full border-[#00FFFF] border"></div>
          </div>

          <div className="w-[910px] h-[320px] flex flex-col">
            <h3 className="text-[20px] text-[#00FFFF]">Recent Transactions</h3>
            <div className="w-full h-full border-[#00FFFF] border"></div>
          </div>
        </div>

        <div className="w-full h-[340px] flex gap-5">
          <div className="w-[910px] h-[320px] flex flex-col">
            <h3 className="text-[20px] text-[#00FFFF]">Budget Proposals</h3>
            <div className="w-full h-full border-[#00FFFF] border">
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr className="text-[#00FFFF] text-[20px]">
                      <th>ID</th>
                      <th>Title</th>
                      <th>CFO</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-white">
                    {/* row 1 */}
                    <tr className="hover">
                      <th>1</th>
                      <td>Cy Gander</td>
                      <td>Quality Control Specialist</td>
                      <td>Blue</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="w-[910px] h-[320px] flex flex-col">
            <h3 className="text-[20px] text-[#00FFFF]">Expenses History</h3>
            <div className="w-full h-full border-[#00FFFF] border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
