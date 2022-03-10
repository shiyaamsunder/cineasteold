import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { useQuery } from "react-query";

import { getSingleMovie } from "@utils";

const Movie = () => {
  const router = useRouter();
  const { movieId } = router.query;

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
        <div
          style={{
            position: "relative",
            width: "100%",
          }}
        >
          <Image
            src={`https://image.tmdb.org/t/p/original/${data.backdrop}`}
            alt={data.title}
            layout="responsive"
            objectFit="cover"
            width={1280}
            height={340}
            quality={100}
            placeholder="blur"
            blurDataURL="data:image/webp;base64,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"
          />
        </div>

        <div
          style={{
            marginTop: "-300px",
            position: "relative",
            top: 0,
            // background: "rgb(0,0,0)",
            background:
              "linear-gradient(180deg, rgba(0,0,0,0) 16%, rgba(0,0,0,1) 78%)",
            padding: "10px",
            height: "340px",
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "20px",
              marginLeft: "20px",
            }}
          >
            {data.title}
          </h2>
        </div>

        <div style={{ margin: "20px" }}>
          <p style={{ marginTop: "20px" }}>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
