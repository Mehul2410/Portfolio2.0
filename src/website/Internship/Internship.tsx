import Image from "next/image";
import React from "react";
import { Heading } from "../../globalComponents/Heading";
import BasePage from "../../layout/BasePage";

interface Props {}

export const Internship = (props: Props) => {
  const IntershipData = [
    {
      id: 0,
      name: "Oye Busy Technologies",
      time: "Feb 2021 - April-2021",
      type: "Web Developer",
    },
    {
      id: 1,
      name: "sahu technologies",
      time: "July-2021 - August-2021",
      type: "Web Developer",
    },
    {
      id: 2,
      name: "C-Tech continentals",
      time: "July-2021 - Sep 2021",
      type: "UI Designer and Developer",
    },
  ];
  return (
    <BasePage
      className="py-16"
      styles={
        <Heading
          textSize="text-6xl"
          className="2xl:static top-20 sticky"
          text="Internship"
          color="#EEEEEE"
        ></Heading>
      }
    >
      <div className="my-10 flex flex-wrap">
        <div className="animate-wiggle m-auto">
          <Image
            src="/img/internship.png"
            alt="internship"
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
        <div className="bg-dark max-w-2xl w-full  m-auto rounded-3xl overflow-hidden p-10 space-y-4">
          {IntershipData.map((item) => {
            return (
              <div
                className="border-b border-light flex flex-wrap pb-4 space-y-2"
                key={item.id}
              >
                <div className="text-light max-w-sm space-y-4 w-full">
                  <p>{item.name}</p>
                  <p>{item.time}</p>
                  <p>Role : {item.type}</p>
                </div>
                {/* <button className="w-max self-start text-base bg-dark hover:bg-opacity-20 hover:bg-light text-light px-7 py-4 border-2 border-light hover:shadow-light hover:shadow-sm">
                  Know more
                </button> */}
              </div>
            );
          })}
        </div>
      </div>
    </BasePage>
  );
};
