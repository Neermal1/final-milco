"use client";
import { AntdContext } from "@/app/antdContext/AntdContext";
import { ICard } from "@/app/interface/interface";
import Link from "next/link";
import { useContext } from "react";
import { IoIosArrowForward } from "react-icons/io";
import Button from "../Button/Button";

const Card = ({ data }: ICard) => {
  const { openEnquiryModal, setEnquiryModal } = useContext(AntdContext);
  return (
    <>
      <div className="bg-white p-6 drop-shadow-lg rounded-[30px]">
        <Link href={`/product/${data?.slug}`} className="flex flex-col gap-6">
          <div className="">
            <img
              src={data?.image_link}
              alt=""
              className="h-[20vh] w-[100%] object-contain"
            />
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <div className="text-[25px] font-bold">{data?.name}</div>
              <div
                className="line-clamp-2 "
                dangerouslySetInnerHTML={{
                  __html: data?.description,
                }}
              />
            </div>
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
          </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
