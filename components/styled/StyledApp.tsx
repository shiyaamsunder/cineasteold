import { themes } from "@styles/themes";
import type { ThemeName } from "@styles/types";
import type { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/Globals";

export const StyledApp: FC<{ themeName: ThemeName }> = ({
  children,
  themeName,
}) => (
  <ThemeProvider theme={themes[themeName] || themes.defaultTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
