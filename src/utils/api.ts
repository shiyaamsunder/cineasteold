/* eslint-disable no-console */

import type {
  IMovie,
  IMovieFromServer,
  ITrendingMovie,
  ITrendingMovieResultsFromServer,
} from "./types";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

const typedFetch = async <T>(url: string): Promise<T> =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`Error status: ${res.status}`);
    }
    return res.json() as Promise<T>;
  });

export const getTrendingMovies = async ({
  pageParam = 1,
}: {
  pageParam?: number;
}) => {
  try {
    const data = await typedFetch<ITrendingMovieResultsFromServer>(
      `https://api.themoviedb.org/3/trending/movie/week?page=${pageParam}&api_key=${TMDB_API_KEY}`
    );
    return data;
  } catch (err) {
    console.log(err);
  }
  return null;
};

export const getTrendingMoviesRange = async (range: number[]) => {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const urls = range.map(
    (n) =>
      `https://api.themoviedb.org/3/trending/movie/week?page=${n}&api_key=${TMDB_API_KEY}`
  );

  const requests = urls.map((url) => fetch(url));

  const responses = await Promise.all(requests);
  const json = responses.map((res) => res.json());

  const rawData = await Promise.all(json);

  const data: ITrendingMovie[] = rawData.map((d) => d.results).flat();

  return data;
};

export const getSingleMovie = async (movieId?: string | string[]) => {
  try {
    if (movieId === undefined) {
      throw new Error("No movie ID was provided");
    }

    const data = await typedFetch<IMovieFromServer>(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`
    );
    const newData = {
      ...data,
      poster: data.poster_path,
      backdrop: data.backdrop_path,
      desc: data.overview,
    };
    return newData as IMovie;
  } catch (err) {
    console.log(err);
  }
  return null;
};
