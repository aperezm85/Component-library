import type { Meta, StoryObj } from "@storybook/react-vite";

import { Sizes } from "../../types/Sizes";
import { Heading, type HeadingProps } from "./Heading";

const meta = {
  component: Heading,
  title: "Components/Typography/Heading",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: Object.values(Sizes),
      },
      description: "The size of the Heading text.",
      defaultValue: Sizes.Medium,
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllHeadings: Story = {
  args: {
    size: Sizes.Medium,
    text: "We ignite opportunity by setting the world in motion.",
  },
  render: (args: HeadingProps) => (
    <div className="flex flex-col gap-4">
      <Heading {...args} size={Sizes.Large}></Heading>
      <Heading {...args} size={Sizes.Large} text="0123456789"></Heading>
      <Heading {...args} size={Sizes.Medium}></Heading>
      <Heading {...args} size={Sizes.Medium} text="0123456789"></Heading>
      <Heading {...args} size={Sizes.Small}></Heading>
      <Heading {...args} size={Sizes.Small} text="0123456789"></Heading>
      <Heading {...args} size={Sizes.XSmall}></Heading>
      <Heading {...args} size={Sizes.XSmall} text="0123456789"></Heading>
    </div>
  ),
};
