export const Color = {
  Gray: "gray",
  Red: "red",
  Orange: "orange",
  Yellow: "yellow",
  Green: "green",
  Blue: "blue",
  Purple: "purple",
  Magenta: "magenta",
} as const;

export type Color = (typeof Color)[keyof typeof Color];
