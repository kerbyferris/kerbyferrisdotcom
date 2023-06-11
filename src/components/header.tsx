import Link from "next/link";
import { Categories } from "~/lib/data";
import { selectCategoryState, setCategoryState } from "../store/categorySlice";
import { useAppSelector, useAppDispatch } from "../store/hooks";

const Header = () => {
  const categories = Object.values(Categories).filter(
    (category) => category !== Categories.None
  );

  const categoryState = useAppSelector(selectCategoryState);
  const dispatch = useAppDispatch();

  return (
    <nav className="min-w-full bg-header_bg_image bg-cover pl-8 font-bold text-white">
      <h1
        className="cursor-pointer py-5 text-8xl uppercase leading-[72px] hover:text-yellow-300 lg:text-9xl"
        onClick={() => dispatch(setCategoryState(Categories.None))}
      >
        Kerby Ferris
      </h1>
      <ul className="px-[-2px] py-5 text-7xl leading-[53px] lg:text-8xl lg:leading-[72px]">
        {categories.map((category) => (
          <li key={category}>
            <Link
              className={
                category === categoryState
                  ? "text-gray-300"
                  : "hover:text-yellow-300"
              }
              onClick={() => dispatch(setCategoryState(category))}
              href="/"
            >
              <span
                className={
                  category === categoryState ? "text-yellow-300" : "hidden"
                }
              >
                &#9656;
              </span>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
