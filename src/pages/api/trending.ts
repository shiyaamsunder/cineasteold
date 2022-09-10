import type { NextApiRequest, NextApiResponse } from "next";

const getTrendingMovies = async (range: number[]) => {
  const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
  const urls = range.map(
    (n) =>
      `https://api.themoviedb.org/3/trending/movie/week?page=${n}&api_key=${TMDB_API_KEY}`
  );

  const requests = urls.map((url) => fetch(url));

  const responses = await Promise.all(requests);
  const json = responses.map((res) => res.json());

  const rawData = await Promise.all(json);

  const data = rawData.map((d) => d.results).flat();

  return data;
};

// /api/trending?pages=4
// fetches first 4 pages
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const pageEnd = Number(req.query.page);

  const range = [...Array(pageEnd).keys()].map((_, i) => i + 1);
  const data = await getTrendingMovies(range);

  return res.send(data);
}
