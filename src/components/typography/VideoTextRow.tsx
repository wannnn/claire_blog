import React from "react";

interface RowProps {
  videoSrc: string;
  alt?: string;
  text: string;
}

const VideoTextRow = ({ videoSrc, alt = "Video", text }: RowProps) => {
  return (
    <div className="flex w-full items-center mb-8">
      {/* 左邊影片，固定尺寸 */}
      <div className="w-[40%] flex justify-center">
        <video
          src={videoSrc}
          controls
          className="max-w-full h-auto"
          title={alt}
        />
      </div>

      {/* 右邊文字，佔剩下空間 */}
      <div 
        className="flex-1 p-6 text-gray-700"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default VideoTextRow; 