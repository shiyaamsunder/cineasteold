import React from "react";
import { Layout } from "../src/components";

export const decorators = [
  (Story) => (
    <Layout themeName="defaultTheme">
      <Story />
    </Layout>
  ),
];
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
