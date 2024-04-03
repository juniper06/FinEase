import React from 'react'

const ViewExpenseTracking = () => {
  return (
    <div className="w-full flex justify-center">
    <div className="background-gradient w-[1890px] h-[820px]  rounded-lg flex justify-center items-center flex-col">
      <h2 className="text-[60px] font-medium text-black mb-7">
      View Expenses Tracking
      </h2>
      <div className="w-[1800px] h-[650px] border-black border-2 rounded-[5px] flex justify-center ">
        <div className="overflow-x-auto w-full text-white">
          <table className="table table-zebra p-10">
            {/* head */}
            <thead className="text-black text-[15px] font-bold">
              <tr>
                <th>Expenses</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Mode of Payment</th>
                <th>File</th>
                <th>Note</th>
              </tr>
            </thead>

            <tbody>
              {/* row 1 */}
              <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Cy Ganderton</td>
                <td>Cy Ganderton</td>
                <td>Cy Ganderton</td>
                <td>Cy Ganderton</td>
                <td>Cy Ganderton</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <th>2</th>
                <td>Hart Hagerty</td>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Hart Hagerty</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ViewExpenseTracking