import styled from "styled-components";

import { color } from "@utils";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;

  @media screen and (min-width: 700px) {
    width: 50%;
  }

  @media screen and (min-width: 960px) {
    width: 40%;
  }
`;

export const ActionContainer = styled.div`
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${color("gray.500")};
  width: 100%;
  height: auto;
  margin: 1rem 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmailContainer = styled.div`
  width: 78%;
  @media screen and (max-width: 960px) {
    width: 80%;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;
