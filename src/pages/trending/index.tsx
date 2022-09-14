import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
import React from "react";

import { HomeWrapper, MovieContainer } from "@styles/pages/trending";
import { Heading, MovieCard } from "@components";
import { getTrendingMovies } from "@utils";

export const getStaticProps = async () => {
  const movies = await getTrendingMovies([1, 2, 3]);
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
        <meta
          name="description"
          content="Trending page where movies that are currently trending are shown."
        />
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
