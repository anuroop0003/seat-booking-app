import React from "react";
import { useSeatStore } from "../../../store/SeatStore";

type SummaryDetails = {
  total_price: number;
  seats: string[];
};

const Summary: React.FC = () => {
  const { selectedSeats, clearAll } = useSeatStore();

  const summaryDetails = selectedSeats?.reduce(
    (acc: SummaryDetails, { price, id }) => {
      acc.total_price = acc?.total_price + price;
      acc.seats.push(id);

      return acc;
    },
    { total_price: 0, seats: [] }
  );

  const handleCheckout = () => clearAll();

  return (
    <div
      className={`bg-white fixed left-0 bottom-0 w-full flex flex-col md:flex-row md:justify-between md:items-center gap-5 p-2.5 transition-all duration-300 ease-in-out ${
        summaryDetails.total_price
          ? "opacity-100 translate-y-0 visible"
          : "opacity-0 translate-y-full invisible"
      }`}
      style={{
        transform: summaryDetails.total_price
          ? "translateY(0)"
          : "translateY(100%)",
      }}
    >
      <div className="transition-opacity duration-300 ease-in-out">
        <h6 className="text-black text-sm md:text-xl font-normal">
          Seats Selected: <strong>{summaryDetails?.seats?.join(", ")}</strong>
        </h6>
        <h1 className="text-black text-sm md:text-xl font-normal">
          Total: <strong>{summaryDetails?.total_price}</strong>
        </h1>
      </div>
      <button
        onClick={handleCheckout}
        className={`bg-primary-yellow text-black font-medium py-2 px-4 rounded-md transition-opacity duration-300 ease-in-out ${
          summaryDetails.total_price
            ? "opacity-100"
            : "opacity-0 pointer-events-none"
        }`}
      >
        Checkout
      </button>
    </div>
  );
};

export default Summary;
