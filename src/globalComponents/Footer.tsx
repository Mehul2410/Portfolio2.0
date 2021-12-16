import React from "react";
import Link from "next/link";

interface Props {}

export const Footer = (props: Props) => {
  const socialHandles = [
    {
      id: 0,
      img: "/img/linkedin.svg",
      url: "https://linkedin.com/",
    },
    {
      id: 1,
      img: "/img/insta.svg",
      url: "https://instagram.com/",
    },
    {
      id: 2,
      img: "/img/facebook.svg",
      url: "https://facebook.com/",
    },
    {
      id: 3,
      img: "/img/twitter.svg",
      url: "https://twitter.com/",
    },
  ];

  return <footer className=" py-14 bg-textColor"></footer>;
};
