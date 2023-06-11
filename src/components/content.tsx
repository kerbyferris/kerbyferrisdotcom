import { Media, Categories } from "~/lib/data";
import GridItem from "./grid-item";
import { selectCategoryState } from "../store/categorySlice";
import { useAppSelector } from "../store/hooks";

const Content = () => {
  const categoryState = useAppSelector(selectCategoryState);

  const media =
    categoryState === Categories.None
      ? Media.filter((m) => m.homePage)
      : Media.filter((m) => m.categories.includes(categoryState));

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
