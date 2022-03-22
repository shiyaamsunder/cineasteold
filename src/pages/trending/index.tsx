/* eslint-disable react/no-array-index-key */
import type { NextPage } from "next";
import Head from "next/head";
import { useInfiniteQuery } from "react-query";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";

import Movie from "../movie/[movieId]";

import {
  HomeWrapper,
  LoadingSkeletonWrapper,
  MovieContainer,
  Title,
} from "./trending";

import { Heading, Modal, MovieCard, Skeleton } from "@components";
import { getTrendingMovies } from "@utils";
import { useOnScreen } from "@hooks";

const TrendingMovies: NextPage = () => {
  const {
    isLoading,
    data,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
    refetch,
  } = useInfiniteQuery("movies", getTrendingMovies, {
    getNextPageParam: (lastPage) => lastPage && lastPage.page + 1,
  });
  const { setElementRef, onScreen } = useOnScreen();

  const router = useRouter();

  useEffect(() => {
    if (!onScreen) return;
    // Limiting the data to 8 pages
    if (data && data.pages.length > 8) return;
    if (onScreen) {
      fetchNextPage({ cancelRefetch: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onScreen, fetchNextPage, refetch]);

  const element = useRef<HTMLDivElement | null>(null);
  element.current?.scrollTo({ top: 2000, behavior: "smooth" });

  return (
    <>
      <Modal
        show={!!router.query?.movieId}
        onClose={() => router.push("/trending", {}, { scroll: false })}
      >
        <Movie />
      </Modal>

      <HomeWrapper ref={element}>
        <Head>
          <title>Trending Movies</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {isLoading && <Title textColor="gray.100">Loading...</Title>}
        <Heading>Trending Movies</Heading>
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
            Array(10)
              .fill(0)
              .map((v, i) => (
                <LoadingSkeletonWrapper key={i}>
                  <Skeleton height={330} />
                  <Skeleton width="70%" height={20} />
                  <Skeleton width="20%" height={20} />
                </LoadingSkeletonWrapper>
              ))}
        </MovieContainer>
      </HomeWrapper>
    </>
  );
};

export default TrendingMovies;
