import { useEffect, useState } from "react";
import { Card } from "@components";
import type { TColorNameHue } from "@styles/types";
import { getHSLFromColorString, getTrendingMovies } from "@utils";
import type { ITrendingMovieResultsFromServer } from "@utils";
import type { NextPage } from "next";
import Head from "next/head";
import { useQuery, useQueryClient } from "react-query";
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
  console.log("App rendedred");
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const [lastVisitedPage, setLastVisitedPage] = useState(1);

  const { isLoading, data } = useQuery<ITrendingMovieResultsFromServer>(
    ["movies", page],
    () => getTrendingMovies(page),
    { refetchOnWindowFocus: false, keepPreviousData: true, staleTime: 5000 }
  );

  useEffect(() => {
    let visitedFirstPage = false;
    if (!visitedFirstPage && page > 1) {
      visitedFirstPage = true;
    }
  }, [page]);

  console.log(page);
  const fetchPreviousPage = () => {
    setPage((old) => Math.max(old - 1, 1));
  };
  const fetchNextPage = () => {
    if (data) {
      setPage((old) => (data.page <= data.total_pages ? old + 1 : old));
    }
  };
  return (
    <HomeWrapper>
      <Head>
        <title>Cineaste</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading && <Title textColor="gray.100">Loading...</Title>}
      <MovieContainer>
        {data?.results.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </MovieContainer>
      <div>
        <button type="button" disabled={page === 1} onClick={fetchPreviousPage}>
          Prev
        </button>
        <button type="button" disabled={page === 1000} onClick={fetchNextPage}>
          Next{" "}
        </button>
      </div>
    </HomeWrapper>
  );
};

export default Home;
