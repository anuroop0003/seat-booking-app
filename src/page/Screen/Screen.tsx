import { useEffect } from "react";
import { useParams } from "react-router-dom";
import screen_image from "../../assets/screen.svg";
import Header from "../../components/Header/Header";
import ScreenLoader from "../../components/ScreenLoader/ScreenLoader";
import { useTheatre } from "../../services/Queries/Theatre/Theatre";
import { Seat } from "../../services/Queries/Theatre/type";
import { useSeatStore } from "../../store/SeatStore";
import SeatingLegend from "./Components/SeatingLegend";
import Summary from "./Components/Summary";
import Tier from "./Components/Tier";

type TierType = {
  name: "Silver" | "Gold" | "Platinum";
  price: number;
  seats: Seat[][];
};

const Screen = () => {
  const {
    theatre_id,
    movie_name,
    movie_id,
    movie_language,
    movie_censorship,
    movie_timing,
    theatre_name,
  } = useParams();

  const { data, isFetching, isLoading } = useTheatre({
    method: "GET_SINGLE_THEATRE",
    data: { movieId: movie_id, theatreId: theatre_id },
  });

  const { clearAll } = useSeatStore();

  useEffect(() => {
    return () => clearAll();
  }, []);

  if (!data && isLoading && isFetching) {
    return <ScreenLoader />;
  }

  const seating_data = data?.seating?.reduce(
    (acc: TierType[], { tier, price, seats }) => {
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

  return (
    <div className="container relative mx-auto my-10 md:my-20">
      <Header
        title={`${movie_name} (${movie_language})`}
        subtitle={movie_censorship}
      />
      <Header title={theatre_name} subtitle={`Show Time: ${movie_timing}`} />
      <div className="flex flex-col items-center w-full gap-2 my-20">
        <h3 className="text-white text-xs font-light">Towards Screen</h3>
        <img className="w-3/4 md:w-1/2" src={screen_image} alt="screen image" />
      </div>
      <div className="flex flex-col mx-5 my-20 pb-5 overflow-x-auto">
        {seating_data?.map((tier) => (
          <Tier key={tier.name} tier={tier} />
        ))}
      </div>
      <SeatingLegend />
      <Summary />
    </div>
  );
};

export default Screen;
