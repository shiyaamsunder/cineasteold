import styled, { keyframes } from "styled-components";

import type { ISkeletonLayoutProps } from ".";

const checkIfValidCSSLayoutProp = (prop: string) =>
  prop.endsWith("px") || prop.endsWith("rem") || prop.endsWith("%");
const getValidCSSLayoutValue = (prop: string | number) => {
  if (typeof prop === "string") {
    const isValid = checkIfValidCSSLayoutProp(prop);
    if (isValid) return prop;
  }
  return `${prop}px`;
};

const loadingAnimation = keyframes`
0%{
  background: hsl(0deg 0% 27%);
}
50%{
  background: hsl(0deg 0% 33%);
}
100%{
  background: hsl(0deg 0% 27%);
}
`;
export const Wrapper = styled.div<ISkeletonLayoutProps>`
  width: ${({ width }) => (width ? getValidCSSLayoutValue(width) : "100%")};
  height: ${({ height }) => (height ? getValidCSSLayoutValue(height) : "20px")};
  background: hsl(0deg 0% 27%);
  border-radius: 4px;
  margin: 10px 0px;
  position: relative;
  overflow: hidden;
  animation: 1s linear infinite ${loadingAnimation};
`;
