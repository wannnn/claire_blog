"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

type ImageCarouselProps = {
  images: { url: string; alt?: string; caption?: string }[];
  interval?: number;
};

const ImageCarousel = ({ images, interval = 3000 }: ImageCarouselProps) => {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  // 自動輪播效果
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [total, interval]);

  const goToPrev = () =>
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  const goToNext = () =>
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));

  // 顯示三張（前一張、當前、下一張）
  const getIndices = () => {
    const prev = (current - 1 + total) % total;
    const next = (current + 1) % total;
    return [prev, current, next];
  };
  const indices = getIndices();

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 1000,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          height: 320,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <button
          onClick={goToPrev}
          style={{
            position: "absolute",
            left: -32,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "none",
            border: "none",
            color: "#d1d5db", // gray-300
            fontSize: 32,
            fontWeight: "normal",
            cursor: "pointer",
            paddingLeft: 16,
            paddingRight: 8,
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#9ca3af")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#d1d5db")}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 24l-8-8 8-8" />
          </svg>
        </button>
        {indices.map((idx, i) => (
          <div
            key={idx}
            style={{
              margin: "0 10px",
              borderRadius: 8,
              opacity: i === 1 ? 1 : 0.6,
              transform: i === 1 ? "scale(1.05)" : "scale(0.95)",
              transition: "all 0.3s",
            }}
          >
            <Image
              src={images[idx].url}
              alt={images[idx].alt || "Carousel image"}
              width={320}
              height={220}
              style={{ objectFit: "cover", width: "100%", maxWidth: 320 }}
            />
            <div
              style={{
                marginTop: 8,
                fontSize: 14,
                color: "#6B7280",
                fontWeight: "normal",
              }}
            >
              {images[idx].caption}
            </div>
          </div>
        ))}
        <button
          onClick={goToNext}
          style={{
            position: "absolute",
            right: -32,
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 2,
            background: "none",
            border: "none",
            color: "#d1d5db", // gray-300
            fontSize: 32,
            fontWeight: "normal",
            cursor: "pointer",
            paddingRight: 16,
            paddingLeft: 8,
          }}
          onMouseOver={(e) => (e.currentTarget.style.color = "#9ca3af")}
          onMouseOut={(e) => (e.currentTarget.style.color = "#d1d5db")}
        >
          <svg
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M11 24l8-8-8-8" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
