import styled from "styled-components";

import type { IButtonProps } from "./button";

import {
  darken,
  getProperFontSizeFromProp,
  getProperSizeFromProp,
} from "@utils";

export const StyledButtonBase = styled.button<IButtonProps>((props) => {
  const { height, width } = getProperSizeFromProp(props.size || "md");
  const fontSize = getProperFontSizeFromProp(props.size || "md");
  return {
    height,
    width,
    borderRadius: "8px",
    border: 0,
    backgroundColor: props.theme.colors.gray[300],
    color: "white",
    transition: "all 120ms ease-in-out",
    margin: 4,

    fontSize,

    "&:hover": {
      cursor: "pointer",
      backgroundColor: props.theme.colors.gray[400],
    },

    "&:active": {
      transform: "scale(0.97)",
    },

    "&:focus-visible": {
      outlineOffset: 3,
      outline: `1px solid ${props.theme.colors.gray[100]}`,
    },
  };
});

export const StyledPrimaryButton = styled(StyledButtonBase)((props) => {
  const hoverBg = darken(props.theme.colors.purple[500], 0.1);

  return {
    backgroundColor: props.theme.colors.purple[500],
    "&:hover": {
      cursor: "pointer",
      backgroundColor: hoverBg,
    },
  };
});
