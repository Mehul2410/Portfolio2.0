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
        <meta name="title" content="Mehul Gawhale - Portfolio" />
        <meta
          name="description"
          content="I Create Neat and Interactive Websites.I like to brainstorm new ideas and contributing Social projects"
        />
        <meta
          name="keywords"
          content="Mehul Gawhale,Portfolio,Web developer,Designer,UI/UX,Reactjs,Nextjs,Interactive design,Web Animation,SEO,Work Experience,Internship,Skills,About,Contact,Github,Linkedin"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Mehul Gawhale" />
        <meta name="robots" content="follow, index" />
        <meta
          content="I Create Neat and Interactive Websites.I like to brainstorm new ideas and contributing Social projects"
          name="description"
        />
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
        <meta
          property="og:description"
          content="I Create Neat and Interactive Websites.I like to brainstorm new ideas and contributing Social projects"
        />
        <meta property="og:title" content="Mehul Gawhale - Portfolio" />
        <meta property="og:image" content="/favicon/MG.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@GawhaleMehul" />
        <meta name="twitter:title" content="Mehul Gawhale - Portfolio" />
        <meta
          name="twitter:description"
          content="I Create Neat and Interactive Websites.I like to brainstorm new ideas and contributing Social projects"
        />
        <meta name="twitter:image" content="/favicon/MG.png" />
      </Head>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
