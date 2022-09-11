/* eslint-disable no-console */

import type { IMovie, IMovieFromServer, ITrendingMovie } from "./types";

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

/**
 * fetch function but with types!!
 * Pass the type you want to return into to generic tag.
 * @param {string} url
 * @example
 * const movie = await typedFetch<IMovie>("https://www.example.com/movie/123")
 */
export const typedFetch = async <T>(url: string): Promise<T> =>
  fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(`Error status: ${res.status}`);
    }
    return res.json() as Promise<T>;
  });

/**

 *  Gets trending movies. 
 *  Give a single page number to get only that page, or pass an array of page numbers to fetch those pages.
 * @param pageRange number | number []
 * @returns ITrendingMovie[]

 * @example 
 * getTrendingMovies(1) or getTrendingMovies([1, 4, 5])
 */
export const getTrendingMovies = async (pageRange: number | number[]) => {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!Array.isArray(pageRange)) {
    throw new Error("The page range is not a number array");
  }
  // const pageEnd = 3;
  // const range = [...Array(pageEnd).keys()].map((_, i) => i + 1);
  const urls = pageRange.map(
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

export const getSingleMovie = async (
  movieId: string | string[] | undefined
) => {
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
};
