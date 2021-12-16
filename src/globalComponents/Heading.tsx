import React, { ReactNode } from "react";

type TextProps = {
  color?: "#EEEEEE" | "#101124";
  text: string;
  children?: ReactNode;
};

export const Heading = ({ children, text, color, ...props }: TextProps) => {
  const styles = {
    color: color ? color : "#101124",
    textTransform: "uppercase",
    WebkitTextStrokeWidth: "1px",
    WebkitTextStrokeColor: color === "#101124" ? "#EEEEEE" : "#101124",
  };
  return (
    <h1 {...props} style={styles} className="text-7xl absolute">
      {text}
      {children}
    </h1>
  );
};
