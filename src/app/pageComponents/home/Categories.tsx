"use client";
import React from "react";

//components
import ComponentHeader from "@/app/components/componentHeader/ComponentHeader";

//swiper js
import "swiper/css";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Link from "next/link";
import { ICategory } from "@/app/interface/interface";

const Categories = ({ category_data }: ICategory) => {
  const categoryData = [
    {
      image_link: "https://www.pngmart.com/files/1/Honey-PNG-Photos.png",
      title: "Honey",
    },
    {
      image_link:
        "https://www.pngmart.com/files/8/Cheese-PNG-Clipart-Background.png",
      title: "Cheese",
    },
    {
      image_link:
        "https://www.pngmart.com/files/23/Spices-PNG-Isolated-Pic.png",
      title: "Spices",
    },
    {
      image_link: "https://www.pngmart.com/files/15/Butter-PNG-Photos.png",
      title: "Butter",
    },
    {
      image_link: "https://www.pngmart.com/files/1/Honey-PNG-Photos.png",
      title: "Honey",
    },
    {
      image_link:
        "https://www.pngmart.com/files/8/Cheese-PNG-Clipart-Background.png",
      title: "Cheese",
    },
    {
      image_link:
        "https://www.pngmart.com/files/23/Spices-PNG-Isolated-Pic.png",
      title: "Spices",
    },
    {
      image_link: "https://www.pngmart.com/files/15/Butter-PNG-Photos.png",
      title: "Butter",
    },
  ];
  return (
    <div className="layout component-padding">
      <div className="flex-col-layout">
        <ComponentHeader
          data={{
            heading: "Our Categories",
            subheading: "",
          }}
        />
        <div>
          <div className="">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              spaceBetween={50}
              slidesPerView={3}
              allowSlideNext={true}
              pagination={{
                clickable: true,
              }}
              navigation
              className=""
              style={{
                paddingTop: "10px",
                paddingBottom: "10px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
              breakpoints={{
                768: {
                  slidesPerView: 6,
                },
                10: {
                  slidesPerView: 1,
                },
              }}
            >
              {category_data?.map((data, index) => {
                return (
                  <SwiperSlide key={data?.id} className="">
                    <Link
                      href={`/category/${data?.slug}`}
                      className="hover:cursor-pointer drop-shadow-md flex flex-col items-center justify-center border-t-[2px] border-secondary bg-white rounded-[8px] p-4"
                    >
                      <div className="flex flex-col items-center justify-center gap-6">
                        <img
                          src={data?.image_link}
                          alt=""
                          className="h-[80px] w-[80px] object-cover rounded-full"
                        />
                        <div className="text-[16px]  h-[6vh] text-center hover:bg-active px-6 flex items-center justify-center">
                          {data?.name}
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
