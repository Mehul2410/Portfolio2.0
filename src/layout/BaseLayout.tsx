import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Footer } from "../globalComponents/Footer";
import Nav from "../globalComponents/Nav";

type baseLayoutProps = {
  children: React.ReactNode;
};
const BaseLayout = ({ children }: baseLayoutProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Mehul Gawhale - Portfolio</title>
        <meta name="robots" content="follow, index" />
        <meta
          content="I Create Neat an Interactive Websites.I like to brainstorm new ideas and contributing Social projects"
          name="description"
        />
        <meta
          property="og:url"
          content={`https://mehulgawhale.me/${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://mehulgawhale.me/${router.asPath}`}
        />
        <link rel="shortcut icon" href="/favicon/favicon.png" />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/favicon/192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/16x16.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mehul Gawhale" />
        <meta
          property="og:description"
          content="I Create Neat an Interactive Websites.I like to brainstorm new ideas and contributing Social projects"
        />
        <meta property="og:title" content="Mehul Gawhale - Portfolio" />
        <meta property="og:image" content="/favicon/MG.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GawhaleMehul" />
        <meta name="twitter:title" content="Mehul Gawhale - Portfolio" />
        <meta
          name="twitter:description"
          content="I Create Neat an Interactive Websites.I like to brainstorm new ideas and contributing Social projects"
        />
        <meta name="twitter:image" content="/favicon/MG.png" />
        {/* {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )} */}
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
