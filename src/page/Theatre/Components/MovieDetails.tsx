import React from "react";
import star_icon from "../../../assets/star.svg";
import { ListMoviesResponse } from "../../../services/Queries/Movie/type";

type Props = {
  data: ListMoviesResponse | undefined;
};

const MovieDetails: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col mx-5 mt-5 mb-20">
      <div className="grid grid-rows-3 grid-flow-col gap-2 max-h-[400px] md:max-h-[600px] lg:max-h-[800px]">
        <img
          className="w-full h-full row-span-3 object-cover rounded-lg"
          src={data?.posterUrl1}
          alt="poster image 1"
          loading="lazy"
        />
        <img
          className="w-full h-full col-span-1 object-cover rounded-lg"
          src={data?.posterUrl2}
          alt="poster image 2"
          loading="lazy"
        />
        <img
          className="w-full h-full row-span-2 col-span-1 object-cover rounded-lg"
          src={data?.posterUrl3}
          alt="poster image 3"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col gap-2 mt-10">
        <h6 className="text-white text-sm font-medium">
          {data?.duration} - {data?.genre.join(", ")}
        </h6>
        <h6 className="text-white text-sm font-medium flex items-center gap-2">
          <img className="h-4 w-4" src={star_icon} alt="start icon" />
          {data?.rating}/10 Rating
        </h6>
        <div>
          <h2 className="text-white text-xl font-semibold mt-5">Summary</h2>
          <h6 className="text-white text-base font-medium mt-2.5">
            {data?.summary}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
