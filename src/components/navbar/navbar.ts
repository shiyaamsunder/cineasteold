import styled from "styled-components";

export const Wrapper = styled.nav`
  height: 60px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray[100]};
`;
export const Left = styled.div``;

export const Right = styled.div``;
