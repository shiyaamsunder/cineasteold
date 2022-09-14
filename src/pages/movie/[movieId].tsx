/* eslint-disable camelcase */
/* eslint-disable react/destructuring-assignment */
import { useEffect, useState } from "react";
import Head from "next/head";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";

import type { IMovie } from "@utils";
import { supabase, getSingleMovie, getTrendingMovies } from "@utils";
import { useAuth, useMediaQuery } from "@hooks";
import {
  MoviePageContainer,
  TitleOverlay,
  Center,
  ImageWrapper,
  MovieDetails,
} from "@styles/pages/movie.styles";
import { Button } from "@components";

//  TODO: refactor this logic!!!! DONT FORGET!!
export const getStaticProps: GetStaticProps<{ movie: IMovie }> = async ({
  params,
}) => {
  const movieId = params?.movieId as string;
  const movie: IMovie = await getSingleMovie(movieId);
  return {
    props: {
      movie,
    },
  };
};
export const getStaticPaths = async () => {
  const movies = await getTrendingMovies([1, 2, 3]);

  const paths = movies.map((m) => ({
    params: { movieId: m.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

const addMovieToWatchList = async (
  movie: IMovie,
  user_id: string | undefined
) => {
  const { error, data } = await supabase.from("bucket").insert({
    title: movie.title,
    vote_average: movie.vote_average,
    poster_path: movie.poster,
    watching_status: "considering",
    user_id,
    movie_id: movie.id,
  });
  return { error, data };
};

const removeMovieFromWatchList = async (movie_id: string) => {
  const { error, data } = await supabase
    .from("bucket")
    .delete()
    .eq("movie_id", movie_id);

  return { data, error };
};

const updateMovieStatus = async (status: string, movie_id: string) => {
  const { error, data } = await supabase
    .from("bucket")
    .update({ watching_status: status })
    .match({ movie_id });

  return { error, data };
};
const WatchListComponent = ({ movie }: { movie: IMovie }) => {
  const [movieInBucket, setMovieInBucket] = useState(false);
  const [movieStatus, setMovieStatus] = useState("");
  const [refetch, setRefetch] = useState(false);

  const auth = useAuth();
  useEffect(() => {
    const checkIfMovieIsInBucket = async () => {
      const { data: bucketIds } = await supabase
        .from("bucket")
        .select("movie_id, watching_status")
        .eq("movie_id", movie.id);
      if (bucketIds) {
        setMovieInBucket(bucketIds?.length > 0);
        setMovieStatus(bucketIds?.length > 0 && bucketIds[0]?.watching_status);
      }
    };
    checkIfMovieIsInBucket();
  }, [movie.id, refetch]);

  if (!auth?.user) return <p>Login in to add this movie to your watchlist</p>;
  if (movieInBucket) {
    return (
      <div>
        <p>
          Status:
          <select
            defaultValue={movieStatus}
            onChange={async (e) => {
              const { data, error } = await updateMovieStatus(
                e.target.value,
                movie.id
              );

              if (error) alert(error.message);

              setMovieStatus(e.target.value);
            }}
          >
            <option value="watching">Watching</option>
            <option value="considering">Considering</option>
            <option value="completed">Completed</option>
          </select>
        </p>
        <Button
          onClick={async () => {
            const { data, error } = await removeMovieFromWatchList(movie.id);
            if (data) setRefetch((p) => !p);

            if (error) alert(error.message);
          }}
        >
          Remove from watchlist
        </Button>
      </div>
    );
  }
  return (
    <Button
      onClick={async () => {
        const { data, error } = await addMovieToWatchList(
          movie,
          auth?.user?.id
        );

        setMovieStatus("considering");
        if (data) setRefetch((p) => !p);

        if (error) alert(error.message);
      }}
    >
      Add to Watchlist
    </Button>
  );
};
const Movie = ({ movie }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const mobileWidth = useMediaQuery("(max-width: 456px)");
  const tabletWidth = useMediaQuery("(max-width: 768px)");
  const largeScreens = useMediaQuery("(min-width: 1990px)");

  // generating height based on screen width
  const calculateHeight = () => {
    if (mobileWidth) return "300px";
    if (tabletWidth) return "400px";
    if (largeScreens) return "800px";
    return "500px";
  };

  const img = () => {
    if (mobileWidth)
      return `https://image.tmdb.org/t/p/original${movie.poster}`;
    return `https://image.tmdb.org/t/p/original${movie.backdrop}`;
  };

  return (
    <>
      <Head>
        <title>{movie.title}</title>
        <meta name="description" content={movie.title} />
      </Head>

      <MoviePageContainer>
        <ImageWrapper height={calculateHeight()}>
          <Image
            src={img()}
            alt={`Poster image for movie/tv ${movie.title}`}
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
          <TitleOverlay>
            <Center>
              <h1>{movie.title}</h1>
            </Center>
          </TitleOverlay>
        </ImageWrapper>
      </MoviePageContainer>

      <MovieDetails>
        <Center>
          <p>{movie.desc}</p>
          <h2>
            Director: {movie.crew.find((c) => c.job === "Director")?.name}
          </h2>
          <h3>Cast</h3>
          <ul>
            <li>{movie.cast[0].name}</li>
            <li>{movie.cast[1].name}</li>
            <li>{movie.cast[2].name}</li>
          </ul>
          <h3>Crew</h3>
          <ul>
            <li>
              {movie.crew[0].job}: {movie.crew[0].name}
            </li>
            <li>
              {movie.crew[1].job}: {movie.crew[1].name}
            </li>
            <li>
              {movie.crew[2].job}: {movie.crew[2].name}
            </li>
          </ul>

          <WatchListComponent movie={movie} />
        </Center>
      </MovieDetails>
    </>
  );
};

export default Movie;
