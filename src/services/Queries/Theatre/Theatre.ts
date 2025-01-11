import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../AxiosInstance";
import { Methods, UseMovieResponseType } from "./type";

export const useTheatre = <T extends Methods>({
  method,
  data,
}: {
  method: T;
  data?: {
    id: number | string;
  };
}) => {
  switch (method) {
    case "LIST_THEATRE":
      return useQuery({
        queryKey: ["list_theatre", data],
        queryFn: async () => {
          const response = await axiosInstance({
            url: `/movies/${data?.id}/theaters`,
            method: "get",
          });
          return response;
        },
      }) as UseMovieResponseType;
    default:
      throw new Error("Unsupported method");
  }
};
