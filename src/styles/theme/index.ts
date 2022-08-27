import type { DefaultTheme } from "styled-components";

import { colors } from "./colors";

const mediaQueryPixels = {
  mobile: 320,
  tablet: 768,
  laptop: 1024,
  laptopLarge: 1440,
  "4k": 2560,
};
export const defaultTheme: DefaultTheme = {
  colorsDefault: {
    primary: "hsl(264deg 55% 51%)",
    bg: "black",
    bgAccent: "hsla(240, 3%, 12%, 1)",
    fg: "white",
    warning: "red",
    shadowDark: "hsla(240, 10%, 9%, 0.6)",
  },
  colors,
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

  mediaQueries: {
    pixels: mediaQueryPixels,
    minWidth: {
      mobile: `(min-width: ${mediaQueryPixels.mobile}px)`,
      tablet: `(min-width: ${mediaQueryPixels.tablet}px)`,
      laptop: `(min-width: ${mediaQueryPixels.laptop}px)`,
      laptopLarge: `(min-width: ${mediaQueryPixels.laptopLarge}px)`,
      "4k": `(min-width: ${mediaQueryPixels["4k"]}px)`,
    },

    maxWidth: {
      mobile: `(max-width: ${mediaQueryPixels.mobile}px)`,
      tablet: `(max-width: ${mediaQueryPixels.tablet}px)`,
      laptop: `(max-width: ${mediaQueryPixels.laptop}px)`,
      laptopLarge: `(max-width: ${mediaQueryPixels.laptopLarge}px)`,
      "4k": `(max-width: ${mediaQueryPixels["4k"]}px)`,
    },
  },
};
