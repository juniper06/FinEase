"use client";
import React, {useState} from "react"; 
import { Button } from "@/src/components/Button";

const AddIncomeTransaction = () => {
  

  return (
    <div className="w-full flex justify-center ">
      <div className="background-gradient w-[1890px] h-[820px]  rounded-lg flex justify-center items-center flex-col">
        <h1 className="text-[60px] font-medium text-black mb-7">
          Add Business Income Transaction
        </h1>
        <form className="w-[600px]">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black font-medium">
                Select Income Source
              </span>
            </div>
            <select className="select select-bordered bg-white w-[555px] shadow-black shadow-md">
              <option disabled selected>
                {" "}
              </option>
              <option>Star Wars</option>
            </select>
          </label>

          <div className="flex gap-1">
            <label className="form-control">
              <div className="label">
                <span className="label-text text-black font-medium">
                  Input income amount
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
                  Input date of income transaction
                </span>
              </div>
              <input
                type="date"
                placeholder="Type here"
                className="input input-bordered w-[275px] bg-white shadow-black shadow-md"
              />
            </label>
          </div>

          <label className="form-control">
            <div className="label">
              <span className="label-text text-black font-medium">
                Input reference number
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
                Input notes
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-[81px] w-[555px] bg-white shadow-black shadow-md"
              placeholder="Bio"
            ></textarea>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-black font-medium">
                Attach Receipt
              </span>
            </div>
            <input
              type="file"
              className="file-input file-input-bordered w-[555px] bg-white shadow-black shadow-md"
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

export default AddIncomeTransaction;
