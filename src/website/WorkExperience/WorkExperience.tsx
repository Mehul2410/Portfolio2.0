import React from "react";
import { Heading } from "../../globalComponents/Heading";
import BasePage from "../../layout/BasePage";
import { Enroot } from "./Enroot";

interface Props {}

export const WorkExperience = (props: Props) => {
  return (
    <BasePage
      className="py-16"
      background="bg-dark"
      styles={
        <Heading
          className="2xl:static top-20 sticky"
          text="Work Experience"
          color="#101124"
        ></Heading>
      }
    >
      <div className="bg-dark w-full h-44 rounded-3xl my-6">
        <Enroot />
      </div>
    </BasePage>
  );
};
