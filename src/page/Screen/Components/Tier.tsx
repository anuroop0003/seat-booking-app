import React from "react";
import { Seat } from "../../../services/Queries/Theatre/type";
import { StoreSeat, useSeatStore } from "../../../store/SeatStore";
import { useToastStore } from "../../../store/ToastStore";

type TierProps = {
  tier: {
    name: "Silver" | "Gold" | "Platinum";
    price: number;
    seats: Seat[][];
  };
};

const Tier: React.FC<TierProps> = ({ tier }) => {
  const { toggleSeat, selectedSeats } = useSeatStore();
  const { toggleToast } = useToastStore();

  const colorGenerator = (name: "Silver" | "Gold" | "Platinum") => {
    if (name === "Silver") {
      return "border-[#C0C0C0]";
    } else if (name === "Gold") {
      return "border-[#FFD700]";
    } else if (name === "Platinum") {
      return "border-[#E5E4E2]";
    }
  };

  const isSelected = (seatId: string) =>
    selectedSeats.some((seat) => seat.id === seatId);

  const handleToggleSeat = (row: StoreSeat) => {
    if (selectedSeats.length === 8) {
      toggleToast({
        isOpen: true,
        message: "Maximum 8 Seats Only Allowed",
      });
    } else {
      toggleSeat(row);
    }
  };

  return (
    <div
      key={tier.name}
      className="flex flex-col gap-2.5 items-start md:items-center w-fit md:w-full"
    >
      <h6 className="text-white text-sm border-b-[0.5px] border-white/30 mb-2 w-full grow">
        {tier.name} Rs: {tier.price}
      </h6>
      {tier.seats.map((rows, i) => (
        <div key={i} className="flex gap-5 justify-center">
          {rows.map((row) => (
            <span
              onClick={() =>
                handleToggleSeat({ ...row, ...{ price: tier.price } })
              }
              key={row.id}
              className={`w-8 h-8 shrink-0 text-sm inline-flex justify-center items-center bg-primary-yellow rounded-md shadow-lg ${colorGenerator(
                tier.name
              )} ${
                row.isBooked
                  ? "text-black bg-opacity-10 backdrop-blur-lg cursor-not-allowed"
                  : isSelected(row.id)
                  ? "text-black cursor-pointer"
                  : "text-white bg-opacity-10 backdrop-blur-lg border cursor-pointer hover:shadow-sm"
              }`}
            >
              {row.id}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Tier;
