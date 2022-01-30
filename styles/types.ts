import type colors from "@styles/theme/colors";
import type { DefaultTheme } from "styled-components";

import type { themes } from "./themes";

export type colors = typeof colors;
export type ThemeName = keyof typeof themes;

export type ThemesRecord = Record<ThemeName, DefaultTheme>;
