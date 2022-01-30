import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 48px;
  color: ${({ theme }) => theme.colors.purple[100]};
`;

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Cineaste</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Title>Hello world</Title>
  </div>
);

export default Home;
