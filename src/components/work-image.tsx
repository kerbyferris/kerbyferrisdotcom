import Image from "next/image";

type WorkImageProps = {
  src: string;
  poster?: string;
  loop?: boolean;
};

const WorkImage = ({ src, poster, loop }: WorkImageProps) =>
  poster ? (
    <video
      loop={loop === undefined ? true : loop}
      playsInline={true}
      controls={true}
      poster={poster}
      width={500}
      height={500}
      preload="none"
    >
      <source src={src} type="video/mp4" />
    </video>
  ) : (
    <Image src={src} alt="working" width={500} height={500} />
  );

export default WorkImage;
