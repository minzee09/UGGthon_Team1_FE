import { create } from 'zustand';

interface OutfitCombination {
  topImageUrl: string;
  bottomImageUrl: string;
  description: string;
}

interface OutfitStore {
  outfitCombinations: Array<OutfitCombination>;
  setOutfitCombinations: (combinations: Array<OutfitCombination>) => void;
}

export const useOutfitStore = create<OutfitStore>((set) => ({
  outfitCombinations: [],
  setOutfitCombinations: (combinations) =>
    set({ outfitCombinations: combinations }),
}));
