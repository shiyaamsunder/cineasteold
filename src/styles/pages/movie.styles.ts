import styled from "styled-components";

export const TitleOverlay = styled.div`
  position: absolute;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 16%,
    rgba(0, 0, 0, 1) 78%
  );
  padding: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

export const MoviePageContainer = styled.div`
  position: relative;
  width: 100%;
`;
