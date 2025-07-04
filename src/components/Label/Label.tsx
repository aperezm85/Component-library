import clsx from "clsx";
import { Sizes } from "@/types/Sizes";

export interface LabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  size?:
    | typeof Sizes.Large
    | typeof Sizes.Medium
    | typeof Sizes.Small
    | typeof Sizes.XSmall;
  text: string;
}

export const Label = ({ size = Sizes.Medium, text, ...rest }: LabelProps) => {
  let className = "";
  switch (size) {
    case Sizes.Large:
      className = "text-lg leading-6";
      break;
    case Sizes.Medium:
      className = "text-base leading-5";
      break;
    case Sizes.Small:
      className = "text-sm leading-4";
      break;
    default:
      className = "text-xs leading-4";
      break;
  }

  return (
    <span
      {...rest}
      className={clsx("font-uber-move-text-medium", "font-medium", className)}
    >
      {text}
    </span>
  );
};
