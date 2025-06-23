import { Sizes } from "../../types/Sizes";
import { Hierarchy } from "../../types/Hierarchy";
import { Color } from "../../types/Color";
import { States } from "../../types/States";
import clsx from "clsx";
import { Label } from "../Label/Label";

export interface TagProps {
  size?:
    | typeof Sizes.Large
    | typeof Sizes.Medium
    | typeof Sizes.Small
    | typeof Sizes.XSmall;
  hierarchy?: typeof Hierarchy.Primary | typeof Hierarchy.Secondary;
  color?:
    | typeof Color.Gray
    | typeof Color.Red
    | typeof Color.Orange
    | typeof Color.Yellow
    | typeof Color.Green
    | typeof Color.Blue
    | typeof Color.Purple
    | typeof Color.Magenta;
  state?: typeof States.Enabled | typeof States.Disabled;
  isSelected?: boolean;
  iconLeading?: boolean;
  leadingIcon?: string;
  iconTrailing?: boolean;
  trailingIcon?: string;
  text?: string;
}

export const Tag = ({
  size = Sizes.Medium,
  hierarchy = Hierarchy.Primary,
  color = Color.Gray,
  state = States.Enabled,
  isSelected = false,
  iconLeading = false,
  leadingIcon,
  iconTrailing = false,
  trailingIcon,
  text,
}: TagProps) => {
  const offset = isSelected ? "-outline-offset-3" : "-outline-offset-2";

  let colors = "";
  let sizes = "";
  switch (color) {
    case Color.Gray:
      colors = "bg-gray-600 outline-gray-700 text-gray-50";
      break;
    case Color.Red:
      colors = "bg-red-600 outline-red-700 text-red-50";
      break;
    case Color.Orange:
      colors = "bg-orange-600 outline-orange-700 text-orange-50";
      break;
    case Color.Yellow:
      colors = "bg-yellow-300 outline-yellow-400 text-yellow-900";
      break;
    case Color.Green:
      colors = "bg-green-600 outline-green-700 text-green-50";
      break;
    case Color.Blue:
      colors = "bg-blue-600 outline-blue-700 text-blue-50";
      break;
    case Color.Purple:
      colors = "bg-purple-600 outline-purple-700 text-purple-50";
      break;
    case Color.Magenta:
      colors = "bg-magenta-600 outline-magenta-700 text-magenta-50";
      break;
    default:
      colors = "bg-gray-600 outline-gray-700 text-gray-50";
  }

  switch (size) {
    case Sizes.Large:
      sizes = "h-10 px-2.5";
      break;
    case Sizes.Medium:
      sizes = "h-8 px-2";
      break;
    case Sizes.Small:
      sizes = "h-6 px-1.5";
      break;
    default:
      sizes = "h-5 px-1";
  }

  return (
    <div
      className={clsx(
        "flex items-center justify-center flex-row gap-1",
        "rounded-lg",
        "outline-2 outline-solid",
        offset,
        colors,
        sizes
      )}
    >
      {text && <Label size={size} text={text} />}
    </div>
  );
};
