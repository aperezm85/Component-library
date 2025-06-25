import type { Meta, StoryObj } from "@storybook/react-vite";

import { ProgressBar } from "./ProgressBar";
import { Sizes } from "@/types/Sizes";
import { ProgressBarType } from "@/types/ProgressBarType";
import { Heading } from "../Heading/Heading";

const meta = {
  component: ProgressBar,
  title: "Components/Progress/ProgressBar",
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
      description: "The size of the ProgressBar text.",
      defaultValue: Sizes.Medium,
    },
    label: {
      control: {
        type: "text",
      },
      description: "The label text of the ProgressBar.",
      defaultValue: "Loading...",
    },
    type: {
      control: {
        type: "select",
      },
      options: Object.values(ProgressBarType),
      description: "The type of the ProgressBar.",
      defaultValue: "indeterminate",
    },
    value: {
      control: {
        type: "number",
      },
      description: "The value of the ProgressBar (0-100) in percentage.",
      defaultValue: 50,
    },
  },
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Indeterminate: Story = {
  args: {
    size: Sizes.Medium,
    label: "Loading...",
    type: ProgressBarType.Indeterminate,
  },
  render: (args) => (
    <div className="flex flex-row gap-4 w-3/4">
      <div className="flex flex-col gap-4 grow-1 justify-evenly">
        <ProgressBar {...args} size={Sizes.Small} label={undefined} />
        <ProgressBar {...args} size={Sizes.Medium} label={undefined} />
        <ProgressBar {...args} size={Sizes.Large} label={undefined} />
      </div>
      <div className="flex flex-col gap-4 grow-1 justify-evenly">
        <ProgressBar {...args} size={Sizes.Small} />
        <ProgressBar {...args} size={Sizes.Medium} />
        <ProgressBar {...args} size={Sizes.Large} />
      </div>
    </div>
  ),
};

export const Determinate: Story = {
  args: {
    size: Sizes.Medium,
    label: "Loading...",
    type: ProgressBarType.Determinate,
    value: 80,
  },
  render: (args) => (
    <div className="flex flex-row gap-4 w-3/4">
      <div className="flex flex-col gap-4 grow-1 justify-evenly">
        <ProgressBar {...args} size={Sizes.Small} label={undefined} />
        <ProgressBar {...args} size={Sizes.Medium} label={undefined} />
        <ProgressBar {...args} size={Sizes.Large} label={undefined} />
      </div>
      <div className="flex flex-col gap-4 grow-1 justify-evenly">
        <ProgressBar {...args} size={Sizes.Small} />
        <ProgressBar {...args} size={Sizes.Medium} />
        <ProgressBar {...args} size={Sizes.Large} />
      </div>
    </div>
  ),
};

export const Circle: Story = {
  args: {
    size: Sizes.Medium,
    label: "Loading...",
    type: ProgressBarType.Circle,
  },
  render: (args) => (
    <div className="flex flex-row gap-4 w-3/4">
      <div className="flex flex-col gap-4 grow-1 justify-evenly">
        <ProgressBar {...args} size={Sizes.Small} label={undefined} />
        <ProgressBar {...args} size={Sizes.Medium} label={undefined} />
        <ProgressBar {...args} size={Sizes.Large} label={undefined} />
        <ProgressBar {...args} size={Sizes.XLarge} label={undefined} />
      </div>
      <div className="flex flex-col gap-4 grow-1 justify-evenly">
        <ProgressBar {...args} size={Sizes.Small} />
        <ProgressBar {...args} size={Sizes.Medium} />
        <ProgressBar {...args} size={Sizes.Large} />
        <ProgressBar {...args} size={Sizes.XLarge} />
      </div>
    </div>
  ),
};

export const Stepped: Story = {
  args: {
    size: Sizes.Medium,
    label: "Loading...",
    type: ProgressBarType.Stepped,
    value: 80,
    steps: 5,
  },
  render: (args) => (
    <div className="flex flex-row gap-4 w-3/4">
      <div className="flex flex-col gap-4 grow-1 justify-evenly">
        <ProgressBar {...args} size={Sizes.Medium} label={undefined} />
        <ProgressBar {...args} size={Sizes.Large} label={undefined} />
      </div>
      <div className="flex flex-col gap-4 grow-1 justify-evenly">
        <ProgressBar {...args} size={Sizes.Medium} />
        <ProgressBar {...args} size={Sizes.Large} />
      </div>
    </div>
  ),
};

export const AllProgressBars: Story = {
  args: {
    size: Sizes.Medium,
    label: "Loading...",
    type: ProgressBarType.Indeterminate,
    steps: 8,
    value: 25,
  },
  render: (args) => (
    <div className="flex flex-col gap-8 w-full ">
      <div className="flex flex-col gap-4 items-center">
        <Heading size={Sizes.Medium} text="Indeterminate Progress Bars" />
        <div className="flex flex-row gap-4 w-3/4">
          <div className="flex flex-col gap-4 grow-1 justify-evenly">
            <ProgressBar
              {...args}
              type={ProgressBarType.Indeterminate}
              size={Sizes.Small}
              label={undefined}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Indeterminate}
              size={Sizes.Medium}
              label={undefined}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Indeterminate}
              size={Sizes.Large}
              label={undefined}
            />
          </div>
          <div className="flex flex-col gap-4 grow-1 justify-evenly">
            <ProgressBar
              {...args}
              type={ProgressBarType.Indeterminate}
              size={Sizes.Small}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Indeterminate}
              size={Sizes.Medium}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Indeterminate}
              size={Sizes.Large}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Heading size={Sizes.Medium} text="Determinate Progress Bars" />
        <div className="flex flex-row gap-4 w-3/4">
          <div className="flex flex-col gap-4 grow-1 justify-evenly">
            <ProgressBar
              {...args}
              type={ProgressBarType.Determinate}
              size={Sizes.Small}
              label={undefined}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Determinate}
              size={Sizes.Medium}
              label={undefined}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Determinate}
              size={Sizes.Large}
              label={undefined}
            />
          </div>
          <div className="flex flex-col gap-4 grow-1 justify-evenly">
            <ProgressBar
              {...args}
              type={ProgressBarType.Determinate}
              size={Sizes.Small}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Determinate}
              size={Sizes.Medium}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Determinate}
              size={Sizes.Large}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Heading size={Sizes.Medium} text="Circle Progress Bars" />
        <div className="flex flex-row gap-4 w-3/4">
          <div className="flex flex-col gap-4 grow-1 justify-evenly">
            <ProgressBar
              {...args}
              type={ProgressBarType.Circle}
              size={Sizes.Small}
              label={undefined}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Circle}
              size={Sizes.Medium}
              label={undefined}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Circle}
              size={Sizes.Large}
              label={undefined}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Circle}
              size={Sizes.XLarge}
              label={undefined}
            />
          </div>
          <div className="flex flex-col gap-4 grow-1 justify-evenly">
            <ProgressBar
              {...args}
              type={ProgressBarType.Circle}
              size={Sizes.Small}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Circle}
              size={Sizes.Medium}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Circle}
              size={Sizes.Large}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Circle}
              size={Sizes.XLarge}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <Heading size={Sizes.Medium} text="Stepped Progress Bars" />
        <div className="flex flex-row gap-4 w-3/4">
          <div className="flex flex-col gap-4 grow-1 justify-evenly">
            <ProgressBar
              {...args}
              type={ProgressBarType.Stepped}
              size={Sizes.Medium}
              label={undefined}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Stepped}
              size={Sizes.Large}
              label={undefined}
            />
          </div>
          <div className="flex flex-col gap-4 grow-1 justify-evenly">
            <ProgressBar
              {...args}
              type={ProgressBarType.Stepped}
              size={Sizes.Medium}
            />
            <ProgressBar
              {...args}
              type={ProgressBarType.Stepped}
              size={Sizes.Large}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
