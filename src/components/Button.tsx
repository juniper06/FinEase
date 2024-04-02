import { ButtonHTMLAttributes, FC } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "flex items-center justify-center rounded-[5px] text-[25px] font-medium ",
  {
    variants: {
      variant: {
        default: "border-2 border-solid border-black bg-black text-white shadow-black shadow-md",
        outline:
          "border-2 border-solid border-black text-black shadow-black shadow-md ",
      },
      size: {
        default: "w-[260px] h-[60px] p-5",
        lg: "w-[230px] h-[130px] p-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({className, size, variant, ...props}) => {
  return <button className={cn(buttonVariants({variant,size,className}))} {...props}/>
};

export { Button, buttonVariants };
