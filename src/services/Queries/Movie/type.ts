import { UseQueryResult } from "@tanstack/react-query";

export type Methods = "LIST_MOVIES" | "GET_SINGLE_MOVIE";

export type ListMoviesResponse = {
  id: string;
  title: string;
  genre: string[];
  language: string;
  duration: string;
  rating: number;
  posterUrl1: string;
  posterUrl2: string;
  posterUrl3: string;
  summary: string;
  censorship: string;
  director: {
    name: string;
  };
  actors: Actor[];
  showtimes: string[];
};

type Actor = {
  name: string;
  character: string;
};

export type MovieResponse<T extends Methods> = T extends "LIST_MOVIES"
  ? ListMoviesResponse[]
  : T extends "GET_SINGLE_MOVIE"
  ? ListMoviesResponse
  : never;

export type UseMovieResponseType<T extends Methods> = UseQueryResult<
  MovieResponse<T>,
  any
>;
