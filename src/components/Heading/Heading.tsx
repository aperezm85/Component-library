import clsx from "clsx";
import { Sizes } from "../../types/Sizes";
import type { JSX } from "react";

export interface HeadingProps {
  size?:
    | typeof Sizes.XXLarge
    | typeof Sizes.XLarge
    | typeof Sizes.Large
    | typeof Sizes.Medium
    | typeof Sizes.Small
    | typeof Sizes.XSmall;
  text: string;
}

export const Heading = ({ size = Sizes.Medium, text }: HeadingProps) => {
  let className = "";
  let level: 1 | 2 | 3 | 4 | 5 | 6 = 2; // Default to h2
  switch (size) {
    case Sizes.XXLarge:
      className = "text-[40px] leading-[52px]";
      level = 1;
      break;
    case Sizes.XLarge:
      className = "text-4xl leading-11";
      level = 2;
      break;
    case Sizes.Large:
      className = "text-[32px] leading-10";
      level = 3;
      break;
    case Sizes.Medium:
      className = "text-[28px] leading-9";
      level = 4;
      break;
    case Sizes.Small:
      className = "text-2xl leading-8";
      level = 5;
      break;
    default:
      className = "text-xl leading-7";
      level = 6;
      break;
  }

  const Component: keyof JSX.IntrinsicElements = `h${level}`;

  return (
    <Component className={clsx("font-uber-move-bold", "font-bold", className)}>
      {text}
    </Component>
  );
};
