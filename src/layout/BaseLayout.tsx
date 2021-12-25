import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { Footer } from "../globalComponents/Footer";
import Nav from "../globalComponents/Nav";

type baseLayoutProps = {
  children: React.ReactNode;
  title: string;
  description: string;
};
const BaseLayout = ({ children, title, description }: baseLayoutProps) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Mehul Gawhale | {title}</title>
        <meta name="title" content={`Mehul Gawhale - ${title}`} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="Mehul Gawhale,Portfolio,Web developer,Designer,UI/UX,Reactjs,Nextjs,Interactive design,Web Animation,SEO,Work Experience,Internship,Skills,About,Contact,Github,Linkedin"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Mehul Gawhale" />
        <meta content={description} name="description" />
        <meta
          property="og:url"
          content={`https://mehulgawhale.me${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://mehulgawhale.me${router.asPath}`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Mehul Gawhale" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={`Mehul Gawhale - ${title}`} />
        <meta property="og:image" content="/favicon/android-icon-192x192.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GawhaleMehul" />
        <meta name="twitter:title" content={`Mehul Gawhale - ${title}`} />
        <meta name="twitter:description" content={description} />
        <meta
          name="twitter:image"
          content="/favicon/android-icon-192x192.png"
        />
        <link href="/favicon/favicon.ico" rel="shortcut icon" />
        {/* <link href="/favicon/site.webmanifest" rel="manifest" /> */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/favicon/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/favicon/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/favicon/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/manifest.json" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="msapplication-TileColor" content="#EEEEEE" />
        <meta name="theme-color" content="#EEEEEE" />
        <link rel="preload" as="image" href="/img/mehul.png" />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
