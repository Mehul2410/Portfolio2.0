import React, { ReactHTMLElement } from "react";
import BaseLayout from "./BaseLayout";

interface basePageProps {
  children: React.ReactNode;
  className?: any;
  // img?: string;
  // imgStyle?: string;
  background?: "bg-dark";
  styles?: any;
}

const BasePage = (props: basePageProps) => {
  const { children, styles, className, background } = props;
  return (
    <div
      className={`base-page relative w-full h-full ${className} ${
        background === "bg-dark" ? "bg-dark" : "bg-light"
      }`}
    >
      {styles}
      <div className="max-w-8xl m-auto px-5 relative">{children}</div>
    </div>
  );
};

export default BasePage;
