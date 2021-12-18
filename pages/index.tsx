import type { NextPage } from "next";
import Head from "next/head";
import BaseLayout from "../src/layout/BaseLayout";
import { About } from "../src/website/About/About";
import { Education } from "../src/website/Education/Education";
import { HeroSection } from "../src/website/heroSection/HeroSection";
import { Internship } from "../src/website/Internship/Internship";
import { Skills } from "../src/website/Skills/Skills";
import { WorkExperience } from "../src/website/WorkExperience/WorkExperience";

const Home: NextPage = () => {
  return (
    <div>
      <BaseLayout>
        <HeroSection />
        <About />
        {/* <Education /> */}
        <WorkExperience />
        <Internship />
        <Skills />
      </BaseLayout>
    </div>
  );
};

export default Home;
