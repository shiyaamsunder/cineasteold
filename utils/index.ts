import { colors as colorsObj } from "@styles/theme/colors";
import type {
  TColorHue,
  TColorName,
  TColorNameHue,
  TColors,
} from "@styles/types";

export const getHSLFromColorString = (value?: TColorNameHue) => {
  if (!value) return colorsObj.purple[300];
  const colorName: [TColorName, TColorHue] | string[] = value.split(".");
  const color: TColors = colorsObj; // doing this because typescript wont allow string for indexing
  return color[colorName[0]][colorName[1]];
};

const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const getTrendingMovies = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${TMDB_API_KEY}`
  );
  if (!res.ok) {
    throw Error();
  }
  const data = await res.json();

  // TODO: refactor this code.

  let newResults;
  if (data) {
    const { results } = data;
    newResults = results.map((i) => ({
      ...i,
      poster: i?.poster_path,
      backdrop: i?.backdrop_path,
    }));
  }
  return newResults;
};

export * from "./types";
