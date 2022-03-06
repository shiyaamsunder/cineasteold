import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { useQuery } from "react-query";

import { getSingleMovie } from "@utils";

const Movie = () => {
  const router = useRouter();
  const { movieId } = router.query;
  // console.log(router);

  const { isLoading, data } = useQuery(
    ["movie", movieId],
    () => getSingleMovie(movieId),
    {
      enabled: !!movieId,
    }
  );
  if (isLoading || !data) return <h3>Loading... </h3>;
  return (
    <div>
      <Head>
        <title>{data.title}</title>
      </Head>
      <div>
        <div style={{ position: "relative", width: "100%", height: "300px" }}>
          <Image
            src={`https://image.tmdb.org/t/p/w1280/${data.backdrop}`}
            alt={data.title}
            layout="fill"
            objectFit="cover"
            // quality={40}
          />
        </div>
        <h2>{data.title}</h2>

        <p>{data.desc}</p>
      </div>
    </div>
  );
};

export default Movie;
