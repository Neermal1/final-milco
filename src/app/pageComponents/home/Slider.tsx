"use client";

//interface
import { ISlider } from "@/app/interface/interface";

//carousel
import { Carousel } from "antd";

const Slider = ({ data: sliderData }: ISlider) => {
  return (
    <div>
      <Carousel autoplay={true} className="z-0">
        {sliderData?.map((data, index: any) => {
          return (
            <div key={data?.id} className="relative">
              <img
                src={data?.image_link}
                alt="slider_image"
                className="w-full"
              />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;
