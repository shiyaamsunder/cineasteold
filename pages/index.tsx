import { Card } from "@components";
import type { TColorNameHue } from "@styles/types";
import { getHSLFromColorString } from "@utils";
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";

const Title = styled.h1<{ textColor?: TColorNameHue }>`
  font-size: 48px;
  color: ${({ textColor }) => getHSLFromColorString(textColor)};
`;

const Home: NextPage = () => (
  <div style={{ height: "100vh" }}>
    <Head>
      <title>Cineaste</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Title textColor="purple.100">Cineaste</Title>
    <Card
      image="https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"
      title="SpiderMan No way Home And a lengthy subtitle"
      desc="some"
    >
      Hello
    </Card>
  </div>
);

export default Home;
