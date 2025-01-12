import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../AxiosInstance";
import { Methods, UseTheatreResponseType } from "./type";

export const useTheatre = <T extends Methods>({
  method,
  data,
}: {
  method: T;
  data?: {
    movieId?: number | string;
    theatreId?: number | string;
  };
}) => {
  switch (method) {
    case "LIST_THEATRE":
      return useQuery({
        queryKey: ["list_theatre", data],
        queryFn: async () => {
          const response = await axiosInstance({
            url: `/movies/${data?.movieId}/theaters`,
            method: "get",
          });
          return response;
        },
      }) as UseTheatreResponseType<T>;
    case "GET_SINGLE_THEATRE":
      return useQuery({
        queryKey: ["get_single_theatre", data],
        queryFn: async () => {
          const response = await axiosInstance({
            url: `/movies/${data?.movieId}/theaters/${data?.theatreId}`,
            method: "get",
          });
          return response;
        },
      }) as UseTheatreResponseType<T>;
    default:
      throw new Error("Unsupported method");
  }
};
