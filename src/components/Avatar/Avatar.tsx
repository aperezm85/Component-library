import { Sizes } from "@/types/Sizes";
import clsx from "clsx";
import { Display } from "../Display/Display";
import { Heading } from "../Heading/Heading";
import { Label } from "../Label/Label";

export interface AvatarProps {
  size?: Sizes;
  initials?: string;
}
export const Avatar = ({ size = Sizes.Medium, initials }: AvatarProps) => {
  let avatarHeight = "size-12";
  switch (size) {
    case Sizes.XXLarge:
      {
        avatarHeight = "size-[116px]";
      }
      break;
    case Sizes.XLarge:
      {
        avatarHeight = "size-20";
      }
      break;
    case Sizes.Large:
      {
        avatarHeight = "size-14";
      }
      break;
    case Sizes.Small:
      {
        avatarHeight = "size-9";
      }
      break;
    case Sizes.XSmall:
      {
        avatarHeight = "size-7";
      }
      break;
    default: {
      avatarHeight = "size-12";
    }
  }

  const printInitials = (text?: string) => {
    switch (size) {
      case Sizes.XXLarge:
        {
          if (!text)
            return (
              <i className={clsx("text-[52px] leading-16", "iconoir-user")} />
            );
          return <Display size={Sizes.Medium} text={text} />;
        }
        break;
      case Sizes.XLarge:
        {
          if (!text)
            return (
              <i className={clsx("text-[36px] leading-11", "iconoir-user")} />
            );
          return <Heading size={Sizes.XLarge} text={text} />;
        }
        break;
      case Sizes.Large:
        {
          if (!text)
            return (
              <i className={clsx("text-[28px] leading-9", "iconoir-user")} />
            );
          return <Heading size={Sizes.Medium} text={text} />;
        }
        break;
      case Sizes.Small:
        {
          if (!text)
            return (
              <i className={clsx("text-base leading-5", "iconoir-user")} />
            );
          return <Label size={Sizes.Medium} text={text} />;
        }
        break;
      case Sizes.XSmall:
        {
          if (!text)
            return <i className={clsx("text-xs leading-4", "iconoir-user")} />;
          return <Label size={Sizes.XSmall} text={text} />;
        }
        break;
      default: {
        if (!text)
          return <i className={clsx("text-xl leading-7", "iconoir-user")} />;
        return <Heading size={Sizes.XSmall} text={text} />;
      }
    }
  };

  return (
    <div
      className={clsx(
        avatarHeight,
        "rounded-full",
        "bg-accent text-[var(--content-on-color)]",
        "flex flex-col align-middle items-center justify-center"
      )}
    >
      {printInitials(initials?.substring(0, 2))}
    </div>
  );
};
