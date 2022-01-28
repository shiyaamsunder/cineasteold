import "styled-components";

import type colors from "./theme/colors";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
  }
}
