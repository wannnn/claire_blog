import Image from "next/image";

interface ImageProps {
  url: string;
}

const MyImage = ({ image }: { image: ImageProps }) => {
  return (
    <div className="mb-6 overflow-hidden">
      <Image
        src={image.url}
        alt=""
        width={800}
        height={600}
        className="w-full h-auto object-cover"
      />
    </div>
  );
};

export default MyImage;
