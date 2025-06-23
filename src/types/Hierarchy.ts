export const Hierarchy = {
  Primary: "primary",
  Secondary: "secondary",
} as const;

export type Hierarchy = (typeof Hierarchy)[keyof typeof Hierarchy];
