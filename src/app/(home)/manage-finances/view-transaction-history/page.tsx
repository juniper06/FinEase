import React from 'react'

const ViewTransactionHistory = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="background-gradient w-[1890px] h-[820px]  rounded-lg flex justify-center items-center flex-col">
        <h2 className="text-[60px] font-medium text-black mb-7">
          View Income Transaction History
        </h2>
        <div className="w-[1800px] h-[650px] border-black border-2 rounded-[5px] flex justify-center ">
          <div className="overflow-x-auto w-full text-white">
            <table className="table table-zebra p-10">
              {/* head */}
              <thead className="text-black text-[15px] font-bold">
                <tr>
                  <th>Income Source</th>
                  <th>Amount</th>
                  <th>Date of transaction</th>
                  <th>Reference number</th>
                  <th>Notes</th>
                  <th>Receipt</th>
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
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                  <th>2</th>
                  <td>Hart Hagerty</td>
                </tr>
                {/* row 3 */}
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <th>3</th>
                  <td>Brice Swyre</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <th>3</th>
                  <td>Brice Swyre</td>
                  <th>3</th>
                  <td>Brice Swyre</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewTransactionHistory