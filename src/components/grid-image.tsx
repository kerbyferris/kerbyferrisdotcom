import Image from "next/image";

type GridImageProps = {
  src: string;
  unoptimized?: boolean;
};

const GridImage = ({ src, unoptimized }: GridImageProps) => (
  <Image
    src={src}
    alt="making things"
    unoptimized={unoptimized === undefined ? true : false}
    width={500}
    height={500}
  />
);

export default GridImage;
