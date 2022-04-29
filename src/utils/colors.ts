import Color from "color";

import type {
  TColorHue,
  TColorName,
  TColorNameHue,
  TColors,
} from "@styles/types";
import { colors as colorsObj } from "@styles/theme/colors";

export const getHSLFromColorString = (value?: TColorNameHue) => {
  if (!value) return colorsObj.purple[300];
  const colorName: [TColorName, TColorHue] | string[] = value.split(".");
  const color: TColors = colorsObj; // doing this because typescript wont allow string for indexing
  return color[colorName[0]][colorName[1]];
};

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
  const colorFunc = new Color(color);

  return `${colorFunc.lighten(ratio)}`;
};

export const darken = (color: string, ratio: number) => {
  const colorFunc = new Color(color);

  return `${colorFunc.darken(ratio)}`;
};
