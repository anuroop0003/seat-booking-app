import { useParams } from "react-router-dom";
import screen_image from "../../assets/screen.svg";
import Header from "../../components/Header/Header";
import ScreenLoader from "../../components/ScreenLoader/ScreenLoader";
import { useTheatre } from "../../services/Queries/Theatre/Theatre";
import { Seat } from "../../services/Queries/Theatre/type";

type Tier = {
  name: string;
  price: number;
  seats: Seat[][];
};

function Screen() {
  const { theatre_id, movie_name, movie_id, movie_language, movie_censorship } =
    useParams();

  const { data, isFetching, isLoading } = useTheatre({
    method: "GET_SINGLE_THEATRE",
    data: { movieId: movie_id, theatreId: theatre_id },
  });

  if (isLoading && isFetching) {
    return <ScreenLoader />;
  }

  const seating_data = data?.seating?.reduce(
    (acc: Tier[], { tier, price, seats }) => {
      const existing_tier = acc?.find((item) => item?.name === tier);
      if (existing_tier) {
        existing_tier?.seats?.push(seats);
      } else {
        acc.push({
          name: tier,
          price: price,
          seats: [seats],
        });
      }
      return acc;
    },
    []
  );

  console.log("temp", seating_data);

  const renderTier = (tier: Tier) => {
    return (
      <div key={tier.name} className="flex flex-col gap-2.5">
        <span className="text-white text-sm border-b-[0.5px] border-white/30 mb-2">
          {tier?.name} Rs: {tier?.price}
        </span>
        {tier?.seats?.map((rows, i) => (
          <div key={i} className="flex gap-5 justify-center whitespace-nowrap">
            {rows?.map((row) => (
              <span
                key={row?.id}
                className={`text-white w-8 h-8 shrink-0 text-sm inline-flex justify-center items-center bg-primary-yellow rounded-md shadow-lg ${
                  row?.isBooked
                    ? "bg-opacity-10 backdrop-blur-lg cursor-not-allowed"
                    : "bg-opacity-10 backdrop-blur-lg border border-primary-yellow cursor-pointer hover:shadow-sm"
                }`}
              >
                {row?.id}
              </span>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto my-10 md:my-20">
      <Header
        title={`${movie_name} (${movie_language})`}
        subtitle={movie_censorship}
      />
      <div className="flex flex-col gap-10 items-center mx-5 my-20 pb-5 overflow-x-auto">
        <img className="max-w-lg" src={screen_image} alt="screen image" />
        <div className="flex flex-col gap-5 h-full">
          {seating_data?.map((tier) => renderTier(tier))}
        </div>
        <div className="my-10 flex gap-10 justify-center whitespace-nowrap">
          <span className="inline-flex flex-col sm:flex-row gap-2 justify-center items-center">
            <span className="text-white w-8 h-8 text-sm inline-flex justify-center items-center bg-primary-yellow rounded-md shadow-lg bg-opacity-10 backdrop-blur-lg cursor-not-allowed">
              R
            </span>
            <span className="text-white text-sm">Reserved</span>
          </span>
          <span className="inline-flex flex-col sm:flex-row gap-2 justify-center items-center">
            <span className="text-white w-8 h-8 text-sm inline-flex justify-center items-center bg-primary-yellow rounded-md shadow-lg bg-opacity-10 backdrop-blur-lg border border-primary-yellow cursor-pointer hover:shadow-sm">
              U
            </span>
            <span className="text-white text-sm">Un Reserved</span>
          </span>{" "}
          <span className="inline-flex flex-col sm:flex-row gap-2 justify-center items-center">
            <span className="text-white w-8 h-8 text-sm inline-flex justify-center items-center bg-primary-yellow rounded-md shadow-lg bg-opacity-10 backdrop-blur-lg cursor-not-allowed">
              S
            </span>
            <span className="text-white text-sm">Selected</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Screen;
