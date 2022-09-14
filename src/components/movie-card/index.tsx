/* eslint-disable react/display-name */
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

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

type IMovieCard = IMovieFromServer | ITrendingMovie;

export const MovieCard = forwardRef<HTMLDivElement, IMovieCard>(
  (props, ref) => {
    const {
      poster_path: poster,
      title,
      release_date: releaseDate,
      vote_average: voteAverage,
      id,
    } = props;
    return (
      <Wrapper ref={ref}>
        <Link href={`/movie/${id}`} passHref>
          <StyledLink>
            <ImageWrapper>
              <RatingBadge>{voteAverage.toFixed(1)}</RatingBadge>
              <Image
                layout="fill"
                objectFit="cover"
                alt={title}
                src={`https://image.tmdb.org/t/p/w300${poster}`}
                quality={100}
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
  }
);
