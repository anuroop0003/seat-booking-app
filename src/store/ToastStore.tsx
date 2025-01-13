import { create } from "zustand";

type Toast = { isOpen: boolean; message: string };

type ToastStore = {
  isOpen: boolean;
  message: string;
  toggleToast: ({ isOpen, message }: Toast) => void;
};

export const useToastStore = create<ToastStore>((set) => ({
  isOpen: false,
  message: "",

  // Toggle Function to show or hide Toast
  toggleToast: (toast) =>
    set(() => ({ isOpen: toast.isOpen, message: toast.message })),
}));
