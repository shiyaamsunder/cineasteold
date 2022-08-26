/* eslint-disable react/destructuring-assignment */
import type { ComponentPropsWithoutRef, FC } from "react";

import { InputWrapper, StyledInput } from "./input.styles";
import { StyledLabel } from "./label.styles";

import type { ComponentSizeProps } from "@utils";

interface IInputSizeProps {
  inputSize?: ComponentSizeProps | number;
  isFullWidth?: boolean;
}

interface IInputVariantProps {
  variant?: "outlined" | "filled";
}

interface IInputDefaultProps {
  invalid?: boolean;
  label?: string;
}
export type IInputProps = IInputSizeProps &
  IInputVariantProps &
  IInputDefaultProps;
export type IInput = FC<ComponentPropsWithoutRef<"input"> & IInputProps>;

export const Input: IInput = (props) => {
  const { variant = "outlined", inputSize = "md", label, ...rest } = props;
  return (
    <InputWrapper>
      {label && <StyledLabel invalid={props.invalid}>{label}</StyledLabel>}
      <StyledInput inputSize={inputSize} variant={variant} {...rest} />
    </InputWrapper>
  );
};
