import styled from "styled-components";

export const TitleOverlay = styled.div`
  position: absolute;
  top: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 16%,
    rgba(0, 0, 0, 1) 78%
  );
  padding: 30px 20px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: flex-end;

  @media ${(p) => p.theme.mediaQueries.maxWidth.mobile} {
    & > h1 {
      font-size: 24px;
    }
  }
  @media ${(p) => p.theme.mediaQueries.minWidth.tablet} {
    & > h1 {
      font-size: 32px;
    }
  }
`;

export const MoviePageContainer = styled.div`
  position: relative;
  width: 100%;
`;
