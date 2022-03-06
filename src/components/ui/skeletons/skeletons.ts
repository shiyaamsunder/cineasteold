import styled, { keyframes } from "styled-components";

import type { ISkeletonLayoutProps } from ".";

import { getValidCSSLayoutValue } from "@utils";

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
// TODO: make skeletons responsive
export const Wrapper = styled.div<ISkeletonLayoutProps>`
  width: ${({ width }) => (width ? getValidCSSLayoutValue(width) : "100%")};
  height: ${({ height }) => (height ? getValidCSSLayoutValue(height) : "20px")};
  background: hsl(0deg 0% 27%);
  border-radius: 4px;
  margin: 6px 0px;
  position: relative;
  overflow: hidden;
  animation: 1s linear infinite ${loadingAnimation};
`;
