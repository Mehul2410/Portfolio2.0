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
          className="2xl:static top-20 sticky"
          text="Education"
          color="#EEEEEE"
        ></Heading>
      }
    >
      <div className="bg-dark w-full h-44 rounded-3xl my-6">
        <Scroller />
      </div>
    </BasePage>
  );
};
