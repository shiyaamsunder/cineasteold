import type { ComponentPropsWithoutRef, FC } from "react";

import { StyledInput } from "./input.styles";

import type { ComponentSizeProps } from "@utils";

interface IInputSizeProps {
  inputSize?: ComponentSizeProps | number;
}

interface IInputVariantProps {
  variant?: "outlined" | "filled";
}

export type IInputProps = IInputSizeProps & IInputVariantProps;
export type IInput = FC<ComponentPropsWithoutRef<"input"> & IInputProps>;

export const Input: IInput = (props) => {
  const { variant = "outlined", inputSize = "md", ...rest } = props;
  return <StyledInput inputSize={inputSize} variant={variant} {...rest} />;
};
