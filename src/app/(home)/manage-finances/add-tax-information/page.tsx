import { Button } from '@/src/components/Button'
import React from 'react'

const AddTaxInformation = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="background-gradient w-[1890px] h-[820px]  rounded-lg flex justify-center items-center flex-col">
        <h1 className="text-[60px] font-medium text-black mb-7">
        Add Tax Information
        </h1>

        <form className="w-[600px]">

          <div className="flex gap-1">
            <label className="form-control">
              <div className="label">
                <span className="label-text text-black font-medium">
                Input State income tax
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[275px] bg-white shadow-black shadow-md"
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text text-black font-medium">
                Input Sales Tax Rate
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[275px] bg-white shadow-black shadow-md"
              />
            </label>
          </div>

          <div className="flex gap-1">
            <label className="form-control">
              <div className="label">
                <span className="label-text text-black font-medium">
                Input Payroll tax rate
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-[275px] bg-white shadow-black shadow-md"
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text text-black font-medium">
                  Input Due Date
                </span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-[275px] bg-white shadow-black shadow-md"
              />
            </label>
          </div>

          <div className="flex gap-9 mt-5">
            <Button>Save</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddTaxInformation