import Image from "next/image";
import React from "react";
import { Heading } from "../../globalComponents/Heading";
import BasePage from "../../layout/BasePage";
import { Enroot } from "./Enroot";

interface Props {}

export const WorkExperience = (props: Props) => {
  const EnrootsProject = [
    {
      id: 0,
      name: "01 IamTrans",
      src: "/img/iamtrans.png",
    },
    {
      id: 1,
      name: "02 ISewa",
      src: "/img/isewa.png",
    },
    {
      id: 2,
      name: "03 Let india breathe",
      src: "/img/lib.png",
    },
  ];

  return (
    <BasePage
      className="py-16"
      background="bg-dark"
      styles={
        <Heading
          textSize="text-6xl"
          className="2xl:static top-20 sticky"
          text="Work Experience"
          color="#101124"
        ></Heading>
      }
    >
      <div className="flex flex-wrap bg-dark w-full rounded-3xl my-10">
        <Enroot />
        <div className=" m-auto">
          <p className="para-light text-center">Volunteer</p>
          <p className="para-light">October 2020 - present </p>
        </div>
      </div>
      <div className="space-y-14 flex flex-col">
        <p className="para-light">
          Enroot Mumbai is a Non-Profit Organization Solving social problems
          from roots with community & creative Innovation using technical
          Solutions.
        </p>
        <p className="para-light">Projects Contributed to:</p>

        {EnrootsProject.map((item) => {
          return (
            <div className="flex flex-wrap-reverse w-full" key={item.id}>
              <div className=" m-auto">
                <Image
                  src={item.src}
                  width={550}
                  height={300}
                  objectFit="cover"
                />
              </div>
              <div className="self-center max-w-xl m-auto  w-full">
                <Heading
                  className=""
                  textSize="text-5xl"
                  color="#101124"
                  text={item.name}
                />
              </div>
            </div>
          );
        })}
        <button className="w-max self-center text-2xl bg-dark hover:bg-opacity-20 hover:bg-light text-light px-10 py-5 border-2 border-light hover:shadow-light hover:shadow-sm">
          View All
        </button>
      </div>
    </BasePage>
  );
};
