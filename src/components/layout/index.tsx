import { themes } from "@styles/themes";
import type { TThemeName } from "@styles/types";
import type { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@styles/Globals";

import { Wrapper } from "./layout";

export const Layout: FC<{ themeName: TThemeName }> = ({
  children,
  themeName,
}) => (
  <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
);
