import { UseQueryResult } from "@tanstack/react-query";

export type Methods = "LIST_THEATRE";

type Seat = {
  id: string;
  isBooked: boolean;
};

type Row = {
  row: string;
  tier: "Silver" | "Gold" | "Platinum";
  price: number;
  seats: Seat[];
};

type Seating = {
  rows: Row[];
};

type ListTheatreResponse = {
  id: string;
  name: string;
  location: string;
  contact: string;
  movieId: string;
  showtimes: string[];
  seating: Seating;
};

export type TheatreResponse = ListTheatreResponse[];

export type UseMovieResponseType = UseQueryResult<TheatreResponse, any>;
