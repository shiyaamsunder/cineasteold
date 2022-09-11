import React from "react";
import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Link } from ".";

export default {
  title: "UI/Link",
  component: Link,
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Link (default)",
};
