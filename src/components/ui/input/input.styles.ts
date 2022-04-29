import styled, { css } from "styled-components";

import type { IInputProps } from "./input";

const defaultStyles = css((p) => ({
  margin: "4px",
  background: `${p.theme.colors.gray[400]}`,
  borderRadius: 12,
  height: 38,
  outlineOffset: "3px",
  fontFamily: "inherit",
  color: "white",
  padding: "14px 12px",
  fontSize: 14,
}));

const outlinedStyles = css((p) => ({
  border: `2px solid ${p.theme.colors.primary}`,
  transition: "all 120ms ease-in",
  outline: 0,
  "&:active, &:focus-visible": {
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 0px 4px rgba(154, 87, 253, 0.25), 0px 0px 0px 3px rgba(154, 87, 253, 0.25)",
  },
}));

const smInput = css`
  height: 22px;
  font-size: 14px;
  padding: 14px 10px;
`;

const errorStyles = css((p) => ({
  border: `2px solid ${p.theme.colors.red[300]}`,
  color: `${p.theme.colors.red[300]}`,
  "&:active, &:focus-visible": {
    boxShadow:
      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 0px 0px 3px rgba(226, 93, 93, 0.25), 0px 0px 0px 2px rgba(226, 93, 93, 0.25)",
  },
}));

export const InputWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center; */
`;
// export const outlined
export const StyledInput = styled.input<IInputProps>`
  ${defaultStyles}

  ${(p) => p.variant === "outlined" && outlinedStyles}

  ${(p) => p.invalid && errorStyles}

  ${(p) => p.inputSize === "sm" && smInput}
`;
