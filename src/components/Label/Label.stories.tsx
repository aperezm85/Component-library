import type { Meta, StoryObj } from "@storybook/react-vite";

import { Sizes } from "../../types/Sizes";
import { Label, type LabelProps } from "./Label";

const meta = {
  component: Label,
  title: "Components/Typography/Label",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: Object.values(Sizes),
      },
      description: "The size of the Label text.",
      defaultValue: Sizes.Medium,
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllLabels: Story = {
  args: {
    size: Sizes.Medium,
    text: "We ignite opportunity by setting the world in motion.",
  },
  render: (args: LabelProps) => (
    <div className="flex flex-col gap-4">
      <Label {...args} size={Sizes.Large}></Label>
      <Label {...args} size={Sizes.Large} text="0123456789"></Label>
      <Label {...args} size={Sizes.Medium}></Label>
      <Label {...args} size={Sizes.Medium} text="0123456789"></Label>
      <Label {...args} size={Sizes.Small}></Label>
      <Label {...args} size={Sizes.Small} text="0123456789"></Label>
      <Label {...args} size={Sizes.XSmall}></Label>
      <Label {...args} size={Sizes.XSmall} text="0123456789"></Label>
    </div>
  ),
};
