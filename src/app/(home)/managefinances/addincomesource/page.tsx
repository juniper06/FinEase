import { Button } from "@/src/components/Button";
import React from "react";

const AddIncomeSource = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="background-gradient w-[1890px] h-[820px]  rounded-lg flex justify-center items-center flex-col">
        <h1 className="text-[60px] font-medium text-black mb-7">
          Add Income Source
        </h1>

        <form className="w-[600px]">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black font-medium">
                Input Income Source
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[555px] bg-white shadow-black shadow-md"
            />
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black font-medium">
                Input income budget
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[555px] bg-white shadow-black shadow-md"
            />
          </label>

          <div className="flex gap-9 mt-5">
            <Button>Save</Button>
            <Button variant="outline">Cancel</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddIncomeSource;
