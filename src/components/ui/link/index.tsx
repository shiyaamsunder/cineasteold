import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";

import { color, getProperFontSizeFromProp } from "@utils";
import type { ComponentSizeProps } from "@utils";

export type ILink = {
  children: ReactNode;
  href: string;
  size?: ComponentSizeProps;
} & ComponentPropsWithoutRef<"a">;

const StyledLink = styled.a<ILink>`
  text-decoration: none;
  font-weight: 400;
  font-size: ${({ size }) => size && `${getProperFontSizeFromProp(size)}px`};
  color: ${color("purple.100")};
  margin: 0px 5px;
  cursor: pointer;
  transition: all 120ms ease-in;
  &:hover {
    color: ${color("purple.300")};
    text-decoration: underline;
  }

  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;
export const Link = ({ children, size = "md", href, ...rest }: ILink) => {
  return (
    <StyledLink size={size} href={href} {...rest}>
      {children}
    </StyledLink>
  );
};
