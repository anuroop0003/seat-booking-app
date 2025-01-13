import { create } from "zustand";

export type StoreSeat = {
  id: string;
  isBooked: boolean;
  price: number;
};

type SeatStore = {
  selectedSeats: StoreSeat[];
  toggleSeat: (seat: StoreSeat) => void;
  clearAll: () => void;
};

export const useSeatStore = create<SeatStore>((set) => ({
  selectedSeats: [],

  // Toggle Function to Add or Remove Seat
  toggleSeat: (seat) =>
    set((state) => {
      const isSelected = state.selectedSeats.some(
        (item) => item.id === seat.id
      );

      if (isSelected) {
        return {
          selectedSeats: state.selectedSeats.filter(
            (item) => item.id !== seat.id
          ),
        };
      } else {
        return { selectedSeats: [...state.selectedSeats, seat] };
      }
    }),

  // Function to Clear All
  clearAll: () =>
    set(() => ({
      selectedSeats: [],
    })),
}));
