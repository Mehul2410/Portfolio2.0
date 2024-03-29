import React, { ReactNode } from "react";

type TextProps = {
  color?: "#EEEEEE" | "#101124";
  text: string;
  children?: ReactNode;
  textSize?: string;
  className?: any;
};

export const Heading = ({
  children,
  className,
  text,
  color,
  textSize,
  ...props
}: TextProps) => {
  return (
    <h2
      style={{
        color: color ? color : "#101124",
        textTransform: "uppercase",
        fontFamily: "MonumentExtended Ultrabold",
        WebkitTextStrokeWidth: "1px",
        WebkitTextStrokeColor: color === "#101124" ? "#EEEEEE" : "#101124",
      }}
      className={`${
        textSize ? textSize : " text-7xl"
      } z-10 max-w-max ${className}`}
    >
      {text}
      {children}
    </h2>
  );
};
