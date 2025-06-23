import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tag } from "./Tag";
import { Sizes } from "../../types/Sizes";
import { Color } from "../../types/Color";

const meta = {
  component: Tag,
  title: "Components/Indicators/Tag",
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: Object.values(Sizes),
      },
      description: "The size of the Tag text.",
      defaultValue: Sizes.Medium,
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllTags: Story = {
  args: {
    size: Sizes.Medium,
    text: "Label",
  },
  render: (args) => (
    <div className="flex flex-row gap-2">
      {Object.values(Color).map((color) => (
        <Tag key={color} {...args} color={color} />
      ))}
    </div>
  ),
};
