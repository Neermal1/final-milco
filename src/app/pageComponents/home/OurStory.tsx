"use client";

import React from "react";

interface OurStoryProps {
  video_link: string;
}

const OurStory: React.FC<OurStoryProps> = ({ video_link }) => {
  return (
    <div className="story-container px-4 py-10">
      <h2 className="text-center font-bold text-[28px] sm:text-[34px] text-[#FF5733]">
        Our Story
      </h2>

      <p className="text-center text-gray-700 text-[16px] sm:text-[18px] max-w-[800px] mx-auto leading-relaxed mt-4">
        Welcome to our journey! Our company was founded with a vision to make a 
        difference in the industry. Over the years, we have grown into a strong 
        and innovative team dedicated to providing top-notch solutions and services. 
        Join us as we continue to innovate and shape the future.
      </p>

      {/* Video Section */}
      <div className="flex justify-center mt-6">
        <div className="w-full max-w-[800px] aspect-w-16 aspect-h-9">
          <iframe
            src={video_link}
            title="Our Story Video"
            className="w-full h-[220px] sm:h-[350px] lg:h-[450px] rounded-md shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
