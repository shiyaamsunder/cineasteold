import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

import {
  // getSingleMovie,
  getSingleMovieN,
  getTrendingMoviesRange,
} from "@utils";
import { Heading } from "@components";
import { useMediaQuery } from "@hooks";
import { MoviePageContainer, TitleOverlay } from "@styles/pages/movie.styles";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const movie = await getSingleMovieN(params?.movieId);
  return {
    props: {
      movie,
    },
  };
};
export const getStaticPaths = async () => {
  const movies = await getTrendingMoviesRange();

  const paths = movies.map((m) => ({
    params: { movieId: m.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

const Movie = ({ movie }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const mobileWidth = useMediaQuery("(max-width: 456px)");
  const tabletWidth = useMediaQuery("(max-width: 768px)");

  // generating height based on screen width
  const calculateHeight = () => {
    if (mobileWidth) return 840;
    if (tabletWidth) return 640;
    return 440;
  };

  return (
    <>
      <Head>
        <title>{movie.title}</title>
      </Head>
      <MoviePageContainer>
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop}`}
          alt={movie.title}
          layout="responsive"
          objectFit="cover"
          width={1280}
          height={calculateHeight()}
          quality={100}
          placeholder="blur"
          priority
          blurDataURL={`https://image.tmdb.org/t/p/original/${movie.backdrop}`}
        />
        <TitleOverlay>
          <Heading as="h1">{movie.title}</Heading>
        </TitleOverlay>
      </MoviePageContainer>
    </>
  );
};

export default Movie;
