import type { ComponentPropsWithoutRef, ReactNode } from "react";
import styled from "styled-components";

type IIconButton = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const StyledIconButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
  transition: transform 120ms ease-in;
  cursor: pointer;

  &:active {
    transform: scale(0.9);
  }
`;
export const IconButton = ({ children, ...rest }: IIconButton) => (
  <StyledIconButton type="button" {...rest}>
    {children}
  </StyledIconButton>
);
