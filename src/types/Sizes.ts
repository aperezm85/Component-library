export const Sizes = {
  XXLarge: "xxl",
  XLarge: "xl",
  Large: "lg",
  Medium: "md",
  Small: "sm",
  XSmall: "xs",
} as const;

export type Sizes = (typeof Sizes)[keyof typeof Sizes];
