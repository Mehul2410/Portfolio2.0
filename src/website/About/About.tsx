import { motion } from "framer-motion";
import React from "react";
import { Heading } from "../../globalComponents/Heading";
import BasePage from "../../layout/BasePage";
import { Meditate } from "./Meditate";

interface Props {}

export const About = (props: Props) => {
  return (
    <BasePage
      background="bg-dark"
      className="py-24"
      id="about"
      styles={
        <Heading
          className="2xl:static top-20 sticky"
          text="About"
          color="#101124"
        ></Heading>
      }
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex flex-wrap justify-center mt-5"
      >
        <div className="mx-auto ">
          <Meditate />
        </div>
        <div className="max-w-lg m-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="para-light"
          >
            I Create Neat an Interactive Websites. I am Currently pursuing a
            bachelor's degree in the 4th year of IT engineering. I like to
            brainstorm new ideas and contributing Social projects.
          </motion.p>
        </div>
      </motion.div>
    </BasePage>
  );
};
