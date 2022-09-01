import styled from "styled-components";

import { color, getValidCSSLayoutValue } from "@utils";

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  background: #000000ad;
  backdrop-filter: blur(2px);
`;

export const StyledModal = styled.div<{
  width?: string | number;
  height?: string | number;
}>`
  position: relative;
  width: ${(p) => (!p.width ? "95%" : getValidCSSLayoutValue(p.width))};
  height: ${(p) => (!p.height ? "90%" : getValidCSSLayoutValue(p.height))};
  background: ${color("gray.500")};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
`;

export const StyledModalHeader = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: right;
`;

export const StyledModalCloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background-color: transparent;
  z-index: 200;
  width: 24px;
  height: 24px;
  border: 0px;
  outline: none;
  color: white;
  cursor: pointer;
  &:hover > svg {
    transition: 100ms all ease-in;
    transform: scale(1.2);
  }
`;
