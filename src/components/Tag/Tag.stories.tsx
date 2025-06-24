import type { Meta, StoryObj } from "@storybook/react-vite";

import { Tag } from "./Tag";
import { Sizes } from "@/types/Sizes";
import { Color } from "@/types/Color";
import { Hierarchy } from "@/types/Hierarchy";
import { States } from "@/types/States";

const meta = {
  component: Tag,
  title: "Components/Indicators/Tag",
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
      description: "The size of the Tag text.",
      defaultValue: Sizes.Medium,
    },
    hierarchy: {
      control: {
        type: "select",
      },
      options: Object.values([Hierarchy.Primary, Hierarchy.Secondary]),
      description: "The hierarchy of the Tag.",
      defaultValue: Hierarchy.Primary,
    },
    color: {
      control: {
        type: "select",
      },
      options: Object.values([
        Color.Gray,
        Color.Red,
        Color.Orange,
        Color.Yellow,
        Color.Green,
        Color.Blue,
        Color.Purple,
        Color.Magenta,
      ]),
      description: "The color of the Tag.",
      defaultValue: Color.Gray,
    },
    state: {
      control: {
        type: "select",
      },
      options: Object.values([States.Enabled, States.Disabled]),
      description: "The state of the Tag.",
      defaultValue: States.Enabled,
    },
    isSelected: {
      control: {
        type: "boolean",
      },
      description: "Whether the Tag is selected.",
      defaultValue: false,
    },
    iconLeading: {
      control: {
        type: "boolean",
      },
      description: "Whether the Tag has a leading icon.",
      defaultValue: false,
    },
    leadingIcon: {
      control: {
        type: "text",
      },
      description: "The leading icon of the Tag.",
      defaultValue: "",
    },
    iconTrailing: {
      control: {
        type: "boolean",
      },
      description: "Whether the Tag has a trailing icon.",
      defaultValue: false,
    },
    trailingIcon: {
      control: {
        type: "text",
      },
      description: "The trailing icon of the Tag.",
      defaultValue: "",
    },
    text: {
      control: {
        type: "text",
      },
      description: "The text of the Tag.",
      defaultValue: "Label",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: Sizes.Medium,
    hierarchy: Hierarchy.Primary,
    color: Color.Gray,
    state: States.Enabled,
    isSelected: false,
    text: "Label",
    iconLeading: true,
    leadingIcon: "heart-solid",
    iconTrailing: true,
    trailingIcon: "heart-solid",
  },
  render: (args) => <Tag {...args} />,
};

export const AllTags: Story = {
  args: {
    size: Sizes.Medium,
    text: "Label",
  },
  render: (args) => (
    <div className="flex flex-row gap-2">
      {Object.values(Color).map((color) => (
        <div key={color} className="flex flex-col gap-2">
          <Tag {...args} color={color} hierarchy={Hierarchy.Primary} />
          <Tag
            {...args}
            color={color}
            hierarchy={Hierarchy.Primary}
            isSelected
          />
          <Tag
            {...args}
            color={color}
            hierarchy={Hierarchy.Primary}
            state={States.Disabled}
          />
          <Tag {...args} color={color} hierarchy={Hierarchy.Secondary} />

          <Tag
            {...args}
            color={color}
            hierarchy={Hierarchy.Secondary}
            isSelected
          />
          <Tag
            {...args}
            color={color}
            hierarchy={Hierarchy.Secondary}
            state={States.Disabled}
          />
        </div>
      ))}
    </div>
  ),
};
