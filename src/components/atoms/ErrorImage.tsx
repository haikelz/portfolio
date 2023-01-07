import Image from "next/image";
import { memo } from "react";

export const ErrorImage = () => {
  return (
    <Image
      width={200}
      height={200}
      src="https://cdn.statically.io/gh/haikelz/website/8086598b/public/img/taken.svg"
      alt="Not Found"
      priority
    />
  );
};

memo(ErrorImage);
