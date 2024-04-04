import React from "react";

export default function RegisterForm() {
  return (
    <div className="h-[500px] w-full flex flex-col justify-center items-center">
      <form className="w-[600px]">
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black font-medium">
              Username
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
                First Name
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
                Last Name
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-[275px] bg-white shadow-black shadow-md"
            />
          </label>
        </div>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black font-medium">
            Email Address
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
            Contact Number
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
            Password
            </span>
          </div>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-[555px] bg-white shadow-black shadow-md"
          />
        </label>

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text text-black font-medium">
            Confirm Password
            </span>
          </div>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-[555px] bg-white shadow-black shadow-md"
          />
        </label>

      </form>
      <button className="btn mt-10 w-full max-w-xs text-white text-[24px] font-medium">Create</button>
    </div>
  );
}
