import React from "react";
import { Heading } from "../../globalComponents/Heading";
import BasePage from "../../layout/BasePage";
import Image from "next/image";

interface Props {}

export const Skills = (props: Props) => {
  const skills = [
    {
      id: 0,
      image: "/img/python.svg",
      name: "Python",
      percent: "60%",
    },
    {
      id: 1,
      image: "/img/html.svg",
      name: "HTML",
      percent: "100%",
    },
    {
      id: 2,
      image: "/img/css.svg",
      name: "CSS",
      percent: "90%",
    },
    {
      id: 3,
      image: "/img/react.svg",
      name: "REACTJS",
      percent: "85%",
    },
    {
      id: 5,
      image: "/img/git.svg",
      name: "GIT",
      percent: "85%",
    },
    {
      id: 6,
      image: "/img/sql.svg",
      name: "mysql",
      percent: "60%",
    },
    {
      id: 7,
      image: "/img/mongodb.svg",
      name: "MONGODB",
      percent: "70%",
    },
    {
      id: 8,
      image: "/img/nextjs.svg",
      name: "NEXT.JS",
      percent: "80%",
    },
    {
      id: 4,
      image: "/img/tailwind.svg",
      name: "tailwindcss",
      percent: "90%",
    },
  ];
  return (
    <BasePage
      background="bg-dark"
      className="py-16"
      styles={
        <Heading
          className="sticky top-0"
          text="Skills"
          color="#101124"
        ></Heading>
      }
    >
      <div className="bg-first flex justify-evenly flex-wrap p-11 my-10 rounded-xl">
        {skills.map((item) => {
          return (
            <div
              className="w-full max-w-xs m-4 px-5 flex items-center "
              key={item.id}
            >
              <div>
                <Image
                  width={60}
                  height={60}
                  src={item.image}
                  alt={item.name}
                  objectFit="contain"
                />
              </div>
              <div className="m-auto">
                <p className="text-xl text-left mb-2 text-light break-words">
                  {item.name}
                </p>
                <div className="rounded-lg w-32 h-2 relative bg-bg">
                  <span
                    className="rounded-lg top-0 left-0 bg-light h-2 absolute"
                    style={{
                      width: item.percent,
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </BasePage>
  );
};
