"use client";

import { Inter } from "next/font/google";
import { type NextPage } from "next";
import Head from "next/head";
import { Media, Categories } from "~/lib/data";
import Navigation from "~/components/navigation";
import GridItem from "~/components/grid-item";
import Footer from "~/components/footer";
import { useState } from "react";

export const text = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "block",
});

const Home: NextPage = () => {
  const [currentCategory, setCurrentCategory] = useState(Categories.None);
  const media =
    currentCategory === Categories.None
      ? Media.filter((media) => media.homePage)
      : Media.filter((media) => media.categories.includes(currentCategory));

  return (
    <>
      <Head>
        <title>Kerby Ferris</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${text.className} grid min-w-full place-items-center`}>
        <div className="max-w-screen-2xl">
          <Navigation
            currentCategory={currentCategory}
            handler={setCurrentCategory}
          />
          <div className="justify-items-center md:grid md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {media.map(({ src, poster, loop, externalLink }) => (
              <div
                key={src}
                className="grid place-items-center hover:opacity-90"
              >
                <GridItem
                  src={src}
                  poster={poster}
                  loop={loop}
                  externalLink={externalLink}
                />
              </div>
            ))}
          </div>
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
