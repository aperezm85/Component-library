export const ProgressBarType = {
  Circle: "circle",
  Determinate: "determinate",
  Indeterminate: "indeterminate",
  Stepped: "stepped",
  Pill: "pill",
} as const;

export type ProgressBarType =
  (typeof ProgressBarType)[keyof typeof ProgressBarType];
