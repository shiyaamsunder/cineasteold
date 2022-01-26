import type { FC } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/Globals";

export const StyledApp: FC = ({ children }) => (
  <ThemeProvider theme={{}}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);
