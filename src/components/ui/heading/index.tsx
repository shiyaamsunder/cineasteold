import type { FC, ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

import { color } from "@utils";
import type { TColorToken } from "@styles/types";

interface IHeaderProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  textColor?: TColorToken;
}
type IHeading = IHeaderProps &
  ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">;
const StyledHeading = styled.h1<IHeading>`
  color: ${(p) => p.textColor && color(p.textColor)};
`;
export const Heading: FC<IHeading> = ({ as, textColor, children, ...rest }) => (
  <StyledHeading as={as} textColor={textColor} {...rest}>
    {children}
  </StyledHeading>
);
