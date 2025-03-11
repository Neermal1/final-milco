import { AntdContext } from "@/app/antdContext/AntdContext";
import React, { useContext } from "react";
import Button from "../Button/Button";
import { IoIosArrowForward } from "react-icons/io";

const ProductEnquiryButton = () => {
  const { openEnquiryModal, setEnquiryModal } = useContext(AntdContext);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div
          onClick={(e: any) => {
            e.preventDefault();
            setEnquiryModal(!openEnquiryModal);
            e.stopPropagation();
          }}
          className="hover:cursor-pointer"
        >
          <Button>
            <div className="flex gap-2 items-center">
              <div>Make An Enquiry</div>
              <div>
                <IoIosArrowForward />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductEnquiryButton;
