import Head from "next/head";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import { getSingleMovie } from "@utils";

const Movie = () => {
  const router = useRouter();
  const movieId = router.query?.id;

  const { isLoading, data } = useQuery(
    ["movie", movieId],
    () => getSingleMovie(movieId),
    {
      enabled: !!movieId,
    }
  );
  if (isLoading) return <h3>Loadding... </h3>;
  return (
    <div>
      <Head>
        <title>{data?.title}</title>
      </Head>
      {data && JSON.stringify(data, null, " ")}
    </div>
  );
};

export default Movie;
