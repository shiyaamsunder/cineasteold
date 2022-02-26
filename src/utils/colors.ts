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
