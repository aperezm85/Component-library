export const States = {
  Enabled: "enabled",
  Disabled: "disabled",
  Loading: "loading",
} as const;

export type States = (typeof States)[keyof typeof States];
