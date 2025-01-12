import { UseQueryResult } from "@tanstack/react-query";

export type Methods = "LIST_THEATRE" | "GET_SINGLE_THEATRE";

export type Seat = {
  id: string;
  isBooked: boolean;
};

type Row = {
  row: string;
  tier: "Silver" | "Gold" | "Platinum";
  price: number;
  seats: Seat[];
};

type Showtimes = string[];

export type ListTheatreResponse = {
  name: string;
  location: string;
  contact: string;
  showtimes: Showtimes;
  seating: Row[];
  id: string;
  movieId: string;
};

export type TheatreResponse<T extends Methods> = T extends "LIST_THEATRE"
  ? ListTheatreResponse[]
  : T extends "GET_SINGLE_THEATRE"
  ? ListTheatreResponse
  : never;

export type UseTheatreResponseType<T extends Methods> = UseQueryResult<
  TheatreResponse<T>,
  any
>;
