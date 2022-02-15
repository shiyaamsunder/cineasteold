import type { FC } from "react";
import { ThemeProvider } from "styled-components";

import { Wrapper } from "./layout";

import { themes } from "@styles/themes";
import type { TThemeName } from "@styles/types";
import { GlobalStyle } from "@styles/Globals";

export const Layout: FC<{ themeName: TThemeName }> = ({
  children,
  themeName,
}) => (
  <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>
    <GlobalStyle />
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
);
