/* eslint-disable no-console */
/* eslint-disable consistent-return */

import type {
  IMovie,
  IMovieFromServer,
  ITrendingMovieResultsFromServer,
} from "./types";

import type {
  TColorHue,
  TColorName,
  TColorNameHue,
  TColors,
} from "@styles/types";
import { colors as colorsObj } from "@styles/theme/colors";

export const getHSLFromColorString = (value?: TColorNameHue) => {
  if (!value) return colorsObj.purple[300];
  const colorName: [TColorName, TColorHue] | string[] = value.split(".");
  const color: TColors = colorsObj; // doing this because typescript wont allow string for indexing
  return color[colorName[0]][colorName[1]];
};

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
};

export * from "./types";
