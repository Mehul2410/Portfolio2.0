import React from "react";
import { Footer } from "../globalComponents/Footer";
import Nav from "../globalComponents/Nav";

type baseLayoutProps = {
  children: React.ReactNode;
};
const BaseLayout = ({ children }: baseLayoutProps) => {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
};

export default BaseLayout;
