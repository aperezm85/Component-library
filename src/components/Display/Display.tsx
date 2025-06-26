import clsx from "clsx";
import { Sizes } from "@/types/Sizes";
import type { JSX } from "react";

export interface DisplayProps extends React.HTMLAttributes<HTMLHeadingElement> {
  size?:
    | typeof Sizes.Large
    | typeof Sizes.Medium
    | typeof Sizes.Small
    | typeof Sizes.XSmall;
  text: string;
}

export const Display = ({
  size = Sizes.Medium,
  text,
  ...rest
}: DisplayProps) => {
  let className = "";
  let level: 1 | 2 | 3 | 4 = 2; // Default to h2
  switch (size) {
    case Sizes.Large:
      className = "text-8xl leading-28";
      level = 1;
      break;
    case Sizes.Medium:
      className = "text-[52px] leading-16";
      level = 2;
      break;
    case Sizes.Small:
      className = "text-[44px] leading-[52px]";
      level = 3;
      break;
    default:
      className = "text-4xl leading-11";
      level = 4;
      break;
  }

  const Component: keyof JSX.IntrinsicElements = `h${level}`;

  return (
    <Component
      {...rest}
      className={clsx("font-uber-move-bold", "font-bold", className)}
    >
      {text}
    </Component>
  );
};
