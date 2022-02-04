export type Genre = {
  id: number;
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
