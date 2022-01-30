import "styled-components";

import type colors from "./theme/colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      bg: string;
      fg: string;
      warning: string;
      purple: typeof colors.purple;
      gray: typeof colors.gray;
    };
  }
}
