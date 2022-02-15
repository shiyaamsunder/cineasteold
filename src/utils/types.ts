export type Genre = {
  id: number;
  name: string;
};

export type ILang = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export interface IMovie {
  id: string;
  imdb_id: string;
  backdrop: string;
  poster: string;
  title: string;
  desc: string;
  director: string;
  release_date: string;
  genre: Genre[];
  overview: string;
  runtime: string;
  vote_average: number;
  vote_count: number;
}

export interface IMovieFromServer {
  adult: boolean;
  budget: number;
  homepage: string;
  id: string;
  imdb_id: string;
  original_title: string;
  original_language: string;
  popularity: number;
  backdrop_path: string;
  poster_path: string;
  director: string;
  release_date: string;
  revenue: number;
  genre: Genre[];
  overview: string;
  runtime: number;
  vote_average: number;
  vote_count: number;
  spoken_languages: ILang[];
  status:
    | "Rumored"
    | "Planned"
    | "In Production"
    | "Post Production"
    | "Released"
    | "Cancelled";
  tagline: string;
  title: string;
  video: boolean;
}

export interface ITrendingMovie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: string;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_average: number;
  vote_count: number;
  video: boolean;
}

export interface ITrendingMovieResultsFromServer {
  page: number;
  results: ITrendingMovie[];
  total_pages: number;
  total_results: number;
}
