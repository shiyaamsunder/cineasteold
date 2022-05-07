import styled, { css } from "styled-components";

import type { IInputProps } from "./input";

import { color } from "@utils";

const defaultStyles = css`
  margin: 4px;
  background-color: ${color("gray.400")};
  border-radius: 12px;
  height: 38px;
  outline-offset: 3px;
  font-family: inherit;
  color: white;
  padding: 14px 12px;
  font-size: 14px;
  transition: all 180ms ease-in-out;
  &::placeholder {
    color: ${color("gray.100")};
  }
`;

const outlinedStyles = css`
  border: 2px solid ${color("purple.300")};
  transition: "all 120ms ease-in";
  outline: 0;
  &:active,
  &:focus-visible {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 0px 0px 4px rgba(154, 87, 253, 0.25),
      0px 0px 0px 3px rgba(154, 87, 253, 0.25);
  }
`;
const smInput = css`
  height: 22px;
  font-size: 14px;
  padding: 14px 10px;
`;

const errorStyles = css`
  border: 2px solid ${color("red.100")};
  color: ${color("red.300")};
  &:focus-visible,
  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 0px 0px 3px rgba(226, 93, 93, 0.25),
      0px 0px 0px 2px rgba(226, 93, 93, 0.25);
  }
`;

export const InputWrapper = styled.div`
  margin: 10px;
`;
export const StyledInput = styled.input<IInputProps>`
  ${defaultStyles}

  ${(p) => p.variant === "outlined" && outlinedStyles}

  ${(p) => p.invalid && errorStyles}

  ${(p) => p.inputSize === "sm" && smInput}
`;
