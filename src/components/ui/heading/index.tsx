import type { FC } from "react";
import styled from "styled-components";

import { color } from "@utils";
import type { TColorToken } from "@styles/types";

interface IHeaderProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textColor?: TColorToken;
}
const StyledHeading = styled.h1<IHeaderProps>`
  color: ${(p) => p.textColor && color(p.textColor)};
`;
export const Heading: FC<IHeaderProps> = ({ as, textColor, children }) => (
  <StyledHeading as={as} textColor={textColor}>
    {children}
  </StyledHeading>
);
