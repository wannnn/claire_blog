import React from "react";

interface VideoProps {
  src: string;
  alt?: string;
}

const Video = ({ src, alt = "Video" }: VideoProps) => {
  return (
    <div className="w-full flex justify-center my-8">
      <video
        src={src}
        controls
        className="max-w-full h-auto"
        title={alt}
      />
    </div>
  );
};

export default Video; 