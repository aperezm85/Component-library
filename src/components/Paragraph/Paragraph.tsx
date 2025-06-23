import clsx from "clsx";
import { Sizes } from "../../types/Sizes";

interface ParagraphProps {
  size?:
    | typeof Sizes.Large
    | typeof Sizes.Medium
    | typeof Sizes.Small
    | typeof Sizes.XSmall;
  children: React.ReactNode;
}

export const Paragraph = ({
  size = Sizes.Medium,
  children,
}: ParagraphProps) => {
  let className = "";
  switch (size) {
    case Sizes.Large:
      className = "text-lg leading-7";
      break;
    case Sizes.Medium:
      className = "text-base leading-6";
      break;
    case Sizes.Small:
      className = "text-sm leading-5";
      break;
    default:
      className = "text-xs leading-5";
      break;
  }

  return (
    <p
      className={clsx("font-uber-move-text-regular", "font-normal", className)}
    >
      {children}
    </p>
  );
};
