import { TableItem } from "@/types/crypto";
import { create } from "zustand";

interface CryptoStoreState {
  myTokenData: TableItem[] | null;
  allTokenData: TableItem[] | null;
  setMyTokenData: (data: TableItem[] | null) => void;
  setAllTokenData: (data: TableItem[] | null) => void;
}

export const useCryptoStore = create<CryptoStoreState>((set) => ({
  myTokenData: null,
  allTokenData: null,

  // Set token data
  setMyTokenData: (data: TableItem[] | null) => set({ myTokenData: data }),
  setAllTokenData: (data: TableItem[] | null) => set({ allTokenData: data }),
}));
