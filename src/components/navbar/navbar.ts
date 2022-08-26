import styled, { css } from "styled-components";

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

export const Container = styled.div`
  width: 80%;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
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
  width: 60%;
  display: flex;
  margin: auto;
  justify-content: space-around;
  @media screen and (max-width: 700px) {
    display: none;
  }
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

  @media screen and (max-width: 700px) {
    padding: 0;
  }
`;
export const Left = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  & > button {
    display: none;
  }
  @media screen and (max-width: 700px) {
    justify-content: flex-start;
    & > button {
      display: block;
    }
    & .burger {
      display: block;
      margin-right: 0.5rem;
      color: ${color("gray.100")};
    }
  }
`;

export const Right = styled.div``;

const SideBarLinksStyles = css`
  & > ul {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: 100%;

    & a {
      width: 98%;
      /* height: 60px; */
      padding: 1rem;
      margin: 1rem auto;
      border-radius: 5px;
      transition: all 120ms ease-in;
      &:hover {
        background-color: ${color("gray.300")};
      }
    }
  }
`;
export const SideNavbarWrapper = styled.div<{ show: boolean }>`
  width: 80%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${color("gray.400")};

  ${(p) => p.show && SideBarLinksStyles}

  z-index: 100;
`;

export const SideBarHeader = styled.div`
  height: 60px;
  border-bottom: 1px solid ${color("gray.300")};
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > svg {
    cursor: pointer;
  }
`;
