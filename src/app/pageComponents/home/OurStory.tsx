import React from 'react';

interface OurStoryProps {
  data: {
    video_link?: string; // Optional video link
  };
}

// Function to convert a normal YouTube URL to an embed URL
const getEmbedUrl = (videoUrl?: string): string | null => {
  if (!videoUrl) return null;

  const url = new URL(videoUrl);
  if (url.hostname.includes('youtube.com') || url.hostname.includes('youtu.be')) {
    let videoId = '';

    if (url.hostname.includes('youtu.be')) {
      videoId = url.pathname.substring(1);
    } else if (url.searchParams.has('v')) {
      videoId = url.searchParams.get('v') || '';
    }

    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  }

  return null;
};

const OurStory: React.FC<OurStoryProps> = ({ data }) => {
  const embedUrl = getEmbedUrl(data.video_link);

  return (
    <div className="our-story text-center">
      {/* Styled heading */}
      <h1 className="text-[45px] font-bold">
        <span className="text-black">Our</span> <span className="text-orange-500">Story</span>
      </h1>


      
      {embedUrl && (
        <iframe
          width="100%"
          height="315"
          src={embedUrl}
          title="Our Story Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default OurStory;
