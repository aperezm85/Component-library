import { Sizes } from "@/types/Sizes";
import { Hierarchy } from "@/types/Hierarchy";
import { Color } from "@/types/Color";
import { States } from "@/types/States";
import clsx from "clsx";
import { Label } from "../Label/Label";

export interface TagProps extends React.HTMLAttributes<HTMLDivElement> {
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
  let outlineColor = "";
  let iconFontSize = "";
  switch (color) {
    case Color.Red:
      if (state === States.Disabled) {
        colors = "bg-red-50 text-red-300";
        outlineColor = "outline-red-50";
        break;
      }
      if (hierarchy === Hierarchy.Primary) {
        colors = "bg-red-600 text-red-50";
        outlineColor = isSelected ? "outline-primaryA" : "outline-red-700";
      } else {
        colors = "bg-red-50 text-red-700";
        outlineColor = isSelected ? "outline-red-600" : "outline-gray-100";
      }
      break;
    case Color.Orange:
      if (state === States.Disabled) {
        colors = "bg-orange-50 text-orange-300";
        outlineColor = "outline-orange-50";
        break;
      }
      if (hierarchy === Hierarchy.Primary) {
        colors = "bg-orange-600 text-orange-50";
        outlineColor = isSelected ? "outline-primaryA" : "outline-orange-700";
      } else {
        colors = "bg-orange-50 text-orange-700";
        outlineColor = isSelected ? "outline-orange-600" : "outline-orange-100";
      }
      break;
    case Color.Yellow:
      if (state === States.Disabled) {
        colors = "bg-yellow-50 text-yellow-300";
        outlineColor = "outline-yellow-50";
        break;
      }
      if (hierarchy === Hierarchy.Primary) {
        colors = "bg-yellow-300 text-yellow-900";
        outlineColor = isSelected ? "outline-primaryA" : "outline-yellow-400";
      } else {
        colors = "bg-yellow-50 text-yellow-700";
        outlineColor = isSelected ? "outline-yellow-600" : "outline-yellow-100";
      }
      break;
    case Color.Green:
      if (state === States.Disabled) {
        colors = "bg-green-50 text-green-300";
        outlineColor = "outline-green-50";
        break;
      }
      if (hierarchy === Hierarchy.Primary) {
        colors = "bg-green-600 text-green-50";
        outlineColor = isSelected ? "outline-primaryA" : "outline-green-700";
      } else {
        colors = "bg-green-50  text-green-700";
        outlineColor = isSelected ? "outline-green-600" : "outline-green-100";
      }
      break;
    case Color.Blue:
      if (state === States.Disabled) {
        colors = "bg-blue-50 text-blue-300";
        outlineColor = "outline-blue-50";
        break;
      }
      if (hierarchy === Hierarchy.Primary) {
        colors = "bg-blue-600  text-blue-50";
        outlineColor = isSelected ? "outline-primaryA" : "outline-blue-700";
      } else {
        colors = "bg-blue-50 text-blue-700";
        outlineColor = isSelected ? "outline-blue-600" : "outline-blue-100";
      }
      break;
    case Color.Purple:
      if (state === States.Disabled) {
        colors = "bg-purple-50 text-purple-300";
        outlineColor = "outline-purple-50";
        break;
      }
      if (hierarchy === Hierarchy.Primary) {
        colors = "bg-purple-600  text-purple-50";
        outlineColor = isSelected ? "outline-primaryA" : "outline-purple-700";
      } else {
        colors = "bg-purple-50 outline-purple-100 text-purple-700";
        outlineColor = isSelected ? "outline-purple-600" : "outline-purple-100";
      }
      break;
    case Color.Magenta:
      if (state === States.Disabled) {
        colors = "bg-magenta-50 text-magenta-300";
        outlineColor = "outline-magenta-50";
        break;
      }
      if (hierarchy === Hierarchy.Primary) {
        colors = "bg-magenta-600 text-magenta-50";
        outlineColor = isSelected ? "outline-primaryA" : "outline-magenta-700";
      } else {
        colors = "bg-magenta-50 text-magenta-700";
        outlineColor = isSelected
          ? "outline-magenta-600"
          : "outline-magenta-100";
      }
      break;
    default:
      if (state === States.Disabled) {
        colors = "bg-gray-50 text-gray-300";
        outlineColor = "outline-gray-50";
        break;
      }
      if (hierarchy === Hierarchy.Primary) {
        colors = "bg-gray-600 text-gray-50";
        outlineColor = isSelected ? "outline-primaryA" : "outline-gray-700";
      } else {
        colors = "bg-gray-50 text-gray-700";
        outlineColor = isSelected ? "outline-gray-600" : "outline-gray-100";
      }
  }

  switch (size) {
    case Sizes.Large:
      sizes = "h-10 px-2.5";
      iconFontSize = "text-lg";
      break;
    case Sizes.Medium:
      sizes = "h-8 px-2";
      iconFontSize = "text-base";
      break;
    case Sizes.Small:
      sizes = "h-6 px-1.5";
      iconFontSize = "text-sm";
      break;
    default:
      sizes = "h-5 px-1";
      iconFontSize = "text-xs";
  }
  return (
    <div
      className={clsx(
        "inline-flex items-center justify-center flex-row gap-1 w-auto",
        "rounded-lg",
        colors,
        !isSelected && "outline-2 outline-solid",
        isSelected && "outline-3 outline-solid",
        outlineColor,
        offset,
        sizes
      )}
    >
      {iconLeading && leadingIcon && (
        <i className={clsx(iconFontSize, `iconoir-${leadingIcon}`)}></i>
      )}
      {text && <Label size={size} text={text} />}
      {iconTrailing && trailingIcon && (
        <i className={clsx(iconFontSize, `iconoir-${trailingIcon}`)}></i>
      )}
    </div>
  );
};
