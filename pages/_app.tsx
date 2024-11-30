import "@/styles/globals.css";

import Head from "next/head";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLayoutEffect, useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function App({ Component, pageProps }: AppProps) {
  const [loader, setLoader] = useState<boolean>(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return (
    <>
      <Head>
        <title>Streamer</title>
        <link rel="icon" href="/logo_stream.png" />
      </Head>
      {!loader ? (
        <div className={`${geistMono.variable} ${geistSans.variable}`}>
          <Component {...pageProps} />
        </div>
      ) : (
        <div style={{ height: "100vh" }} className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            {/* <span className="sr-only">Loading...</span> */}
          </div>
        </div>
      )}
    </>
  );
}
