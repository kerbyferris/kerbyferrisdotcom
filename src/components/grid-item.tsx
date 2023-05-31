import GridImage from "./grid-image";
import GridVideo from "./grid-video";
import Link from "next/link";

type GridItemProps = {
  src: string;
  poster?: string;
  loop?: boolean;
  externalLink?: string;
};

const GridItem = ({ src, poster, loop, externalLink }: GridItemProps) => {
  const item = poster ? (
    <GridVideo
      src={src}
      poster={poster}
      loop={loop === undefined ? true : loop}
    />
  ) : (
    <GridImage src={src} />
  );
  return externalLink ? (
    <Link href={externalLink} target="_blank">
      {item}
    </Link>
  ) : (
    item
  );
};

export default GridItem;
