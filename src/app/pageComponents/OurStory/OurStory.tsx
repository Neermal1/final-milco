import React from 'react';

const OurStory = () => {
  return (
    <div className="story-container">
      <h2>Our Story</h2>
      <video
        className="story-video"
        width="100%"  // Adjust as per your layout
        height="auto" // Adjust as per your layout
        controls
        src="/assets/videos/our-story-video.mp4"  // Path to your video file
      />
      <p>
        This is our story. We started with a simple idea and turned it into something bigger. Watch the video to learn more!
      </p>
    </div>
  );
};

export default OurStory;
