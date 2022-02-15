import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

import {
  ImageWrapper,
  Link as StyledLink,
  Title,
  Wrapper,
  Bottom,
  Subtitle,
  RatingBadge,
} from "./movie-card";

import type { IMovieFromServer, ITrendingMovie } from "@utils";

export const Card: FC<IMovieFromServer | ITrendingMovie> = ({
  poster_path: poster,
  title,
  release_date: releaseDate,
  vote_average: voteAverage,
  id,
}) => (
  <Wrapper>
    <Link href={`/movie/${id}`} passHref>
      {/* eslint-disable */}
      <StyledLink>
        {/* eslint-enable */}
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
      </StyledLink>
    </Link>
    <Bottom>
      <Title>{title}</Title>
      <Subtitle>{releaseDate.split("-")[0]}</Subtitle>
    </Bottom>
  </Wrapper>
);
