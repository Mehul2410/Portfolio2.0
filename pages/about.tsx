import type { NextPage } from "next";
import Link from "next/link";
import BaseLayout from "../src/layout/BaseLayout";
import BasePage from "../src/layout/BasePage";
import { Scroller } from "../src/website/Education/Scroller";
const Home: NextPage = () => {
  return (
    <div>
      <BaseLayout>
        <BasePage background="bg-dark" className="py-20">
          <div className="flex flex-wrap relative">
            <div className="m-auto my-0 sticky top-32 xl:relative xl:top-0 xl:mb-10">
              <img
                src="/img/mehul.jpg"
                alt=""
                className="rounded-photo max-w-xl w-full object-cover sticky top-20"
              />
            </div>
            <div className="space-y-10 m-auto">
              <div className="max-w-2xl  text-light space-y-8">
                <h1 className="text-4xl">About me</h1>
                <h2 className="text-2xl decoration-slice underline-offset-4 underline">
                  Hey there, I am Mehul Gawhale, a developer, and designer from
                  Mumbai. I Design things and solve problems.
                </h2>
                <p className="text-xl">
                  Currently pursuing a bachelor's degree in the 4th year of IT
                  engineering.
                </p>
                <p className="text-xl"> I like to brainstorm new ideas!</p>
                <p className="text-xl">
                  Apart from that, I am a Change Marker, futurist ,Problem
                  solver, and tech enthusiast. Feel free to share your thoughts,
                  I am all ears. I will try to help in every way possible.
                </p>
              </div>
              <div className="max-w-2xl  text-light space-y-8">
                <h1 className="text-4xl">My Goals</h1>
                <h2 className="text-2xl decoration-slice underline-offset-4 underline">
                  CONTRIBUTING SOCIAL PROJECTS. and DO THINGS THAT MAKE ME A
                  BETTER PERSON.
                </h2>
                <p className="text-xl">Share my ideas to help others.</p>
                <p className="text-xl">
                  To work in an organization where I can utilize and apply my
                  knowledge, skills which would enable me to grow while
                  fulfilling organizational goals
                </p>
              </div>
              <h1 className="text-4xl text-light">Education</h1>
              <div className="bg-light w-full h-full rounded-3xl flex flex-wrap my-6 relative overflow-hidden scale-90">
                <Scroller color="text-dark" />
              </div>
              <div className="flex flex-col max-w-2xl space-y-10">
                <h1 className="text-4xl text-light">Currently Working on:</h1>
                <Link href="/beSafe">
                  <a className="flex flex-wrap space-x-5 bg-light rounded-3xl p-5">
                    <img
                      src="/img/beSafe.png"
                      alt="BeSafe"
                      className=" w-52 object-cover rounded-3xl h-5w-52 m-auto"
                    />
                    <h2 className="text-xl self-center max-w-sm m-auto sm:mt-6">
                      The project aims to develop a mobile app for citizens and
                      police for crime record management. It can be accessed by
                      both citizens and police easily.
                    </h2>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </BasePage>
      </BaseLayout>
    </div>
  );
};

export default Home;
