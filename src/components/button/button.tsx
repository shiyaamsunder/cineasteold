/* eslint-disable react/button-has-type */
import type { ButtonHTMLAttributes, FC } from "react";

import { StyledButtonBase, StyledPrimaryButton } from "./button.styles";

type IButtonBaseProps = ButtonHTMLAttributes<HTMLButtonElement>;

export interface IButtonProps extends IButtonBaseProps {
  size?: "sm" | "md" | "lg";
  primary?: boolean;
  secondary?: boolean;
}

const Button: FC<IButtonProps> = ({
  children,
  type = "button",
  size = "md",
  primary,
  ...rest
}) => {
  if (primary) {
    return (
      <StyledPrimaryButton type={type} size={size}>
        {children}
      </StyledPrimaryButton>
    );
  }
  return (
    <StyledButtonBase type={type} size={size} {...rest}>
      {children}
    </StyledButtonBase>
  );
};

export { Button };
