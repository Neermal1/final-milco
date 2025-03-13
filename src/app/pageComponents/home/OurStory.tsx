"use client";

import React, { useEffect, useState } from "react";
import { ICompanyData } from "@/app/interface/interface";

const OurStory: React.FC = () => {
  const [videoLink, setVideoLink] = useState<string | null>(null);

  useEffect(() => {
    const fetchCompanyProfile = async () => {
      try {
        const response = await fetch("/api/v1/company-profile");
        if (!response.ok) {
          throw new Error("Failed to fetch company profile");
        }
        const data: ICompanyData = await response.json();
        setVideoLink(data.video_link); // Ensure video_link exists in the API response
      } catch (error) {
        console.error("Error fetching company profile:", error);
      }
    };

    fetchCompanyProfile();
  }, []);

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
