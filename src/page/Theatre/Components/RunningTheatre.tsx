import React from "react";
import { Link, useParams } from "react-router-dom";
import { useTheatre } from "../../../services/Queries/Theatre/Theatre";
import { ListTheatreResponse } from "../../../services/Queries/Theatre/type";

const RunningTheatre = () => {
  const { movie_id, movie_language, movie_censorship, movie_name } =
    useParams();

  const { data } = useTheatre({
    method: "LIST_THEATRE",
    data: { movieId: movie_id as string },
  });

  const TheatreCard: React.FC<{ data: ListTheatreResponse }> = ({ data }) => {
    const { name, location, showtimes, movieId, id } = data;

    return (
      <div className="flex flex-col gap-2  bg-primary-yellow bg-opacity-10 backdrop-blur-lg border border-primary-yellow rounded-xl shadow-lg p-5">
        <h6 className="text-white text-xl font-medium">{name}</h6>
        <h6 className="text-white text-base font-medium">{location}</h6>
        <div className="my-2.5 flex gap-2.5">
          {showtimes?.map((showtime) => {
            const movie_timing = new Date(showtime)
              ?.toLocaleTimeString()
              .replace(/:\d{2}/, "");
            const url = `/theatre/${name}/${movie_name}/${movie_language}/${encodeURIComponent(
              movie_censorship || ""
            )}/${movieId}/screen/${id}/${movie_timing}`;

            return (
              <Link
                to={url}
                key={showtime}
                className="text-white transition-all hover:shadow-sm hover:shadow-primary-yellow hover:border-primary-yellow text-base font-medium border border-white p-2.5 rounded-xl"
              >
                {movie_timing}
              </Link>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col mx-5 my-20">
      <h1 className="text-white text-3xl font-bold">Running Theatre</h1>
      <div className="flex flex-col gap-5 mt-5">
        {data?.map((theatre) => (
          <TheatreCard key={theatre?.id} data={theatre} />
        ))}
      </div>
    </div>
  );
};

export default RunningTheatre;
