import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Primary",
};

export const Default = Template.bind({});
Default.args = {
  children: "Default",
};

export const Large = Template.bind({});
Large.args = {
  size: "lg",
  children: "Large",
};

export const Small = Template.bind({});
Small.args = {
  size: "sm",
  children: "Small",
};
