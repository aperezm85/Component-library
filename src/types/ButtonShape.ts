export const ButtonShape = {
  Pill: "pill",
  Rect: "rect",
  Circle: "circle",
};

export type ButtonShape = (typeof ButtonShape)[keyof typeof ButtonShape];
