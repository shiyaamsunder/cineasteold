import styled from "styled-components";

import { color } from "@utils";

export const Wrapper = styled.nav`
  z-index: 100;
  min-height: 60px;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: ${color("bgAccent")};
  border-bottom: 1px solid ${color("gray.400")};
  margin-bottom: 18px;
`;

export const Title = styled.h3`
  font-size: 28px;
  font-weight: 500;
  color: ${color("gray.100")};
`;

export const Center = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Links = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const Link = styled.a`
  padding-right: 26px;
  text-decoration: none;
  color: white;
  font-weight: semi-bold;
  font-size: 14px;
  &:hover {
    color: ${color("purple.100")};
  }
`;
export const Left = styled.div``;

export const Right = styled.div``;
