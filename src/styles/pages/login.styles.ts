import styled from "styled-components";

import { color } from "@utils";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 90%;
  margin: auto;
  margin-top: 18px;

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

  width: 450px;
  height: auto;
  margin: 1rem 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const EmailContainer = styled.div`
  width: 100%;
`;

export const PasswordMessageContainer = styled.ul`
  list-style-type: none;
  color: ${(p) => p.theme.colors.gray[200]};
`;
export const PMessageListItem = styled.li<{ isValid: boolean }>`
  &::marker {
    content: ${(p) => p.isValid && '"✓ "'};
    color: ${(p) => p.isValid && "green"};
  }

  color: ${(p) => p.isValid && "white"};
  list-style-type: ${(p) => !p.isValid && "disc"};
  margin-bottom: 2px;
`;
