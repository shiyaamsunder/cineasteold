import { ReactNode } from "react";
import { StyledDividerContainer } from "./divider.styles";

export const Divider = ({ children }: { children: ReactNode }) => {
  return <StyledDividerContainer>{children}</StyledDividerContainer>;
};
