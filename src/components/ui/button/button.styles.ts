import styled, { css, keyframes } from "styled-components";

import type { IButtonProps } from "./button";

import {
  color,
  darken,
  getProperFontSizeFromProp,
  getProperSizeFromProp,
  getValidCSSLayoutValue,
} from "@utils";

const buttonCustomProps = css`
  --default-bg: ${color("gray.300")};
  --default-color: white;
  --border-radius: 8px;
  --margin: 4px;
  --transition: all 120ms ease-in-out;
`;

const defaultButtonStyles = css<IButtonProps>((props) => {
  const { height, width } = getProperSizeFromProp(props.size || "md");
  const fontSize = getProperFontSizeFromProp(props.size || "md");

  return {
    height: props.height ? getValidCSSLayoutValue(props.height) : height,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // eslint-disable-next-line no-nested-ternary
    width: props.width ? width : "auto",
    minWidth: "96px",
    borderRadius: "var(--border-radius)",
    border: 0,
    backgroundColor: "var(--default-bg)",
    color: "var(--default-color)",
    transition: "var(--transition)",
    margin: "var(--margin)",

    fontSize,
    "&:active": {
      transform: !props.disabled ? "scale(0.97)" : "",
    },

    "&:focus-visible": {
      outlineOffset: 3,
      outline: `1px solid ${color("gray.300")}`,
    },
  };
});

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
  ${buttonCustomProps}
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
