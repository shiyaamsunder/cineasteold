import type { DefaultTheme } from "styled-components";

import { colors } from "./colors";

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: colors.purple[300],
    bg: "black",
    fg: "white",
    warning: "red",
    purple: colors.purple,
    gray: colors.gray,
  },
  radius: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "40px",
    "3xl": "56px",
    none: "0px",
  },
};
