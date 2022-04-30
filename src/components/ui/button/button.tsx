/* eslint-disable react/button-has-type */
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

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

export type IButton<T extends ElementType> = {
  children: ReactNode;
  renderAs?: keyof JSX.IntrinsicElements;
} & ComponentPropsWithoutRef<T> &
  IButtonProps;

const Button = <T extends ElementType = "button">({
  renderAs,
  children,
  type = "button",
  size = "md",
  ...rest
}: IButton<T>) => (
  <StyledButtonBase as={renderAs} type={type} size={size} {...rest}>
    {children}
  </StyledButtonBase>
);

export { Button };