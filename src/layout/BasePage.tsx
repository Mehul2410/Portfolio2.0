import React, { ReactHTMLElement } from "react";
import BaseLayout from "./BaseLayout";

interface basePageProps {
  children: React.ReactNode;
  className?: any;
  // img?: string;
  // imgStyle?: string;
  styles?: any;
}

const BasePage = (props: basePageProps) => {
  const { children, styles, className = "" } = props;
  return (
    <div className={`base-page relative h-full ${className} bg-light`}>
      {styles}
      <div className="max-w-8xl m-auto px-5 relative">{children}</div>
    </div>
  );
};

export default BasePage;
