import Header from "../../components/Header/Header";
import ScreenLoader from "../../components/ScreenLoader/ScreenLoader";
import { useMovie } from "../../services/Queries/Movie/Movie";
import MovieCard from "./Components/MovieCard";

const Movies = () => {
  const { data, isLoading, isFetching } = useMovie({ method: "LIST_MOVIES" });

  if (!data && isLoading && isFetching) {
    return <ScreenLoader />;
  }

  return (
    <div className="container mx-auto my-10 md:my-20">
      <Header title="Hi, John Doe 👋" subtitle="Welcome back" />
      <h3 className="text-white text-lg font-semibold m-5">Now playing</h3>
      {(data?.length ?? 0) > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-10 mx-5 mb-5">
          {data?.map((item) => (
            <MovieCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Movies;
