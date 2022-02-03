import { colors as colorsObj } from "@styles/theme/colors";
import type {
  TColorHue,
  TColorName,
  TColorNameHue,
  TColors,
} from "@styles/types";

export const getHSLFromColorString = (value?: TColorNameHue) => {
  if (!value) return colorsObj.purple[300];
  const colorName: [TColorName, TColorHue] | string[] = value.split(".");
  const color: TColors = colorsObj; // doing this because typescript wont allow string for indexing
  return color[colorName[0]][colorName[1]];
};
