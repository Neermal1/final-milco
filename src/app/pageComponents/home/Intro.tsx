import Button from "@/app/components/Button/Button";
import { ICompanyData } from "@/app/interface/interface";
import React from "react";

const OurStory = ({ data }: ICompanyData) => {
  // Function to convert YouTube video URL to embed URL
  const getEmbedUrl = (url: string) => {
    const videoId = url.match(
      /(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );
    if (videoId && videoId[1]) {
      return `https://www.youtube.com/embed/${videoId[1]}`;
    }
    return null;
  };

  const embedUrl = getEmbedUrl(data?.video_link || "");

  return (
    <div className="layout component-padding">
      <div className="grid lg:grid-cols-1 gap-20">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-7 flex flex-col gap-4">
            {/* Title: Our Story */}
            <div className="lg:text-[38px] text-[30px] font-semibold">Our Story</div>

            {/* Video Section */}
            <div className="mt-6">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title="Our Story Video"
                  className="w-full h-[220px] sm:h-[350px] lg:h-[450px] rounded-md shadow-lg"
                  allowFullScreen
                ></iframe>
              ) : (
                <p className="text-center text-gray-500">No video available.</p>
              )}
            </div>
          </div>
          <div className="lg:col-span-5 rounded-[8px] overflow-hidden lg:sticky lg:top-[150px]">
            {/* Placeholder image */}
            <div>
              <img
                src={data?.image_link || "/default-image.jpg"} // Image link if available, or default image
                alt="Our Story"
                className="lg:h-[50vh] 3xl:h-[40vh] w-[100%] object-cover rounded-[8px] hover:scale-110 transition-all duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
