import React, { ReactNode } from "react";

type TextProps = {
  color?: "#EEEEEE" | "#101124";
  text: string;
  children?: ReactNode;
  className?: any;
};

export const Heading = ({
  children,
  className,
  text,
  color,
  ...props
}: TextProps) => {
  return (
    <h1
      style={{
        color: color ? color : "#101124",
        textTransform: "uppercase",
        WebkitTextStrokeWidth: "1px",
        WebkitTextStrokeColor: color === "#101124" ? "#EEEEEE" : "#101124",
      }}
      className={`text-7xl z-10 absolute max-w-max ${className}`}
    >
      {text}
      {children}
    </h1>
  );
};
