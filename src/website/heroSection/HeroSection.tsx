import Image from "next/image";
import React from "react";
import BasePage from "../../layout/BasePage";
import { Ghost } from "./Ghost";

interface Props {}

export const HeroSection = (props: Props) => {
  return (
    <BasePage className="pt-5">
      <div className="pt-10 flex items-end flex-wrap-reverse justify-center ">
        <img
          className="max-w-2xl h-full w-full xl:max-w-lg"
          src="/img/mehul.png"
          alt="Picture of Mehul Gawhale"
        />

        <div className="flex flex-col text-5xl max-w-lg py-5 m-auto">
          <h2>Hi There,</h2>
          <h1>I’m Mehul Gawhale a UI/UX Designer & Developer.</h1>

          <div className="relative h-full self-end xl:hidden">
            <Ghost />
          </div>
        </div>
      </div>
    </BasePage>
  );
};
