"use client";

import Head from "next/head";
import { Inter } from "next/font/google";
import "~/styles/globals.css";
import Header from "~/components/header";
import Footer from "~/components/footer";
import { Providers } from "./providers";

const interFont = Inter({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "block",
  preload: true,
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Kerby Ferris</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${interFont.className}`}>
        <main className="grid min-w-full place-items-center">
          <div className="max-w-screen-2xl">
            <Providers>
              <Header />
              {children}
              <Footer />
            </Providers>
          </div>
        </main>
      </body>
    </html>
  );
}
