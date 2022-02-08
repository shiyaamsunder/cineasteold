import Image from "next/image";
import type { FC } from "react";
import type { IMovie } from "@utils";

import {
  ImageWrapper,
  Link,
  Title,
  Wrapper,
  Bottom,
  Subtitle,
  RatingBadge,
} from "./movie-card";

export const Card: FC<IMovie> = (props) => {
  const {
    poster,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
  } = props;
  return (
    <Wrapper>
      <Link href="/">
        <ImageWrapper>
          <RatingBadge>{voteAverage}</RatingBadge>
          <Image
            layout="fill"
            priority
            objectFit="contain"
            alt={title}
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
            quality={50}
          />
        </ImageWrapper>
      </Link>
      <Bottom>
        <Title>{title}</Title>
        <Subtitle>{releaseDate.split("-")[0]}</Subtitle>
      </Bottom>
    </Wrapper>
  );
};
