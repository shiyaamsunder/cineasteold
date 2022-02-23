import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useInfiniteQuery } from "react-query";
import React, { useEffect, useRef } from "react";

import { MovieCard } from "@components";
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
  // TODO:Fix the inital load bug
  const { isLoading, data, fetchNextPage, isFetching, isFetchingNextPage } =
    useInfiniteQuery("movies", getTrendingMovies, {
      getNextPageParam: (lastPage) => lastPage && lastPage.page + 1,
    });
  const ref = useRef<HTMLDivElement>(null);

  const { isVisible } = useOnScreen(ref?.current?.lastElementChild, {
    rootMargin: "200px",
    threshold: 0.4,
  });

  useEffect(() => {
    if (!isVisible) return;
    if (isVisible) {
      fetchNextPage();
    }
  }, [isVisible, fetchNextPage]);

  return (
    <HomeWrapper>
      <Head>
        <title>Cineaste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading && <Title textColor="gray.100">Loading...</Title>}
      <MovieContainer ref={ref}>
        {data?.pages.map((group, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={i}>
            {group?.results.map((movie) => (
              <MovieCard key={movie.id} {...movie} />
            ))}
          </React.Fragment>
        ))}
      </MovieContainer>
      <h2 style={{ marginTop: "10px" }}>
        {isFetching && isFetchingNextPage ? "Loading more..." : null}
      </h2>
    </HomeWrapper>
  );
};

export default Home;
