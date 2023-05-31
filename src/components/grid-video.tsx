type GridVideoProps = {
  src: string;
  poster: string;
  loop: boolean;
};

const GridVideo = ({ src, poster, loop }: GridVideoProps) => (
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
);

export default GridVideo;
