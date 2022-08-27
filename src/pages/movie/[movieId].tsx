import { Fragment } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { useQuery } from "react-query";

import { getSingleMovie } from "@utils";
import { Heading } from "@components";
import { useMediaQuery } from "@hooks";
import { MoviePageContainer, TitleOverlay } from "@styles/pages/movie.styles";

const Movie = () => {
  const router = useRouter();
  const { movieId } = router.query;

  const { isLoading, data } = useQuery(
    ["movie", movieId],
    () => getSingleMovie(movieId),
    {
      enabled: !!movieId,
    }
  );

  const mobileWidth = useMediaQuery("(max-width: 456px)");
  const tabletWidth = useMediaQuery("(max-width: 768px)");

  // generating height based on screen width
  const calculateHeight = () => {
    if (mobileWidth) return 840;
    if (tabletWidth) return 640;
    return 440;
  };

  if (isLoading || !data) return <h3>Loading... </h3>;
  return (
    <>
      <Head>
        <title>{data.title}</title>
      </Head>
      <MoviePageContainer>
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.backdrop}`}
          alt={data.title}
          layout="responsive"
          objectFit="cover"
          width={1280}
          height={calculateHeight()}
          quality={100}
          placeholder="blur"
          priority
          blurDataURL={`https://image.tmdb.org/t/p/w500/${data.backdrop}`}
        />
        <TitleOverlay>
          <Heading as="h1">{data.title}</Heading>
        </TitleOverlay>
      </MoviePageContainer>
    </>
  );
};

export default Movie;
