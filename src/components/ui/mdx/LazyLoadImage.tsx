import Image from "next/image";
import { memo } from "react";
import { imageKitLoader } from "~lib/helpers/imageKitLoader";

type LazyLoadImageProps = {
  src: string;
  alt: string;
};

const LazyLoadImage = ({ src, alt }: LazyLoadImageProps) => {
  return (
    <Image src={src} alt={alt} width={500} height={500} loading="lazy" loader={imageKitLoader} />
  );
};

export default memo(LazyLoadImage);
