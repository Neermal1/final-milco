"use client";

import React, { useEffect, useState } from "react";
import { ICompanyData } from "@/app/interface/interface";

const OurStory: React.FC = () => {
  const [videoLink, setVideoLink] = useState<string | null>(null);

 

  return (
    <div className="story-container">
      <h2
        style={{
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "34px",
          color: "#FF5733",
        }}
      >
        Our Story
      </h2>

      {videoLink ? (
        <video
          className="story-video"
          width="100%"
          height="auto"
          controls
          src={videoLink}
        />
      ) : (
        <p style={{ textAlign: "center", color: "#999" }}>Loading video...</p>
      )}
    </div>
  );
};

export default OurStory;
