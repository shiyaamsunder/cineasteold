import "styled-components";

import type { colors } from "./theme/colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      bg: string;
      bgAccent: string;
      fg: string;
      warning: string;
      purple: typeof colors.purple;
      gray: typeof colors.gray;
      red: typeof colors.red;
      shadowDark: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      "2xl": string;
      "3xl": string;
      none: string;
    };
    shadows: {
      md: string;
    };
  }
}
