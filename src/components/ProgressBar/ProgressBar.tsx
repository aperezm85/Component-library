import { ProgressBarType } from "@/types/ProgressBarType";
import { Sizes } from "@/types/Sizes";
import { clsx } from "clsx";
import { Label } from "@/components/Label/Label";
import { Heading } from "@/components/Heading/Heading";

export interface ProgressBarProps {
  type: ProgressBarType;
  size?:
    | typeof Sizes.XLarge
    | typeof Sizes.Large
    | typeof Sizes.Medium
    | typeof Sizes.Small;
  label?: string;
  value?: number;
  steps?: number;
}

export const ProgressBar = ({
  type = ProgressBarType.Determinate,
  size = Sizes.Medium,
  label,
  value,
  steps = 5,
}: ProgressBarProps) => {
  let calculatedSize = size;

  if (size === Sizes.XLarge && type !== ProgressBarType.Circle) {
    calculatedSize = Sizes.Large;
  }
  if (size === Sizes.XLarge && type === ProgressBarType.Stepped) {
    calculatedSize = Sizes.Large;
  }
  if (size === Sizes.Small && type === ProgressBarType.Stepped) {
    calculatedSize = Sizes.Medium;
  }

  const progressBarIndeterminate = () => {
    let height = "h-[2px]";
    if (size === Sizes.Medium) {
      height = "h-[4px]";
    } else if (size === Sizes.Large) {
      height = "h-[8px]";
    }
    return (
      <div
        className={clsx(
          "w-full overflow-hidden",
          height,
          "bg-[var(--bg-tertiary)]",
          "flex flex-col items-center"
        )}
      >
        <div
          className={clsx(
            "h-full transition-all duration-500 ease-in-out",
            "w-1/2 animate-pulse",
            "bg-gradient-to-r from-[#276EF1/0] via-[#276EF1] to-[#276EF1/0]"
          )}
        />
      </div>
    );
  };

  const progressBarDeterminate = () => {
    let height = "h-[2px]";
    if (size === Sizes.Medium) {
      height = "h-[4px]";
    } else if (size === Sizes.Large) {
      height = "h-[8px]";
    }
    return (
      <div
        className={clsx(
          "relative",
          "w-full overflow-hidden",
          height,
          "bg-[var(--bg-tertiary)]",
          "flex flex-col items-start"
        )}
      >
        <div
          className={clsx(
            "relative h-full",
            "transition-all duration-500 ease-in-out animate-pulse",
            "bg-[var(--border-accent)]"
          )}
          style={{ width: `${value || 0}%` }}
        />
      </div>
    );
  };

  const progressBarCircle = () => {
    let sizePx = `w-6 h-6`;
    if (size === Sizes.Medium) {
      sizePx = `w-9 h-9`;
    }
    if (size === Sizes.Large) {
      sizePx = `w-12 h-12`;
    }
    if (size === Sizes.XLarge) {
      sizePx = `w-16 h-16`;
    }

    return (
      <div className={clsx("flex items-center justify-center")}>
        <div
          className={clsx(
            sizePx,
            "flex items-center justify-center",
            "animate-spin",
            "border-4 border-[var(--bg-tertiary)] border-t-[var(--border-accent)] rounded-full"
          )}
        />
      </div>
    );
  };

  const progressBarStepped = () => {
    let height = "h-[4px]";
    if (size === Sizes.Large) {
      height = "h-[8px]";
    }
    const stepsCompleted = Math.floor((value || 0) / (100 / steps));

    return (
      <div className={clsx("flex w-full flex-row gap-1", height)}>
        {steps > 0 &&
          Array.from({ length: steps }, (_, index) => (
            <div
              key={`step-${index}`}
              className={clsx(
                "grow-1 h-full",
                index < stepsCompleted && "bg-[var(--border-accent)]",
                index === stepsCompleted &&
                  "bg-[var(--border-accent)]/50 transition-all duration-1000 ease-in-out animate-pulse",
                index > stepsCompleted && "bg-[var(--bg-tertiary)]"
              )}
            />
          ))}
      </div>
    );
  };

  return (
    <div
      className={clsx(
        "flex flex-col items-center",
        size === Sizes.Small ? "gap-3" : "gap-4"
      )}
    >
      {type === ProgressBarType.Indeterminate && progressBarIndeterminate()}
      {type === ProgressBarType.Determinate && progressBarDeterminate()}
      {type === ProgressBarType.Circle && progressBarCircle()}
      {type === ProgressBarType.Stepped && progressBarStepped()}

      {label && calculatedSize !== Sizes.XLarge && (
        <Label text={label} size={calculatedSize} />
      )}
      {label && calculatedSize === Sizes.XLarge && (
        <Heading text={label} size={Sizes.XSmall} />
      )}
    </div>
  );
};
