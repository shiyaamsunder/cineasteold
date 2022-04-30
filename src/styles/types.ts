import type { DefaultTheme } from "styled-components";

import type { themes } from "./themes";

import type { colors } from "@styles/theme/colors";

type TColorName = keyof typeof colors;
type TColorHue = keyof typeof colors.gray;
type TColorNameHue = `${TColorName}.${TColorHue}`;
export type TDefaultColors = keyof typeof themes.defaultTheme.colorsDefault;

export type TColorToken = TColorNameHue | TDefaultColors;
export type TColorsObject = { [key: string]: { [key: string]: string } };
export type TThemeName = keyof typeof themes;
export type ThemesRecord = Record<TThemeName, DefaultTheme>;
