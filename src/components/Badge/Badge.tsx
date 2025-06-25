import { Sizes } from "@/types/Sizes";
import clsx from "clsx";
import { Label } from "../Label/Label";

export interface BadgeProps {
  layout?: "label" | "icon" | "hint";
  badgeStyle?: "accent" | "positive" | "negative" | "warning";
  size?: typeof Sizes.Medium | typeof Sizes.Small;
  number?: number;
  icon?: string;
}

export const Badge = ({
  layout = "label",
  badgeStyle = "accent",
  size = Sizes.Medium,
  number = 2,
  icon,
}: BadgeProps) => {
  let iconFontSize = "text-xs";
  let textColor = "text-[var(--content-on-color)]";
  let sizeCalculated = "w-5 h-5";
  let bgColor = "";

  switch (badgeStyle) {
    case "positive":
      bgColor = "bg-[var(--bg-positive)]";
      break;
    case "negative":
      bgColor = "bg-[var(--bg-negative)]";
      break;
    case "warning":
      bgColor = "bg-[var(--bg-warning)]";
      break;
    default:
      bgColor = "bg-[var(--bg-accent)]";
  }
  if (size === Sizes.Small) {
    iconFontSize = "text-[10px]";
    sizeCalculated = "w-4 h-4";
  }
  if (badgeStyle === "warning")
    textColor = "text-[var(--content-on-color-inverse)]";
  if (layout === "hint") {
    sizeCalculated = "w-2 h-2";
  }

  return (
    <div
      className={clsx(
        bgColor,
        textColor,
        sizeCalculated,
        "flex items-center justify-center rounded-full"
      )}
    >
      {layout === "label" && (
        <Label text={number.toString()} size={Sizes.XSmall} />
      )}
      {layout === "icon" && (
        <i className={clsx(iconFontSize, `iconoir-${icon}`)}></i>
      )}
    </div>
  );
};
