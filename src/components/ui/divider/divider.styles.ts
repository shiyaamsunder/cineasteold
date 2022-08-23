import styled from "styled-components";

export const StyledDividerContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;

  &:before,
  &:after {
    content: "";
    border: 1px solid #4e4e4e;
    flex: 1;
  }

  &:not(:empty)::before {
    margin-right: 0.55rem;
  }
  &:not(:empty)::after {
    margin-left: 0.55rem;
  }
`;
