import styled, { css } from "styled-components";

import type { IInputProps } from "./input";

import { color } from "@utils";

const defaultStyles = css`
  margin: 4px;
  margin-bottom: 0px;
  border-radius: 12px;
  height: 38px;
  outline-offset: 3px;
  font-family: inherit;
  color: white;
  padding: 14px 12px;
  font-size: 14px;
  transition: all 180ms ease-in-out;
  background-color: ${color("gray.400")};
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
      0px 0px 0px 3px rgba(154, 87, 253, 0.25),
      0px 0px 0px 2px rgba(154, 87, 253, 0.25);
  }
`;

const filledStyles = css`
  border: 2px solid transparent;
  outline: none;
  background: ${color("gray.300")};

  &:hover {
    background: ${color("gray.400")};
  }

  box-shadow: 0px 1px 4px rgb(41 41 41 / 59%);
  &:focus {
    background: transparent;
    border: 2px solid ${color("purple.300")};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 0px 0px 3px rgba(154, 87, 253, 0.25),
      0px 0px 0px 2px rgba(154, 87, 253, 0.25);
  }
`;
const smInput = css`
  height: 22px;
  font-size: 14px;
  padding: 14px 10px;
`;

const errorStyles = css`
  border: 2px solid ${color("red.200")};
  color: ${color("red.300")};
  &:focus-visible,
  &:active {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 0px 0px 3px rgba(226, 93, 93, 0.25),
      0px 0px 0px 2px rgba(226, 93, 93, 0.25);
  }
`;

const errorInputWrapper = css`
  border-color: ${color("red.300")};
`;

export const InputWrapper = styled.div<{ invalid?: boolean }>`
  margin: 10px;
  padding: 2.5px 5px;
  margin-bottom: 20px;
  border-width: 0px 0px 0px 4px;
  border-style: solid;
  border-color: transparent;
  border-radius: 2px;

  /* ${(p) => p.invalid && errorInputWrapper} */
`;

export const MessagesWrapper = styled.div`
  width: 100%;
  margin-top: 5px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 500ms ease-in-out;
`;
export const ErrorMessage = styled.div<{ isFullWidth?: boolean }>`
  width: fit-content;
  padding: 5px 10px;
  border-radius: 12px;
  /* background: ${color("red.400")}; */
  color: ${color("red.200")};

  font-size: 13px;
  font-weight: 500;
`;

export const SuggestionMessage = styled.div`
  width: fit-content;
  padding: 5px 10px;
  border-radius: 12px;
  background: ${color("red.400")};
  color: hsl(0deg 100% 96%);

  font-size: 13px;
  font-weight: 500;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -22px;
`;
export const StyledInput = styled.input<IInputProps>`
  ${defaultStyles}

  ${(p) => p.isFullWidth && "width:100%;"}
  ${(p) => p.variant === "outlined" && outlinedStyles}

  ${(p) => p.variant === "filled" && filledStyles}  

  ${(p) => p.invalid && errorStyles}

  ${(p) => p.inputSize === "sm" && smInput}
`;
