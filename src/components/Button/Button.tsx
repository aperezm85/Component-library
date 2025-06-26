import { ButtonShape } from "@/types/ButtonShape";
import { Hierarchy } from "@/types/Hierarchy";
import { States } from "@/types/States";
import clsx from "clsx";
import { Label } from "../Label/Label";
import { Sizes } from "@/types/Sizes";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  size?:
    | typeof Sizes.Large
    | typeof Sizes.Medium
    | typeof Sizes.Small
    | typeof Sizes.XSmall;
  shape?: ButtonShape;
  hierarchy?: Hierarchy;
  state?: States;
  text?: string;
  iconLeading?: boolean;
  leadingIcon?: string;
  iconTrailing?: boolean;
  trailingIcon?: string;
}

export const Button = ({
  size = Sizes.Medium,
  shape = ButtonShape.Rect,
  hierarchy = Hierarchy.Primary,
  state = States.Enabled,
  text,
  iconLeading = false,
  leadingIcon,
  iconTrailing = false,
  trailingIcon,
  ...rest
}: ButtonProps) => {
  let iconFontSize = "";
  let sizes = "";

  switch (size) {
    case Sizes.Large:
      iconFontSize = "text-lg";
      sizes =
        shape === ButtonShape.Circle || (shape === ButtonShape.Rect && !text)
          ? "size-14"
          : "py-4.5 px-4";
      break;
    case Sizes.Medium:
      iconFontSize = "text-base";
      sizes =
        shape === ButtonShape.Circle || (shape === ButtonShape.Rect && !text)
          ? "size-12"
          : "py-3.5 px-3.5";
      break;
    case Sizes.Small:
      iconFontSize = "text-sm";
      sizes =
        shape === ButtonShape.Circle || (shape === ButtonShape.Rect && !text)
          ? "size-9"
          : "py-2.5 px-3";
      break;
    default:
      iconFontSize = "text-xs";
      sizes =
        shape === ButtonShape.Circle || (shape === ButtonShape.Rect && !text)
          ? "size-7"
          : "py-1.5 px-[2.5]";
  }

  return (
    <button
      {...rest}
      disabled={state === States.Disabled}
      className={clsx(
        "flex flex-row justify-center items-center cursor-pointer gap-2",
        sizes,
        shape === ButtonShape.Rect && "rounded-lg",
        shape === ButtonShape.Circle && "rounded-full",
        shape === ButtonShape.Pill && "rounded-[36px]",
        "transition-all duration-200 ease-in",
        hierarchy === Hierarchy.Primary &&
          state !== States.Disabled &&
          "bg-[var(--bg-inverse-primary)] text-[var(--content-inverse-primary)] hover:bg-[#333333]",
        hierarchy === Hierarchy.Secondary &&
          state !== States.Disabled &&
          "bg-[var(--bg-tertiary)] text-[var(--content-primary)] hover:bg-gray-200",
        (hierarchy === Hierarchy.Primary ||
          hierarchy === Hierarchy.Secondary) &&
          state === States.Disabled &&
          "bg-[var(--bg-state-disabled)] text-[var(--content-state-disabled)] cursor-not-allowed pointer-events-none",
        hierarchy === Hierarchy.Tertiary &&
          state !== States.Disabled &&
          "bg-transparent text-[var(--content-primary)] hover:bg-gray-200",
        hierarchy === Hierarchy.Tertiary &&
          state === States.Disabled &&
          "bg-transparent text-[var(--content-state-disabled)] cursor-not-allowed pointer-events-none",
        state !== States.Disabled &&
          "active:bg-[var(--bg-inverse-primary)] active:text-[var(--content-inverse-primary)]"
      )}
    >
      {iconLeading && leadingIcon && (
        <i className={clsx(iconFontSize, `iconoir-${leadingIcon}`)}></i>
      )}
      {text && <Label size={size} text={text} />}
      {iconTrailing && trailingIcon && (
        <i className={clsx(iconFontSize, `iconoir-${trailingIcon}`)}></i>
      )}
    </button>
  );
};
