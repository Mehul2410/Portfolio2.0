import React from "react";
import Link from "next/link";
import BasePage from "../layout/BasePage";

interface Props {}

export const Footer = (props: Props) => {
  return (
    <BasePage id="contact">
      <footer className="pt-14 pb-4 bg-light flex flex-col space-y-10">
        <div className="flex w-full">
          <a
            href="https://twitter.com/GawhaleMehul"
            target="_blank"
            rel="noopener noreferrer"
            className="m-auto hover:underline"
            title="Mehul Gawhale twitter profile"
          >
            Twitter
          </a>
          <a
            href="https://github.com/mehul2410"
            className="m-auto hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            title="Mehul Gawhale GitHub profile"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/mehul-gawhale/"
            className="m-auto hover:underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            title="Mehul Gawhale GitHub profile"
          >
            Linkedin
          </a>
          <a
            href="https://www.instagram.com/mehul24_gawhale_/"
            className="m-auto hover:underline-offset-2 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            title="Mehul Gawhale Instagram profile"
          >
            Instagram
          </a>
        </div>
        <div className="flex">
          <a
            href="mailto:mehulgawhale123@gmail.com"
            className="m-auto"
            title="Send me an email"
          >
            mehulgawhale123@gmail.com
          </a>
          <div className="flex flex-col m-auto">
            Monument Extended by
            <a
              href="https://pangrampangram.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="Pangram Pangram foundry"
            >
              Pangram"Pangram
            </a>
          </div>
        </div>

        <h1 className="text-9xl text-center ">GET IN TOUCH</h1>
      </footer>
    </BasePage>
  );
};
