export const Hierarchy = {
  Primary: "primary",
  Secondary: "secondary",
  Tertiary: "tertiary",
} as const;

export type Hierarchy = (typeof Hierarchy)[keyof typeof Hierarchy];
