import React from "react";
import { IButton } from "@/app/interface/interface";

const Button = ({ children }: IButton) => {
  return (
    <div className=" rounded-full px-6 py-3 text-white bg-secondary   flex items-center justify-center w-fit">
      {children}
    </div>
  );
};

export default Button;
