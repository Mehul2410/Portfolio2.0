import React from "react";
import { Heading } from "../../globalComponents/Heading";
import BasePage from "../../layout/BasePage";
import { Scroller } from "./Scroller";

interface Props {}

export const Education = (props: Props) => {
  return (
    <BasePage
      className="py-16"
      styles={
        <Heading
          className="text-6xl"
          text="Education"
          color="#EEEEEE"
        ></Heading>
      }
    >
      <div className="bg-dark w-full h-full rounded-3xl flex flex-wrap my-6 relative overflow-hidden">
        <Scroller />
      </div>
    </BasePage>
  );
};
