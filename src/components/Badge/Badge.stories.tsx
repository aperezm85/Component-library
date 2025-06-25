import type { Meta, StoryObj } from "@storybook/react-vite";

import { Sizes } from "@/types/Sizes";
import { Badge, type BadgeProps } from "./Badge";

const meta = {
  component: Badge,
  title: "Components/Badge/Badge",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: Object.values([Sizes.Medium, Sizes.Small]),
      description: "The size of the Badge.",
      defaultValue: Sizes.Medium,
    },

    layout: {
      control: {
        type: "select",
      },
      options: ["label", "icon", "hint"],
      description: "The layout of the Badge.",
      defaultValue: "label",
    },
    badgeStyle: {
      control: {
        type: "select",
      },
      options: ["accent", "positive", "negative", "warning"],
      description: "The style of the Badge.",
      defaultValue: "accent",
    },
    number: {
      control: {
        type: "number",
      },
      description: "The number displayed in the Badge.",
      defaultValue: 2,
    },
    icon: {
      control: {
        type: "text",
      },
      description: "The icon displayed in the Badge.",
      defaultValue: "star-solid",
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllBadges: Story = {
  args: {
    size: Sizes.Medium,
    layout: "label",
    badgeStyle: "accent" as BadgeProps["badgeStyle"],
    number: 2,
    icon: "star",
  },
  render: (args: BadgeProps) => (
    <div className="flex flex-row gap-4">
      {["accent", "positive", "negative", "warning"].map((style) => (
        <div className="flex flex-col gap-4">
          <Badge
            {...args}
            size={Sizes.Medium}
            layout="label"
            badgeStyle={style as BadgeProps["badgeStyle"]}
          />
          <Badge
            {...args}
            size={Sizes.Small}
            layout="label"
            badgeStyle={style as BadgeProps["badgeStyle"]}
          />
          <Badge
            {...args}
            size={Sizes.Medium}
            layout="icon"
            badgeStyle={style as BadgeProps["badgeStyle"]}
          />
          <Badge
            {...args}
            size={Sizes.Small}
            layout="icon"
            badgeStyle={style as BadgeProps["badgeStyle"]}
          />
          <Badge
            {...args}
            size={Sizes.Medium}
            layout="hint"
            badgeStyle={style as BadgeProps["badgeStyle"]}
          />
          <Badge
            {...args}
            size={Sizes.Small}
            layout="hint"
            badgeStyle={style as BadgeProps["badgeStyle"]}
          />
        </div>
      ))}
    </div>
  ),
};
