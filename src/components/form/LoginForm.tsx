import React from "react";

export default function LoginForm() {
  return (
    <div className="h-[500px] w-[500px] flex flex-col justify-center items-center">
      <form
        action=""
        className="flex flex-col justify-center items-center gap-3 w-[500px]"
      >
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Username</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>

        <button className="btn mt-10 w-full max-w-xs text-white text-[24px] font-medium">Log In</button>
      </form>
      <button className="mt-5 text-white">Sign up</button>
    </div>
  );
}
