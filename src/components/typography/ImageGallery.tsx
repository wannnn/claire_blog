import Image from "next/image";

interface ImageGalleryProps {
  images: {
    url: string;
    alt?: string;
    caption?: string;
  }[];
  itemsPerRow?: number;
}

const colClassMap: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
};

const ImageGallery = ({ images, itemsPerRow = 2 }: ImageGalleryProps) => {
  const gridColsClass = colClassMap[itemsPerRow] || "md:grid-cols-2";
  return (
    <div className={`grid grid-cols-1 ${gridColsClass} gap-4 mb-4`}>
      {images.map((image, index) => (
        <div key={index} className="w-full overflow-hidden">
          <Image
            src={image.url}
            alt={image.alt || "Gallery image"}
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
          {image.caption && (
            <div
              style={{
                marginTop: 6,
                fontSize: 14,
                color: "#555",
                textAlign: "center",
              }}
            >
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
