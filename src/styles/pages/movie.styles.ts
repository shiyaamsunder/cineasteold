import styled from "styled-components";

export const TitleOverlay = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 16%,
    rgba(0, 0, 0, 1) 78%
  );
  height: 50%;
  width: 100%;
  display: flex;
  align-items: flex-end;
  padding: 30px 20px;
  font-size: 36px;
  font-weight: bold;

  @media ${(p) => p.theme.mediaQueries.maxWidth.tablet} {
    font-size: 24px;
  }

  @media ${(p) => p.theme.mediaQueries.minWidth["4k"]} {
    font-size: 40px;
  }
`;

export const TitleTopOverlay = styled.div``;

export const MoviePageContainer = styled.div``;

export const Center = styled.section`
  width: 70%;
  margin: 0px auto;
  @media ${(p) => p.theme.mediaQueries.maxWidth.mobile} {
    width: 90%;
  }
`;

export const Bottom = styled.section`
  margin-top: 20px;
`;

export const ImageWrapper = styled.div<{ height: number | string }>`
  position: relative;

  width: 100%;
  height: ${(p) => p.height};
`;

export const MovieDetails = styled.div`
  padding: 20px 0px;
`;
