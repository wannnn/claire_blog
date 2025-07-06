import React from "react";

interface VideoGridProps {
  videos: {
    src: string;
    alt?: string;
    caption?: string;
  }[];
}

const VideoGrid = ({ videos }: VideoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      {videos.map((video, index) => (
        <div key={index} className="w-full overflow-hidden">
          <video
            src={video.src}
            controls
            className="w-full h-auto object-cover"
            title={video.alt || "Video"}
          />
          {video.caption && (
            <div
              style={{
                marginTop: 6,
                fontSize: 14,
                color: "#555",
                textAlign: "center",
              }}
            >
              {video.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default VideoGrid; 