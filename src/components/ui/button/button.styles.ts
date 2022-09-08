import styled, { css, keyframes } from "styled-components";

import type { IButtonProps } from "./button";

import {
  color,
  darken,
  getProperFontSizeFromProp,
  getProperSizeFromProp,
  getValidCSSLayoutValue,
} from "@utils";

const defaultButtonStyles = css<IButtonProps>`
  height: ${(p) =>
    p.height
      ? getValidCSSLayoutValue(p.height)
      : `${getProperSizeFromProp(p.size || "md").height  }px`};
  width: ${(p) => (p.width ? getValidCSSLayoutValue(p.width) : "auto")};

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 96px;
  border-radius: 8px;
  border: 0px;
  background-color: ${color("gray.300")};
  color: white;
  transition: all 120ms ease-in-out;
  margin: 4px;
  font-size: ${(p) => p.size && getProperFontSizeFromProp(p.size || "md")};
  &:active {
    transform: ${(p) => !p.disabled && "scale(0.97)"};
  }

  &:focus-visible {
    outline-offset: 3px;
    outline: 1px solid ${color("gray.300")};
  }
`;
const primaryStyles = css<IButtonProps>((props) => {
  const hoverBg = darken(props.theme.colors.purple[500], 0.1);
  return {
    backgroundColor: props.theme.colors.purple[500],
    "&:hover": {
      backgroundColor: !props.disabled ? hoverBg : "",
    },
  };
});

const secondaryStyles = css<IButtonProps>((props) => ({
  backgroundColor: "transparent",
  border: `1px solid ${props.theme.colors.purple[500]}`,
  "&:hover": {
    backgroundColor: !props.disabled ? props.theme.colorsDefault.primary : "",
  },
}));

const hoveredButton = css`
  cursor: pointer;
`;

const loadingAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }

`;
export const Loader = styled.div<IButtonProps>`
  border: 2px solid white;
  border-top: 2px solid ${color("gray.100")};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${loadingAnimation} 800ms linear infinite;
  margin: auto;
`;

const smallButtonLoaderStyles = css`
  ${Loader} {
    width: 15px;
    height: 15px;
  }
`;
export const StyledButtonBase = styled.button<IButtonProps>`
  ${defaultButtonStyles}

  &:hover {
    ${(p) => !p.disabled && !p.isLoading && !p.isCompleted && hoveredButton}
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${(p) => p.size === "sm" && smallButtonLoaderStyles}

  ${(p) => p.primary && primaryStyles}
  ${(p) => p.secondary && secondaryStyles}
`;
