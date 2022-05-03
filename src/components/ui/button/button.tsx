/* eslint-disable react/button-has-type */
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { StyledButtonBase } from "./button.styles";

import type { ComponentSizeProps } from "@utils";

interface IButtonStateProps {
  isLoading?: boolean;
  isCompleted?: boolean;
  disabled?: boolean;
}

interface IButtonVariantProps {
  primary?: boolean;
  secondary?: boolean;
}

interface IButtonSizeProps {
  size?: ComponentSizeProps;
  isFullWidth?: boolean;
  width?: string | number;
  height?: string | number;
}

export type IButtonProps = IButtonSizeProps &
  IButtonStateProps &
  IButtonVariantProps;

export type IButton = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button"> &
  IButtonProps;

const Button = ({
  children,
  type = "button",
  size = "md",
  ...rest
}: IButton) => (
  <StyledButtonBase type={type} size={size} {...rest}>
    {children}
  </StyledButtonBase>
);

export { Button };
