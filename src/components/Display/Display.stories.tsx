import type { Meta, StoryObj } from "@storybook/react-vite";

import { Sizes } from "@/types/Sizes";
import { Display, type DisplayProps } from "./Display";

const meta = {
  component: Display,
  title: "Components/Typography/Display",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
      },
      options: Object.values([
        Sizes.Large,
        Sizes.Medium,
        Sizes.Small,
        Sizes.XSmall,
      ]),
      description: "The size of the Display text.",
      defaultValue: Sizes.Medium,
    },
    text: {
      control: {
        type: "text",
      },
      description: "The text content of the Display.",
      defaultValue: "We ignite opportunity by setting the world in motion.",
    },
  },
} satisfies Meta<typeof Display>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllDisplays: Story = {
  args: {
    size: Sizes.Medium,
    text: "We ignite opportunity by setting the world in motion.",
  },
  render: (args: DisplayProps) => (
    <div className="flex flex-col gap-4">
      <Display {...args} size={Sizes.Large}></Display>
      <Display {...args} size={Sizes.Large} text="0123456789"></Display>
      <Display {...args} size={Sizes.Medium}></Display>
      <Display {...args} size={Sizes.Medium} text="0123456789"></Display>
      <Display {...args} size={Sizes.Small}></Display>
      <Display {...args} size={Sizes.Small} text="0123456789"></Display>
      <Display {...args} size={Sizes.XSmall}></Display>
      <Display {...args} size={Sizes.XSmall} text="0123456789"></Display>
    </div>
  ),
};
