import type { DefaultTheme } from "styled-components";

import colors from "./colors";

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: colors.purple[300],
    bg: "black",
    fg: "white",
    warning: "red",
    purple: colors.purple,
    gray: colors.gray,
  },
};
