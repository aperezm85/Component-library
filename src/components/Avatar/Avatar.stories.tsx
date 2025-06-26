import type { Meta, StoryObj } from "@storybook/react-vite";

import { Sizes } from "@/types/Sizes";
import { Avatar, type AvatarProps } from "./Avatar";

const meta = {
  component: Avatar,
  title: "Components/Indicators/Avatar",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: Object.values([Sizes.Medium, Sizes.Small]),
      description: "The size of the Avatar.",
      defaultValue: Sizes.Medium,
    },
    initials: {
      control: {
        type: "text",
      },
      description: "The initials for the Avatar",
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllAvatars: Story = {
  args: {
    size: Sizes.Medium,
    initials: "AB",
  },
  render: (args: AvatarProps) => (
    <div className="flex flex-row gap-4">
      {Object.values(Sizes).map((size) => (
        <div className="flex flex-col gap-4 ">
          <Avatar key={size} {...args} size={size} />
          <Avatar key={size} {...args} size={size} initials={undefined} />
        </div>
      ))}
    </div>
  ),
};
