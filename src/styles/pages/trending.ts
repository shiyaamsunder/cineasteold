import styled from "styled-components";

import { color } from "@utils";
import type { TColorToken } from "@styles/types";

export const Title = styled.h1<{ textColor?: TColorToken }>`
  font-size: 48px;
  color: ${(p) => p.textColor && color(p.textColor)};
`;

export const HomeWrapper = styled.div`
  width: 90%;
  min-height: 100vh;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
`;

export const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 260px);
  justify-content: space-between;
  grid-gap: 12px;
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  @media (max-width: 550px) {
    justify-content: center;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
export const LoadingSkeletonWrapper = styled.div`
  display: grid;
  grid-template-rows: min-content auto;
  width: 220px;

  @media (max-width: 550px) {
    width: 190px;
  }
`;
