import type { colors } from "@styles/theme/colors";
import type { DefaultTheme } from "styled-components";

import type { themes } from "./themes";

export type TColorName = keyof typeof colors;
export type TColorHue = keyof typeof colors.gray;
export type TColorNameHue = `${TColorName}.${TColorHue}`;
export type TColors = { [key: string]: { [key: string]: string } };
export type TThemeName = keyof typeof themes;

export type ThemesRecord = Record<TThemeName, DefaultTheme>;
