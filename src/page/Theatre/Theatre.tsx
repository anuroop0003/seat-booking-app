import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import ScreenLoader from "../../components/ScreenLoader/ScreenLoader";
import { useMovie } from "../../services/Queries/Movie/Movie";
import CrewDetails from "./Components/CrewDetails";
import MovieDetails from "./Components/MovieDetails";
import RunningTheatre from "./Components/RunningTheatre";

function Theatre() {
  const { movie_id } = useParams();

  const { data, isFetching, isLoading } = useMovie({
    method: "GET_SINGLE_MOVIE",
    data: { movieId: movie_id as string },
  });

  if (isLoading && isFetching) {
    return <ScreenLoader />;
  }

  return (
    <div className="container mx-auto my-10 md:my-20">
      <Header
        title={`${data?.title} (${data?.language})`}
        subtitle={data?.censorship}
      />
      <MovieDetails data={data} />
      <CrewDetails data={data} />
      <RunningTheatre />
    </div>
  );
}

export default Theatre;
