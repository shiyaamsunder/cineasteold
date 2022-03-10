/* eslint-disable react/no-array-index-key */
import type { NextPage } from "next";
import Head from "next/head";
import { useInfiniteQuery } from "react-query";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

import Movie from "../movie/[movieId]";

import {
  HomeWrapper,
  LoadingSkeletonWrapper,
  MovieContainer,
  Title,
} from "./home";

import { Modal, MovieCard, Skeleton } from "@components";
import { getTrendingMovies } from "@utils";
import { useOnScreen } from "@hooks";

const Home: NextPage = () => {
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
    if (onScreen) {
      fetchNextPage({ cancelRefetch: true });
    }
  }, [onScreen, fetchNextPage, refetch]);

  return (
    <>
      <Modal
        show={!!router.query?.movieId}
        onClose={() => router.push("/", {}, { scroll: false })}
      >
        <Movie />
      </Modal>

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

export default Home;
