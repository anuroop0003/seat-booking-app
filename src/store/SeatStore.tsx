import { create } from "zustand";

export type StoreSeat = {
  id: string;
  isBooked: boolean;
  price: number;
};

type SeatStore = {
  selectedSeats: StoreSeat[];
  selectSeat: (seat: StoreSeat) => void;
  unSelectSeat: (id: string) => void;
  clearAll: () => void;
};

export const useSeatStore = create<SeatStore>((set) => ({
  selectedSeats: [],

  // Toggle Function to Add Particular Seat
  selectSeat: (seat) =>
    set((state) => {
      return { selectedSeats: [...state.selectedSeats, seat] };
    }),

  // UnSelect Function to Remove Particular Seat
  unSelectSeat: (id) =>
    set((state) => {
      return {
        selectedSeats: state.selectedSeats.filter((item) => item.id !== id),
      };
    }),

  // Function to Clear All
  clearAll: () =>
    set(() => ({
      selectedSeats: [],
    })),
}));
