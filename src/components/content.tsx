import { Media, Categories } from "~/lib/data";
import GridItem from "./grid-item";

type ContentProps = {
  currentCategory: Categories;
};
const Content = ({ currentCategory }: ContentProps) => {
  const media =
    currentCategory === Categories.None
      ? Media.filter((media) => media.homePage)
      : Media.filter((media) => media.categories.includes(currentCategory));

  return (
    <div className="justify-items-center md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {media.map(({ src, poster, loop, externalLink }) => (
        <div key={src} className="grid place-items-center hover:opacity-90">
          <GridItem
            src={src}
            poster={poster}
            loop={loop}
            externalLink={externalLink}
          />
        </div>
      ))}
    </div>
  );
};

export default Content;
