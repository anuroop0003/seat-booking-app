import { Link } from "react-router-dom";
import star_icon from "../../../assets/star.svg";
import { ListMoviesResponse } from "../../../services/Queries/Movie/type";

type Props = {
  data: ListMoviesResponse | undefined;
};

function MovieCard({ data }: Props) {
  return (
    <Link to={`/theatre/${data?.id}`} className="flex flex-col gap-5">
      <img
        className="w-full h-full object-cover"
        src={data?.posterUrl1}
        alt={data?.title}
        loading="lazy"
      />
      <div className="flex flex-col gap-1">
        <h1 className="text-white text-lg font-semibold whitespace-nowrap">
          {data?.title}
        </h1>
        <h6 className="text-white text-xs font-medium -mt-1.5">
          ({data?.language})
        </h6>
        <h6 className="text-white text-sm font-medium">
          {data?.duration} - {data?.genre.join(", ")}
        </h6>
        <h6 className="text-white text-sm font-medium flex items-center gap-2">
          <img className="h-4 w-4" src={star_icon} alt="start icon" />
          {data?.rating}/10 Rating
        </h6>
      </div>
    </Link>
  );
}

export default MovieCard;
