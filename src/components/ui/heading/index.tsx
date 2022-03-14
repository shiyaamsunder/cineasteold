import type { FC } from "react";
import styled from "styled-components";

import { getHSLFromColorString } from "@utils";
import type { TColorNameHue } from "@styles/types";

interface IHeaderProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textColor?: TColorNameHue;
}
const StyledHeading = styled.h1<IHeaderProps>`
  color: ${({ textColor }) => getHSLFromColorString(textColor)};
`;
export const Heading: FC<IHeaderProps> = ({ as, textColor, children }) => (
  <StyledHeading as={as} textColor={textColor}>
    {children}
  </StyledHeading>
);
