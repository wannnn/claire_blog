import Image from "next/image";

interface RowProps {
  imageUrl: string;
  alt?: string;
  text: string;
}

const ImageTextRow = ({ imageUrl, alt = "Image", text }: RowProps) => {
  return (
    <div className="flex w-full items-center mb-8">
      {/* 左邊圖片，固定尺寸 */}
      <div className="w-[40%] flex justify-center">
        <Image
          src={imageUrl}
          alt={alt}
          width={400}
          height={500}
          className="object-cover"
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

export default ImageTextRow;
