import Button from "@/app/components/Button/Button";
import { ICompanyData } from "@/app/interface/interface";
import Link from "next/link";
import React from "react";

const Intro = ({ data }: ICompanyData) => {
  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-1 gap-20">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="lg:text-[38px] text-[30px] font-semibold">
              Who Are We?
            </div>
            <div
              className="no-scrollbar leading-[26px]"
              dangerouslySetInnerHTML={{
                __html: data?.introduction,
              }}
            />

            <Link href="/contact-us">
              <Button>Learn More</Button>
            </Link>
          </div>
          <div className="lg:col-span-5 rounded-[8px] overflow-hidden lg:sticky lg:top-[150px]">
            <div>
              <img
                src={data?.image_link || "/default-image.jpg"} // ✅ Updated to use image_link
                alt="Company Introduction"
                className="lg:h-[50vh] 3xl:h-[40vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Intro;
