import Image from "next/image";

type GridImageProps = {
  src: string;
};

const GridImage = ({ src }: GridImageProps) => (
  <Image src={src} alt="" width={500} height={500} />
);

export default GridImage;
