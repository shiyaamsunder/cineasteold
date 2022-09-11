import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

import { HomeWrapper, MovieContainer } from "@styles/pages/trending";
import { Heading, MovieCard } from "@components";
import { getTrendingMoviesRange } from "@utils";

export const getStaticProps = async () => {
  const movies = await getTrendingMoviesRange(1);
  return {
    props: {
      movies,
    },
    revalidate: 60 * 30, // in thirty minutes
  };
};

const TrendingMovies = ({
  movies,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <HomeWrapper>
      <Head>
        <title>Trending Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Trending Movies</Heading>
      <MovieContainer>
        {movies.map((m) => (
          <MovieCard key={m.id} {...m} />
        ))}
      </MovieContainer>
    </HomeWrapper>
  );
};

export default TrendingMovies;
