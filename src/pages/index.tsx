import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import { useQuery } from "react-query";

import { Card } from "@components";
import { usePagination } from "@hooks";
import { getHSLFromColorString, getTrendingMovies } from "@utils";
import type { TColorNameHue } from "@styles/types";

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
  // TODO: Implement last visited page
  const { page, nextPage, previousPage } = usePagination();
  const { isLoading, data } = useQuery(
    ["movies", page],
    () => getTrendingMovies(page),
    { refetchOnWindowFocus: false, keepPreviousData: true, staleTime: 5000 }
  );

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
        <button type="button" disabled={page === 1} onClick={previousPage}>
          Prev
        </button>
        <button
          type="button"
          disabled={page === 1000}
          onClick={() => nextPage(data?.total_pages)}
        >
          Next{" "}
        </button>
      </div>
    </HomeWrapper>
  );
};

export default Home;
