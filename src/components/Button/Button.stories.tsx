import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "./Button";
import { Sizes } from "@/types/Sizes";
import { ButtonShape } from "@/types/ButtonShape";
import { Hierarchy } from "@/types/Hierarchy";

const meta = {
  component: Button,
  title: "Components/Core/Button",
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
      description: "The size of the Button text.",
      defaultValue: Sizes.Medium,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RectButton: Story = {
  args: {
    size: Sizes.Medium,
    shape: ButtonShape.Rect,
    text: "Label",
    iconLeading: true,
    leadingIcon: "heart-solid",
  },
  render: (args) => (
    <div className="flex flex-row gap-4 w-3/4">
      <div className="flex flex-col gap-4  justify-evenly">
        <Button {...args} size={Sizes.XSmall} hierarchy={Hierarchy.Primary} />
        <Button {...args} size={Sizes.Small} hierarchy={Hierarchy.Primary} />
        <Button {...args} size={Sizes.Medium} hierarchy={Hierarchy.Primary} />
        <Button {...args} size={Sizes.Large} hierarchy={Hierarchy.Primary} />
      </div>
      <div className="flex flex-col gap-4  justify-evenly">
        <Button {...args} size={Sizes.XSmall} hierarchy={Hierarchy.Secondary} />
        <Button {...args} size={Sizes.Small} hierarchy={Hierarchy.Secondary} />
        <Button {...args} size={Sizes.Medium} hierarchy={Hierarchy.Secondary} />
        <Button {...args} size={Sizes.Large} hierarchy={Hierarchy.Secondary} />
      </div>
      <div className="flex flex-col gap-4  justify-evenly">
        <Button {...args} size={Sizes.XSmall} hierarchy={Hierarchy.Tertiary} />
        <Button {...args} size={Sizes.Small} hierarchy={Hierarchy.Tertiary} />
        <Button {...args} size={Sizes.Medium} hierarchy={Hierarchy.Tertiary} />
        <Button {...args} size={Sizes.Large} hierarchy={Hierarchy.Tertiary} />
      </div>
      <div className="flex flex-col gap-4  justify-evenly">
        <Button
          {...args}
          size={Sizes.XSmall}
          hierarchy={Hierarchy.Primary}
          text={undefined}
        />
        <Button
          {...args}
          size={Sizes.Small}
          hierarchy={Hierarchy.Primary}
          text={undefined}
        />
        <Button
          {...args}
          size={Sizes.Medium}
          hierarchy={Hierarchy.Primary}
          text={undefined}
        />
        <Button
          {...args}
          size={Sizes.Large}
          hierarchy={Hierarchy.Primary}
          text={undefined}
        />
      </div>
      <div className="flex flex-col gap-4  justify-evenly">
        <Button
          {...args}
          size={Sizes.XSmall}
          hierarchy={Hierarchy.Secondary}
          text={undefined}
        />
        <Button
          {...args}
          size={Sizes.Small}
          hierarchy={Hierarchy.Secondary}
          text={undefined}
        />
        <Button
          {...args}
          size={Sizes.Medium}
          hierarchy={Hierarchy.Secondary}
          text={undefined}
        />
        <Button
          {...args}
          size={Sizes.Large}
          hierarchy={Hierarchy.Secondary}
          text={undefined}
        />
      </div>
      <div className="flex flex-col gap-4  justify-evenly">
        <Button
          {...args}
          size={Sizes.XSmall}
          hierarchy={Hierarchy.Tertiary}
          text={undefined}
        />
        <Button
          {...args}
          size={Sizes.Small}
          hierarchy={Hierarchy.Tertiary}
          text={undefined}
        />
        <Button
          {...args}
          size={Sizes.Medium}
          hierarchy={Hierarchy.Tertiary}
          text={undefined}
        />
        <Button
          {...args}
          size={Sizes.Large}
          hierarchy={Hierarchy.Tertiary}
          text={undefined}
        />
      </div>
    </div>
  ),
};

export const PillButton: Story = {
  args: {
    size: Sizes.Medium,
    shape: ButtonShape.Pill,
    text: "Label",
  },
  render: (args) => (
    <div className="flex flex-row gap-4 w-3/4">
      <div className="flex flex-col gap-4  justify-evenly">
        <Button {...args} size={Sizes.XSmall} hierarchy={Hierarchy.Primary} />
        <Button {...args} size={Sizes.Small} hierarchy={Hierarchy.Primary} />
        <Button {...args} size={Sizes.Medium} hierarchy={Hierarchy.Primary} />
        <Button {...args} size={Sizes.Large} hierarchy={Hierarchy.Primary} />
      </div>
      <div className="flex flex-col gap-4  justify-evenly">
        <Button {...args} size={Sizes.XSmall} hierarchy={Hierarchy.Secondary} />
        <Button {...args} size={Sizes.Small} hierarchy={Hierarchy.Secondary} />
        <Button {...args} size={Sizes.Medium} hierarchy={Hierarchy.Secondary} />
        <Button {...args} size={Sizes.Large} hierarchy={Hierarchy.Secondary} />
      </div>
      <div className="flex flex-col gap-4  justify-evenly">
        <Button {...args} size={Sizes.XSmall} hierarchy={Hierarchy.Tertiary} />
        <Button {...args} size={Sizes.Small} hierarchy={Hierarchy.Tertiary} />
        <Button {...args} size={Sizes.Medium} hierarchy={Hierarchy.Tertiary} />
        <Button {...args} size={Sizes.Large} hierarchy={Hierarchy.Tertiary} />
      </div>
    </div>
  ),
};

export const CircleButton: Story = {
  args: {
    size: Sizes.Medium,
    shape: ButtonShape.Circle,
    iconLeading: true,
    leadingIcon: "heart-solid",
  },
  render: (args) => (
    <div className="flex flex-row gap-4 w-3/4">
      <div className="flex flex-col gap-4  justify-evenly">
        <Button {...args} size={Sizes.XSmall} hierarchy={Hierarchy.Primary} />
        <Button {...args} size={Sizes.Small} hierarchy={Hierarchy.Primary} />
        <Button {...args} size={Sizes.Medium} hierarchy={Hierarchy.Primary} />
        <Button {...args} size={Sizes.Large} hierarchy={Hierarchy.Primary} />
      </div>
      <div className="flex flex-col gap-4  justify-evenly">
        <Button {...args} size={Sizes.XSmall} hierarchy={Hierarchy.Secondary} />
        <Button {...args} size={Sizes.Small} hierarchy={Hierarchy.Secondary} />
        <Button {...args} size={Sizes.Medium} hierarchy={Hierarchy.Secondary} />
        <Button {...args} size={Sizes.Large} hierarchy={Hierarchy.Secondary} />
      </div>
      <div className="flex flex-col gap-4  justify-evenly">
        <Button {...args} size={Sizes.XSmall} hierarchy={Hierarchy.Tertiary} />
        <Button {...args} size={Sizes.Small} hierarchy={Hierarchy.Tertiary} />
        <Button {...args} size={Sizes.Medium} hierarchy={Hierarchy.Tertiary} />
        <Button {...args} size={Sizes.Large} hierarchy={Hierarchy.Tertiary} />
      </div>
    </div>
  ),
};
