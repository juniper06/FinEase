import { Button } from "@/src/components/Button";
import React from "react";

const CreateExpensesFrequency = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="background-gradient w-[1890px] h-[820px]  rounded-lg flex justify-center items-center flex-col">
        <h1 className="text-[60px] font-medium text-black mb-7">
          Create Expenses Frequency
        </h1>
        <form className="w-[600px] flex flex-col justify-center items-center">
          <label className="form-control">
            <div className="label">
              <span className="label-text text-black font-medium">
                Select Category
              </span>
            </div>
            <select className="select select-bordered bg-white w-[450px] shadow-black shadow-md">
              <option disabled selected>
                {" "}
              </option>
              <option>Star Wars</option>
            </select>
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text text-black font-medium">
                Input Recurring Amount
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[450px] bg-white shadow-black shadow-md"
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text text-black font-medium">
                Select Frequency Type
              </span>
            </div>
            <select className="select select-bordered bg-white w-[450px] shadow-black shadow-md">
              <option disabled selected>
                {" "}
              </option>
              <option>Star Wars</option>
            </select>
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text text-black font-medium">
                Select Status
              </span>
            </div>
            <select className="select select-bordered bg-white w-[450px] shadow-black shadow-md">
              <option disabled selected>
                {" "}
              </option>
              <option>Star Wars</option>
            </select>
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

export default CreateExpensesFrequency;
