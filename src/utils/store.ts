import create from "zustand";

interface IStore {
  lastVisitedPage: number;
  setLastVisitedPage: (page: number) => void;
}
export const useStore = create<IStore>((set) => ({
  lastVisitedPage: 1,
  setLastVisitedPage: (page) => set(() => ({ lastVisitedPage: page })),
}));
