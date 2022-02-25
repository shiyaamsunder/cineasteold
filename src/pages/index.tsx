/* eslint-disable react/no-array-index-key */
import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";
import React, { useEffect } from "react";

import { MovieCard, Skeleton } from "@components";
import { getHSLFromColorString, getTrendingMovies } from "@utils";
import type { TColorNameHue } from "@styles/types";
import { useOnScreen } from "@hooks";

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
  const { isLoading, data, fetchNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery("movies", getTrendingMovies, {
      getNextPageParam: (lastPage) => lastPage && lastPage.page + 1,
    });

  const { setElementRef, onScreen } = useOnScreen();

  useEffect(() => {
    if (!onScreen) return;
    if (onScreen) {
      fetchNextPage();
    }
  }, [onScreen, fetchNextPage]);

  return (
    <HomeWrapper>
      <Head>
        <title>Cineaste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading && <Title textColor="gray.100">Loading...</Title>}
      <MovieContainer>
        {data?.pages.map((group, i) => (
          <React.Fragment key={i}>
            {group?.results.map((movie, index) =>
              group.results.length === index + 1 ? (
                <MovieCard ref={setElementRef} key={movie.id} {...movie} />
              ) : (
                <MovieCard key={movie.id} {...movie} />
              )
            )}
          </React.Fragment>
        ))}
        {(isLoading || (isFetching && isFetchingNextPage)) &&
          Array(6)
            .fill(0)
            .map((v, i) => <Skeleton key={i} width={220} height={330} />)}
      </MovieContainer>
    </HomeWrapper>
  );
};

export default Home;
