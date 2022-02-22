import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useQuery } from "react-query";
import { useEffect } from "react";

import { MovieCard } from "@components";
import { usePagination } from "@hooks";
import { getHSLFromColorString, getTrendingMovies } from "@utils";
import type { TColorNameHue } from "@styles/types";
import { useStore } from "src/utils/store";

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
  grid-template-columns: repeat(auto-fill, 260px);
  justify-content: space-between;
  grid-gap: 12px;
  @media (max-width: 550px) {
    justify-content: center;
  }
  @media (max-width: 960px) {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  }

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

const Home: NextPage = () => {
  const { isLoading, data } = useQuery(["movies"], () => getTrendingMovies(), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    staleTime: 5000,
  });

  return (
    <HomeWrapper>
      <Head>
        <title>Cineaste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading && <Title textColor="gray.100">Loading...</Title>}
      <MovieContainer>
        {data?.results.map((movie) => (
          <MovieCard key={movie.id} {...movie} />
        ))}
      </MovieContainer>
    </HomeWrapper>
  );
};

export default Home;
