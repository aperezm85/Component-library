import clsx from "clsx";
import { Button } from "../Button/Button";
import { Sizes } from "@/types/Sizes";
import { Hierarchy } from "@/types/Hierarchy";
import { ButtonShape } from "@/types/ButtonShape";
import { Label } from "../Label/Label";
import { Paragraph } from "../Paragraph/Paragraph";

export interface ActionCardProps {
  title: string;
  subtitle: string;
  buttonTitle: string;
  image: string;
  altImage: string;
  link: string;
}

export const ActionCard = ({
  title,
  subtitle,
  buttonTitle,
  image,
  altImage,
  link,
}: ActionCardProps) => {
  return (
    <a
      href={link}
      className={clsx(
        "flex items-center content-between p-4 no-underline",
        "bg-gray-50 rounded-lg",
        "p-4"
      )}
    >
      <div className={clsx("flex flex-col justify-between self-stretch")}>
        <div>
          <Label size={Sizes.Medium} text={title} />
          <div className={clsx()}>
            <Paragraph size={Sizes.XSmall}>{subtitle}</Paragraph>
          </div>
        </div>
        <div>
          <Button
            size={Sizes.Small}
            hierarchy={Hierarchy.Tertiary}
            text={buttonTitle}
            shape={ButtonShape.Pill}
          />
        </div>
      </div>
      <img
        src={image}
        alt={altImage}
        className={clsx("object-contain size-32")}
      />
    </a>
  );
};
