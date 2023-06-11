"use client";

import { Inter } from "next/font/google";
import { type NextPage } from "next";
import Head from "next/head";
import Header from "~/components/header";
import Content from "~/components/content";
import Footer from "~/components/footer";

export const text = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "block",
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kerby Ferris</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${text.className} grid min-w-full place-items-center`}>
        <div className="max-w-screen-2xl">
          <Header />

          <Content />

          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;
