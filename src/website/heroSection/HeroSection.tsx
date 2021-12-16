import Image from "next/image";
import React from "react";
import { Heading } from "../../globalComponents/Heading";
import BasePage from "../../layout/BasePage";

interface Props {}

export const HeroSection = (props: Props) => {
  return (
    <BasePage>
      <div className="pt-20 flex items-end flex-wrap-reverse justify-center ">
        <Image
          src="/img/mehul.png"
          alt="Picture of the author"
          width={800}
          height={800}
          objectFit="cover"
        />

        <div className="flex flex-col text-5xl max-w-lg py-5 m-auto">
          <h2 className="">Hi There,</h2>
          <h2>I’m Mehul Gawhale a UI/UX Designer & Developer.</h2>

          <div className="relative h-full self-end">
            <img
              className="animate-bounce mt-10 "
              src="/img/ghost.svg"
              alt=""
            />
            <img className="absolute -mt-20" src="/img/laptop.svg" alt="" />
          </div>
        </div>
      </div>
    </BasePage>
  );
};
