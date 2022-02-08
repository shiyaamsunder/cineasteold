import { Card } from "@components";
import type { TColorNameHue } from "@styles/types";
import { getHSLFromColorString, getTrendingMovies } from "@utils";
import type { IMovie } from "@utils";
import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import styled from "styled-components";

const Title = styled.h1<{ textColor?: TColorNameHue }>`
  font-size: 48px;
  color: ${({ textColor }) => getHSLFromColorString(textColor)};
`;

const HomeWrapper = styled.div`
  width: 90%;
  min-height: 100vh;
  margin: 0rem auto;
  display: flex;
  flex-direction: column;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 280px);
  justify-content: space-between;

  @media (max-width: 690px) {
    justify-content: center;
  }
`;

const Home: NextPage = () => {
  const { isLoading, data } = useQuery<IMovie[]>("movies", getTrendingMovies);

  return (
    <HomeWrapper>
      <Head>
        <title>Cineaste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading && <Title textColor="gray.100">Loading...</Title>}
      <MovieContainer>
        {data?.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </MovieContainer>
    </HomeWrapper>
  );
};

export default Home;
