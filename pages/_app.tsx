import type { AppProps } from "next/app";
import Link from "next/link";
import Head from "next/head";
import "@/styles/globals.css";
import Navbar from "@/src/components/navbar";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="">
      <Head>
        <title>JawaPlumBlog</title>
        <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </Head>
      <Navbar/>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
