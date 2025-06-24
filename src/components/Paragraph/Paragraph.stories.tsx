import type { Meta, StoryObj } from "@storybook/react-vite";

import { Paragraph } from "./Paragraph";
import { Sizes } from "@/types/Sizes";

const meta = {
  component: Paragraph,
  title: "Components/Typography/Paragraph",
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
      description: "The size of the paragraph text.",
      defaultValue: Sizes.Medium,
    },
    children: {
      control: {
        type: "text",
      },
      description: "The text content of the paragraph.",
      defaultValue: "We ignite opportunity by setting the world in motion.",
    },
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllParagraphs: Story = {
  args: {
    size: Sizes.Medium,
    children: "We ignite opportunity by setting the world in motion.",
  },
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Paragraph {...args} size={Sizes.Large}>
        {args.children}
      </Paragraph>
      <Paragraph {...args} size={Sizes.Large}>
        0123456789
      </Paragraph>
      <Paragraph {...args} size={Sizes.Medium}>
        {args.children}
      </Paragraph>
      <Paragraph {...args} size={Sizes.Medium}>
        0123456789
      </Paragraph>
      <Paragraph {...args} size={Sizes.Small}>
        {args.children}
      </Paragraph>
      <Paragraph {...args} size={Sizes.Small}>
        0123456789
      </Paragraph>
      <Paragraph {...args} size={Sizes.XSmall}>
        {args.children}
      </Paragraph>
      <Paragraph {...args} size={Sizes.XSmall}>
        0123456789
      </Paragraph>
    </div>
  ),
};
