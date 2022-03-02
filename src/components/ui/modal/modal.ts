import styled from "styled-components";

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
`;

export const StyledModal = styled.div`
  width: 95%;
  height: 90%;
  background: ${({ theme }) => theme.colors.gray[500]};
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 20px;
`;
