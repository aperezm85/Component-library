import type { Meta, StoryObj } from "@storybook/react-vite";

import { ActionCard } from "./ActionCard";

const meta = {
  component: ActionCard,
  title: "Components/Cards/ActionCard",
  tags: ["autodocs"],
  argTypes: {
    title: { control: { type: "text" } },
    subtitle: { control: { type: "text" } },
    buttonTitle: { control: { type: "text" } },
    image: { control: { type: "text" } },
    altImage: { control: { type: "text" } },
    link: { control: { type: "text" } },
  },
} satisfies Meta<typeof ActionCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RectActionCard: Story = {
  args: {
    title: "Trip",
    subtitle: "Go anywhere with Uber. Request a trip, hop in and go.",
    buttonTitle: "Details",
    image: "assets/images/ride.png",
    altImage: "Trip",
    link: "#",
  },
  render: (args) => <ActionCard {...args} />,
};

export const AllCards: Story = {
  args: {
    title: "Trip",
    subtitle: "Go anywhere with Uber. Request a trip, hop in and go.",
    buttonTitle: "Details",
    image: "assets/images/ride.png",
    altImage: "Trip",
    link: "#",
  },
  render: () => (
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
      <ActionCard
        title={"Trip"}
        subtitle={"Go anywhere with Uber. Request a trip, hop in and go."}
        buttonTitle={"Details"}
        image={"assets/images/ride.png"}
        altImage={"Trip"}
        link={"#"}
      />
      <ActionCard
        title={"Reserve"}
        subtitle={
          "Reserve your ride in advance so you can relax on the day of your trip."
        }
        buttonTitle={"Details"}
        image={"assets/images/reserve_clock.png"}
        altImage={"Reserve"}
        link={"#"}
      />
      <ActionCard
        title={"Train and coach"}
        subtitle={"Book train, coach and Eurostar tickets in the Uber app."}
        buttonTitle={"Details"}
        image={"assets/images/uber_train_coach.png"}
        altImage={"Train and coach"}
        link={"#"}
      />
      <ActionCard
        title={"Car hire"}
        subtitle={
          "Your perfect rental car is a few clicks away. Learn more about Uber Car Hire."
        }
        buttonTitle={"Details"}
        image={"assets/images/car-rentals.png"}
        altImage={"Car hire"}
        link={"#"}
      />
      <ActionCard
        title={"Flights"}
        subtitle={"Book your next plane flight through the Uber app."}
        buttonTitle={"Details"}
        image={"assets/images/uber_flight.png"}
        altImage={"Flights"}
        link={"#"}
      />
      <ActionCard
        title={"Food"}
        subtitle={"Order delivery from local restaurants with Uber Eats."}
        buttonTitle={"Details"}
        image={"assets/images/ub_mode_nav_eats.png"}
        altImage={"Food"}
        link={"#"}
      />
    </div>
  ),
};
