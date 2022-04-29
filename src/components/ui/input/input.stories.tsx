import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Input } from ".";

export default {
  title: "UI/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: "Primary input",
};

export const Invalid = Template.bind({});
Invalid.args = {
  placeholder: "Invalid input",
  label: "Password",
  invalid: true,
};
