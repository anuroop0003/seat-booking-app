import { useParams } from "react-router-dom";
import ScreenLoader from "../../components/ScreenLoader/ScreenLoader";
import { useMovie } from "../../services/Queries/Movie/Movie";
import { useTheatre } from "../../services/Queries/Theatre/Theatre";
import CrewDetails from "./Components/CrewDetails";
import Header from "./Components/Header";
import MovieDetails from "./Components/MovieDetails";

function Theatre() {
  const { id } = useParams();

  const { data: theatre_list } = useTheatre({
    method: "LIST_THEATRE",
    data: { id: id as string },
  });

  const {
    data: single_movie,
    isFetching,
    isLoading,
  } = useMovie({
    method: "GET_SINGLE_MOVIE",
    data: { id: id as string },
  });

  if (isLoading && isFetching) {
    return <ScreenLoader />;
  }

  return (
    <div className="container mx-auto my-20">
      <Header
        title={single_movie?.title}
        language={single_movie?.language}
        duration={single_movie?.duration}
      />
      <MovieDetails data={single_movie} />
      <CrewDetails data={single_movie} />
    </div>
  );
}

export default Theatre;
