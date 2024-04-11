import React, { ButtonHTMLAttributes, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface ButtonChoicesProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ButtonChoices = ({ children }: ButtonChoicesProps) => {
  return (
    <Button className="bg-[#1c8b90] hover:bg-[#00FFFF] shadow-xl text-black text-center px-10 w-56 h-36 rounded-[10px] font-bold text-[16px]">
      {children}
    </Button>
  );
};

export default ButtonChoices;
