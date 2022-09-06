import { colord } from "colord";
import type { DefaultTheme } from "styled-components";

import type { TColorsObject, TColorToken, TDefaultColors } from "@styles/types";
import { colors } from "@styles/theme/colors";

const checkIfValidCSSLayoutProp = (prop: string) =>
  prop.endsWith("px") || prop.endsWith("rem") || prop.endsWith("%");

export const getValidCSSLayoutValue = (prop: string | number) => {
  if (typeof prop === "string") {
    const isValid = checkIfValidCSSLayoutProp(prop);
    if (isValid) return prop;
  }
  return `${prop}px`;
};

export const getProperSizeFromProp = (
  size: "sm" | "md" | "lg"
): { width: number; height: number } => {
  const mdSize = [96, 36];

  const sizes = {
    sm: [mdSize[0] / 1.5, mdSize[1] / 1.5],
    md: mdSize,
    lg: [mdSize[0] * 1.5, mdSize[1] * 1.5],
  };

  return {
    width: sizes[size][0],
    height: sizes[size][1],
  };
};

export const getProperFontSizeFromProp = (size: "sm" | "md" | "lg") => {
  const mdFontSize = 14;
  const fontSizes = {
    sm: mdFontSize - 2,
    md: mdFontSize,
    lg: mdFontSize + 2,
  };

  return fontSizes[size];
};

export const lighten = (color: string, ratio: number) => {
  const colorFunc = colord(color);

  return `${colorFunc.lighten(ratio)}`;
};

export const darken = (color: string, ratio: number) => {
  const colorFunc = colord(color);

  return `${colorFunc.darken(ratio)}`;
};

/**
 * Helper function to fetch the color from Theme using the given color tokens.
 * @param token TColors
 * @returns string
 */
export const color =
  (token: TColorToken) =>
  ({ theme }: { theme: DefaultTheme }) => {
    const colorName = token.split(".");
    if (colorName.length === 1 && colorName) {
      const defaultColors = theme.colorsDefault;
      return defaultColors[colorName[0] as TDefaultColors];
    }
    const splittedColor: TColorsObject = theme.colors; // doing this because typescript wont allow string for indexing
    return splittedColor[colorName[0]][colorName[1]];
  };

export const getIconColor = (
  color: "currentColor" | "danger" | "success" | "warning"
) => {
  if (color === "currentColor") return color;
  const iconColors = {
    danger: colors.red[200],
    // TODO: Add yellow and green color palette
    success: "#fffff",
    warning: "#fffff",
  };

  return iconColors[color];
};
