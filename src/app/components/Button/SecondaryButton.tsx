import { IButton } from "@/app/interface/interface";
import React from "react";

const SecondaryButton = ({ children }: IButton) => {
  return (
    <div className=" text-[18px] font-medium rounded-[8px] px-6 py-4 text-white bg-secondary  flex items-center justify-center ">
      {children}
    </div>
  );
};

export default SecondaryButton;
