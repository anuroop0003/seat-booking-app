import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../AxiosInstance";
import { Methods, UseMovieResponseType } from "./type";

export const useMovie = <T extends Methods>({
  method,
  data,
}: {
  method: T;
  data?: {
    id?: number | string;
  };
}) => {
  switch (method) {
    case "LIST_MOVIES":
      return useQuery({
        queryKey: ["list_movies", data],
        queryFn: async () => {
          const response = await axiosInstance({
            url: "/movies",
            method: "get",
          });
          return response;
        },
      }) as UseMovieResponseType<T>;
    case "GET_SINGLE_MOVIE":
      return useQuery({
        queryKey: ["get_single_movie", data],
        queryFn: async () => {
          const response = await axiosInstance({
            url: `/movies/${data?.id}`,
            method: "get",
          });
          return response;
        },
      }) as UseMovieResponseType<T>;
    default:
      throw new Error("Unsupported method");
  }
};
