import { Button } from "@/src/components/Button";
import React from "react";

const CreateExpenseCategory = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="background-gradient w-[1890px] h-[820px]  rounded-lg flex justify-center items-center flex-col">
        <h1 className="text-[60px] font-medium text-black mb-7">
          Create Expenses Category
        </h1>
        <form className="w-[600px]">
          <label className="form-control">
            <div className="label">
              <span className="label-text text-black font-medium">
                Input Current Assets
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

export default CreateExpenseCategory;
