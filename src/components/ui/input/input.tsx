/* eslint-disable react/destructuring-assignment */
import type { ComponentPropsWithoutRef, FC } from "react";

import {
  ErrorMessage,
  IconWrapper,
  InputWrapper,
  MessagesWrapper,
  StyledInput,
} from "./input.styles";
import { StyledLabel } from "./label.styles";

import type { ComponentSizeProps } from "@utils";
import { ExclamationIcon } from "@components";

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
  errorMessage?: string;
}
export type IInputProps = IInputSizeProps &
  IInputVariantProps &
  IInputDefaultProps;
export type IInput = FC<ComponentPropsWithoutRef<"input"> & IInputProps>;

export const Input: IInput = (props) => {
  const { variant = "outlined", inputSize = "md", label, ...rest } = props;

  return (
    <InputWrapper invalid={props.invalid}>
      {label && <StyledLabel>{label}</StyledLabel>}
      {props.invalid && props.errorMessage && (
        <IconWrapper>
          <ExclamationIcon width={20} height={20} color="danger" />
        </IconWrapper>
      )}
      <StyledInput inputSize={inputSize} variant={variant} {...rest} />

      {props.invalid && props.errorMessage && (
        <MessagesWrapper>
          <ErrorMessage isFullWidth={props.isFullWidth}>
            * {props.errorMessage}
          </ErrorMessage>
        </MessagesWrapper>
      )}
    </InputWrapper>
  );
};
