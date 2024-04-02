import React, { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonChoicesProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    children: ReactNode;
}

const ButtonChoices = ({ children } : ButtonChoicesProps) => {
  return (
    <button className="bg-[#1c8b90] hover:bg-[#00FFFF] shadow-xl text-black text-center px-10 w-56 h-36 rounded-[10px] font-bold text-[16px]">
      {children}
    </button>
  );
};

export default ButtonChoices;
