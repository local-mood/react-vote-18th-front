import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/button/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonLayout: Story = {
  args: {},
};
