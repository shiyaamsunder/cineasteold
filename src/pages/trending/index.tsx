/* eslint-disable react/no-array-index-key */
import type { InferGetStaticPropsType } from "next";
import Head from "next/head";
// import { useInfiniteQuery } from "react-query";
import { useRouter } from "next/router";
import React, { useRef } from "react";

import Movie from "../movie/[movieId]";

import {
  HomeWrapper,
  /* LoadingSkeletonWrapper */
  MovieContainer,
} from "@styles/pages/trending";
import { Heading, Modal, MovieCard /* Skeleton  */ } from "@components";
import type { ITrendingMovie } from "@utils";

export const getStaticProps = async () => {
  const res = await fetch("http:localhost:3000/api/trending?page=2");

  const movies: ITrendingMovie[] = await res.json();
  return {
    props: {
      movies,
    },
    revalidate: 60 * 60 * 24, // in one day
  };
};

const TrendingMovies = ({
  movies,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // const {
  //   isLoading,
  //   data,
  //   fetchNextPage,
  //   isFetching,
  //   isFetchingNextPage,
  //   refetch,
  // } = useInfiniteQuery("movies", getTrendingMovies, {
  //   getNextPageParam: (lastPage) => lastPage && lastPage.page + 1,
  // });
  // const { setElementRef, onScreen } = useOnScreen();

  const router = useRouter();

  // useEffect(() => {
  //   if (!onScreen) return;
  //   // Limiting the data to 8 pages
  //   if (data && data.pages.length > 8) return;
  //   if (onScreen) {
  //     fetchNextPage({ cancelRefetch: true });
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [onScreen, fetchNextPage, refetch]);

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
        <Heading>Trending Movies</Heading>
        <MovieContainer>
          {/* {data?.pages.map((group, i) => (
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
                  <Skeleton height={300} />
                  <Skeleton width="70%" height={20} />
                  <Skeleton width="20%" height={20} />
                </LoadingSkeletonWrapper>
              ))} */}

          {movies.map((m) => (
            <MovieCard key={m.id} {...m} />
          ))}
        </MovieContainer>
      </HomeWrapper>
    </>
  );
};

export default TrendingMovies;
