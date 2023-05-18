import Image from "next/image";

type WorkImageProps = {
  src: string;
  poster: string | undefined;
};

const WorkImage = ({ src, poster }: WorkImageProps) =>
  poster ? (
    <video loop playsInline controls poster={poster} width={500} height={500}>
      <source src={src} type="video/mp4" />
    </video>
  ) : (
    <Image src={src} alt="working" width={500} height={500} />
  );

export default WorkImage;
