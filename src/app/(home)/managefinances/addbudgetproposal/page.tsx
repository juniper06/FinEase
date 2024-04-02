import { Button } from '@/src/components/Button'
import React from 'react'

const AddBudgetProposal = () => {
  return (
    <div className="w-full flex justify-center ">
    <div className="background-gradient w-[1890px] h-[820px]  rounded-lg flex justify-center items-center flex-col">
      <h1 className="text-[60px] font-medium text-black mb-7">
        Add Budget Proposal
      </h1>

      <form className="w-[600px]">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black font-medium">
            Input project investment or source
            </span>
          </div>
          <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[555px] bg-white shadow-black shadow-md"
            />
        </label>

        <div className="flex gap-1">
          <label className="form-control">
            <div className="label">
              <span className="label-text text-black font-medium">
                Input salaries
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
              Input utility cost
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
                Input rental fee
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
              Input maintenance cost
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[275px] bg-white shadow-black shadow-md"
            />
          </label>
        </div>

        <label className="form-control">
          <div className="label">
            <span className="label-text text-black font-medium">
            Input budget supplies
            </span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-[555px] bg-white shadow-black shadow-md"
          />
        </label>

        <label className="form-control">
          <div className="label">
            <span className="label-text text-black font-medium">
            Input assumptions
            </span>
          </div>
          <textarea
            className="textarea textarea-bordered h-[81px] w-[555px] bg-white shadow-black shadow-md"
          ></textarea>
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black font-medium">
            Input methodologies
            </span>
          </div>
          <textarea
            className="textarea textarea-bordered h-[81px] w-[555px] bg-white shadow-black shadow-md"
          ></textarea>
        </label>

        <div className="flex gap-9 mt-5">
          <Button>Save</Button>
          <Button variant="outline">Cancel</Button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default AddBudgetProposal