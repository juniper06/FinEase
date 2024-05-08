import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ButtonChoicesProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonChoices = ({ children }: ButtonChoicesProps) => {
  return (
    <Button className="w-[150px] h-[100px] text-[12px] bg-[#1c8b90] text-wrap hover:bg-[#00FFFF] shadow-xl text-black text-center px-10 md:w-56 md:h-36 rounded-[10px] font-bold md:text-[16px]">
      {children}
    </Button>
  );
};

export default ButtonChoices;
