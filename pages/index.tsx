import type { colorKeys } from "@styles/types";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1<{
  textColor?: colorKeys;
}>`
  color: ${({ textColor, theme }) => theme.colors[textColor || "primary"]};
  font-size: 48px;
`;

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Cineaste</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title textColor="primary">Hello world</Title>
    <Title textColor="primaryBg">Hello world</Title>
    <Title textColor="secondaryBg">Hello world</Title>
    <Title textColor="bgAccent">Hello world</Title>
    <Title textColor="warning">Hello world</Title>
    <Title>Hello world</Title>
  </div>
);

export default Home;
