import type { DefaultTheme } from "styled-components";

import { colors } from "./colors";

export const defaultTheme: DefaultTheme = {
  colors: {
    primary: "hsl(264deg 55% 51%)",
    bg: "black",
    bgAccent: "hsla(240, 3%, 12%, 1)",
    fg: "white",
    warning: "red",
    purple: colors.purple,
    gray: colors.gray,
    shadowDark: "hsla(240, 10%, 9%, 0.6)",
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

  shadows: {
    md: `0 0 0 1px rgb(255 255 255 / 10%), 0px 0.8px 3px rgb(0 0 0 / 0%),
    0px 2.7px 6px rgb(0 0 0 / 30%), 0px 10px 10px rgb(0 0 0 / 24%)`,
  },
};
