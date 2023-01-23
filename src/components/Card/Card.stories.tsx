import type { Meta, StoryObj } from "@storybook/react";

import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Card",
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Generic: Story = {
  args: {
    type: "Recipe",
    name: "Sample Recipe",
    description: "A Tasty Recipe",
    image: {
      src: "/empty-image.svg",
      alt: "",
    },
  },
};
