import React from "react";
import { ListMoviesResponse } from "../../../services/Queries/Movie/type";

type Props = {
  data: ListMoviesResponse | undefined;
};

const DetailsCard: React.FC<{ name: string; role: string }> = ({
  name,
  role,
}) => {
  return (
    <div className="flex flex-col items-center text-center gap-2 bg-primary-yellow bg-opacity-10 backdrop-blur-lg border border-primary-yellow rounded-xl shadow-lg p-5">
      <h6 className="text-white text-base font-medium">{name}</h6>
      <h6 className="text-white text-sm font-medium">as {role}</h6>
    </div>
  );
};

const CrewDetails: React.FC<Props> = ({ data }) => {
  return (
    <div className="flex flex-col mx-5 my-20">
      <h1 className="text-white text-3xl font-bold">Crew Details</h1>
      <div className="flex flex-col gap-2 bg-white bg-opacity-10 backdrop-blur-lg border border-white rounded-xl shadow-lg p-5 mt-5">
        <h2 className="text-white text-xl font-semibold">Director</h2>
        <h6 className="text-white text-base font-medium">
          {data?.director.name}
        </h6>
      </div>
      <div>
        <h2 className="text-white text-xl font-semibold mt-10">Actors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-5">
          {data?.actors.map((actor) => (
            <DetailsCard
              key={actor.name}
              name={actor.name}
              role={actor.character}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CrewDetails;
