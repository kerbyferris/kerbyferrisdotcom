"use client";

import Link from "next/link";
import { Inter } from "next/font/google";
import { type NextPage } from "next";
import Head from "next/head";
import { Media, Categories } from "~/lib/data";
import WorkImage from "~/components/work-image";
import { useState } from "react";

export const text = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
});

const Home: NextPage = () => {
  const [currentCategory, setCurrentCategory] = useState(Categories.None);
  const media =
    currentCategory === Categories.None
      ? Media.filter((media) => media.homePage)
      : Media.filter((media) => media.categories.includes(currentCategory));
  const categories = Object.values(Categories).filter(
    (category) => category !== Categories.None
  );

  return (
    <>
      <Head>
        <title>Kerby Ferris</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${text.className} grid min-w-full place-items-center`}>
        <div className="max-w-screen-2xl">
          <nav className="min-w-full bg-header_bg_image bg-cover pl-8 font-bold text-white">
            <h1
              className="cursor-pointer py-5 text-8xl uppercase leading-[72px] hover:text-yellow-300 lg:text-9xl"
              onClick={() => setCurrentCategory(Categories.None)}
            >
              Kerby Ferris
            </h1>
            <ul className="px-[-2px] py-5 text-7xl leading-[53px] lg:text-8xl lg:leading-[72px]">
              {categories.map((category) => (
                <li key={category}>
                  <Link
                    className={
                      category === currentCategory
                        ? "text-gray-300"
                        : "hover:text-yellow-300"
                    }
                    onClick={() => setCurrentCategory(category)}
                    href="/"
                  >
                    <span
                      className={
                        category === currentCategory
                          ? "text-yellow-300"
                          : "hidden"
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
          <div className="justify-items-center md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {media.map(({ src, poster, loop, externalLink }) => (
              <div
                key={src}
                className="grid place-items-center hover:opacity-90"
              >
                {externalLink ? (
                  <Link href={externalLink} target="_blank">
                    <WorkImage src={src} poster={poster} loop={loop} />
                  </Link>
                ) : (
                  <WorkImage src={src} poster={poster} loop={loop} />
                )}
              </div>
            ))}
          </div>
          <footer>
            <ul className="py-10 text-4xl font-bold leading-[30px] text-gray-300">
              <li>
                <Link
                  className="hover:text-yellow-300"
                  href="https://github.com/kerbyferris"
                  target="_blank"
                >
                  -&gt; github
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-300"
                  href="https://instagram.com/kerbyferris"
                  target="_blank"
                >
                  -&gt; instagram
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-yellow-300"
                  href="https://kerbyferris.bandcamp.com"
                  target="_blank"
                >
                  -&gt; bandcamp
                </Link>
              </li>
              <li>-&gt; email (kerbyferris[at]gmail[dot]com)</li>
            </ul>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Home;
